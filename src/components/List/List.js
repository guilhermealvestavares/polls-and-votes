import React, { useEffect, useState, useCallback } from "react";
import debounce from "lodash.debounce"
import { 
    Wrapper,
    SearchBar, 
    SearchButton, 
    WrapperSearch, 
    ListItem, 
    LabelListItem, 
    LoadMoreButton 
} from "./List.style"
import { directivesApi } from '../../constants/directivesApi'
import axios from 'axios';


const { ENDPOINT_BASE, INITIAL_LIMIT_AND_OFFSET} = directivesApi

const List = () => {
    const [questionsInfo, setQuestionsInfo] = useState([])
    const [filter, setFilter] = useState("") 
    const [limit, setLimit] = useState(INITIAL_LIMIT_AND_OFFSET)

    const getDataQuestionsApi = useCallback(() => {
        const paramsString = window.location.search;
        const searchParams = new URLSearchParams(paramsString);
        setFilter(searchParams.get('filter'))

        axios.get(`${ENDPOINT_BASE}/questions?limit=${limit}&offset=${limit}?filter=${filter}`)
        .then(({ data }) => {
            setQuestionsInfo(data)
        })
    }, [filter, setFilter, limit, setQuestionsInfo])

    useEffect(() => {
        getDataQuestionsApi()
    }, [getDataQuestionsApi, limit]);
   
    return (
        <Wrapper>
            <WrapperSearch>
                <SearchBar defaultValue={filter} onChange={debounce((event) => setFilter(event.target.value), 1000)} autoFocus/>
                <SearchButton onClick={getDataQuestionsApi}>Search</SearchButton>
            </WrapperSearch>

                {questionsInfo && 
                    questionsInfo.map(({question, id}, index) => {
                        return(
                            <ListItem to={`/questions/${id}`} key={`${question}${index}`}>
                                <LabelListItem>
                                {question}
                                </LabelListItem>
                            </ListItem>
                        )    
                    })
                }
                
            <LoadMoreButton onClick={() => setLimit(limit + 10)}>Load More</LoadMoreButton>
        </Wrapper>
    )
}


export { List }