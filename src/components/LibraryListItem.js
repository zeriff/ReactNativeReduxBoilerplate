import React, { Component } from 'react';
import { Text, ListItem, Body } from 'native-base';
import { TouchableWithoutFeedback, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class LibraryListItem extends Component {

    componentWillUpdate() {
        LayoutAnimation.easeInEaseOut();
    }

    renderDescription() {
        const { expanded, library } = this.props;
        if (expanded) {
            return (
                <Text note>{library.description}</Text>
            );
        }
    }

    render() {
        const { library } = this.props;
        return (
            <TouchableWithoutFeedback
                onPress={() => {
                    console.log(this.props);
                    this.props.selectLibrary(library);
                }}
            >
                <ListItem>
                    <Body>
                        <Text>{library.title}</Text>
                        {this.renderDescription()}
                    </Body>
                </ListItem>
            </TouchableWithoutFeedback>

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return { expanded };
};

export default connect(mapStateToProps, actions)(LibraryListItem);
