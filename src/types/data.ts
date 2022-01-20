import { Timestamp } from "firebase/firestore";

export type Param = {
    userId: string,
    aquariumId: string,
    name: string,
    value: number,
    date: Timestamp,
}