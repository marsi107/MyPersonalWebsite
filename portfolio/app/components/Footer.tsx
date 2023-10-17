import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

const Footer = () => {
    return (
        <footer className="text-center border-t-2 border-t-defColors-lGray dark:border-t-defColors-dGray space-x-5 mt-10 mb-6 py-6">
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
        </footer>
    )
}

export default Footer