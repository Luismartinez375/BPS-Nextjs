import React from 'react'
import GetWikiresults from '@/lib/getwikiresults'
import Item from './components/Item'



type Props = {
    params:{
        searchTerm: string
    }
}

export async function generateMetadata({params: {searchTerm}}: Props) {
    const wikiData: Promise<SearchResult> =  GetWikiresults(searchTerm)
    const data = await wikiData
    const displayTerm = searchTerm.replaceAll('%20', ' ')
    
    if (!data?.query?.pages) {
        return {
            title: `${displayTerm} Not Found`,
        }
    }

    return {
        title: displayTerm,
        description: 'Search results for ' + displayTerm,
         
    }
}

export default async function SearchResult({params: {searchTerm}}: Props) {
    const wikiData: Promise<SearchResult> =  GetWikiresults(searchTerm)
    const data = await wikiData
    const results: Result[] | undefined = data?.query?.pages
    const diplay = searchTerm.replaceAll('%20', ' ')
    const content = (
        <main className=' bg-slate-200 mx-auto w-1/3 py-1 min-h-screen flex flex-col items-center'>
            {results 
            ? Object.values(results).map(result => {
                return <Item key={result.pageid} result={result} ></Item>
            }): <h2 className=' p-2 text-xl'>{`${diplay} Not Found`}
            </h2>
            }
        </main>
    )
    return content
}