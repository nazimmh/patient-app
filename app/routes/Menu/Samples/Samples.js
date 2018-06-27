import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Picker,
  Button,
  StyleSheet,
} from 'react-native';
import {
  RkTextInput,
} from 'react-native-ui-kitten';
import { Icon } from 'react-native-material-ui';
import { popNav } from '../../../actions';
import Color from '../../../config/Colors';

class Samples extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      drawerLabel: 'Prelevements',
      title: 'Prelevements',
      drawerIcon: (
        <Icon name={'add-alert'} size={26} color={Color.headerBackgroundColor} />
      ),
      headerLeft: (
        <TouchableOpacity onPress={ () => navigation.navigate('DrawerOpen') }>
          <View style={ { padding: 10 } }>
            <Icon name="menu" size={ 26 } color={Color.headerColor}/>
          </View>
        </TouchableOpacity>)
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      disease: undefined,
      email: props.auth && props.auth.proche && props.auth.proche.email,
      value: undefined,
    };
  }

  render() {
    return (
      <View style={styles.sampleContainer}>
        <Picker
          selectedValue={this.state.disease}
          style={{ backgroundColor: '#ef9807', color: 'white', padding: 10, marginBottom: 10 }}
          onValueChange={(itemValue, itemIndex) => this.setState({disease: itemValue})}
        >
          <Picker.Item label="Selectionner une maladie" value="" />
          <Picker.Item label="Diabete" value="diabete" />
          <Picker.Item label="Hyper tension" value="hyper" />
        </Picker>
        <RkTextInput
          style={styles.inputStyle}
          rkType={'topLabel'}
          label={'Email proche'}
          placeholder={'Email proche ici: example@email.com'}
          value={this.state.email}
          keyboardType={'email-address'}
          onChangeText={txt => this.setState({ email: txt})}
        />
        <RkTextInput
          style={styles.inputStyle}
          rkType={'topLabel'}
          label={'Prelevement'}
          placeholder={'La valeur de votre prelevement'}
          keyboardType={'numeric'}
          value={this.state.value}
          onChangeText={txt => this.setState({ value: txt})}
        />
        <View style={styles.buttonStyle}>
          <Button title={'Envoyer'} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sampleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'stretch',
    paddingHorizontal: 20,
  },
  inputStyle: {
    height: 70,
    marginVertical: 10,
  },
  buttonStyle: {
    height: 60,
    marginTop: 50,
  }
});

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Samples);
