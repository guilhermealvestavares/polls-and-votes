import React, { useEffect, useState } from "react";
import { Wrapper, SearchBar, SearchButton, WrapperSearch, ListItem, LabelListItem } from "./List.style"
import { directivesApi } from '../../constants/directivesApi'
import axios from 'axios';

const { ENDPOINT_BASE } = directivesApi


const List = () => {

    const [questionsInfo, setQuestionsInfo] = useState([])    
    const [filter, setFilter] = useState("") 

    const getDataQuestionsApi = () => {
        const paramsString = window.location.search;
        const searchParams = new URLSearchParams(paramsString);
        setFilter(searchParams.get('filter'))

        axios.get(`${ENDPOINT_BASE}/questions?limit=10&offset=10?filter=${filter}`)
        .then(({ data }) => {
            setQuestionsInfo(data)
        })
    }

    useEffect(() => {
        getDataQuestionsApi()
    },[]);
   
    return(
        <Wrapper>
            <WrapperSearch>
            <SearchBar defaultValue={filter} autoFocus/>
            <SearchButton>Search</SearchButton>
            </WrapperSearch>
            {questionsInfo && 
                questionsInfo.map(({question}, index) => {
                    return(
                        <ListItem key={`${question}${index}`}>
                            <LabelListItem>
                            {question}
                            </LabelListItem>
                        </ListItem>
                    )    
                })
            }
            
                
            
        </Wrapper>
    )
}

export { List }