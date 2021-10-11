import {useState, useEffect} from "react";
import { addFriend, deleteFriend, getAllFriends, getAllUsers } from "./FriendManager";
import { FriendCard, UserCard } from "./Friend";
import { AddNewFriend } from "./AddNewFriend";

export const FriendList = () => {

    const loguser = parseInt(sessionStorage.getItem("nutshell_user"))

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

    const handleRemoveFriend = (friendid) => {
        deleteFriend(friendid).then(res=> (
            getFriends()
        ))
    }
    
    const handleAddFriend = (userid) => {
        const newFriend = {
            userId: userid,
            currentUserId: loguser
        }
        console.log(userid)
        addFriend(newFriend).then(res =>
            getFriends())
    }

    useEffect(() => {
        getFriends();
        getUsers();
    }, [])

    return (
        <>
        <h3>FRIENDS</h3>
        {friends.filter(friend => friend.currentUserId === loguser).map(friend => 
            <FriendCard friend={friend} key={friend.id} handleRemoveFriend={handleRemoveFriend}/>)
        }
        <h3>USERS</h3>
        {users.filter(user => user.id !== loguser && !(friends.find(friend => user.id === friend.userId))).map(user=> 
            <UserCard user={user} key={user.id} handleAddFriend={handleAddFriend}/>)
        }
        </>
    )
}