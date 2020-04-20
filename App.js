import * as React from 'react';
import * as Localization from 'expo-localization';
import { StyleSheet, Text, View, Button } from 'react-native';

import i18n from 'i18n-js';

// Set the key-value pairs for the different languages you want to support.
// i18n.translations = {
//   en: { welcome: 'Hello', name: 'Charlie' },
//   ja: { welcome: 'こんにちは' },
// };
// // Set the locale once at the beginning of your app.
// i18n.locale = Localization.locale;
// // When a value is missing from a language it'll fallback to another language with the key present.
// i18n.fallbacks = true;

export default class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      currentLanguage: Localization.locale
    }
  }

  _changeLanguage = (language) => {
    this.setState({ currentLanguage: language });
};

  
  

  render() {
    i18n.locale = this.state.currentLanguage;
    i18n.fallbacks = true;
    i18n.translations = {
      en: { welcome: 'Hello', current: 'English' },
      ja: { welcome: 'こんにちは', current : "i don't know" },
      fr: { welcome : 'salut' , current : "Francais"}
    }

    return (
        <View style={styles.container}>
            <Text>{i18n.t('welcome')}</Text>
            <Text>{i18n.t('current')}</Text>
            <Button title="en" onPress={() => this._changeLanguage('en')} />
            <Button title="fr" onPress={() => this._changeLanguage('fr')} />
            <Button title="ja" onPress={() => this._changeLanguage('ja')} />

        </View>
    );
}
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF'
  },
  welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10
  },
  instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5
  }
});
