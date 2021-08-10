import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding:24px;
  width: 320px;
  background-color: #f8f8f8;
  border-radius: 12px;
  margin: 0 auto;
`

const EmailField = styled.input`
margin-right: 24px;

`

const SendButton = styled.button`
  border:0;
`

const StatusSent = styled.p`
  font-size: 16px;
  text-align: center;
`

export { Wrapper, EmailField, SendButton, StatusSent }