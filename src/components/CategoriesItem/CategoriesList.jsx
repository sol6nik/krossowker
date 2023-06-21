import React, { useState, useEffect } from "react";
import styles from './CategoriesItem.module.scss'

import FilterIcon from '../../assets/icons/filter.svg'
import axios from "axios";
import CheckboxItem from "./CheckboxItem";

function CategoriesList() {
    const [data, setData] = useState([])
    const [checkboxes, setCheckboxes] = useState({});
    const [open, setOpen] = useState(true)

    const handleToggleCategories = () => {
        setOpen(!open); // Инвертируем состояние открытия/сворачивания
    };

    // Функция для обновления состояния Checkbox по id
    const handleCheckboxChange = (id) => {
        setCheckboxes((prevState) => ({
            ...prevState,
            [id]: !prevState[id] // Инвертируем текущее состояние Checkbox
        }));
    };

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await axios.get('http://localhost:3001/categories')
                setData(res.data)
            } catch (e) {
                console.log('Error: ', e)
            }
        };
        fetchCategories()
    }, [])


    return (
        <div className={styles.categoriesItem}>
            <div className={styles.categoriesItem_header}>
                <div className={styles.categoriesItem_cont}>
                    <img src={FilterIcon} alt="filter-icon" />
                    <h1 className={styles.categoriesItem_title}>Фильтр</h1>
                </div>

                <button onClick={handleToggleCategories} className={styles.categoriesItem_btn}>
                    {open ? 'Свернуть' : 'Развернуть'}
                </button>
            </div>
            {open && (
                <div>
                    {data.map(item => (
                        <CheckboxItem
                            key={item.id}
                            label={item.name}
                            checked={checkboxes[item.id]}
                            onChange={() => handleCheckboxChange(item.id)}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default CategoriesList;