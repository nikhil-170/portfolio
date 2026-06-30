import React from "react";
import author from "../nikhilPhoto.jpg";
const aboutMe = () => {
    return (
        <div id="about"className = "container about-section">
            <div className = "row">
                <div className ="col-lg-6 col-xm-12">
                    <div className="photo-wrap">
                    <img className="profile-img" src={author} alt ="author..."/>
                    </div>
                </div>
                <div className ="col-lg-6 col-xm-12">
                    <h1 className="aboutMeHeading">about me</h1>
                    <p className="aboutPara">
                    Hi there! I am Nikhil Surya Peteti, a result-driven Android Developer with 6+ years of mobile development experience building scalable, production-grade apps used by millions. I specialize in Kotlin, Java, MVVM, modular Android design, Clean Architecture, CI/CD workflows, and production diagnostics for reliable feature delivery.
                    <br />
                    <br />
                    I have worked across enterprise-scale codebases and early-stage product environments at Amazon, ReachMobi, GRUBBRR, and Capgemini, collaborating with cross-functional teams to ship performant, accessible, and maintainable mobile experiences. I completed my Engineering degree in Electronics and Communication from Vellore Institute of Technology, India, and I enjoy learning how new technologies solve real product problems at scale.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default aboutMe
