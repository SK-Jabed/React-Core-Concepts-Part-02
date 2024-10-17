import { useEffect, useState } from 'react'
import './Friends.css'
import Friend from './Friend'

export default function Friends() {  
    const [friends, setFriends] = useState([])
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])

    return (
        <div className='box'>
            <h2>Friends: {friends.length}</h2>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}

/*
* 01. Declare a State To Hold Data
* 02. useEffect with Dependency Array
* 03. Use Fetch To Load Data
* 04. Set Loaded Data To The State 
* 05. Display Data on The Component
*/