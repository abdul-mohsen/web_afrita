import axios from 'axios'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: {
          label: 'User Name',
          type: 'text',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      async authorize(credentials) {
        try {
          const response = await axios.post(
            process.env.NEXT_PUBLIC_BACKEND_API_URL + '/api/v2/login',
            {
              username: credentials.username,
              password: credentials.password,
            }
          )
          return response?.data
        } catch (error) {
          console.log('error', error)
          if (error instanceof Response) {
            return null
          }
          throw new Error('An error has occurred during login request')
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return {
        ...token,
        ...user,
      }
    },
    async session({ session, token }) {
      if (token.error) {
        throw new Error('Refresh token has expired')
      }
      session.accessToken = token.access_token || ''
      session.user = {
        ...session.user,
        accessToken: token.access_token || '',
        name: token.name || '',
        email: token.email || '',
      }
      return session
    },
  },
}
