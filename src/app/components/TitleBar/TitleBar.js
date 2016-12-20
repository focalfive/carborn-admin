import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import HardwareKeyboardBackspace from 'material-ui/svg-icons/hardware/keyboard-backspace'
import IconButton from 'material-ui/IconButton'

const styles = {
    root: {
        paddingBottom: 8,
        borderBottom: "1px solid #ccc",
        color: "#666",
    },
    button: {
        verticalAlign: "middle",
    },
    h2: {
        display: "inline-block",
        overflow: "hidden",
        height: 24,
        padding: "12px 0",
        lineHeight: "27px",
        verticalAlign: "middle",
    },
}

class TitleBar extends React.Component {

    render() {
        const {
            title,
            backPath,
        } = this.props

        return (
            <div style={styles.root}>
                {backPath ? (
                    <IconButton touch={true} style={styles.button} onTouchTap={() => {location.href = backPath}}>
                        <HardwareKeyboardBackspace color="#666" />
                    </IconButton>
                ) : null}
                <h2 style={styles.h2}>{title}</h2>
            </div>
        )
    }
}

export default TitleBar
