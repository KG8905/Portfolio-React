import React from 'react';

const socialLinks = [
{
    href: 'https://github.com/KG8905?tab=repositories',
    icon: 'https://seeklogo.com/images/G/github-logo-7880D80B8D-seeklogo.com.png',
    alt: 'GitHub Profile',
},
{
    href: 'https://www.linkedin.com/in/shaketa-giles-113618150/',
    icon: 'https://cdn-icons-png.flaticon.com/512/61/61109.png',
    alt: 'LinkedIn Profile',
},
];

const Footer = () => {
return (
    <div className="sticky-bottom d-flex justify-content-center pb-2">
    {socialLinks.map((link) => (
        <a key={link.href} href={link.href} className="me-2" target="_blank" rel="noopener noreferrer">
        <div className="card p-1">
            <img className="image" src={link.icon} alt={link.alt} />
        </div>
        </a>
    ))}
    </div>
);
};

export default Footer;
