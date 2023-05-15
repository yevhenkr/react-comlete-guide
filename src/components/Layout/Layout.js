import React, { Component } from "react";

import Aux from '../../hoc/Auxilary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
    state = {
        showSidewDrawer: true
    }
    sideDrawerClosedHandler = () => {
        this.setState({ showSidewDrawer: false });
    }

    render() {
        return (
            <Aux>
                <Toolbar />
                <SideDrawer
                    open={this.state.showSidewDrawer}
                    closed={this.sideDrawerClosedHandler}
                />
                <main className={classes.Content}
                >
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;