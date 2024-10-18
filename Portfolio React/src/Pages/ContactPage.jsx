import React from 'react';
import './Contact.css'; // Import a CSS file for styling

function Contact() {
return (
    <section id="contact" className="contact">
    <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hire Me
        </h1>
        <p className="mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            suscipit officia aspernatur veritatis. Asperiores, aliquid?
        </p>
        <div className="flex justify-center">
            <a
            href="mailto:your_email@example.com"
            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
            Contact Me
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

export default Contact;
