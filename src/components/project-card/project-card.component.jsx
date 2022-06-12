import {
  ScButton,
  ScButtonContainer,
  ScContent,
  ScImagePreview,
  ScProjectCardContainer,
  ScTitle,
} from "./project-card.styles";

const ProjectCard = ({ project, isAlternate = false }) => {
  const { title, image, description, appLink, repoLink } = project;

  return isAlternate ? (
    <ScProjectCardContainer>
      <ScContent>
        <ScTitle>{title}</ScTitle>
        <div>{description}</div>
        <ScButtonContainer>
          {appLink !== "" && (
            <ScButton>
              <a href={appLink} target="_blank">
                Live App
              </a>
            </ScButton>
          )}
          <ScButton>
            <a href={repoLink} target="_blank">
              Repository
            </a>
          </ScButton>
        </ScButtonContainer>
      </ScContent>
      <ScImagePreview src={image} />
    </ScProjectCardContainer>
  ) : (
    <ScProjectCardContainer>
      <ScImagePreview src={image} />
      <ScContent>
        <ScTitle>{title}</ScTitle>
        <div>{description}</div>
        <ScButtonContainer>
          {appLink !== "" && (
            <ScButton>
              <a href={appLink} target="_blank">
                Live App
              </a>
            </ScButton>
          )}
          <ScButton>
            <a href={repoLink} target="_blank">
              Repository
            </a>
          </ScButton>
        </ScButtonContainer>
      </ScContent>
    </ScProjectCardContainer>
  );
};

export default ProjectCard;
