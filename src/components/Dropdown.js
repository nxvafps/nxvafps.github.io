import React, { useState, useEffect } from 'react';
import styles from '../styles/Dropdown.module.scss'

const Dropdown = ({ input, placeholder }) => {
    const [filter, setFilter] = useState('');
    const [selectedItem, setSelectedItem] = useState(null);
    const [showList, setShowList] = useState(false);

    const handleInputChange = (e) => {
        setFilter(e.target.value.toLowerCase());
        setShowList(true);
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setShowList(false);
    };

    const filteredItem = input.filter(item => item.name.toLowerCase().includes(filter));

    return (
        <section className={styles.select}>
            <section className={styles.search}>
                {selectedItem ? (
                    <p className={styles.text} onClick={() => setShowList(true)}>{selectedItem.name}</p>
                ) : (
                    <input
                        className={styles.input}
                        type="text"
                        placeholder={placeholder}
                        value={filter}
                        onChange={handleInputChange}
                        onFocus={() => setShowList(true)}
                    />
                )}
            </section>
            {showList && (
                <ul className={styles.list}>
                    {filteredItems.map((item, index) => (
                        <li className={styles.listItem} key={index} onClick={() => handleMapClick(item)}>
                            {item.name}
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
};

export default MapSelect;
