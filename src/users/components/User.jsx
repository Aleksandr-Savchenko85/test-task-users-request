import React from 'react';

const User = (props) => {

    return (
        <li className="user">
            <span className="user__id sp"> <span className="color-letter">ID :</span> {props.id}</span>
            <span className="user__name sp"><span className="color-letter">Name :</span>{props.name}</span>
            <span className="user__surname sp"><span className="color-letter">Surname :</span>{props.surname}</span>
            <span className="user__desc sp"><span className="color-letter">Description :</span>{props.desc}</span>
        </li>

    )
}

export default User;