import { View, Text, StyleSheet, Button } from "react-native"
// import BottomTabNavigation from "../../components/BottomTabNavigation/BottomTabNavigation";
import ReportScreen from './ReportScreen'

const InquiryScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.text}>
                استعلام‌ها
            </Text>
            <Button
                title="go to next page"
                onPress={() => navigation.navigate('ReportScreen')}
            >

            </Button>

        </View>
    )
}


const styles = StyleSheet.create({
    text: {
        fontFamily: 'IRANSansWeb',

    }
})
export default InquiryScreen;