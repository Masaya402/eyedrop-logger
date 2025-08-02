// 端末ローカルストレージ管理（AsyncStorageラッパー）
import AsyncStorage from '@react-native-async-storage/async-storage';

export const DROPS_KEY = 'drops';
export const SCHEDULE_KEY = 'schedule';
export const NOTIFY_KEY = 'notify';

export const saveDrops = async (drops: any) => {
  await AsyncStorage.setItem(DROPS_KEY, JSON.stringify(drops));
};

export const loadDrops = async (): Promise<any[]> => {
  const json = await AsyncStorage.getItem(DROPS_KEY);
  return json ? JSON.parse(json) : [];
};

export const saveSchedule = async (schedule: string[]) => {
  await AsyncStorage.setItem(SCHEDULE_KEY, JSON.stringify(schedule));
};

export const loadSchedule = async (): Promise<string[]> => {
  const json = await AsyncStorage.getItem(SCHEDULE_KEY);
  return json ? JSON.parse(json) : ['08:00', '15:00', '22:00'];
};

export const saveNotify = async (on: boolean) => {
  await AsyncStorage.setItem(NOTIFY_KEY, JSON.stringify(on));
};

export const loadNotify = async (): Promise<boolean> => {
  const json = await AsyncStorage.getItem(NOTIFY_KEY);
  return json ? JSON.parse(json) : true;
};
