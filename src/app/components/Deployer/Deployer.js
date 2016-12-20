import React from 'react'
import ActionCheckCircle from 'material-ui/svg-icons/action/check-circle'
import {blue500} from 'material-ui/styles/colors'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'
import CircularProgress from 'material-ui/CircularProgress'
import Snackbar from 'material-ui/Snackbar'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import PasswordConfirm from '../PasswordConfirm'
import TitleBar from '../TitleBar'
import DataViewer from '../DataViewer'
import $ from 'jquery'

class Deployer extends React.Component {

    state = {
        snackbarMessage: "",
        versions: [],
        liveVersion: null,
        deployTarget: null,
        viewTarget: null,
    }

    componentDidMount() {
        this.loadVersionList()
        this.loadLiveVersion()
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

    loadLiveVersion() {
        $.ajax({
            url: "http://slowslipper.woobi.co.kr/carborn/status/cache/",
            type: "GET",
            contentType: "application/json",
        })
        .done(this.loadLiveVersionDone)
        .fail(this.loadLiveVersionFail)
    }

    loadLiveVersionDone = (res) => {
        this.setState({
            liveVersion: res,
        })
    }

    loadLiveVersionFail = (xhr, msg) => {
        this.setState({
            liveVersion: {id: "0"},
        })
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
            versions: [],
            liveVersion: null,
        }, "Success to live!")
        this.loadVersionList()
        this.loadLiveVersion()
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

    handleView(rowIndex) {
        this.setState({
            viewTarget: rowIndex,
        })
    }

    handleCloseViewDialog = () => {
        this.setState({
            viewTarget: null,
        })
    }

    render() {
        const {
            snackbarMessage,
            versions,
            liveVersion,
            deployTarget,
            viewTarget,
        } = this.state

        const hasData = versions.length > 0
        const showSnackbar = !!(snackbarMessage.length)
        const liveLoaded = liveVersion != null

        return (
            <div>
                <TitleBar title="Deployer" backPath="#" />
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
                                <TableHeaderColumn>live</TableHeaderColumn>
                                <TableHeaderColumn>db_ver</TableHeaderColumn>
                                <TableHeaderColumn>min_app_ver</TableHeaderColumn>
                                <TableHeaderColumn>max_app_ver</TableHeaderColumn>
                                <TableHeaderColumn>db_obj_id</TableHeaderColumn>
                                <TableHeaderColumn>updated</TableHeaderColumn>
                                <TableHeaderColumn>show</TableHeaderColumn>
                                <TableHeaderColumn>deploy</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody
                            displayRowCheckbox={false}
                        >
                            {versions.map((row, rowNumber) => {
                                const isLived = liveVersion != null && row.id == liveVersion.id
                                const liveEnable = liveLoaded && !isLived
                                return (
                                    <TableRow key={rowNumber}>
                                        <TableRowColumn>{isLived ? (
                                            <ActionCheckCircle color={blue500} />
                                        ) : null}
                                        </TableRowColumn>
                                        <TableRowColumn>{row.db_ver}</TableRowColumn>
                                        <TableRowColumn>{row.min_app_ver}</TableRowColumn>
                                        <TableRowColumn>{row.max_app_ver}</TableRowColumn>
                                        <TableRowColumn>{row.db_obj_id}</TableRowColumn>
                                        <TableRowColumn>{row.updated}</TableRowColumn>
                                        <TableRowColumn>
                                            <FlatButton
                                                label="View"
                                                primary={true}
                                                onTouchTap={this.handleView.bind(this, rowNumber)}
                                            />
                                        </TableRowColumn>
                                        <TableRowColumn>
                                            <FlatButton
                                                label="Deploy"
                                                primary={true}
                                                disabled={!liveEnable}
                                                onTouchTap={this.handleDeploy.bind(this, rowNumber)}
                                            />
                                        </TableRowColumn>
                                    </TableRow>
                                )
                            })}
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
                <DataViewer
                    reject={this.handleCloseViewDialog}
                    version={versions[viewTarget]}
                />
            </div>
        )
    }
}

export default Deployer
