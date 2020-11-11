import React from 'react'
import Friend from './Friend/Friend'
import './Friends.css'

function Friends() {
    return (
        <div className="friends">
            <div className="friends__title">
                <h2>
                    Friends
                    <span>82</span>
                </h2>
            </div>
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
