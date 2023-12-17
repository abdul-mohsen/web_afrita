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
            process.env.NEXT_PUBLIC_BACKEND_API_URL + '/api/v1/login',
            credentials
          )
          console.log(response)
          return {
            ...response?.data?.user,
            accessToken: response?.data?.token,
          }
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
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      return user ? { ...token, ...user } : token
    },
    async session({ session, token }) {
      if (token.error) {
        throw new Error('Refresh token has expired')
      }

      session.accessToken = token.accessToken || '';
      session.user = {
        ...session.user,
        accessToken: token.accessToken || '',
        name: token.name || '',
        email: token.email || '',
      };

      return session;
    },
  },
}
