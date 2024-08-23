import React from 'react'
import UserContext from './UserContext'

// eslint-disable-next-line react/prop-types
export default function UserContextProvider({ children }) {
    const [user, setUser] = React.useState(null);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider >
    )
}

//wrap wtih provider and pass the values ## passing it is as object and passing all the values ans then e