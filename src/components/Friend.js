export const FriendCard = ({ friend }) => {

    const bruhbutton = (friend) => {
        return console.log(friend.id)
    }

    return (
        <>
            <section className="friend card">
                <h3>{friend.user.name}</h3>
                <button onClick={bruhbutton}>BRUH</button>
            </section>
        </>
    )
}

export const UserCard = ({user, handleAddFriend}) => {
    return (
    <>
    <section>
        <h3>{user.name}
        <p>{user.id}</p></h3>
        <button onClick={handleAddFriend}>Add Friend</button>
    </section>
    </>
)}