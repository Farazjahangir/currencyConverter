import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import COLORS from "../../../src/Constants/colors"

const styles = StyleSheet.create({
    contentBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: wp('5%'),
        borderWidth: 1,
        borderColor: '#57606f',
        backgroundColor: COLORS.white,
        marginHorizontal: wp('4%'),
        marginTop: wp('6%'),
        borderRadius: 10
    },
   currencyCode: {
    color: COLORS.black,
    fontSize: RFPercentage(4.8)
   },
   totalAmount: {
    color: COLORS.black,
    fontSize: RFPercentage(2.7)
   },
   detailsText:{
    color: COLORS.black,
    fontSize: RFPercentage(2)
   }
});

export default styles;
