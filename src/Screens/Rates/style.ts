import { StyleSheet } from 'react-native';

import COLORS from "../../../src/Constants/colors"
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        flex: 1,
    },
    topSection: {
        paddingHorizontal: wp('5%'),
    },
    conversionListBox: {
        backgroundColor: COLORS.lightGrey,
        flex: 1,
        paddingBottom: wp("5%"),
        marginTop: 10
    },
    pageTitle: {
        color: COLORS.black,
        fontSize: RFPercentage(5),
        marginTop: wp('5%')
    }
});

export default styles;
