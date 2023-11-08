import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  const yearsOfExperience = new Date().getFullYear() - new Date('01/01/2014').getFullYear();

  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, I'm <HighlightSpan>Ben Borla</HighlightSpan>!
      </p>
      <p>
        I am an experienced <HighlightAlt>full-stack developer</HighlightAlt> with over {yearsOfExperience} years
        in web application development. Fully committed to full-stack developments,
        modular architecture approach, CMS, CRM, and in-house platform developments.
        Skilled analytical problem-solver with the ability to quickly learn new technologies.
        Flexible and with a strong drive to succeed.
      </p>
      <p>
        I am passionate in delivering cutting-edge web apps.<br />
      </p>
    </AboutWrapper>
  );
};

export default About;
