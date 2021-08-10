import React, { useEffect, useState } from "react";
import { AlertError } from "../../components/AlertError"
import { List } from "../../components/List"
import { directivesApi } from '../../constants/directivesApi'
import { Wrapper } from "./Home.style"
import { Offline as OfflineMessage} from "../../components/Offline"
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
                <OfflineMessage>You is offline</OfflineMessage>
            </Offline>
        </>
    )
}

export { Home }