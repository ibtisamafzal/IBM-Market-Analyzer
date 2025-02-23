import React from "react";
import "../custom.css";
import KhaqanImage from "../assets/team/khaqan-nasir.jpg";
import AdnanImage from "../assets/team/adnan-tariq.jpg";
import IbtisamImage from "../assets/team/ibtisam-afzal.jpg";

const teamMembers = [
    {
        name: "Muhammad Khagan Nasir",
        image: KhaqanImage,
        github: "https://github.com/KhaqanNasir",
        linkedin: "https://www.linkedin.com/in/khaqan-nasir/",
    },
    {
        name: "Muhammad Adnan Tariq",
        image: AdnanImage,
        github: "https://github.com/adnaan-tariq",
        linkedin: "https://www.linkedin.com/in/adnaantariq/",
    },
    {
        name: "Muhammad Ibtislam Afzal",
        image: IbtisamImage,
        github: "https://github.com/ibtisamafzal",
        linkedin: "https://www.linkedin.com/in/ibtisamafzal/",
    },
];

const Team = () => {
    return (
        <div className="team-page">
            <div className="hero-section">
                <h1 className="hero-title">Meet the Team</h1>
                <p className="hero-description">
                    The brilliant minds behind <strong>GenAI-innovators</strong>.
                </p>
            </div>

            <div className="team-grid">
                {teamMembers.map((member, index) => (
                    <div key={index} className="team-card">
                        <img src={member.image} alt={member.name} className="team-image" />
                        <h3 className="team-name">{member.name}</h3>
                        <p className="team-role">{member.role}</p>
                        <div className="team-links">
                            <a
                                href={member.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="team-link"
                            >
                                GitHub
                            </a>
                            <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="team-link"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* LinkedIn Section inside a container */}
            <div className="container linkedin-container">
                <div className="linkedin-section">
                    <i className="fab fa-linkedin linkedin-icon"></i>
                    <h2 className="linkedin-title">Connect with Us on LinkedIn</h2>
                    <p className="linkedin-description">
                        Stay updated with the latest insights and opportunities. Let's grow together!
                    </p>
                    <a 
                        href="https://www.linkedin.com/company/genai-innovators" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="linkedin-button btn btn-primary mt-3"
                    >
                        Visit Our LinkedIn <i className="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Team;
