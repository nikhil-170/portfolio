import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAndroid } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faDesktop, faFileCode, faServer } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
        <div id= "services"className="services">
            <h1 className = "py-5">technical skills</h1>
            <div className="container">
                <div className="row">
                    <div className = "col-md-3 col-sm-6">
                        <div className= "box">
                            <h4>Languages</h4>
                            <p>Kotlin<br/>Java<br/>Python<br/>JavaScript<br/>SQL<br/>PL/SQL</p>
                        </div>
                    </div>
                    {/* -- */}
                    <div className = "col-md-3 col-sm-6">
                        <div className= "box">
                            <h4>Mobile/<br/>Backend</h4>
                            <p>Android SDK<br/>Jetpack Compose<br/>Room<br/>SQLite<br/>Retrofit2<br/>Firebase<br/>Node.js<br/>Express.js</p>
                        </div>
                    </div>
                    {/* -- */}
                    <div className = "col-md-3 col-sm-6">
                        <div className= "box">
                            <h4>Web/<br/>Cloud</h4>
                            <p>React.js<br/>HTML<br/>CSS<br/>Bootstrap<br/>Gradle<br/>OAuth<br/>EC2<br/>Lambda<br/>SQS/SNS<br/>CDK</p>
                        </div>
                    </div>
                    {/* -- */}
                    <div className = "col-md-3 col-sm-6">
                        <div className= "box">
                            <h4>Tools/<br/>Concepts</h4>
                            <p>Git<br/>Jira<br/>Confluence<br/>JUnit<br/>Mockito<br/>Postman<br/>Perfetto<br/>RESTful APIs<br/>CI/CD<br/>Agile/Scrum<br/>Prompt Engineering</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    )
}

export default Services
