import React from "react";
import "./AddNewFriend.css"

export const AddFriendModal = ({setShow, message, handleAddFriend}) => {
    return (
        <div className="modalbody">
            <div className="modalContent">
            <h3 className="modalText">{message.messenger}</h3>
                <button className="modalButton"onClick={()=> handleAddFriend(message.userId)}>add friend</button>
                <button className="modalButton" onClick={()=> setShow(false)}>close</button>
            </div>
        </div>
    )
}