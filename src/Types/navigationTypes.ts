import { ComponentType } from 'react';
import {StackNavigationOptions} from '@react-navigation/stack'

import { ScreenNamesConstants } from "../Constants/navigationConstants";

const {
    RATES,
} = ScreenNamesConstants

type RootStackParamList = {
    [RATES]: undefined;
};

type NavigationObjType = {
    name: keyof RootStackParamList,
    options?: StackNavigationOptions,
    component: ComponentType<any>
}

export type { RootStackParamList, NavigationObjType }