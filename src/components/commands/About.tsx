import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, I'm <HighlightSpan>Ben Borla</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a full-stack developer</HighlightAlt> based in Metro Manila,
        Philippines.
      </p>
      <p>
        I am passionate in delivering cutting-edge web apps.<br />
      </p>
    </AboutWrapper>
  );
};

export default About;
