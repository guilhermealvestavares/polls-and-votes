import React, { useEffect, useState } from "react";
import { AlertError } from "../AlertError"
import { List } from "../List"
import { Wrapper } from "./Home.style"
import axios from 'axios';
import { directivesApi } from '../../constants/directivesApi'

const {ENDPOINT_BASE, MESSAGE_OK} = directivesApi
const Home = () => {
    const [statusReq, setStatusReq] = useState("");

    const getHealthApi = () => {
        axios.get(`${ENDPOINT_BASE}/health`)
        .then(({ data }) => {
            setStatusReq(data.status)
        })
    }

    useEffect(() => {
        getHealthApi()
    });

    return(
        <Wrapper>
            {statusReq !== MESSAGE_OK && <AlertError />}
            {statusReq === MESSAGE_OK && <List/>}
            
        </Wrapper>
    )
}

export { Home }