import axios from 'axios';
import AppReducer from '../Context/AppReducer'
import { createContext, useReducer } from 'react'
import Apikey from '../ApiKey/Apikey'

const initialState = {
    articles: []
}

export const GlobalProvider = ({ children }) => {
    const [state, dispatch ] = useReducer(AppReducer, initialState)

    const getArticles = async () => {
        const response = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=ETjeMwR6efCFlBnK7LiGKKnOUkwcPV2g`)
            dispatch({
                type: 'GET_ARTICLES',
                payload: response.data.results
            })    
    }  

    return(
        <GlobalContext.Provider
            value = {{
                articles: state. articles,
                getArticles
            }}
            > { children }
        </GlobalContext.Provider>
    )
}

export const GlobalContext = createContext(initialState)

