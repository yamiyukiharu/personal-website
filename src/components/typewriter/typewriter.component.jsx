import { ScTypewriterCarret, ScTypewriterContainer, ScTypewriterText } from "./typewriter.styles";
import { useState, useEffect } from "react";

const TypeWriter = ({ content, speed}) => {
  const [displayedContent, setDisplayedContent] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
        setIndex(idx => {
          if (idx === content.length) {
            clearInterval(intervalId)
            return idx;
          }
          else {
            return idx + 1
          }
        })
      }, speed);
  }, []);

  useEffect(() => {
    setDisplayedContent(
      content.substring(0,index)
    );
  }, [index]);

  return (
    <ScTypewriterContainer>
      <ScTypewriterText>
        {displayedContent}
      </ScTypewriterText>
      <ScTypewriterCarret/>

    </ScTypewriterContainer>
  )
};

export default TypeWriter;
