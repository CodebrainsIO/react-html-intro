import React, { useEffect, useState } from 'react'
import { Container, ListGroup } from 'react-bootstrap'
import User, { IUser } from './User'; 
import useFetch from 'use-http'

const UserList = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const { get, post, response, loading, error } = useFetch('https://jsonplaceholder.typicode.com')
    useEffect(() => { loadInitialUsers() }, []) // componentDidMount

    async function loadInitialUsers() {
        const initialUsers = await get('/users')
        if (response.ok) setUsers(initialUsers)
    }
    return (
        <Container>
            <h1 style={{ textAlign: 'center' }}>Users</h1>
            {error && 'Error!'}
            {loading && 'Loading...'}
            <>
                {users.map((user) => (
                    <User user={user}/>
                ))}
            </>
        </Container>
    )
}

export default UserList;