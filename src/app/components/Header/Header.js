import React from 'react'
import AppBar from 'material-ui/AppBar'
import { connect } from 'react-redux'
import { toggleNavigation } from '../../actions'

class Header extends React.Component {

    render() {
        const {
            navigationOpen,
            title,
            toggleNavigation,
        } = this.props

        return (
            <AppBar
                title={title}
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                onLeftIconButtonTouchTap={() => {
                    console.log("Header - onLeftIconButtonTouchTap", navigationOpen)
                    toggleNavigation(!navigationOpen)
                }}
            />
        )
    }
}

export default connect(
    state => {
        return { navigationOpen: state.navigation.open }
    },
    { toggleNavigation }
)(Header)
