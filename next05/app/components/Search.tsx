'use client'
import React from 'react'
import { useState,FormEvent } from 'react'
import { useRouter } from 'next/navigation'



export default function Search() {
  const [search, setSearch] = useState('')
  const router = useRouter()
  const handleSubmit =  async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearch('')
    router.push(`/search?q=${search}/`)
  }
    return (
    <form action="" className='w-50 flex justify-center md:justify-between' onSubmit={handleSubmit}>
        <input 
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)} 
        className='bg-white p-2 w-80 text-xl rounded-xl '
        placeholder='Search for a page...'
        />
        <button 
        className='bg-slate-300 p-2 rounded-xl ml-2 font-bold text-xl'>
        🚀
        </button>
    </form>
  )
}
