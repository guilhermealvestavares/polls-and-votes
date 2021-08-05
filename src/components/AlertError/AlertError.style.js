import styled from "styled-components";

const Wrapper = styled.div`
  margin: auto;
  padding-bottom: 24px;
  width: 310px;
  background-color: #f8f8f8;
  border-radius: 12px;
`;


const WrapperTop = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 12px 12px 0 0;
  background-color: #e74c3c;
`


const WrapperInfosError = styled.div`
  padding: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LabelError = styled.p`
  font-size: 32px;
  color: #e74c3c;
  margin: 16px 0;
`

const ButtonRetry = styled.button`
  width: 244px;
  padding: 24px 0;
  text-align: center;
  border-radius: 4px;
  border: 0;
  background-color: #e74c3c;
  margin: 16px 0;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
  color: #ffffff;
`

const IconError = styled.img`
  width: 150px;
`





export { Wrapper, WrapperTop, WrapperInfosError, LabelError, ButtonRetry, IconError}