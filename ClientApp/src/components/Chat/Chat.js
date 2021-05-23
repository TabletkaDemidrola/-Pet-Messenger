import React from 'react'
import ChatHeader from './ChatHeader/ChatHeader'
import UserProfile from '../UserProfile/UserProfile'
import './Chat.css'
import Message from './Message/Message'
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined'
import AttachFileIcon from '@material-ui/icons/AttachFile'

const Chat = (props) => {
    return (
        <div className="chat">
            <ChatHeader />
            <ul className="chat__messages">
                {/* список сообщений через метод '.map' */}
                <Message handleClick={props.handleClick}/>
                <Message handleClick={props.handleClick}/>
                <Message handleClick={props.handleClick}/>
                <Message handleClick={props.handleClick}/>
                <Message handleClick={props.handleClick}/>
                <Message handleClick={props.handleClick}/>
                <Message handleClick={props.handleClick}/>
                <UserProfile editMode={props.editMode} setEditMode={props.setEditMode}/>
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
