import React, { Component } from 'react';

import storage from '../../../utils/storage';

import {
  Container,
  Body,
} from 'native-base';

import LoadingSpinner from 'components/utils/LoadingSpinner';

export default class LoadingScreen extends Component {

  async componentDidMount() {
    return this.navigateToLogin();
    // storage.getItem('@token').then(token => {
    //   if (!token) {
    //     return this.navigateToLogin();
    //   }

    //   return this.props.navigation.navigate('App');
    // }).catch(err => this.props.navigation.navigate('Auth'))
  }

  navigateToLogin = () =>
    storage.clear().then(() => this.props.navigation.navigate('App'));

  render() {
    return (
      <Container>
        <Body>
          <LoadingSpinner />
        </Body>
      </Container>
    );
  }
}