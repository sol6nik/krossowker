import React, {useState, useEffect} from "react";
import styles from './Geo.module.scss'
import axios from 'axios'

import GeoIcon from '../../assets/icons/geo-tag.svg'

function Geo() {
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');


    useEffect(() => {
        axios.get('http://localhost:3001/cities')
            .then(response => {
                setCities(response.data);
            })
            .catch(error => {
                console.error('Ошибка при получении городов:', error);
            });
    }, []);

    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
    };

    const phoneNumber = '+7 (495) 777 77-77';

    return (
        <div className={styles.geo}>
            <div className={styles.geo__container}>
                <img src={GeoIcon} alt="GeoIcon"/>
                <select id="city" value={selectedCity} onChange={handleCityChange} className={styles.geo_country}>
                    <option value="">Выберите город</option>
                    {cities.map(city => (
                        <option key={city.id} value={city.name}>{city.name}</option>
                    ))}
                </select>
            </div>

            <a href={`tel:${phoneNumber}`} className={styles.geo_phone}>{phoneNumber}</a>
        </div>
    )
}

export default Geo;