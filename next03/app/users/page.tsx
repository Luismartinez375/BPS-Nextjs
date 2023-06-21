import { Metadata } from "next";
import React from 'react'
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";
import { Content } from "next/font/google";


export const metadata: Metadata = {
    title: "Users Page",
    description: "Users Page",
}


export default async function UsersPage() {
    const usersData: Promise<User[]> = getAllUsers()

    const users = await usersData
    
    console.log("hello")

    const content = (
        <section>
            <h2 className=" text-3xl">
            <Link href="/" >Back to Home</Link>
            </h2>
                
                <br/>
                {users.map(user => {
                    return (
                        <>
                        <p key={user.id} className="">
                            <Link href={`users/${user.id}`}>{user.name}</Link>
                        </p>
                        <br />

                        </>
                    )
                })}
            
        </section>
    )
    return content
}

