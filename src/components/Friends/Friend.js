export const FriendCard = ({ friend, handleRemoveFriend }) => {
    return (
        <>
            <section>
                <h3>{friend.user.name}</h3>
                <button className="remove-friend-button" onClick={() => handleRemoveFriend(friend.id)}>Remove Friend</button>
            </section>
        </>
    )
}

