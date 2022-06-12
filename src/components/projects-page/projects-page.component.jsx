import { projects } from "../../content/projects";
import ProjectCard from "../project-card/project-card.component";
import { ScCards, ScProjectsPageContainer, ScTitle } from "./projects-page.styles";

const ProjectsPage = () => {
    const { innerWidth: width, innerHeight: height } = window;

    return (
        <ScProjectsPageContainer id="projects-page">
            <ScTitle>My Projects</ScTitle>
            <ScCards>
            {
                width > 900 ?
                projects.map((project, idx) => {
                    return (
                        <ProjectCard key={idx} project={project} isAlternate={idx%2 === 0}/>
                    )
                }) :
                projects.map((project, idx) => {
                    return (
                        <ProjectCard key={idx} project={project}/>
                    )
                })
            }
            </ScCards>
        </ScProjectsPageContainer>
    )
}

export default ProjectsPage;