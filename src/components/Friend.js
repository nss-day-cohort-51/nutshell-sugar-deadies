import react from "react"
import { Login } from "./auth/Login"

export const FriendCard = ({ friend }) => {

    const bruhbutton = (friend) => {
        return console.log(friend.id)
    }

    return (
        <>
            <section className="friend card">
                <h3>{friend.user.name}</h3>
                <div>{friend.currentUserId}</div>
                <button onClick={bruhbutton}>BRUH</button>
            </section>
        </>
    )
}