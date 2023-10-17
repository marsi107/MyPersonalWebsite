"use client"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const EmailMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jbi4uci', 'template_j2ymi1g', form.current, '4ji9rQoDQIopvzNZU')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form
            className="block shadow-lg"
            ref={form}
            onSubmit={sendEmail}
        >
            <label>Name</label>
            <input
                className="text-defColors-dBG"
                type="text"
                name="user_name"
            />
            <label>Email</label>
            <input
                className="text-defColors-dBG"
                type="email"
                name="user_email"
            />
            <label>Message</label>
            <textarea
                className="text-defColors-dBG"
                name="message"
            />
            <input type="submit" value="Send" />
        </form>
    );
};

export default EmailMe