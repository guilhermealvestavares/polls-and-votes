import React, { useEffect, useState } from "react";
import { 
    Wrapper
} from "./SendEmail.style"
import { directivesApi } from '../../constants/directivesApi'
import axios from 'axios';


const { ENDPOINT_BASE, INITIAL_LIMIT_AND_OFFSET} = directivesApi

const SendEmail = () => {
    return (
        <Wrapper>
         
        </Wrapper>
    )
}


export { SendEmail }