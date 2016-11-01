import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from './Header'
import Navigation from './Navigation'
import * as actions from '../actions'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const muiTheme = getMuiTheme();

class App extends Component {

    static propTypes = {
        children: PropTypes.node,
    }

    render() {
        const {
            children,
        } = this.props

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <Header />
                    <Navigation />
                    <div>
                        {children}
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

function mapStateToProps(state) {
    return {
        logMessage: state.logMessage
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
