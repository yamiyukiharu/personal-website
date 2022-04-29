import { ScButton, ScButtonContainer, ScContent, ScImagePreview, ScProjectCardContainer, ScTitle } from "./project-card.styles";


const ProjectCard = ({project}) => {
    const {title, image, description, appLink, repoLink} = project
    return (
        <ScProjectCardContainer>
            <ScImagePreview src={image}/>
            <ScContent>
                <ScTitle>{title}</ScTitle>
                <div>{description}</div>
                <ScButtonContainer>
                    {
                        appLink !== '' && 
                            <ScButton>
                                <a href={appLink} target="_blank">
                                    Live App                                
                                </a>
                            </ScButton>
                    }
                    <ScButton>
                        <a href={repoLink} target="_blank">
                            Repository                       
                        </a>
                    </ScButton>
                </ScButtonContainer>
            </ScContent>
        </ScProjectCardContainer>
    )
}

export default ProjectCard