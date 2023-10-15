"use client"
import React from 'react'

const Resume = () => {

    return (
        <div id="Resume">
            <h2 className="headers2">Resume</h2>
            <div className="flex space-x-6">
                <a href="../resources/CV-Ruben-EN.pdf" target="_blank" rel="noopener noreferrer"
                    className="bg-defColors-lGray text-defColors-dBG dark:bg-defColors-dGray dark:text-defColors-lBG hover:text-defColors-main dark:hover:text-defColors-main customRing px-3 py-2 rounded-md shadow-lg"
                >
                    English CV
                </a>
                <a href="../resources/CV-Ruben-ES.pdf" target="_blank" rel="noopener noreferrer"
                    className="bg-defColors-lGray text-defColors-dBG dark:bg-defColors-dGray dark:text-defColors-lBG hover:text-defColors-main dark:hover:text-defColors-main customRing px-3 py-2 rounded-md shadow-lg"
                >
                    Spanish CV
                </a>
            </div>
        </div>
    )
}

export default Resume