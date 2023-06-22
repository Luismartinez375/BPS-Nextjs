import React from 'react'
import GetWikiresults from '@/lib/getwikiresults'




type Props = {
    params:{
        searchTerm: string
    }
}

export default async function page({params: {searchTerm}}: Props) {
    const wikiData: Promise<SearchResult> =  GetWikiresults(searchTerm)
    const data = await wikiData
    const results: Result[] | undefined = data?.query?.pages

    const content = (
        <main className=' bg-slate-200 mx-auto max-w-lg py-1 min-h-screen'>

        </main>
    )
    return (
    <div>page</div>
  )
}