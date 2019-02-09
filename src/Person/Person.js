import React from 'react';
import Radium from 'radium';
import styles from './Person.module.css';

const person = ( props ) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }
    return (
        <div className={styles.Person} style={style}>
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
};

export default Radium(person);