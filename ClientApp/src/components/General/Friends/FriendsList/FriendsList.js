import React from 'react'
import Friend from './Friend/Friend'
import './FriendsList.css'

function FriendsList() {
    return (
        <div className="friends-list">
            <ul className="friends-list__inner">
                <li className="friends-list__item"><Friend /></li>
                <li className="friends-list__item"><Friend /></li>
                <li className="friends-list__item"><Friend /></li>
                <li className="friends-list__item"><Friend /></li>
                <li className="friends-list__item"><Friend /></li>
            </ul>
        </div>
        
    )
}

export default FriendsList
