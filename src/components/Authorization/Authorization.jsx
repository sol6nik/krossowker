import React, { useState } from "react";
import styles from './Authorization.module.scss'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'


function Authorization() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLogged, setIsLogged] = useState(false)

    const navigate = useNavigate()

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()


        axios
            .get('http://localhost:3001/users')
            .then(res => {
                const users = res.data
                users.map(user => {
                    if (user.email === email && user.password === password) {
                        setIsLogged(true)
                        console.log('Access', user)
                        navigate('/profile', { state: { user } })
                    }
                })
            })
            .catch(err => {
                console.error('Access Denied: ', err)
            })
    }

    return (
        <div className={styles.authorization}>
            <h1 className={styles.authorization_header}>Авторизация</h1>

            <form onSubmit={handleSubmit}>
                <div className={styles.authorization__inputs_container}>
                    <input className={styles.authorization_emailInput}
                        type="email"
                        onChange={handleEmail}
                        value={email}
                        placeholder='Email/номер телефона'
                    />

                    <input
                        type="password"
                        onChange={handlePassword}
                        value={password}
                        placeholder='Пароль'
                        className={styles.authorization_passwordInput}
                    />
                </div>

                <div className={styles.authorization__btn_container}>
                    <button className={styles.authorization_btnAuth}>Вход</button>
                    <button className={styles.authorization_btnReg}>Еще нет аккаунта?</button>
                </div>
            </form>
        </div>
    )
}

export default Authorization;