import React from 'react'
function AuthLayout({children}) {
    return (
      <section className='page w-full h-screen '>
        {children}
      </section>
    )
}
export default AuthLayout
