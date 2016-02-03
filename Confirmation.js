'use strict';

import React, {
  Component,
  View,
  Text
} from 'react-native';

import styles from './Style';

export default class extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          Congratulations... / Unfortunately...
        </Text>
        <Text style={styles.instructions}>
          Your registration is accepted / rejected
        </Text>
      </View>
    );
  }
}
