import React, { useEffect, useState } from "react";
import { AlertError } from "../../components/AlertError"
import { List } from "../../components/List"
import { directivesApi } from '../../constants/directivesApi'
import { Wrapper } from "./Home.style"
import axios from 'axios';
import { Offline, Online } from "react-detect-offline";

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
        
    },[]);

    return(
        <>  
            <Online>
                <Wrapper>
                    {statusReq !== MESSAGE_OK && <AlertError />}
                    {statusReq === MESSAGE_OK && <List/>}
                </Wrapper>
            </Online>
            
            <Offline>
                <p>You is offline</p>
            </Offline>
        </>
    )
}

export { Home }