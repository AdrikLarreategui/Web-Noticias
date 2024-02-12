import { Link } from 'react-router-dom'
import './Header.styles.scss'

const Header = () => {
    return (
        <nav className='header'>
            <>
            <span><Link className='header-link' to='/'>Home</Link></span>
            <span><Link className='header-link' to='/form'>Subir noticias</Link></span>
            <span><Link className='header-link' to='/list'>Géneros</Link></span>
            </>
        </nav>
    )
}

export default Header