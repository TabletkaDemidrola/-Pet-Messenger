import React from 'react'
import ChatHeader from './ChatHeader/ChatHeader'
import Message from './Message/Message'
import './Chat.css'
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined'
import AttachFileIcon from '@material-ui/icons/AttachFile'

function Chat() {
    return (
        <div className="chat">
            <ChatHeader />
            <div className="chat__messages">
                <Message />
                <Message />
                <Message />
                <Message />
            </div>
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
