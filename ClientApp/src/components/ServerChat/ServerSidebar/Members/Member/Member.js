import React, { useState } from 'react'
import './Member.css'
import on from 'classnames'
import { Avatar } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

function Member() {
    const [memberProfileVisible, setMemberProfileVisible] = useState(false)

    return (
        <div>
            <div className="member" onClick={() => setMemberProfileVisible(!memberProfileVisible)}>
                <div className="member__status member__status--online"></div>
                <Avatar />
                <h4 className="member__name">User Name</h4>
            </div>
            <div className={on({"member-profile--visible": memberProfileVisible,
                                "member-profile--hidden": !memberProfileVisible}, "member-profile")}>
                <img 
                    className="member-profile__avatar"
                    src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                    alt="" />
                <div className="member-profile__info">
                    <h4>User Name</h4>
                    <span>User Status</span> 
                    <div className="member-profile__socials">
                        <FacebookIcon />
                        <TwitterIcon />
                        <InstagramIcon />
                        <LinkedInIcon />
                    </div>
                    <div className="member-profile__links">
                        <h5>User name</h5>
                        <p>@user_name</p>
                        <h5>Email</h5>
                        <p>user@gmail.ru</p>
                        <h5>Skype</h5>
                        <p>skype_name</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Member
