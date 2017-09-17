import React, { Component } from 'react';
import { List } from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../actions';
import LibraryListItem from './LibraryListItem';


class LibraryList extends Component {

    renderRow(row) {
        console.log(row);
        return (
            <LibraryListItem library={row} />
        );
    }

    render() {
        return (
            <List
                dataArray={this.props.libraries}
                renderRow={this.renderRow.bind(this)}
            />
        );
    }
}


const mapStateToProps = (state) => {
    return {
        libraries: state.libraries
    };
};

export default connect(mapStateToProps, actions)(LibraryList);
