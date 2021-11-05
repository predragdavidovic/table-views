import React from "react";
import Modal from "react-modal";
import timeFormat from '../../helpers/timeFormat';
import {ReactComponent as Users} from "../../assets/Users.svg";
import {ReactComponent as Timezone} from "../../assets/Timezone.svg";
import {ReactComponent as Views} from "../../assets/Views.svg";
import "./styles/index.scss";

Modal.setAppElement("#root");

const customStyle = {
    content: {
        width: "440px",
        height: "350px",
        padding: "25px",
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
    overlay: {
        backgroundColor: "rgba(0, 17, 34, 0.6)",
    }
}

export default function ModalDialog({ isOpen, setIsOpen, currentItem}) {
    const {createdAt, description, name ,userCount, view} = currentItem;
    return (
        <Modal
            isOpen={isOpen}
            style={customStyle}
            onRequestClose={() => setIsOpen(false)}
        >
            <div className="modal">
                <div className="modal_head">
                    <div>{name}</div>
                    <div className="modal_close" onClick={() => setIsOpen(false)}>+</div>
                </div>
                <div className="modal_body">
                    <div><Users/>{userCount} Users</div>
                    <div><Timezone/>{timeFormat(createdAt)}</div>
                    <div><Views/>{view}</div>
                </div>    
                <div className="modal_description">
                    <p className="modal_description_head">Description</p>
                    <p className="modal_description_body">{description}</p>
                </div>
                <div className="modal_footer">
                    <button onClick={() => setIsOpen(false)}>Done</button>
                </div>
            </div>
    </Modal>
    )
}