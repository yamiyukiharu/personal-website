import {
  ScButton,
  ScButtonContainer,
  ScContent,
  ScImagePreview,
  ScLink,
  ScMobileImagePreview,
  ScProjectCardContainer,
  ScTitle,
} from "./project-card.styles";

const ProjectCard = ({ project, isAlternate = false }) => {
  const { title, image, description, appLink, repoLink, projectPage } = project;

  return isAlternate ? (
    <ScProjectCardContainer>
      <ScContent>
        <ScTitle>{title}</ScTitle>
        <div>{description}</div>
        <ScButtonContainer>
          {projectPage !== "" && (
            <ScLink href={projectPage} target="_blank" rel="noreferrer">
              <ScButton>Read More</ScButton>
            </ScLink>
          )}
          {appLink !== "" && (
            <ScLink href={appLink} target="_blank" rel="noreferrer">
              <ScButton>Live App</ScButton>
            </ScLink>
          )}
          <ScLink href={repoLink} target="_blank" rel="noreferrer">
            <ScButton>Repository</ScButton>
          </ScLink>
        </ScButtonContainer>
      </ScContent>
      {title === "Shoken App" ? (
        <ScMobileImagePreview src={image} />
      ) : (
        <ScImagePreview src={image} />
      )}
    </ScProjectCardContainer>
  ) : (
    <ScProjectCardContainer>
      {title === "Shoken App" ? (
        <ScMobileImagePreview src={image} />
      ) : (
        <ScImagePreview src={image} />
      )}

      <ScContent>
        <ScTitle>{title}</ScTitle>
        <div>{description}</div>
        <ScButtonContainer>
          {projectPage !== "" && (
            <ScLink href={projectPage} target="_blank" rel="noreferrer">
              <ScButton>Read More</ScButton>
            </ScLink>
          )}
          {appLink !== "" && (
            <ScLink href={appLink} target="_blank" rel="noreferrer">
              <ScButton>Live App</ScButton>
            </ScLink>
          )}
          <ScLink href={repoLink} target="_blank" rel="noreferrer">
            <ScButton>Repository</ScButton>
          </ScLink>
        </ScButtonContainer>
      </ScContent>
    </ScProjectCardContainer>
  );
};

export default ProjectCard;
