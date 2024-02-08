import '/ListNews.styles.scss'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { axios } from 'axios'
import Apikey from '../ApiKey/ApiKey'

const ListNews = () => {
    const [ articles, setArticles ] = useState([])

    const getArticles = async () => {
        try {
            const response = await axios.get(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${ApiKey.key}`)
            setArticles(response.data.results)
        } catch (error) {
            console.error (error)
        }
    }

    useEffect(() => {
        getArticles()
    }, [])

    return(
        <div>
            <>
            {articles.map((article, index) => (
                <p key={index}>{article.title}
                <p>{article.abstract}</p>
                <Link to= {article.url}>{article.url}</Link>
                </p>        
            ))}
            </>
        </div>
    )
}

export default ListNews