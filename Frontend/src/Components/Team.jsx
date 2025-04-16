// src/Components/Team.jsx
import React from 'react';
import '../Style/Team.css'; // Custom styles for Team section

const Team = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO',
      img: './assets\Task1.jpg',
      description: 'John is the visionary behind the company.',
    },
    {
      name: 'Jane Smith',
      role: 'CTO',
      img: 'https://designimages.appypie.com/displaypicture/displaypicture-14-person-human.jpg',
      description: 'Jane leads our technology and innovation efforts.',
    },
    {
      name: 'Alice Brown',
      role: 'Lead Developer',
      img: 'https://designimages.appypie.com/displaypicture/displaypicture-14-person-human.jpg',
      description: 'Alice is the lead developer working on the platform.',
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 section-title">Meet Our Team</h2>
      <div className="row justify-content-center">
        {teamMembers.map((member, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-6 col-lg-4 text-center mb-4">
            <div className="team-card">
              <img
                src={member.img}
                alt={member.name}
                className="rounded-circle img-fluid team-img"
              />
              <h4 className="team-name mt-3">{member.name}</h4>
              <p className="team-role text-muted">{member.role}</p>
              <p className="team-description">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
