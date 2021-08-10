import React, {useState, useEffect} from "react";
import { 
    Wrapper,
    Question,
    Choices,
    Thumbnail,
    WrapperChoices,
    DatePublish,
    ReturnButton
} from "./PageItem.style"
import axios from 'axios'
import { directivesApi } from '../../constants/directivesApi'
import { SendEmail } from "../../components/SendEmail"

import {
    useParams
} from "react-router-dom";

const { ENDPOINT_BASE } = directivesApi

const PageItem = () => {
    let { id } = useParams();

    const [questionInfo, setQuestionInfo] = useState([])  

    const getDataQuestionsById = () => {
        axios.get(`${ENDPOINT_BASE}/questions/${id}`)
        .then(({ data }) => {
            setQuestionInfo(data)
        })
    }

    useEffect(() => {
        getDataQuestionsById()
    }, []);

    const humanizeDate = timestamp => {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString/
        if (!timestamp) return ''

        return new Date(timestamp).toLocaleDateString()
    }

    return (
        <Wrapper>
            {questionInfo &&
                <>  
                    <Question>{questionInfo.question}</Question>
                        {questionInfo.choices?.map(({choice,votes, id}, index) => {  
                            return (
                                <WrapperChoices key={`${choice}${votes}${id}`}> 
                                    <Choices>{choice}</Choices>
                                    <Choices>{votes} votes</Choices>
                                </WrapperChoices>
                            )
                        })
                        }
                    <Thumbnail src={questionInfo.image_url}/>
                    <DatePublish>{humanizeDate(questionInfo.published_at)}</DatePublish>
                </>
            }
            <ReturnButton to={`/`}>Return to List</ReturnButton>

            <SendEmail>

            </SendEmail>
        </Wrapper>
    )
}

export { PageItem }