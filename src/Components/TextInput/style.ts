import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import COLORS from "../../../src/Constants/colors"

const styles = StyleSheet.create({
    container: {
        marginVertical: wp('3%'),
        borderColor: COLORS.silver,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems:'center'
    },
    input: {
        color: COLORS.black,
        height: wp('13%'),
        fontSize: RFPercentage(2.5),
        flex: 1
    },
    postFix: {
        color: COLORS.black,
        paddingHorizontal: wp('2%'),
        fontSize: RFPercentage(2.3)
    }
});

export default styles;
