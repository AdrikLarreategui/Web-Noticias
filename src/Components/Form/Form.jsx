import '/Form.styles.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const [ data, setData ] = useState ({
        name:'',
        info: '',
        url: ''
    })
    let navigate = useNavigate()
    let localData = JSON.parse(localStorage.getItem('data'))

    const handleInputChange = (event) => {
        setData({...data, [ event.target.name ]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('data' + localData)

        if(localData !== null){
            localData.push({
                name: data.name,
                info: data.info,
                url: data.url
            })
        } else {
            localData = [{
                name: data.name,
                info: data.info,
                url: data.url
            }]
        }

        localStorage.setItem('data', JSON.stringify(localData))
        console.log({ message: 'Data succesfully stored: ' },
        { name: data.name },
        { info: data.info },
        { url: data.url })
        setTimeout(() => { navigate('/list') }, 2000)
    }

    return(
        <>
        <form className='form' onSubmit={ handleSubmit }>
            <div className='form__data'>
                <input className='form__data__box' placeholder='title' type='text' name='name' value={ data.name } onChange={ handleInputChange }></input>
                <textarea className='form__data__box' name="info" placeholder="text" rows="10" value={ data.info } onChange={ handleInputChange }></textarea>
                <input className='form__data_box' name='url' placeholder='url' type='text' value={ data.url } onChange={ handleInputChange }></input>
            </div>
            <button type='submit'>Send</button>
        </form>
        </>
    )
}

export default Form