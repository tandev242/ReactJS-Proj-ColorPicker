import React, { Component } from 'react'

class SizeSetting extends Component {

    onChangeFontSize(value){
        this.props.onChangeFontSize(value);
    }
    render() {
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">Size : {this.props.fontSize}px</h3>
                </div>
                <div className="panel-body">
                    <button type="button" className="btn btn-success" onClick = {() => this.onChangeFontSize(-3)}>Giảm</button>
                    <button type="button" className="btn btn-success" onClick = {() => this.onChangeFontSize(+3)}>Tăng</button>
                </div>
            </div>
        );
    }
}
export default SizeSetting;
