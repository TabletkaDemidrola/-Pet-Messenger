import React from 'react'
import './UserProfile.css'
import on from 'classnames'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import CloseIcon from '@material-ui/icons/Close'

function UserProfile(props) {
    return (
        <div className={on({"user-profile--visible": props.editMode,
                        "user-profile--hidden": !props.editMode}, "user-profile")}>
            <img 
                className="user-profile__avatar"
                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                alt="" />
            <CloseIcon className="user-profile__close" 
                    onClick={() => {props.setEditMode(!props.editMode)}}/>
            <div className="user-profile__info">
                <h4>User Name</h4>
                <span>User Status</span> 
                <div className="user-profile__socials">
                    <FacebookIcon />
                    <TwitterIcon />
                    <InstagramIcon />
                    <LinkedInIcon />
                </div>
                <div className="user-profile__links">
                    <h5>User name</h5>
                    <p>@user_name</p>
                    <h5>Email</h5>
                    <p>user@gmail.ru</p>
                    <h5>Skype</h5>
                    <p>skype_name</p>
                </div>
            </div>
        </div>
    )
}

export default UserProfile
