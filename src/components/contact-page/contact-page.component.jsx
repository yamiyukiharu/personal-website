import { ScContactIconContainer, ScContactPage, ScIcon, ScSignature, ScTitle } from "./contact-page.styles";
import { contacts } from "../../content/contacts";

const ContactPage = () => {
    return(
        <ScContactPage id="contact-page">
            <ScTitle>Contact Me</ScTitle>
            <ScContactIconContainer>
            {
                contacts.map((contact) => {
                    const {name, image, link} = contact
                    const ContactIcon = image
                    if (name === 'Email') {
                        return (
                            <ScIcon>
                                <a href = {`mailto: ${link}`}>
                                    <ContactIcon/>
                                </a>                        
                            </ScIcon>
                        )
                    } else {
                        return (
                            <ScIcon >
                                <a href={link} target="_blank">
                                    <ContactIcon/>
                                </a>
                            </ScIcon>
                        )
                    }
                })
            }
            </ScContactIconContainer>
            <ScSignature>
                Designed and built by Hao Ye
            </ScSignature>
        </ScContactPage>
    )
};

export default ContactPage;