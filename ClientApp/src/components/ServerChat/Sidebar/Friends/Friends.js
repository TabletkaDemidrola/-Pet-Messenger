import React from 'react'
import Friend from './Friend/Friend'
import './Friends.css'

function Friends() {
    return (
        <div className="friends">
            <h2 className="friends__title">
                Friends
                <span>82</span>
            </h2>
            <div className="friends__list">
                <Friend />
                <Friend />
                <Friend />
                <Friend />
                <Friend />
            </div>
        </div>
    )
}

export default Friends
