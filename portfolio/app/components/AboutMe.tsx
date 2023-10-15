import React from 'react'

const AboutMe = () => {
    return (
        <div id="AboutMe">
            <h2 className="headers2">About Me</h2>
            <div className="max-w-6xl shadow-lg bg-black bg-opacity-5 border-l-2 dark:bg-opacity-20 p-6 border-l-defColors-main dark:border-l-[1px]">
                <img src="../images/profile.png" alt="profile image about Ruben" className="float-left mr-6 mb-1 w-32 rounded-full" />
                <p className=" text-defColors-dBG dark:text-defColors-lBG leading-loose">
                    I&#39;m Rubén Martínez, a full stack website developer with passion for cutting-edge technologies and a strong foundation in various programming languages, including JavaScipt, Typescript and Python.
                    I consider myself a dynamic, responsible and decisive person, eager to learn and expand my knowledge.
                    Throughout my journey, I have worked on diverse projects which allowed me to improve my skills in developing efficient and robust softwares.
                    I&#39;m exited to connect with like-minded people to team up and collaborate to create digital solutions and projects.
                </p>
            </div>
        </div>
    )
}

export default AboutMe