import React, { useState } from 'react'
import "./form.css"
import { RxCross2 } from "react-icons/rx";
import { GrSend } from "react-icons/gr";

function Mailbox() {
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const recipientEmail = "u20cs086@coed.svnit.ac.in";
    const mailToLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(name + "\n" + message)}`;

    return (
        <div className='mail_form'>
            <div className='form_title'>Get In Touch</div>
            <div className='sender_details'>
                <input type="name" id="name" name="name" placeholder='Name' value={name} required onChange={(e) => setName(e.target.value)} />
                <RxCross2 style={{ position: "relative", right: '0', cursor: "pointer", color:"#233b5a" }} onClick={() => setName("")} />
                {/* <label htmlFor="name">Email</label> */}
                <input type="text" id="subject" name="subject" placeholder='Subject' value={subject} required onChange={(e) => setSubject(e.target.value)} />
                <RxCross2 style={{ position: "relative", right: '0', cursor: "pointer", color:"#233b5a" }} onClick={() => setSubject("")} />
                {/* <label htmlFor="name">Subject</label> */}
            </div>
            <div className='sender_details'>
                <textarea id="message" name="message" placeholder='Type your message' value={message} required onChange={(e) => setMessage(e.target.value)}></textarea>
                <RxCross2 style={{ position: "relative", right: '0', cursor: "pointer",color:"#233b5a" }} onClick={() => setMessage("")} />
                {/* <label htmlFor="message">Message</label> */}
            </div>
            <div className='button_holder'><a href={name.length === 0 || subject.length === 0 || message.length === 0 ? " " : mailToLink} className='button'>Send Mail&nbsp; <GrSend style={{ fontSize: "24px" }} /></a>
                {/* <p id="notification"></p> */}
            </div>
        </div>
    )
}

export default Mailbox