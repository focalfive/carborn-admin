import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'
import CircularProgress from 'material-ui/CircularProgress'
import Snackbar from 'material-ui/Snackbar'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import PasswordConfirm from '../PasswordConfirm'
import $ from 'jquery'

class Deployer extends React.Component {

    state = {
        snackbarMessage: "",
        versions: [],
        deployTarget: null,
        deleteTarget: null,
    }

    componentDidMount() {
        this.loadVersionList()
    }

    loadVersionList() {
        $.ajax({
            url: "http://slowslipper.woobi.co.kr/carborn/status/all/",
            type: "GET",
            contentType: "application/json",
        })
        .done(this.loadVersionListDone)
        .fail(this.loadVersionListFail)
    }

    loadVersionListDone = (res) => {
        this.setStateAndShowSnackbar({
            versions: res,
        }, "Success to load!")
    }

    loadVersionListFail = (xhr, msg) => {
        this.showSnackbar("Fail to load")
    }

    setStateAndShowSnackbar = (state, msg) => {
        state.snackbarMessage = msg
        this.setState(state)
    }

    showSnackbar = (msg) => {
        this.setState({
            snackbarMessage: msg,
        })
    }

    handleCloseSnackbar = () => {
        this.setState({
            snackbarMessage: "",
        })
    }

    handleDeploy(rowIndex) {
        this.setState({
            deployTarget: rowIndex,
        })
    }

    handleMatchPasswordDeployDialog = () => {
        let versionItem = this.state.versions[this.state.deployTarget]
        console.log("Deploy", versionItem)
        $.ajax({
            url: "http://slowslipper.woobi.co.kr/carborn/status/cache/id/" + versionItem.id,
            type: "POST",
            contentType: "application/json",
        })
        .done(this.makeCacheDone)
        .fail(this.makeCacheFail)
    }

    makeCacheDone = (res) => {
        this.setStateAndShowSnackbar({
            deployTarget: null,
        }, "Success to live!")
    }

    makeCacheFail = (xhr, msg) => {
        this.setStateAndShowSnackbar({
            deployTarget: null,
        }, "Fail to live")
    }

    handleClosePasswordDeployDialog = () => {
        this.setState({
            deployTarget: null,
        })
    }

    handleDelete(rowIndex) {
        this.setState({
            deleteTarget: rowIndex,
        })
    }

    handleMatchPasswordDeleteDialog = () => {
        let versionItem = this.state.versions[this.state.deleteTarget]
        console.log("Delete", versionItem)
        $.ajax({
            url: "http://slowslipper.woobi.co.kr/carborn/status/delete/id/" + versionItem.id,
            type: "POST",
            contentType: "application/json",
        })
        .done(this.deleteItemDone)
        .fail(this.deleteItemFail)
    }

    deleteItemDone = (res) => {
        var versions = this.state.versions
        versions.splice(this.state.deleteTarget, 1)
        this.setStateAndShowSnackbar({
            deleteTarget: null,
            versions: versions,
        }, "Success to delete!")
    }

    deleteItemFail = (xhr, msg) => {
        this.setStateAndShowSnackbar({
            deleteTarget: null,
        }, "Fail to delete")
    }

    handleClosePasswordDeleteDialog = () => {
        this.setState({
            deleteTarget: null,
        })
    }

    render() {
        const {
            snackbarMessage,
            versions,
            deployTarget,
            deleteTarget,
        } = this.state

        const hasData = versions.length > 0
        const showSnackbar = !!(snackbarMessage.length)

        return (
            <div>
                <h2>Deployer</h2>
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
                                <TableHeaderColumn>db_ver</TableHeaderColumn>
                                <TableHeaderColumn>min_app_ver</TableHeaderColumn>
                                <TableHeaderColumn>max_app_ver</TableHeaderColumn>
                                <TableHeaderColumn>db_obj_id</TableHeaderColumn>
                                <TableHeaderColumn>updated</TableHeaderColumn>
                                <TableHeaderColumn>deploy</TableHeaderColumn>
                                <TableHeaderColumn>delete</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody
                            displayRowCheckbox={false}
                        >
                            {versions.map((row, rowNumber) => (
                                <TableRow key={rowNumber}>
                                    <TableRowColumn>{row.db_ver}</TableRowColumn>
                                    <TableRowColumn>{row.min_app_ver}</TableRowColumn>
                                    <TableRowColumn>{row.max_app_ver}</TableRowColumn>
                                    <TableRowColumn>{row.db_obj_id}</TableRowColumn>
                                    <TableRowColumn>{row.updated}</TableRowColumn>
                                    <TableRowColumn>
                                        <FlatButton
                                            label="Live"
                                            primary={true}
                                            onTouchTap={this.handleDeploy.bind(this, rowNumber)}
                                        />
                                    </TableRowColumn>
                                    <TableRowColumn>
                                        <FlatButton
                                            label="Delete"
                                            primary={true}
                                            onTouchTap={this.handleDelete.bind(this, rowNumber)}
                                        />
                                    </TableRowColumn>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                ) : null}
                <Snackbar
                    open={showSnackbar}
                    message={snackbarMessage}
                    autoHideDuration={4000}
                    onRequestClose={this.handleCloseSnackbar}
                />
                <PasswordConfirm
                    open={deployTarget != null}
                    resolve={this.handleMatchPasswordDeployDialog}
                    reject={this.handleClosePasswordDeployDialog}
                />
                <PasswordConfirm
                    open={deleteTarget != null}
                    resolve={this.handleMatchPasswordDeleteDialog}
                    reject={this.handleClosePasswordDeleteDialog}
                />
            </div>
        )
    }
}

export default Deployer
