import React from 'react';
import timeFormat from "../../helpers/timeFormat";
import updateViews from "../../helpers/updateViews";
import {ReactComponent as Users} from "../../assets/Users.svg";
import {ReactComponent as Timezone} from "../../assets/Timezone.svg";
import {ReactComponent as Views} from "../../assets/Views.svg";
import Edit from "../../assets/Edit.svg";
import './styles/index.scss';

export default function ContentBox({name, userCount, view, createdAt, setIsOpen, id, items, currentItem, isOpen, setCurrentItem, setItems}) {
    const selectedItem = (currentItem.id === id) && isOpen ? 'selected' : '';
    function handleClick() {
        const currentItem = items.filter(item => item.id === id)[0];
        const updatedLocations = updateViews(items, id);
        setItems(updatedLocations);
        setCurrentItem(currentItem);
        setIsOpen(true)
    }

    return (
        <div className={`${selectedItem} box`} onClick={handleClick}>
            <div className="box_head">
                <div className="box_name">{name}</div>
                <div className={`${selectedItem} box_edit`}>
                    <img src={Edit} width="14" height="14" alt="test"/>
                </div>
            </div>
            <div className="box_users box_text"><Users/> {userCount} Users</div>
            <div className="box_created box_text"><Timezone/>{timeFormat(createdAt)}</div>
            <div className="box_views box_text"><Views/>{view}</div>
        </div>
    )
}