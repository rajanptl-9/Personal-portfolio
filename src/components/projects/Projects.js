import React from 'react';
import ProjectCard from './ProjectCard';
import malware from "./malware.jpg";
import movies from "./movies.jpeg";
import notes from "./notes.jpeg";
import ecomm from "./ecomm.jpg";
import adminpanel from "./adminpanel.png";
import optimization from "./optimization.png"
import "./projects.css";

function Projects() {
    return (
        <div className='project_subcontainer'>
            <div className='projects'>
                <div className='project_title'><span id='title_box'>PROJECTS</span></div>
                <div className='project'>
                    <ProjectCard img={ecomm} title="Modern-Mart E-Comm." desc="A comprehensive e-commerce platform enhancing online shopping with seamless interfaces, secure transactions, and efficient product management." website="https://modern-mart.netlify.app/" />
                    <ProjectCard img={adminpanel} title="Admin Panel M-Mart" desc="A robust admin panel optimizing e-commerce management with user-friendly controls, secure operations, and effective product administration." website="https://admin-panel-modern-mart.netlify.app/dashboard" />
                    <ProjectCard img={malware} title="Malware Classification" desc="Using transfer learning, we extracted features from images and applied diverse classification models to categorize them into 25 distinct malware families." link="https://github.com/rajanptl-9/FYP_Malware_Detection" />
                    <ProjectCard img={notes} title="Let-Note" desc="I've developed a web app enabling users to create accounts, log in securely, manage private notes exclusively visible to them, and perform CRUD operations on these notes." link="https://github.com/rajanptl-9/Let-Note-Frontend" />
                    <ProjectCard img={movies} title="Movie Recommendation" desc="Using machine learning, the project suggests related movies upon user search, displayed through a TKinter GUI, leveraging natural language processing." link="https://github.com/rajanptl-9/Movie_Recommendation_System" />
                    <ProjectCard img={optimization} title="Scheduling Optimization" desc="A project focused on optimizing workflow scheduling in cloud computing with scheduling algorithms to enhance efficiency, resource allocation, and performance." link="https://github.com/rajanptl-9/CloudSim-Workflow-Scheduling-Optimization" />
                    <ProjectCard img={optimization} title="Get Latest NEWS" desc="A project developing a dynamic frontend news website integrating NewsAPI for real-time news updates and user-friendly browsing." link="https://github.com/rajanptl-9/Get-NEWS" />
                </div>
            </div>
        </div>
    )
}

export default Projects