import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  margin: auto;
  padding:48px 72px;
  width: 100%;
  max-width: 640px;
  background-color: #f8f8f8;
`;

const Question = styled.p`
  font-size: 32px;
  text-align: center;
`;

const WrapperChoices = styled.div`
  width: 60%;
  display:flex;
  margin:0 auto;
  justify-content: space-between;

`

const Choices = styled.p`
  margin-top: 24px;
  font-size: 16px;
`
const Thumbnail = styled.img`
  display: block;
  margin: 0 auto;
`

const DatePublish = styled.p`
  text-align: center;
  font-size: 12px;
`
const ReturnButton = styled(Link)`
  padding: 24px 96px;
  display: block;
  margin: 24px auto;
  border: 0;
  color: #000000;
  text-align: center;
`


export { Wrapper, Question, Choices, Thumbnail, WrapperChoices, DatePublish, ReturnButton }