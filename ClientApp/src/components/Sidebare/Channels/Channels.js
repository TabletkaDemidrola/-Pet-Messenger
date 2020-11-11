import React from 'react'
import Channel from './Chanenel/Channel'
import './Channels.css'

function Channels() {
    return (
        <div className="channels">
            <div className="channels__title">
                <h2>
                    Channels
                    <span>11</span>
                </h2>
            </div>
            <div className="channels__list">
                <Channel />
                <Channel />
                <Channel />
                <Channel />
                <Channel />
            </div>
        </div>
    )
}

export default Channels
