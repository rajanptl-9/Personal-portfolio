import React from 'react'
import "./about.css"
import Skills from './Skills';
import Education from './Education';
import { GrDocumentDownload } from "react-icons/gr";

function About() {
    return (
            <div className='about_subcontainer'>
                <div className='about_me'>
                    <div className='image_div'></div>
                    <div className='about_content'>
                        <div id='about_me_title'>ABOUT ME</div>
                        <div id='about_text'>Hello, esteemed visitor. Welcome to my website. I am Rajan Patel, having completed my Bachelor's in Technology with a major in Computer Science and Engineering at Sardar Vallabhbhai National Institute of Technology, Surat. Previously, I undertook an internship at the John Deere Manufacturing department as a Graduate Engineering Trainee during the summer break at the end of my third year, in Pune, Maharashtra. I graduated with my Bachelor's in Technology in June 2024.</div>
                        <span>
                            <a href="https://drive.google.com/file/d/1R7B56hkfdTHY4N2IPFKHN1sQmvnAkpDJ/view?usp=drive_link" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                                <div id='button'>Download CV <GrDocumentDownload style={{ paddingLeft: "6px", fontSize:"26px" }} /></div>
                            </a>
                        </span>
                    </div>
                </div>
                <Skills />
                <Education />
            </div>
    )
}

export default About