import '/Home.styles.scsss'

const Home = () => {
    return (
        <div className='Home'>
            <h1>Noticias del Puerto Viejo</h1>
            <h2>El diario del barrio</h2>
            <>
            <p>Las fiestas serán del 9 al 12 de agosto<span className='home__list'></span></p>
            <p>El tiempo anormal atrae delfines a nuestra playa<span className='home__list'></span></p>
            <p>Los carnavales se celebrarán la semana que viene<span className='home__list'></span></p>
            <p>Presencia de punto morado durante los carnavales<span className='home_list'></span></p>
            </>
        </div>
    )
}

export default Home