import React from 'react'
import Member from './Member/Member'
import './Members.css'

function Members() {
    return (
        <div className="members">
            <h2 className="members__title">
                Members
                <span>82</span>
            </h2>
            <div className="members__list-wrapper">
                <div className="members__list">
                    <Member />
                    <Member />
                    <Member />
                    <Member />
                    <Member />
                    <Member />
                    <Member />
                    <Member />
                    <Member />
                    <Member />
                    <Member />
                    <Member />
                    <Member />
                    <Member />
                    <Member />
                </div>
            </div>
        </div>
    )
}

export default Members
