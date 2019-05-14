import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

import classes from './Burger.css';

const burger = () => {
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread_top' />
            <BurgerIngredient type='meat' />
            <BurgerIngredient type='cheese' />
            <BurgerIngredient type='salad' />
            <BurgerIngredient type='bacon' />
            <BurgerIngredient type='bread_bottom' />
        </div>
    )

}
export default burger