// 将来Supabase対応も見据えたリポジトリ層
import * as storage from './storage';

export const DropsRepository = {
  save: storage.saveDrops,
  load: storage.loadDrops,
};

export const ScheduleRepository = {
  save: storage.saveSchedule,
  load: storage.loadSchedule,
};

export const NotifyRepository = {
  save: storage.saveNotify,
  load: storage.loadNotify,
};
