"use client"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const EmailMe = () => {
    const form = useRef()
    const nameInput = useRef()
    const emailInput = useRef()
    const messageInput = useRef()

    const clearForm = () => {
        nameInput.current.value = ''
        emailInput.current.value = ''
        messageInput.current.value = ''
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jbi4uci', 'template_j2ymi1g', form.current, '4ji9rQoDQIopvzNZU')
            .then((result) => {
                clearForm()
                alert("Message sent!")
                console.log(result.text);
            }, (error) => {
                alert("Error " + error.text + " please try to send the message again")
                console.log(error.text);
            });
    };

    return (
        <div className="container max-w-lg shadow-lg font-rale bg-black bg-opacity-5 dark:bg-opacity-20 py-12 px-12 sm:px-24">
            <h4 className="font-rale block text-center text-3xl font-extrabold mb-6">Email Me</h4>
            <form
                ref={form}
                onSubmit={sendEmail}
            >
                <label className="block mt-4 mb-2">Name</label>
                <input
                    className="contactInputs"
                    type="text"
                    name="user_name"
                    required
                    placeholder="Your Name"
                    ref={nameInput}
                />
                <label className="block mt-4 mb-2">Email</label>
                <input
                    className="contactInputs"
                    type="email"
                    name="user_email"
                    required
                    placeholder="Your Email"
                    ref={emailInput}
                />
                <label className="block mt-4 mb-2">Message</label>
                <textarea
                    className="contactInputs sm:min-h-[100px]"
                    name="message"
                    required
                    placeholder="Some Message..."
                    ref={messageInput}
                />
                <input className="block cursor-pointer mt-6 bg-defColors-main rounded-lg py-1 w-full hover:font-semibold hover:text-defColors-lGray dark:hover:text-defColors-dGray" type="submit" value="Send" />
            </form>
        </div>
    )
}

export default EmailMe