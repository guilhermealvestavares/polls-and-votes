import React, { useEffect, useState } from "react";
import { 
    Wrapper,
    EmailField,
    SendButton,
    StatusSent,
} from "./SendEmail.style"
import { directivesApi } from '../../constants/directivesApi'
import debounce from "lodash.debounce"
import axios from 'axios';


const { ENDPOINT_BASE } = directivesApi

const SendEmail = () => {

    const [valueFieldEmail, setValueFieldEmail] = useState("") 
    const [messageFeedback, setMessageFeedback] = useState("fields")
    const pageLocation = window.location.href;

    const triggerEmail = async () => {
        try { 
            axios.post(`${ENDPOINT_BASE}/share`, {destination_email: valueFieldEmail, content_url: pageLocation})
            setMessageFeedback("ok")
        } catch (err) {
            setMessageFeedback("error")
            console.error("Error:", err)
        }
    }

    return (
        <Wrapper>
            {messageFeedback === "fields" &&
                <>
                    <EmailField type="email" onChange={debounce((event) => setValueFieldEmail(event.target.value), 1000)} />
                    <SendButton onClick={triggerEmail}>Send email</SendButton>
                </>
            }
            {messageFeedback === "ok" &&
                <>
                    <StatusSent>email sent to {valueFieldEmail}</StatusSent>
                </>    
            }
            {messageFeedback === "error" &&
                <>
                    <StatusSent>Something went wrong. Try again later.</StatusSent>
                </>
            }
            
        </Wrapper>
    )
}


export { SendEmail }