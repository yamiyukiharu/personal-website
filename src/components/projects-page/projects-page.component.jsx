import { projects } from "../../content/projects";
import ProjectCard from "../project-card/project-card.component";
import { ScCards, ScProjectsPageContainer, ScTitle } from "./projects-page.styles";

const ProjectsPage = () => {
    return (
        <ScProjectsPageContainer id="projects-page">
            <ScTitle>My Projects</ScTitle>
            <ScCards>
            {
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