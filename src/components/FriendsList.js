import {useState, useEffect} from "react";
import { getAllFriends, getAllUsers } from "./FriendManager";
import { FriendCard } from "./Friend";

export const FriendList = () => {
	const [users, setUsers] = useState([])

    const getUsers = () => {
        return getAllUsers().then(res => {
            console.log(res)
            setUsers(res)
        })
    };
    

    useEffect(() => {
        console.log("wababa")
        getUsers();
    }, [])

    return (
        <>
        <h3>FRIENDS</h3>
        {users.map(user => <FriendCard user={user} key={user.id}/>)}
        </>
    )
}