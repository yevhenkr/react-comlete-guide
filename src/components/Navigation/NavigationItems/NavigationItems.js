import React from 'react';

import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItem = (props) => (
    <ul className={classes.NavigationItems}>
       <NavigationItem link="/" active={true}>Burger Builder</NavigationItem>
       <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);

export default navigationItem;