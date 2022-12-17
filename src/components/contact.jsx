import React from "react";
import Title from "./title";

function Contact() {
    return (
        <div className="flex flex-col mb-10 mx-auto">
            <div className="flex justify-center items-center">
                <form action="https://getform.io/f/4cc14085-0952-4671-9cff-520d63ac60ff" className="flex flex-col w-full md:w-7/12" method="POST">
                    <Title>Contact</Title>
                    <input type="hidden" id="captchaResponse" name="g-recaptcha-response">
                        {grecaptcha.ready(function() {
                            grecaptcha.execute('6Lc_DYgjAAAAANkZc3-YD6Ms9tX51umUEb50rKzW', {action: 'homepage'})
                            .then(function(token) {
                                document.getElementById('captchaResponse').value = token;
                            })
                        })}
                    </input>
                    <input type="text" name="name" id="nameField" placeholder="Name" className="p-2 bg-transparent border-2 rounded-md focus:outline-none" />
                    <input type="email" name="email" id="emailField" placeholder="Email" className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none" />
                    <textarea name="message" id="messageField" rows="10" placeholder="Message" className="mb-4 p-2 bg-transparent border-2 rounded-md focus:outline-none" />
                    <button type="submit" className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white">
                        WORK WITH ME
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;