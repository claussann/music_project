import 'bootstrap/dist/css/bootstrap.min.css'
import {useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Button from './Bottone'




function Input() {
    
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")
    
    const handleUserChange = (event) => {
        setUser(event.target.value)
    }
    const handlePassChange = (event) => {
        setPass(event.target.value)
    }
    const navigate = useNavigate()

    const logIn = () => {
    if (user === "user" && pass === "password") {
        navigate('/Home')
    } else {
        alert('utente e pass errati')
    }
    }
    return (
        <>
            <form>
                <div className='form-group p-1 border border-danger mb-2 p-2' id="form">
                    <label style={{color:'lightgray'}} htmlFor="userName">Username: </label>
                    <input type="text" 
                    id="userName" 
                    onChange={handleUserChange} 
                    value={user} 
                    placeholder='insersci nome utente "user"' 
                    className='form-control' />
                    <label style={{color:'lightgray'}} htmlFor="password">Password: </label>
                    <input type="password" 
                    id="password" 
                    onChange={handlePassChange} 
                    value={pass} 
                    placeholder='inserisci password "password"' 
                    className='form-control' />
                </div>
            </form>
            <div className='col-12 d-flex justify-content-center'>
            <Button onClick={logIn}>Invia</Button>
            </div>
        </>
    )
}

export default Input