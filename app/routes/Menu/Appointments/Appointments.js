import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View, StyleSheet,
} from 'react-native';
import { Icon } from 'react-native-material-ui';
import AppointmentCard from './Components/AppointmentCard';
import Color from '../../../config/Colors';
import { getAppointments } from '../../../actions';

class Appointments extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Mes Rendez-vous',
      drawerLabel: 'Mes Rendez-vous',
      drawerIcon: (
        <Icon name={'perm-contact-calendar'} size={26} color={Color.headerBackgroundColor} />
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
      appointments: props.doctors.appointments,
    };
  }

  componentWillMount() {
    // sync with the server every time we hit this code
    this.props.dispatch(getAppointments(this.props.auth.uid)).then(result => {
      console.log('data synced successfully');
      this.setState({ appointments: result }, () => {
        // schedule the appointment

      });
    }).catch(err => {
      console.log('error '+err);
    });
  }

  render() {
    if (!this.state.appointments || this.state.appointments.length < 0 ) {
      return (
        <View style={styles.appointmentContainer}>
          <Text>Rendez-vous</Text>
          <Icon name={ 'perm-contact-calendar' } size={ 200 } color={ '#ccc' } />
        </View>
      );
    }

    return (
      <ScrollView style={{ containerStyle: { flex: 1 } }}>
        <View style={styles.appointmentContainer}>
          {
            this.state.appointments && this.state.appointments.length > 0 &&
            this.state.appointments.map((object) => {
              return (<AppointmentCard rdv={object} />)
            })
          }
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  appointmentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = state => ({
  doctors: state.doctors,
  auth: state.auth,
});

export default connect(mapStateToProps)(Appointments);
