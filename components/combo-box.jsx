'use client'

import * as React from 'react'
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { useSession } from 'next-auth/react'
import axios from 'axios'
import { useDebouncedCallback } from 'use-debounce'

const frameworks = [
  {
    value: 'next.js',
    label: 'Next.js',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
]

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState('')
  const { data } = useSession()
  const [searchResults, setSearchResults] = React.useState([])

  const searchItems = async (searchText) => {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_API_URLL}/api/v2/cars/search?query=${searchText}`
    if (!data?.accessToken || !searchText) return
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${data?.accessToken}`,
      },
    })
    if (response?.data?.length) setSearchResults(response?.data)
  }
  const debouncedGetResults = useDebouncedCallback(searchItems, 500)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='w-full justify-between'
        >
          {value
            ? searchResults?.find((result) => result.id === value)?.modelName
            : 'ابحث عن الإطار الذي تريد...'}
          <CaretSortIcon className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-full min-w-[600px]'>
        <Command>
          <CommandInput
            placeholder='ابحث ...'
            className='h-9 outline-none focus:outline-none'
            onValueChange={debouncedGetResults}
          />
          {/* <CommandEmpty>لا يوجد نتائج</CommandEmpty> */}
          {searchResults?.map((result) => (
            <CommandItem key={result?.id} value={result?.modelName}>
              {result?.modelName}
            </CommandItem>
          ))}
        </Command>
      </PopoverContent>
    </Popover>
  )
}
