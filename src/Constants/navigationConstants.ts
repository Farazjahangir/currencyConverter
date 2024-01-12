import { NavigationObjType } from "../Types/navigationTypes"
import Rates from "../Screens/Rates"
import COLORS from "./colors"

enum ScreenNamesConstants {
    RATES = 'Rates',
}

const defaultNavOptions = {
    headerStyle: {
        backgroundColor: COLORS.orange,
    },
    headerTintColor: COLORS.white,
}
const stackNavigationList: NavigationObjType[] = [{
    name: ScreenNamesConstants.RATES,
    options: defaultNavOptions,
    component: Rates,
}]

export {
    ScreenNamesConstants,
    stackNavigationList,
}