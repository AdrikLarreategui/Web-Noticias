import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
//import { axios } from 'axios'
import { Article } from '../Article/Article'
import { GlobalContext } from '../../Context/GlobalState'
//import Apikey from '../'

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

//     const getArticles = async () => {
//         try {
//             const response = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=ETjeMwR6efCFlBnK7LiGKKnOUkwcPV2g`)
//             setArticles(response.data.results)
//         } catch (error) {
//             console.error (error)
//         }
//     }
// // https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=yourkey
//     useEffect(() => {
//         getArticles()
//     }, [])

//     return(
//         <div>
//             <>
//             {articles.map((article, index) => (
//                 <p key={index}>{article.title}
//                 <p>{article.abstract}</p>
//                 <Link to= {article.url}>{article.url}</Link>
//                 </p>        
//             ))}
//             </>
//         </div>
//     )


