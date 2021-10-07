import {useState, useEffect} from "react";
import { getAllFriends } from "./FriendManager";
import { FriendCard } from "./Friend";

export const FriendList = () => {
	const [friends, setFriends] = useState([])

    const getFriends = () => {
        return getAllFriends().then(res => {
            console.log(res)
            setFriends(res)
        })
    };
    

    useEffect(() => {
        console.log("wababa")
        getFriends();
    }, [])

    return (
        <>
        <h3>FRIENDS</h3>
        {friends.map(friend => <FriendCard friend={friend} key={friend.id}/>)}
        </>
    )
}