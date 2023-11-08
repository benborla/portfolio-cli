import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
  ProjectLink,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    // if (checkRedirect(rerender, currentCommand, "projects")) {
      // projects.forEach(({ id, url }) => {
      //   id === parseInt(arg[1]) && window.open(url, "_blank");
      // });
    // }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ['1', '2', '3', '4', '5', '6', '7']) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 3 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
          Here are the lists of personal projects that I created.
      </ProjectsIntro>
      {projects.map(({ id, title, desc, url }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
          <Link to={url} target="_blank" style={ProjectLink}>{url}</Link>
        </ProjectContainer>
      ))}
      {/* <Usage cmd="projects" marginY /> */}
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Personal Blog Site (WIP)",
    desc: "This is my personal space where I elaborate and speak aloud my thoughts",
    url: "https://blog.benborla.dev",
  },
  {
    id: 2,
    title: "Multi-tenancy Sales Tracker",
    desc: "This is a personal project where I track the sales and inventory of my small business",
    url: "https://wmlsolutions.com",
  },
  {
    id: 3,
    title: "Tantra Gratis",
    desc: "A game portal website allows players to view the game status, top-up, and player rankings.",
    url: "https://www.tantragratis.com/",
  },
  {
    id: 4,
    title: "Zeta Publishing",
    desc: "A simple book publishing services and book store",
    url: "https://www.zetapublishing.com/",
  },
  {
    id: 5,
    title: "Go Remote Staff",
    desc: "A VA outsourcing platform based in AU",
    url: "https://goremotestaff.com/",
  },
  {
    id: 6,
    title: "RA Microsite (Decommissioned)",
    desc: "A multi-tenancy platform that records taxes and company documents based in UK",
    url: "https://ra-microsite.com.uk/",
  },
  {
    id: 7,
    title: "City FileShare (Decommissioned)",
    desc: "A platform for AWS S3 with GUI and role system",
    url: "https://cityfileshare.com.uk/",
  },
];

export default Projects;
