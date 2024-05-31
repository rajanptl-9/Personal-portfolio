import React from 'react'
import { HiOutlineExternalLink } from "react-icons/hi";

function ProjectCard(props) {
    const {img, title, desc, link,website} = props;
    const stl = {
        img_div:{
            width: "100%",
            height: "164px",
            borderRadius:"8px",
            backgroundImage: `url(${img})`,
            backgroundSize: "100% 120%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        },
    }
  return (
    <div className='card'>
        <div style={stl.img_div}></div>
        <div className='name'>{title}</div>
        <div className='details'>{desc}</div>
        {link && <div className='link_button'><a href={link} target='_blank'  rel="noopener noreferrer" className="github-button" style={{textDecoration:"none", color: "white"}}>Go to GitHub <HiOutlineExternalLink/></a></div>}
        {website && <div className='website_button'><a href={website} target='_blank'  rel="noopener noreferrer" className="github-button" style={{textDecoration:"none", color: "white"}}>Go to Website <HiOutlineExternalLink/></a></div>}
    </div>
  )
}

export default ProjectCard