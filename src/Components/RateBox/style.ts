import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import COLORS from "../../../src/Constants/colors"

const styles = StyleSheet.create({
    contentBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: wp('6%'),
        paddingVertical: wp('2%'),
        borderWidth: 1,
        borderColor: '#57606f',
        backgroundColor: COLORS.white,
        marginHorizontal: wp('4%'),
        marginTop: wp('6%'),
        borderRadius: 10
    },
   currencyCode: {
    color: COLORS.black,
    fontSize: RFPercentage(3.9)
   },
   totalAmount: {
    color: COLORS.black,
    fontSize: RFPercentage(2.7),
    textAlign: 'right'
   },
   detailsText:{
    color: COLORS.black,
    fontSize: RFPercentage(2),
    textAlign: 'right'
   }
});

export default styles;
