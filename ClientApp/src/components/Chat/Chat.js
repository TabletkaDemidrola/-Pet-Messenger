import React, { useState } from 'react'
import ChatHeader from './ChatHeader/ChatHeader'
import UserProfile from '../UserProfile/UserProfile'
import './Chat.css'
import Message from './Message/Message'
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined'
import AttachFileIcon from '@material-ui/icons/AttachFile'

const Chat = (props) => {
    let [editMode, setEditMode] = useState(false)

    function handleClick() {
        setEditMode(!editMode)
    }

    return (
        <div className="chat">
            <ChatHeader />
            <ul className="chat__messages">
                {/* список сообщений через метод '.map' */}
                <Message handleClick={handleClick}/>
                <Message handleClick={handleClick}/>
                <Message handleClick={handleClick}/>
                <Message handleClick={handleClick}/>
                <Message handleClick={handleClick}/>
                <Message handleClick={handleClick}/>
                <Message handleClick={handleClick}/>
                <UserProfile editMode={editMode} setEditMode={setEditMode}/>
            </ul>
            <div className="chat__input">
                <form>
                    <input placeholder="Message in #general" />
                    <button>Send Message</button>
                </form>
                <SentimentSatisfiedOutlinedIcon />
                <AttachFileIcon />
            </div>
        </div>
    )
}

export default Chat
