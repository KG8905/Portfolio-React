import React from 'react';
import './About.css'; // Import a CSS file for styling

function About() {
return (
    <section id="about" className="about">
    <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hello, I'm Shaketa!
            <br className="hidden lg:inline-block" />I am a coding student at the University of Vanderbilt.
        </h1>
        <p className="mb-8 leading-relaxed">
            I am passionate about creating full stack applications that blend functionality with creativity. With a strong foundation in both front-end and back-end technologies, I bring a fresh perspective to solving problems and building applications that are not only efficient but also engaging for users. I am driven by a love for coding and eager to apply my skills in real-world projects.
        </p>
        <div className="flex justify-center">
            <a
            href="#contact"
            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
            Work With Me
            </a>
            <a
            href="#projects"
            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
            See My Past Work
            </a>
        </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
            className="object-cover object-center rounded"
            alt="A person coding"
            src="./coding.svg"
        />
        </div>
    </div>
    </section>
);
}

export default About;
