import { NavigationObjType } from "../Types/navigationTypes"
import Rates from "../Screens/Rates"

enum ScreenNamesConstants {
    RATES = 'Rates',
}

const stackNavigationList: NavigationObjType[] = [{
    name: ScreenNamesConstants.RATES,
    component: Rates
}]

export {
    ScreenNamesConstants,
    stackNavigationList,
}