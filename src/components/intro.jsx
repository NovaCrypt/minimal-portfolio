import React from "react";

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Oliver Hunter</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Software Developer & Graphic Designer</p>
            <p className="text-sm max-w-xl mb-6 font-bold">
                I'm a solo software developer and graphic designer building my
                own digital presence one step at a time. All coding projects
                are built from the ground up, from planning and designing all the way
                to solving real-life problems with code.
                <br />
                All graphical content is created the same way, from inspiration and planning,
                all the way to finalizing the content with artistic touches. I publish
                that content on my Patreon page{' '}
                <a href="https://www.patreon.com/NovaAI"
                target="_blank"
                className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
                rel="noreferrer noopener"
                >
                NovaCrypt
                </a>.
            </p>
        </div>
    )
}

export default Intro;