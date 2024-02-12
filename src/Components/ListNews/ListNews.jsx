import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Article } from '../Article/Article'
import { GlobalContext } from '../../Context/GlobalState'
import './ListNews.styles.scss'

const ListNews = () => {
    const { articles, getArticles } = useContext(GlobalContext)
    const localData = JSON.parse(localStorage.getItem('data'))
    let myArts

    useEffect(() => {
        getArticles()
    }, [])

    const article = articles.map((article) => {
        return (
            <div className='article-container'>
                <Article key={article.id} data={article}/>
            </div>
        )
    })

    if(localData === null) {
        myArts = () => {
            return(
                <>
                </>
            )
        }
    } else {
        myArts = localData.map((data) => {
            { data.url = 'http://' + data.url }
            return(
                <div className='article-container'>
                <h5 key={ data.name }>{ data.name }</h5>
                <p className='article-text'>{ data.info }</p>
                <Link to={ data.url }>{ data.url }</Link>
                </div>
            )
        })
    }

    return (
        <>
        { article }
        { myArts }
        </>
    )
}

export default ListNews


