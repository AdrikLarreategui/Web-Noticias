import { Link } from 'react-router-dom'

export  const Article = (props) => {
    return (
        <>
        <h5>{ props.data.title }</h5>
        <p className='article-text'>{ props.data.abstract }</p>
        <Link to={ props.data.url }>{ props.data.url }</Link>
        </>
    )
}