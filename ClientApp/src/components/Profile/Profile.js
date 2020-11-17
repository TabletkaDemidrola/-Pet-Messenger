import React, { useState } from 'react'
import './Profile.css'
import on from 'classnames'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function Profile() {
    const [profileVisible, setProfileVisible] = useState(false)

    return (
        <div 
            className={on( {"profile-show": profileVisible, 
                            "profile-hidden": !profileVisible}, "profile")}>
            <img 
                className="profile__avatar"
                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                alt="" />
            <div className="profile__info">
                <h3>User Name</h3>
                <span>User Status</span> 
                <div className="profile__socials">
                    <FacebookIcon />
                    <TwitterIcon />
                    <InstagramIcon />
                    <LinkedInIcon />
                </div>
                <div className="profile__links">
                    <h4>User name</h4>
                    <p>@user_name</p>
                    <h4>Email</h4>
                    <p>user@gmail.ru</p>
                    <h4>Skype</h4>
                    <p>skype_name</p>
                </div>
                {profileVisible ?
                    <ArrowBackIosIcon 
                        onClick={() => setProfileVisible(!profileVisible)} 
                        className="profile__show"
                        />
                    : < ArrowForwardIosIcon
                        onClick={() => setProfileVisible(!profileVisible)} 
                        className="profile__hidden" 
                        />
                }
            </div>
        </div>
    )
}

export default Profile
