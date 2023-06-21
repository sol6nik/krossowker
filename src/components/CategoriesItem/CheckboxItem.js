import React from 'react';
import styles from './CategoriesItem.module.scss'

const CheckboxItem = ({label, checked, onChange}) => {

    return (
        <label className={styles.categoriesItem_checkboxes}>
            <input type="checkbox" checked={checked} onChange={onChange} className={styles.categoriesItem_checkboxes_checked}/>
            {label}
        </label>
    );
};

export default CheckboxItem;