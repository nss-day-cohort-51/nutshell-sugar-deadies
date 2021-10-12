import { useState, useEffect } from "react";
import { deleteFriend, getAllFriends, getAllUsers } from "../../modules/FriendManager";
import { FriendCard } from "../Friends/Friend";


export const FriendList = () => {

    const loguser = parseInt(sessionStorage.getItem("nutshell_user"))

    const [friends, setFriends] = useState([])
    const [users, setUsers] = useState([])


    const getFriends = () => {
        return getAllFriends().then(res => {
            setFriends(res)
        })
    };

    const getUsers = () => {
        return getAllUsers().then(res => {
            setUsers(res)
        })
    };

    const handleRemoveFriend = (friendid) => {
        deleteFriend(friendid).then(res => (
            getFriends()
        ))
    }


    useEffect(() => {
        getFriends();
        getUsers();
    }, [])

    return (
        <>
            <h3>FRIENDS</h3>
            {friends.filter(friend => friend.currentUserId === loguser).map(friend =>
                <FriendCard friend={friend} key={friend.id} handleRemoveFriend={handleRemoveFriend} />)
            }
        </>
    )
}