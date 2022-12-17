import React from "react";

function Contact() {
    return (
        <div className="flex flex-col mb-10 mx-auto">
            <div className="flex justify-center items-center">
                <form action="https://getform.io/f/4cc14085-0952-4671-9cff-520d63ac60ff" className="flex flex-col w-full md:w-7/12" method="POST">
                    <input type="hidden" id="captchaResponse" name="g-recaptcha-response">
                        <script>
                            grecaptcha.ready(function() {
                                grecaptcha.execute('YOUR_SITE_KEY', {action: 'homepage'})
                                .then(function(token) {
                                    document.getElementById('captchaResponse').value = token;
                                })
                            });
                        </script>
                    </input>
                </form>
            </div>
        </div>
    )
}

export default Contact;