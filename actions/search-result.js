'use server'

import axios from 'axios'

export const searchItemsAction = async (searchText, token) => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/v1/cars/search?query=${searchText}`
  console.log('user', token)

  console.log('searchText', searchText)
  console.log('token', token)

  //   const response = await axios.get(url, {
  //     headers: {
  //       Authorization: `Bearer ${user.accessToken}`,
  //     },
  //   })
  //   console.log('response', response)
}
