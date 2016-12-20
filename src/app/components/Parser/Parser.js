import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'
import CircularProgress from 'material-ui/CircularProgress'
import Snackbar from 'material-ui/Snackbar'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import TitleBar from '../TitleBar'
import $ from 'jquery'

class Parser extends React.Component {
    state = {
        attributes: [],
        datas: [],
        passwordOpenCallback: null,
        progress: false,
        inputPassword: "",
        inputPasswordErrorText: null,
        snackbarMessage: "",
        lastAppVersion: "",
    }

    componentDidMount() {
        this.loadStableAppVersion()
        console.log("Parser componentDidMount")
    }

    loadStableAppVersion = () => {
        $.ajax({
            url: "http://slowslipper.woobi.co.kr/carborn/status/",
            type: "GET",
        })
        .done(this.loadAppVersionDone).fail((xhr, msg) => {
            $.ajax({
                url: "http://slowslipper.woobi.co.kr/carborn/status/last/",
                type: "GET",
            })
            .done(this.loadAppVersionDone).fail((xhr, msg) => {
                this.setState({
                    snackbarMessage: "Fail to load last app version",
                })
            })
        })
    }

    loadAppVersionDone = (res) => {
        if(res.min_app_ver) {
            console.log(res.min_app_ver)
            this.setState({
                lastAppVersion: res.min_app_ver,
            })
        } else {
            this.setState({
                snackbarMessage: "Item has no app version",
            })
        }
    }

    importButtonDidSelect = () => {
        this.refs.inputFile.click()
    }

    deployButtonDidSelect = () => {
        this.checkPassword(() => {
            this.setState({
                progress: true,
            }, this.postData)
            // }, this.uploadDone)
            console.log(JSON.stringify(this.state.datas))
        })
    }

    postData = () => {
        $.ajax({
            url: "https://api.mlab.com/api/1/databases/carborn/collections/cars?apiKey=RVBlmzNJ6hMYAruIrDZtDfhUaKGKbbvQ",
            data: JSON.stringify({cars: this.state.datas}),
            type: "POST",
            contentType: "application/json",
        })
        .done(this.postDataDone)
        .fail(this.postDataFail)
    }

    postDataDone = (res) => {
        this.postMetadata(res._id.$oid)
        // console.log(res._id.$oid);
        // this.setState({
        //     progress: false,
        //     snackbarMessage: "Success to upload datas",
        //     datas: [],
        // })
    }

    postDataFail = (xhr, msg) => {
        this.setState({
            progress: false,
            snackbarMessage: "Fail to upload datas",
        })
    }

    postMetadata = (oid) => {
        const {
            lastAppVersion,
        } = this.state

        var data = {
            min_app_ver: lastAppVersion,
            db_obj_id: oid,
        }

        $.ajax({
            url: "http://slowslipper.woobi.co.kr/carborn/status/",
            data: JSON.stringify(data),
            type: "POST",
            contentType: "application/json",
        })
        .done(this.postMetadataDone)
        .fail(this.postMetadataFail)
    }

    postMetadataDone = (res) => {
        console.log(res.db_ver);
        this.setState({
            progress: false,
            snackbarMessage: "Success to deploy data (" + res.db_ver + ")",
            datas: [],
        })
    }

    postMetadataFail = (xhr, msg) => {
        this.setState({
            progress: false,
            snackbarMessage: "Fail to update metadata",
        })
    }

    checkPassword = (callback) => {
        this.setState({
            passwordOpenCallback: callback,
        }, () => {
            this.refs.passwordField.focus()
        })
    }

    handleCheckPassword = () => {
        const {
            inputPassword,
        } = this.state

        if(inputPassword == "ekRkfk5%") {
            this.setState({
                inputPassword: "",
            }, this.handleMatchPassword)
        } else {
            this.setState({
                inputPasswordErrorText: "Not match",
            }, () => {
                this.refs.passwordField.select()
            })
        }
    }

    handleClosePassword = () => {
        this.setState({
            passwordOpenCallback: null,
        })
    }

    handleMatchPassword = () => {
        if(typeof this.state.passwordOpenCallback == "function") {
            let callback = this.state.passwordOpenCallback
            this.setState({
                passwordOpenCallback: null,
            }, callback)
        } else {
            this.setState({
                passwordOpenCallback: null,
            })
        }
    }

    handlePasswordChange = (event) => {
        var newState = {
            inputPassword: event.target.value,
        }
        if(this.state.inputPasswordErrorText != null) {
            newState.inputPasswordErrorText = null
        }
        this.setState(newState)
    }

    handleKeyDown = (event) => {
        if(event.keyCode == 13) {
            this.handleCheckPassword()
        }
    }

    handleCloseSnackbar = () => {
        this.setState({
            snackbarMessage: "",
        })
    }

    handleAppVersionChange = (event) => {
        this.setState({
            lastAppVersion: event.target.value,
        })
    }

    importFileDidChange = (event) => {
        if(!this.browserSupportFileUpload()) {
            console.log("This File are not fully supported in this browser!")
        } else {
            var data = null
            var file = event.target.files[0]
            var reader = new FileReader()
            reader.readAsText(file)
            reader.onload = (event) => {
                var csvData = event.target.result
                this.parseCSVData(csvData)
            }
            reader.onerror = () => {
                console.log("Unable to read" + file.fileName)
            }
        }
    }

    parseCSVData(data) {
        let dataRows = data.split("\n")
        let datas = []
        const attributes = dataRows.shift().split(",")
        dataRows.map(model => {
            datas.push(this.makeHash(attributes, model.split(",")))
        })

        this.setState({
            attributes: attributes,
            datas: datas,
        })
    }

    makeHash(keyArray, valueArray) {
        let hash = {}
        keyArray.map((key, index) => {
            hash[key] = valueArray[index]
        })

        return hash
    }

    browserSupportFileUpload() {
        if(window.File && window.FileReader && window.FileList && window.Blob) {
            return true
        }
        return false
    }

    render() {
        const {
            number,
            increase,
        } = this.props

        const {
            lastAppVersion,
            attributes,
            datas,
            inputPassword,
            inputPasswordErrorText,
            passwordOpenCallback,
            progress,
            snackbarMessage,
        } = this.state

        const hasData = datas.length > 0
        const showSnackbar = !!(snackbarMessage.length)

        return (
            <div>
                <TitleBar title="Parser" backPath="#" />
                {progress ? (
                    <div style={{position: "absolute", left: "50%", top: "50%"}}>
                        <div style={{width: 100, textAlign: "center", margin: "-50px 0 0 -50px"}}>
                            <CircularProgress />
                            <div style={{marginTop: 20}}>Loading...</div>
                        </div>
                    </div>
                ) : (
            <div>
                <div style={{padding:20}}>
                    <RaisedButton label="Import CSV" onTouchTap={this.importButtonDidSelect} />
                    <input ref="inputFile" type="file" onChange={this.importFileDidChange} accept=".csv" style={{display: "none"}} />
                    {hasData ? (
                        <RaisedButton label="Apply to DEV Server" primary={true} onTouchTap={this.deployButtonDidSelect} style={{marginLeft: 10}} />
                    ) : null}
                </div>
                {hasData ? (
                    <Table
                        fixedHeader={false}
                        style={{width: "auto"}}
                        bodyStyle={{overflowX: "auto"}}
                    >
                        <TableHeader
                            displaySelectAll={false}
                            adjustForCheckbox={false}
                        >
                            <TableRow>
                                {attributes.map((model, colNumber) => (
                                    <TableHeaderColumn key={`h0-${colNumber}`}>{model}</TableHeaderColumn>
                                ))}
                            </TableRow>
                        </TableHeader>
                        <TableBody
                            displayRowCheckbox={false}
                        >
                            {datas.map((row, rowNumber) => (
                                <TableRow key={rowNumber}>
                                {Object.values(row).map((model, colNumber) => (
                                    <TableRowColumn key={`b${rowNumber}-${colNumber}`}>{model}</TableRowColumn>
                                ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                ) : null}
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
                    open={passwordOpenCallback != null}
                    onRequestClose={this.handleClosePassword}
                >
                    <TextField
                        ref="appVersionField"
                        hintText="App version of this data"
                        floatingLabelText="App version"
                        type="text"
                        value={lastAppVersion}
                        onChange={this.handleAppVersionChange}
                    />
                    <TextField
                        ref="passwordField"
                        hintText="Password for submit"
                        floatingLabelText="Password"
                        type="password"
                        value={inputPassword}
                        errorText={inputPasswordErrorText}
                        onChange={this.handlePasswordChange}
                        onKeyDown={this.handleKeyDown}
                    />
                </Dialog>
            </div>
                )}
                <Snackbar
                    open={showSnackbar}
                    message={snackbarMessage}
                    autoHideDuration={4000}
                    onRequestClose={this.handleCloseSnackbar}
                />
            </div>
        )
    }
}

export default Parser
