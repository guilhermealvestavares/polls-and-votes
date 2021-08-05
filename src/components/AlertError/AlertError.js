import React, { useRef } from "react";
import { ButtonRetry, LabelError, Wrapper, WrapperInfosError, WrapperTop, IconError } from "./AlertError.style"
import imgIconError from "../../assets/icons/icon-error.png"

const AlertError = () => (
 <Wrapper>
     <WrapperTop/>
     <WrapperInfosError>
    <IconError src={imgIconError}/>
     <LabelError>Error</LabelError>
     <ButtonRetry>Retry Action</ButtonRetry>
     </WrapperInfosError>
 </Wrapper>
);

export { AlertError }