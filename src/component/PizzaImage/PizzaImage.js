import React from 'react';

import classes from './PizzaImage.css';
import PizzaImage from '../../assets/pizza.jpg'

const pizzaImage = (props) => (
    <div className={classes.PizzaImage}>
        <img scr={PizzaImage} className={classes.PizzaImage}></img>
    </div>
)

export default pizzaImage;