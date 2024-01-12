import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import COLORS from "../../../src/Constants/colors"

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.orange,
        padding: wp('2%'),
        minWidth: 80,
        alignItems: 'center',
        borderRadius: 5
    },
    text: {
        color: COLORS.white
    }
});

export default styles;
