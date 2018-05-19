import React from 'react';

const About = () => {
  return (
    <main className="about">
      <p className="about-text">
        Born in Denver, I have lived in Colorado all of my life. When I am not
        at my computer learning new things about development, I can usually be
        found in the mountains. I am an avid skier, fly-fisherman, rock-climber,
        and alpinist.
      </p>
      <p className="about-text">
        I am a certified Wilderness First Responder and I assist teaching
        classes with the Colorado Mountain Club. Some courses include Basic
        Mountaineering School, various rock and ice climbing courses and AIARE
        Level 1 Avalanche Training.
      </p>
      <p className="about-text">
        I am a recent career changer. I started in hardware and IT support and
        found my way to Front End Engineering through the{' '}
        <a href="https://www.turing.io" className="textAccent">
          Turing School of Software and Design.
        </a>{' '}
        I love web development because there will always be something new to
        learn, no two days are ever the same, and I can always be challenged.
      </p>
    </main>
  );
};

export default About;
