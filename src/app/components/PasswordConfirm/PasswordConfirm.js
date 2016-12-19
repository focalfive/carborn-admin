import React from "react"
import FlatButton from "material-ui/FlatButton"
import TextField from "material-ui/TextField"
import Dialog from "material-ui/Dialog"

class PasswordConfirm extends React.Component {

    state = {
        password: "",
        errorText: "",
    }

    componentWillReceiveProps(nextProps) {
        if(!this.props.open && nextProps.open) {
            setTimeout(() => {
                this.refs.passwordField.focus()
            }, 100)
        }
        console.log("PasswordConfirm component will receive props", nextProps)
    }

    handleCheckPassword = () => {
        const {
            password,
        } = this.state

        if(password == "ekRkfk5%") {
            this.setState({
                password: "",
            }, this.props.resolve)
        } else {
            this.setState({
                errorText: "Not match",
            }, () => {
                this.refs.passwordField.select()
            })
        }
    }

    handlePasswordChange = (event) => {
        var newState = {
            password: event.target.value,
        }
        if(this.state.errorText != null) {
            newState.errorText = null
        }
        this.setState(newState)
    }

    handleKeyDown = (event) => {
        if(event.keyCode == 13) {
            this.handleCheckPassword()
        }
    }

    render() {
        const {
            reject,
            open,
        } = this.props

        const {
            password,
            errorText,
        } = this.state

        return (
            <Dialog
                title="Insert password"
                contentStyle={{width: 304}}
                actions={[
                    <FlatButton
                        label="Submit"
                        primary={true}
                        onTouchTap={this.handleCheckPassword}
                    />]}
                modal={false}
                open={open}
                onRequestClose={reject}
            >
                <TextField
                    ref="passwordField"
                    hintText="Password for submit"
                    floatingLabelText="Password"
                    type="password"
                    value={password}
                    errorText={errorText}
                    onChange={this.handlePasswordChange}
                    onKeyDown={this.handleKeyDown}
                />
            </Dialog>
        )
    }
}

export default PasswordConfirm
