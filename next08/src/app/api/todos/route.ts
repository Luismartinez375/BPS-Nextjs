import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"

const API_KEY: string = process.env.API_KEY as string

export async function GET() {
    const res = await fetch(DATA_SOURCE_URL)

    const todos: Todo[] = await res.json()

    return NextResponse.json(todos)
}

export async function DELETE(req: Request) {
    const {id}: Partial<Todo> = await req.json()

    if (!id) {
        return NextResponse.json({"message": "Todo id required"})
    }
    await fetch(`${DATA_SOURCE_URL}/${id}`, {
        method: "DELETE",
        headers: {
            'content-type': 'application/json',
            'API_KEY': API_KEY
        }
})
return NextResponse.json({"message": `Todo ${id} deleted`})
}