import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import { connect } from 'react-redux'
import { increase } from '../../actions'

class Home extends React.Component {

    render() {
        const {
            number,
            increase
        } = this.props

        return (
            <div>
                <h2>Carborn admin - Home</h2>
                Count: {number}
                <br />
                <RaisedButton label="Increase count" onTouchTap={() => increase(1)} />
            </div>
        )
    }
}

export default connect(
    state => {
        return { number: state.count.number }
    },
    { increase }
)(Home)
