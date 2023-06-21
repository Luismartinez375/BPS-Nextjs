import React from 'react'

export default async function getUserPossts(userId: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {next: {revalidate: 60}})

    if(!res.ok) throw new Error(res.statusText)

    return res.json()
}
