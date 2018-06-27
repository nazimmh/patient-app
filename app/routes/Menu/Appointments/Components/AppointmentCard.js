import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
} from 'react-native';
import { Icon } from 'react-native-material-ui';
import moment from 'moment';
import Color from '../../../../config/Colors';
import Images from '../../../../config/Images';

class AppointmentCard extends Component {

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.leftSide}>
          <Image source={Images.RDV} style={{ height: 70, width: 70, resizeMode: 'cover' }} />
        </View>
        <View style={styles.rightSide}>
          <Text style={styles.titleStyle} numberOfLines={1}>{this.props.rdv.doctor.name}</Text>
          <Text style={styles.subTitleStyle}>{this.props.rdv.doctor.email}</Text>
          <View style={styles.separation} />
          <Text style={styles.descriptionStyle}>{this.props.rdv.description}</Text>
        </View>
        <View style={styles.extremRight}>
          <Text style={styles.yearStyle}>{moment(this.props.rdv.date).format('YYYY')}</Text>
          <Text style={styles.monthStyle}>{moment(this.props.rdv.date).format('MMMM')}</Text>
          <Text style={styles.dayStyle}>{moment(this.props.rdv.date).format('DD')}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 130,
    marginHorizontal: 10,
    marginVertical: 5,
    paddingVertical: 10,
    elevation: 3,
    borderRadius: 3,
    borderColor: '#ccc',
    borderWidth: 0,
    backgroundColor: 'white',
  },
  leftSide: {
    width: 100,
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  rightSide: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    color: Color.defaultTextColor,
  },
  subTitleStyle: {
    fontSize: 16,
    textAlign: 'left',
    color: Color.defaultTextColor,
  },
  descriptionStyle: {
    fontSize: 14,
    textAlign: 'left',
    color: Color.defaultDescriptionColor,
  },
  separation: {
    height: 1,
    backgroundColor: '#dadada',
    marginVertical: 5,
  },
  extremRight: {
    width: 80,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  yearStyle: {
    fontSize: 12,
    textAlign: 'center',
    color: Color.defaultTextColor,
  },
  monthStyle: {
    fontSize: 18,
    textAlign: 'center',
    color: Color.defaultTextColor,
  },
  dayStyle: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    color: Color.defaultTextColor,
  },
});

export default AppointmentCard;
