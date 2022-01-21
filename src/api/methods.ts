import {
  collection,
  getDocs,
  Firestore,
  Timestamp,
  addDoc,
} from 'firebase/firestore';
import { Param } from '../types/data';
import { PARAMS } from './consts';

export const createGetParams = (database: Firestore) => async () => {
  const paramCol = collection(database, PARAMS);
  const paramSnapshot = await getDocs(paramCol);
  const paramList = paramSnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      name: data.name as string,
      value: data.value as number,
      date: (data.date as Timestamp).toDate(),
    };
  });

  return paramList;
};

export const createAddParam =
  (database: Firestore) =>
  async (param: Param) => {
    const { name, value, date } = param;
    await addDoc(collection(database, PARAMS), {
      name,
      value,
      date: Timestamp.fromDate(date),
    });

    return param;
  };
