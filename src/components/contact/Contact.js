import React from 'react';
import "./contact.css";
import Mailbox from './Mailbox';
import Tag from './Tag';
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";


function Contact() {
    return (
        <div className='contacts'>
            <div className='title'><span id="title_box">CONTACT</span></div>
            <div className='contact'>
                <Mailbox />
                <div className='contact_list'>
                    <div className='subtitle'>More Ways</div>
                    <div className='linkToMySocial'>
                        <Tag link="https://www.linkedin.com/in/rajan-patel-aaa503252/" icon={<TiSocialLinkedinCircular style={{fontSize:"64px"}}/>} name="LinkedIn Profile" bgcolor="#0a66c2" />
                        <Tag link="https://www.facebook.com/profile.php?id=100056040500100" icon={<FaFacebook style={{fontSize:"46px"}}/>} name="Facebook Profile" bgcolor="#1877f2" />
                        <Tag link="https://github.com/rajanptl-9" icon={<FaGithub style={{fontSize:"46px"}}/>} name="Git-Hub Profile" bgcolor="#010409" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact