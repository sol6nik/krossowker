import React from "react";
import styles from './Profile.module.scss'
import { useLocation, useNavigate } from "react-router-dom";

function Profile() {

    const location = useLocation()
    const { user } = location.state

    return (
        <div className={styles.profile}>
            <h1>Личный кабинет</h1>

            <div className={styles.profile__data_cantainer}>
                <p style={{
                    color: '#fff'
                }}>
                    Имя:
                    {user.name} </p>

                <p style={{
                    color: '#fff'
                }}>
                    Номер телефона:
                    <span>{user.phone_num}</span>
                </p>

                <p style={{
                    color: '#fff'
                }}>
                    Почта:
                    {user.email} </p>
            </div>
        </div>
    )
}

export default Profile;