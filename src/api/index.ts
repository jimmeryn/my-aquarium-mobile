import { firebaseObject } from './firebase';
import { createGetParams, createAddParam } from './methods';

const { firestore, auth } = firebaseObject;
const getParams = createGetParams(firestore!);
const addParam = createAddParam(firestore!);

export { getParams, addParam, auth };
