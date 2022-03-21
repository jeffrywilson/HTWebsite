import { atom } from "jotai";

export const selectedRoadmapAtom = atom<number>(0);

export const increaseSelectedRoamapAtom = atom(
  undefined,
  (get, set, arrayLength: number) => {
    if (get(selectedRoadmapAtom) < arrayLength - 1) {
      set(selectedRoadmapAtom, get(selectedRoadmapAtom) + 1);
    }
  }
);

export const decreaseSelectedRoamapAtom = atom(
  undefined,
  (get, set, arrayLength: number) => {
    if (get(selectedRoadmapAtom) > 0) {
      set(selectedRoadmapAtom, get(selectedRoadmapAtom) - 1);
    }
  }
);
