import React from "react";

const App = () => {
  const portfolioData = {
    name: "Akash Gorkar",
    reg:"21BCE11468",
    place: "Pune , Maharashtra | India",
    skills: ["Python Programming", "Full-stack web dev intermediate", "Database - SQL,MongoDB","DSA","Computer Vision"],
    projects: [
      {
        title: "Full Stack Gym Website",
        description: "When someone searches for a gym in the city, there are a lot of them and thus it becomes hard to decide which one to choose, hence he can go through the website and get a glimpse. As a gym owner, it becomes hard to keep track of each and every member’s details. Also, a gym owner finds it hard to reach the audience through advertisement. But this online website is a nice solution for a gym owner to advertise and display all the facilities to the customers. To reach the people who can't attend offline at the gym, a gym owner can use our website to launch and monetize online fitness courses too.Check here- https://full-stack-gym-website.vercel.app/",
      },
      {
        title: "Adventure sports booking website",
        description: "When someone searches for adventures in their locality, there is not much information of them and thus it becomes hard to find any, hence he/she can go through the website and get a glimpse. As an adventure organizer, it becomes hard to reach out to the customers and keep track of each and every customer’s details. Also, a Adventure organizer finds it difficult to reach the audience through advertisement. But the online website is a nice solution for the organizer to advertise and display all the facilities to the customers.  Check here- https://adventure-sport-booking-website.vercel.app/",
      },
      {
        title: "Akash Gorkar | Portfolio",
        description: "Welcome to my portfolio. Dive into a world of digital creations and explore the websites I've crafted.",
      },
    ],
  };

  return (
    <div className="portfolio">
      <div className="frame">
        <div className="header">
          <h1>{portfolioData.name}</h1>
          <h2><u>Registration no:</u> {portfolioData.reg}</h2>
          <h2><u>Postal Location:</u> {portfolioData.place}</h2>
        </div>
        <div className="body">
          <div className="about">
            <h3><u>Description about me:</u></h3>
            <p>Hello,i am Akash Gorkar, an aspiring web developer.I just love learning new skills and spend most of my time in doing so. I am enjoying my journey as a python programmer. I enjoy playing badmiton while street photography being my hobby.I am a disciplined and focused person wanting to develop my coding skills and thus achive my goals.</p>
          </div>
          <div className="skills">
            <h3><u>Skills:</u></h3>
            <ul>
              {portfolioData.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="projects">
            <h3><u>Some Personal Projects: </u></h3>
            {portfolioData.projects.map((project) => (
              <ul>
                <div className="project" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              </ul>
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;