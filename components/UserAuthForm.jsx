'use client'
import instance from '@/axios'
import React, { useEffect, useState } from 'react'
import { logoImage } from '@/public'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import AuthSessionStatus from '@/components/AuthSessionStatus'
import { toast } from 'sonner'
import Cookies from 'js-cookie';

export function UserAuthForm({ formType }) {
  const router = useRouter()

  const [errors, setErrors] = useState([])
  const [isStatus, setIsStatus] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (
      router &&
      router.query &&
      router.query.reset?.length > 0 &&
      errors.length === 0
    ) {
      setIsStatus(atob(router.query.reset))
    } else {
      setIsStatus(null)
    }
  })

  const [data, setData] = useState({
    username: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    const newData = { ...data }
    newData[name] = value
    setData(newData)
  }

  const submitForm = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    console.log('data', data)
    try {
      const dataToBeSent = {
        username: data.username,
        password: data.password,
      }

      console.log('data', dataToBeSent)

      const response = await instance.post(
        `/api/v2/login`,
        dataToBeSent
      )

      console.log("resonse", response)

      if (!response.data) {
        const { error } = response.data
        toast.error(error)
        throw new Error(
          `Request failed with status ${response.status}: ${error}`
        )
      }
      Cookies.set('accessToken', response.data.access_token, { expires: 1 });
      console.log("token", Cookies.get('accessToken'))

      //toast.success('Account created successfully! Redirecting to login...')
      router.push('/dashboard')
    } catch (error) {
      console.log('error', error)
      if (error instanceof Error) {
        toast.error(error.message)
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <Image src={logoImage} alt='Afrita' className='mx-auto h-20 w-auto' />
          <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
            {formType === 'login' ? (
              <> تسجيل الدخول </>
            ) : (
              <> تسجيل مستخدم جديد </>
            )}
          </h2>
        </div>
        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <AuthSessionStatus className='mb-4' status={isStatus} />
          <form onSubmit={submitForm} noValidate className='space-y-6'>
            {formType === 'login' ? (
              <>
                <div>
                  <label
                    htmlFor='username'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    اسم المستخدم
                  </label>
                  <div className='mt-2'>
                    <input
                      value={data.username}
                      onChange={handleChange}
                      placeholder='User Name'
                      id='username'
                      name='username'
                      type='text'
                      autoComplete='username'
                      required
                      disabled={isLoading}
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div>
                  <div className='flex items-center justify-between'>
                    <label
                      htmlFor='password'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      كلمة المرور
                    </label>
                    <div className='text-sm'>
                      <span className='font-semibold text-primary-600 hover:text-primary-500'>
                        نسيت كلمة المرور ؟
                      </span>
                    </div>
                  </div>
                  <div className='mt-2'>
                    <input
                      value={data.password}
                      onChange={handleChange}
                      placeholder='Password'
                      id='password'
                      name='password'
                      type='password'
                      autoComplete='current-password'
                      required
                      disabled={isLoading}
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div>
                  <button
                    type='submit'
                    className='flex w-full justify-center rounded-md bg-primary-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600'
                  >
                    دخول
                  </button>
                </div>
              </>
            ) : (
              <>
                <div>
                  <label
                    htmlFor='first-name'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    الاسم الاول
                  </label>
                  <div className='mt-2'>
                    <input
                      id='first-name'
                      name='first-name'
                      type='first-name'
                      autoComplete='name'
                      required
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-primary-50 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor='last-name'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    الاسم الاخير
                  </label>
                  <div className='mt-2'>
                    <input
                      id='last-name'
                      name='last-name'
                      type='last-name'
                      autoComplete='name'
                      required
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-primary-50 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    البريد الالكترونى
                  </label>
                  <div className='mt-2'>
                    <input
                      id='email'
                      name='email'
                      type='email'
                      autoComplete='email'
                      required
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-primary-50 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor='password'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    كلمة المرور
                  </label>
                  <div className='mt-2'>
                    <input
                      id='password'
                      name='password'
                      type='password'
                      autoComplete='current-password'
                      required
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor='confirm-password'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    تأكيد كلمة المرور
                  </label>
                  <div className='mt-2'>
                    <input
                      id='confirm-password'
                      name='confirm-password'
                      type='confirm-password'
                      autoComplete='current-password'
                      required
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div>
                  <Link href='/products'>
                    <span className='flex w-full justify-center rounded-md bg-primary-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600'>
                      تسجيل
                    </span>
                  </Link>
                </div>
              </>
            )}
          </form>
          <div className='mt-10 text-center text-sm text-gray-500'>
            {formType === 'login' ? (
              <>
                <span> ليس لديك حساب </span>
                <Link
                  href='/register'
                  className='font-semibold leading-6 text-primary-600 hover:text-primary-500'
                >
                  سجل الان
                </Link>
              </>
            ) : (
              <>
                <span> لديك حساب </span>
                <Link
                  href='/login'
                  className='font-semibold leading-6 text-primary-600 hover:text-primary-500'
                >
                  دخول
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
