// 点眼記録・進捗・スケジュール管理用カスタムフック
import { useCallback, useEffect, useState } from 'react';
import { DropsRepository, ScheduleRepository, NotifyRepository } from '../services/repository';

export type DropRecord = {
  date: string; // YYYY-MM-DD
  time: string; // HH:mm:ss
};

export const useEyeDrop = () => {
  const [drops, setDrops] = useState<DropRecord[]>([]);
  const [schedule, setSchedule] = useState<string[]>([]);
  const [notify, setNotify] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      setDrops(await DropsRepository.load());
      setSchedule(await ScheduleRepository.load());
      setNotify(await NotifyRepository.load());
    })();
  }, []);

  const addDrop = useCallback(async (record: DropRecord) => {
    const newDrops = [...drops, record];
    setDrops(newDrops);
    await DropsRepository.save(newDrops);
  }, [drops]);

  const updateSchedule = useCallback(async (newSchedule: string[]) => {
    setSchedule(newSchedule);
    await ScheduleRepository.save(newSchedule);
  }, []);

  const updateNotify = useCallback(async (on: boolean) => {
    setNotify(on);
    await NotifyRepository.save(on);
  }, []);

  return { drops, schedule, notify, addDrop, updateSchedule, updateNotify };
};
