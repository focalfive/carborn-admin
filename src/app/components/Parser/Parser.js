import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import { connect } from 'react-redux'
import { increase } from '../../actions'

class Parser extends React.Component {
    state = {
        attributes: [],
        datas: [],
    }

    importButtonDidSelect = () => {
        this.refs.inputFile.click()
    }

    deployButtonDidSelect = () => {
        console.log(JSON.stringify(this.state.datas))
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
            attributes,
            datas,
        } = this.state

        const hasData = datas.length > 0

        return (
            <div>
                <h2>Parser</h2>
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
            </div>
        )
    }
}

export default connect(
    state => {
        return { number: state.count.number }
    },
    { increase }
)(Parser)
