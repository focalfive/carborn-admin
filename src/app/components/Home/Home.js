import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import { connect } from 'react-redux'
import { increase, updateTitle } from '../../actions'
import { browserHistory } from 'react-router'
import TitleBar from '../TitleBar'

class Home extends React.Component {

    navigateToParser() {
        location.href = '#/parser'
    }

    navigateToDeployer() {
        location.href = '#/deployer'
    }

    render() {
        const {
            number,
            increase,
        } = this.props

        return (
            <div>
                <TitleBar title="Home" />
                <div style={{padding:20}}>
                    <RaisedButton label="Parser" onTouchTap={this.navigateToParser} style={{marginRight: 20}} />
                    <RaisedButton label="Deployer" onTouchTap={this.navigateToDeployer} />
                </div>
            </div>
        )
    }
}

export default connect(
    state => {
        return { number: state.count.number }
    },
    {
        increase,
        updateTitle,
    }
)(Home)
