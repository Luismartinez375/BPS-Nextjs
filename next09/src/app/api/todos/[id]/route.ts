import { NextResponse,NextRequest } from 'next/server'

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"

type Props = {
    params: {
        id: string
    }
}

export async function GET(request: Request, { params: { id } }: Props) {

    // const id = request.url.slice(request.url.lastIndexOf('/') + 1)

    const res = await fetch(`${DATA_SOURCE_URL}/${id}`)

    const todos: Todo = await res.json()
    if (!todos.id) return NextResponse.json({ "message": "Missing required data" })
    return NextResponse.json(todos)
}