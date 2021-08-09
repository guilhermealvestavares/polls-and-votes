import React, { useEffect, useState } from "react";
import { AlertError } from "../../components/AlertError"
import { List } from "../../components/List"
import { Wrapper } from "./Home.style"
import axios from 'axios';
import { directivesApi } from '../../constants/directivesApi'

const {ENDPOINT_BASE, MESSAGE_OK} = directivesApi
const Home = () => {
    const [statusReq, setStatusReq] = useState(MESSAGE_OK);

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