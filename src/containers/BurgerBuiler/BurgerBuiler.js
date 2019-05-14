import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger'
import Aux from '../../hoc/Aux'

class BurgerBuiler extends Component {
    render() {
        return (
            <Aux>
                < Burger />
                <div>BuilControls</div>
                <div>Modal</div>
            </Aux>
        )
    }
}
export default BurgerBuiler