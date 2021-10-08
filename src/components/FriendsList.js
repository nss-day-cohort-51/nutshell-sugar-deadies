import {useState, useEffect} from "react";
import { getAllFriends, getAllUsers } from "./FriendManager";
import { FriendCard, UserCard } from "./Friend";

export const FriendList = () => {

    const user = parseInt(sessionStorage.getItem("nutshell_user"))

	const [friends, setFriends] = useState([])
    const [users, setUsers] = useState([])
    // const [newFriends, setNewFriends] = useState({
    //     currentUserId = user,
    //     userId = ""
    // })

    const getFriends = () => {
        return getAllFriends().then(res => {
            setFriends(res)
        })
    };

    const getUsers = () => {
        return getAllUsers().then(res => {
            console.log(res)
            setUsers(res)
        })
    };

    const handleAddFriend = (user) => {
        return console.log(user);
    }

    useEffect(() => {
        getFriends();
        getUsers();
    }, [])

    return (
        <>
        <h3>FRIENDS</h3>
        {friends.filter(friend => friend.currentUserId === user).map(friend => <FriendCard friend={friend} key={friend.id}/>)}
        <h3>USERS</h3>
        {users.filter(user => user.id === user.id).map(user=> <UserCard user={user} key={user.id}/>)}

        </>
    )
}