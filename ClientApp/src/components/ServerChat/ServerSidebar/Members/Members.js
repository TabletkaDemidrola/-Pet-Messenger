import React from 'react'
import Member from './Member/Member'
import './Members.css'

const Members = (props) => {
    return (
        <div className="members">
            <h2 className="members__title">
                Members
                <span>82</span>
            </h2>
            <div className="members__list-wrapper">
                <ul className="members__list">
                    <Member handleClick={props.handleClick}/>
                    <Member handleClick={props.handleClick}/>
                    <Member handleClick={props.handleClick}/>
                    <Member handleClick={props.handleClick}/>
                    <Member handleClick={props.handleClick}/>
                    <Member handleClick={props.handleClick}/>
                    <Member handleClick={props.handleClick}/>
                    <Member handleClick={props.handleClick}/>
                    <Member handleClick={props.handleClick}/>
                </ul>
            </div>
        </div>
    )
}

export default Members
