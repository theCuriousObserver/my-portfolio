import React from 'react';
import './Skills.css';
import KeySkills from './internal-sections/Skills/KeySkills';
import SoftSkills from './internal-sections/Skills/SoftSkills';
import TechnicalSkills from './internal-sections/Skills/TechnicalSkills';

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <h1 className="skills-heading">Skills</h1>
      
      <div className="skills-section">
        <h2 className="skills-subheading key">Key Skills</h2>
        <KeySkills />
      </div>
      
      <div className="skills-section">
        <h2 className="skills-subheading soft">Soft Skills</h2>
        <SoftSkills />
      </div>

      <div className="skills-section">
        <h2 className="skills-subheading technical">Technical Skills</h2>
        <TechnicalSkills />
      </div>
      
      {/* The rest of your Skills component */}
    </div>
  );
};

export default Skills;
