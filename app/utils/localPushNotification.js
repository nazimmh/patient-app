import PushNotification from 'react-native-push-notification';
import { VIBRATION_DURATION } from '../config/Constants';
import moment from 'moment';

PushNotification.configure({
  popInitialNotification: true,
  requestPermissions: true,
});

exports.pushNewNotification = (notificationTitle, notificationMessage) => {
  PushNotification.localNotification({ autoCancel: true,
    largeIcon: 'ic_launcher',
    smallIcon: 'ic_notification',
    vibrate: true,
    vibration: VIBRATION_DURATION,
    title: notificationTitle,
    message: notificationMessage,
    playSound: true,
    soundName: 'default',
  });
};

exports.scheduleNewNotification = (notificationTitle, notificationMessage) => {
  PushNotification.localNotificationSchedule({ autoCancel: true,
    largeIcon: 'ic_launcher',
    smallIcon: 'ic_notification',
    vibrate: true,
    vibration: VIBRATION_DURATION,
    title: notificationTitle,
    message: notificationMessage,
    playSound: true,
    soundName: 'default',
    date: new Date(Date.now() + (60 * 1000)),
  });
};

exports.scheduleNewNotification2 = (message) => {
  PushNotification.localNotificationSchedule({
    message, // (required)
    date: new Date(Date.now() + (60 * 1000)) // in 60 secs
  });
};