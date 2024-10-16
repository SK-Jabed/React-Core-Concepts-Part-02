import { useEffect, useState } from "react"

export default function Users() {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div>
            <h3>Users: {users.length}</h3>
        </div>
    )
}


/*
* 01. Declare a State To Hold The Data
* 02. useEffect With Call Back and Dependency Array
* 03. Use Fetch To Load Data
*/