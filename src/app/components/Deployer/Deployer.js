import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'
import CircularProgress from 'material-ui/CircularProgress'
import Snackbar from 'material-ui/Snackbar'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import { connect } from 'react-redux'
import { increase } from '../../actions'
import $ from 'jquery'

class Deployer extends React.Component {

    state = {
        snackbarMessage: "",
        versions: [],
    }

    componentDidMount() {
        this.loadVersionList()
    }

    loadVersionList() {
        $.ajax({
            url: "http://slowslipper.woobi.co.kr/carborn/status/",
            type: "GET",
            contentType: "application/json",
        })
        .done(this.loadVersionListDone)
        .fail(this.loadVersionListFail)
    }

    loadVersionListDone = (res) => {
        console.log(res)
        this.setState({
            versions: [res],
        })
        this.showSnackbar("Success!")
    }

    loadVersionListFail = (xhr, msg) => {
        console.log(msg)
        this.showSnackbar("Fail")
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

    render() {
        const {
            snackbarMessage,
            versions,
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
            </div>
        )
    }
}

export default connect(
    state => {
        return { number: state.count.number }
    },
    { increase }
)(Deployer)
