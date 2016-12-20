import React from "react"
import FlatButton from "material-ui/FlatButton"
import TextField from "material-ui/TextField"
import Dialog from "material-ui/Dialog"
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import $ from "jquery"
import CircularProgress from "material-ui/CircularProgress"

class DataViewer extends React.Component {

    state = {
        datas: [],
        attributes: []
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.version != nextProps.version) {
            if(!this.props.version && nextProps.version) {
                this.loadData(nextProps.version.db_obj_id)
            }
            if(nextProps.version == null) {
                this.setState({
                    datas: [],
                    attributes: [],
                })
            }
        }
    }

    loadData = (id) => {
        $.ajax({
            url: "https://api.mlab.com/api/1/databases/carborn/collections/cars/" + id + "?apiKey=RVBlmzNJ6hMYAruIrDZtDfhUaKGKbbvQ",
            data: JSON.stringify({cars: this.state.datas}),
            type: "GET",
            contentType: "application/json",
        })
        .done(this.loadDataDone)
        .fail(this.loadDataFail)
    }

    loadDataDone = (res) => {
        const attributes = []
        res.cars.map((model) => {
            for(let key in model) {
                if(attributes.indexOf(key) < 0) {
                    attributes.push(key)
                }
            }
        })
        this.setState({
            datas: res.cars,
            attributes: attributes,
        })
    }

    loadDataFail = (xhr, msg) => {
        console.log("Error", msg)
    }

    render() {
        const {
            reject,
            version,
        } = this.props

        const {
            datas,
            attributes,
        } = this.state

        const open = !!version

        return (
            <Dialog
                title="Data viewer"
                contentStyle={{width: "100%", maxWidth: "none"}}
                actions={[
                    <FlatButton
                        label="Close"
                        primary={true}
                        onTouchTap={reject}
                    />]}
                modal={false}
                open={open}
                onRequestClose={reject}
            >
                {datas.length ? (
                <Table
                    fixedHeader={false}
                    style={{width: "auto"}}
                    bodyStyle={{width: "auto", overflow: "auto"}}
                    wrapperStyle={{maxHeight: "inherit"}}
                >
                    <TableHeader
                        displaySelectAll={false}
                        adjustForCheckbox={false}
                        style={{backgroundColor: "#eee"}}
                    >
                        <TableRow>
                            {attributes.map((key, colNumber) => (
                                <TableHeaderColumn key={`h0-${colNumber}`}>{key}</TableHeaderColumn>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        displayRowCheckbox={false}
                        style={{width: "auto"}}
                    >
                        {datas.map((model, rowNumber) => (
                            <TableRow key={rowNumber}>
                            {attributes.map((key, colNumber) => (
                                <TableRowColumn key={`b${rowNumber}-${colNumber}`}>{model[key]}</TableRowColumn>
                            ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                ) : (
                    <CircularProgress style={{display: "block", margin: "20px auto"}} />
                )}
            </Dialog>
        )
    }
}

export default DataViewer
