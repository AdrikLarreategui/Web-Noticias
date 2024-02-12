import './Form.styles.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

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
        if(data.name && data.info && data.url){
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
          console.log({message: `data stored successfully: `}, {name: data.name,
          email: data.info}, {url: data.url})
          setTimeout(() => {navigate('/list')}, 2000)
        }
      }

      const Alert = () => {
        if(data.name.length < 1 || !data.info || !data.url) {
            Swal.fire({
                title: 'Error!',
                text: 'Rellena todos los campos!',
                confirmationButtonText: 'Aceptar'
            })
        }
      }
    
    return(
        <>
        <form className='form' onSubmit={ handleSubmit }>
            <div className='form__data'>
                <input className='form__data__box' placeholder='title' type='text' name='name' value={ data.name } onChange={ handleInputChange }></input>
                <textarea className='form__data__box' name="info" placeholder="text" rows="10" value={ data.info } onChange={ handleInputChange }></textarea>
                <input className='form__data_box' name='url' placeholder='url' type='text' value={ data.url } onChange={ handleInputChange }></input>
            </div>
            <button type='submit' onClick={ Alert }>Send</button>
        </form>
        </>
    )
}

export default Form