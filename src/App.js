import React, { Component } from 'react';
import { Container, Header } from 'native-base';
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import { UIManager, Platform } from 'react-native';

import Home from './components/screens/Home';

class App extends Component {
    constructor(props) {
        super(props);
        if (Platform.OS === 'android') {
            if (UIManager.setLayoutAnimationEnabledExperimental) {
                UIManager.setLayoutAnimationEnabledExperimental(true);
            }
        }
    }

    render() {
        return (
            <Container style={{ backgroundColor: 'white' }}>
                <Header />
                <Home />
                <Spinner
                    color='#3F51B5'
                    cancelable
                    visible={this.props.loading}
                />
            </Container>
        );
    }

}


const mapStateToProps = (state) => ({
    loading: state.loading
});

export default connect(mapStateToProps)(App);
