import React from "react";
import { ButtonRetry, LabelError, Wrapper, WrapperInfosError, WrapperTop, IconError } from "./AlertError.style"
import imgIconError from "../../assets/icons/icon-error.png"

const reloadPage = () => {
    window.location.reload()
}

const AlertError = () => (
 <Wrapper>
     <WrapperTop/>
     <WrapperInfosError>
    <IconError src={imgIconError}/>
     <LabelError>Error</LabelError>
     <ButtonRetry onClick={reloadPage}>Retry Action</ButtonRetry>
     </WrapperInfosError>
 </Wrapper>
);

export { AlertError }