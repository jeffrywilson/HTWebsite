import { atom } from "jotai";
import { IFeature } from "../interfaces/general";
import { mock_features } from "../mocks/features";

export const selectedFeatureAtom = atom<IFeature | undefined>(mock_features[0]);
