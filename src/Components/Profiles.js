import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const LeetCodeIcon = () => (
  <svg className="leetcode-icon" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
    <path
      fill="currentColor"
      d="M21.469 23.907l-3.595 3.473c-.624.625-1.484.885-2.432.885s-1.807-.26-2.432-.885l-5.776-5.812c-.62-.625-.937-1.537-.937-2.485 0-.952.317-1.812.937-2.432l5.76-5.844c.62-.619 1.5-.859 2.448-.859s1.808.26 2.432.885l3.595 3.473c.687.688 1.823.663 2.536-.052.708-.713.735-1.848.047-2.536l-3.473-3.511c-.901-.891-2.032-1.505-3.261-1.787l3.287-3.333c.688-.687.667-1.823-.047-2.536s-1.849-.735-2.536-.052l-13.469 13.469c-1.307 1.312-1.989 3.113-1.989 5.113 0 1.996.683 3.86 1.989 5.168l5.797 5.812c1.307 1.307 3.115 1.937 5.115 1.937 1.995 0 3.801-.683 5.109-1.989l3.479-3.521c.688-.683.661-1.817-.052-2.531s-1.849-.74-2.531-.052zM27.749 17.349h-13.531c-.932 0-1.692.801-1.692 1.791 0 .991.76 1.797 1.692 1.797h13.531c.933 0 1.693-.807 1.693-1.797 0-.989-.76-1.791-1.693-1.791z"
    />
  </svg>
);

const profiles = () => {
    return (
        <div id="nikhilcontact">
        <h1 id ="profilesheading"className="pt-3 text-center font-details-b pb-3">PROFILES</h1>
        <Jumbotron id="nikhiljumbotron" className="contact-jumbotron">
          <Row>
            <Col className="d-flex justify-content-center flex-wrap">
{/* Buttons*/}
        <div className="m-2">
              <a href="mailto:peteti.nikhil@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button className="profile-icon-button" variant="outline-danger" title="peteti.nikhil@gmail.com" aria-label="Email me">
                  <FontAwesomeIcon className="profile-icon profile-icon-email" icon={faEnvelope} />
                </Button>
              </a>
        </div>
        <div className="m-2">
              <a href="https://www.linkedin.com/in/nikhilsuryapeteti/" target="_blank" rel="noopener noreferrer">
                <Button className="profile-icon-button" variant="outline-primary" title="Visit my LinkedIn" aria-label="LinkedIn profile">
                  <FontAwesomeIcon className="profile-icon profile-icon-linkedin" icon={faLinkedinIn} />
                </Button>
              </a>
            </div>
            
            <div className="m-2">
              <a href="https://github.com/nikhil-170" target="_blank" rel="noopener noreferrer">
                <Button className="profile-icon-button" variant="outline-dark" title="My other projects" aria-label="GitHub profile">
                  <FontAwesomeIcon className="profile-icon profile-icon-github" icon={faGithub} />
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://leetcode.com/u/nikhil170/" target="_blank" rel="noopener noreferrer">
                <Button className="profile-icon-button leetcode-icon-button" variant="outline-info" title="Visit my LeetCode profile" aria-label="LeetCode profile">
                  <LeetCodeIcon />
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.facebook.com/nikhil.surya.5/" target="_blank" rel="noopener noreferrer">
                <Button className="profile-icon-button" variant="outline-primary" title="Say hello on Facebook" aria-label="Facebook profile">
                  <FontAwesomeIcon className="profile-icon profile-icon-facebook" icon={faFacebookF} />
                </Button>
              </a>
            </div>
                </Col>
                </Row>
                </Jumbotron>
        </div>
    )
}

export default profiles
