import { useEffect, useState } from "react";
import { ScFinalTextContainer, ScRollingTextContainer } from "./rolling-text.styles";

const RollingText = ({ texts, interval, delay }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const intervalId = setInterval(() => {
        setIndex((index) => {
          if (index === texts.length - 1) {
            clearInterval(intervalId);
            return index;
          } else {
            return index + 1;
          }
        });
      }, interval);
    }, delay);
  }, []);

  if (index === 0) {
    return <ScRollingTextContainer></ScRollingTextContainer>
  } else if ( index === texts.length-1) {
      return <ScFinalTextContainer> {texts[index]} </ScFinalTextContainer>
  } else {
      return <ScRollingTextContainer key={index} delay={0}> {texts[index]} </ScRollingTextContainer>
  } 

};

export default RollingText;
