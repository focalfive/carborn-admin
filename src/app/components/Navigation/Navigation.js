import React from 'react'
import { Link } from 'react-router'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import { connect } from 'react-redux'
import { toggleNavigation } from '../../actions'

class Navigation extends React.Component {
    menuDidSelect = (a, b) => {
        this.props.toggleNavigation(false)
    }

    render() {
        const {
            navigationOpen,
            toggleNavigation
        } = this.props

        return (
            <Drawer
                docked={false}
                open={navigationOpen}
                onRequestChange={(open) => toggleNavigation(open)}
                on
            >
                <MenuItem onTouchTap={this.menuDidSelect} href="#/">Home</MenuItem>
                <MenuItem onTouchTap={this.menuDidSelect} href="#/parser">Parser</MenuItem>
                <MenuItem onTouchTap={this.menuDidSelect} href="#/deployer">Deployer</MenuItem>
            </Drawer>
        )
    }
}

export default connect(
    state => {
        return { navigationOpen: state.navigation.open }
    },
    { toggleNavigation }
)(Navigation)
