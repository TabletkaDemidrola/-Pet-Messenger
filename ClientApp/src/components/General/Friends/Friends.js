import React from 'react'
import FriendsHeader from './FriendsHeader/FriendsHeader'
import FriendsList from './FriendsList/FriendsList'
import './Friends.css'

function Friends() {
    return (
        <div className="friends">
            <FriendsHeader />
            <FriendsList />
        </div>
    )
}

export default Friends
