import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import { Icon } from 'react-native-material-ui';
import Colors from '../../../../config/Colors';
import Images from '../../../../config/Images';

class Medoc extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.leftStyle}>
          <Image source={Images.MEDICINE} style={{ height: 70, width: 70, resizeMode: 'cover' }} />
        </View>
        <View style={styles.rightStyle}>
          <Text style={styles.titleStyle}>{this.props.medicine.name}</Text>
          <Text style={styles.subTitleStyle}>{this.props.medicine.dosage}</Text>
          <Text style={styles.descriptionStyle}>{this.props.medicine.description}</Text>
        </View>
        <View style={styles.extremRight}>
            {
              this.props.schedule && this.props.schedule.map((item) => {
              return (
                <View style={styles.scheduleContainer}>
                  <Text style={styles.detailStyle}>10h</Text>
                  <Text style={styles.detailStyle}>1cp</Text>
                </View>
              )},
            )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 100,
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
    elevation: 3,
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: 'white',
  },
  leftStyle: {
    width: 80,
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  rightStyle: {
    flex: 1,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    color: Colors.defaultTextColor,
  },
  subTitleStyle: {
    fontSize: 15,
    textAlign: 'left',
    color: Colors.orange,
  },
  descriptionStyle: {
    fontSize: 14,
    textAlign: 'left',
    color: Colors.defaultDescriptionColor,
  },
  extremRight: {
    width: 70,
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  scheduleContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  detailStyle: {
    fontSize: 14,
    fontWeight: 'normal',
    marginRight: 5,
    color: Colors.defaultDescriptionColor,
  }
});

export default Medoc;
