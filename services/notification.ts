// expo-notifications を使ったプッシュ通知ラッパー
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

export const scheduleNotification = async (date: Date, body: string) => {
  await Notifications.scheduleNotificationAsync({
    content: { title: '点眼リマインダー', body },
    trigger: date,
  });
};

export const cancelAllNotifications = async () => {
  await Notifications.cancelAllScheduledNotificationsAsync();
};

export const requestPermission = async () => {
  const { status } = await Notifications.requestPermissionsAsync();
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default', importance: Notifications.AndroidImportance.DEFAULT,
    });
  }
  return status === 'granted';
};
