"use client"
import { useContext } from "react"
import { GlobalContext } from "../context/context"

export default function dashboard() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { name, setName } = useContext(GlobalContext)

    return (
        <div>
            <h1>Hello {name}</h1>
            <button onClick={() => setName("John")}>Change Name</button>
        </div>
    )
}