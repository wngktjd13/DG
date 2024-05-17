import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userState = atom({
  key: "userState",
  default: { id: "", isLoggined: false }, 
  effects_UNSTABLE: [persistAtom],
});

export const resultState = atom({
  key: "resultState",
  default: { resultName: "", resultConcept: "" },
  effects_UNSTABLE: [persistAtom],
});