import React, {Component} from 'reqact';

import PizzaImage from '../component/PizzaImage/PizzaImage';

class Pizza extends Component {
    render () {
        return (
            <div>
                <h1>Pizza</h1>
                <PizzaImage></PizzaImage>
            </div>
        );
    }
}

export default Pizza;