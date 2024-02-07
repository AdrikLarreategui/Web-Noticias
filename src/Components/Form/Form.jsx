import '/Form.styles.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const [ data, setData ] = useState ({
        name:'',
        info: '',
    })
    let navigate = useNavigate()

    const handleInputChange = (event) => {
        setData({...data, [ event.target.name ]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        localStorage.setItem('data', JSON.stringify({
            name: data.name,
            info: data.info
        }))
        console.log({ message: 'Data succesfully stored: ' },
        {name: data.name},
        {info: data.info})
        setTimeout(() => { navigate('/') }, 2000)
    }

    return(
        <>
        <form className='form' onSubmit={handleSubmit}>
            <div className='form__data'>
                <input className='form__data__box' placeholder='title' type='text' name='name' value={ data.name } onChange={ handleInputChange }></input>
                <textarea className='form__data__box' name="info" placeholder="text" cols="30" rows="10" value={ data.info } onChange={ handleInputChange }></textarea>
            </div>
            <button type='submit'>Send</button>
        </form>
        </>
    )
}

export default Form