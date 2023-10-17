"use client"
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the core styles
import EmailMe from './EmailMe'

const Contact = () => {
    return (
        <div id="Contact">
            <h2 className="headers2">Contact Me</h2>
            <EmailMe />
            <div className="flex space-x-5 mb-6">
                <a href="https://github.com/marsi107" target="_blank"
                    className="hover:text-defColors-git rounded-md"
                >
                    <FontAwesomeIcon icon={faGithub} size="3x" />
                </a>
                <a href="https://www.linkedin.com/in/marsi107/" target="_blank"
                    className="hover:text-defColors-linkedin rounded-md"
                >
                    <FontAwesomeIcon icon={faLinkedin} size="3x" />
                </a>
            </div>
        </div>
    )
}

export default Contact