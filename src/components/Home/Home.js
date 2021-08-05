import React, { useEffect, useState } from "react";
import { AlertError } from "../AlertError"
import { Wrapper } from "./Home.style"
import axios from 'axios';

const ENDPOINT_BASE = "https://private-anon-0dc9329667-blissrecruitmentapi.apiary-mock.com";
const MESSAGE_OK = "OK"

const Home = () => {
    const [statusReq, setStatusReq] = useState("");

    useEffect(() => {
        axios.get(`${ENDPOINT_BASE}/health`)
        .then(({ data }) => {
            setStatusReq(data.status)
            console.log(statusReq)
        })
    });

  
    
    return(
        <Wrapper>
            {statusReq != MESSAGE_OK && <AlertError />}
        </Wrapper>
    )
}

export { Home }