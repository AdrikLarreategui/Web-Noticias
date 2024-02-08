import '/ListNews.styles.scss'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { axios } from 'axios'
import Apikey from '../'

const ListNews = () => {
    const [ articles, setArticles ] = useState([])

    const getArticles = async () => {
        try {
            const response = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=ETjeMwR6efCFlBnK7LiGKKnOUkwcPV2g`)
            setArticles(response.data.results)
        } catch (error) {
            console.error (error)
        }
    }
// https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=yourkey
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

