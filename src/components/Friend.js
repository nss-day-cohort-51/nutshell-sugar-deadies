export const FriendCard = ({ friend, handleRemoveFriend }) => {
    return (
        <>
        <section>
            <h3>{friend.user.name}</h3>
            <button onClick={() => handleRemoveFriend(friend.id)}>Remove Friend</button>
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
        <button onClick={() => handleAddFriend(user.id)}>Add Friend</button>
    </section>
    </>
)}