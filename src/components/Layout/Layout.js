import React from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.css';

const layout = (props) => (
    <Aux>
        <div> toolbar, slideDrawer, Backdrop</div>
        <main className= {classes.Style}>
            {props.children}
        </main>
    </Aux>

);
export default layout;