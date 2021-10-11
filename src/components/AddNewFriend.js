import React from "react";
import "./AddNewFriend.css"

export const AddFriendModal = (props) => {
    if (!props.show) {
        return null
    }
    
    return (
        <div className="modal">
            <div className="modalContent">
            <h3 className="modalText">user.name</h3>
                <button className="modalButton">add friend</button>
            </div>
        </div>
    )
}