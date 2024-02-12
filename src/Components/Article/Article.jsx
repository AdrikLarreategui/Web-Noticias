import { Link } from 'react-router-dom'
import './Article.styles.scss'

export  const Article = (props) => {
    return (
        <div className='article'>
        <Link to={ props.data.url }>{ props.data.title }</Link>
        <p className='article-text'>{ props.data.abstract }</p>
        </div>
    )
}