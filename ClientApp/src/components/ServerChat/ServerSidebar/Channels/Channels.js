import React from 'react'
import Channel from './Chanenel/Channel'
import './Channels.css'

function Channels() {
    return (
        <div className="channels">
            <h2 className="channels__title">
                Channels
                <span>11</span>
            </h2>
            <div className="channels__list-wrapper">
                <div className="channels__list">
                    <Channel />
                    <Channel />
                    <Channel />
                    <Channel />
                    <Channel />
                    <Channel />
                    <Channel />
                    <Channel />
                    <Channel />
                    <Channel />
                    <Channel />
                    <Channel />
                    <Channel />
                    <Channel />
                    <Channel />
                    <Channel />
                    <Channel />
                    <Channel />
                    <Channel />
                    <Channel />
                </div>
            </div>
        </div>
    )
}

export default Channels
