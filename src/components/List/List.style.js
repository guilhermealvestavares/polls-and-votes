import styled from "styled-components";
import { Link } from "react-router-dom";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding:24px;
  width: 310px;
  background-color: #f8f8f8;
  border-radius: 12px;
`;

const SearchBar = styled.input`
  width: 100%;
  height: 24px;
  margin-right: 24px;
`

const SearchButton = styled.button`
  border: 0;
  cursor: pointer;
`

const WrapperSearch = styled.div`
  width: 100%;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
`

const ListItem = styled(Link)`
  width: 100%;
  background-color: #ffffff;
  padding: 4px 8px;
  margin: 4px;
  text-decoration: none;
  color: #000000;
`

const LabelListItem = styled.p`
  font-size: 16px;
`
const LoadMoreButton = styled.button`
  width: 100%;
  border: 0;
  padding: 24px 0;
  margin-top: 32px;
  cursor: pointer;
`

export { Wrapper, SearchBar,SearchButton, WrapperSearch,ListItem, LabelListItem, LoadMoreButton }