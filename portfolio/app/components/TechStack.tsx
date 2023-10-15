import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareJs, faReact, faNodeJs, faGitAlt, faPython, faHtml5, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the core styles

const TechStack = () => {
    return (
        <div id="TechStack">
            <h2 className="headers2">Portfolio</h2>
            <div className="space-x-1">
                <FontAwesomeIcon icon={faSquareJs} size="3x" className="text-yellow-400" />
                <FontAwesomeIcon icon={faReact} size="3x" className="text-defColors-main" />
                <FontAwesomeIcon icon={faNodeJs} size="3x" className="text-green-700" />
                <FontAwesomeIcon icon={faGitAlt} size="3x" className="" />
                <FontAwesomeIcon icon={faPython} size="3x" className="" />
                <FontAwesomeIcon icon={faHtml5} size="3x" className="text-orange-700" />
                <FontAwesomeIcon icon={faCss3Alt} size="3x" className="text-blue-700" />
            </div>
        </div>
    )
}

export default TechStack