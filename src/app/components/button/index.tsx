import Styles from './styles.module.scss';
import React from 'react';


interface button {
    label: string;
}

const Button: React.FC<button> = ({ label }) => {
    //const styleClass = () => 
    return (
        <>
            <button className={Styles.btn}>
                {label}
            </button>
        </>
    );
};

export default Button;