import React from 'react'
import { Link } from 'react-router'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { connect } from 'react-redux'
import { toggleNavigation } from '../../actions'

class Navigation extends React.Component {

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
            >
                <MenuItem>Menu Item</MenuItem>
                <MenuItem>Menu Item 2</MenuItem>
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
