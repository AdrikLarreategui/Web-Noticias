import { Link } from 'react-router-dom'

export const myArticle = (props) => {
    {console.log(`myArticle: ` + props.data.name)}
    return(
        <>
        <Link to={props.data.url}>{props.data.name}</Link>
        <p className='article-text'>{props.data.info}</p>
        </>
    )
}