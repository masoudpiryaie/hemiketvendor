import { View, Text, StyleSheet, Button } from "react-native"
// import BottomTabNavigation from "../../components/BottomTabNavigation/BottomTabNavigation";
import ReportScreen from './ReportScreen'
import { useState } from "react";
import Alert from "../../components/Alert/Alert";

const InquiryScreen = ({ navigation }) => {

    const [alertVisible, setAlertVisible] = useState(false);
    const [alertType, setAlertType] = useState('success');
    const [alertMessage, setAlertMessage] = useState('This is a success message!');

    const showAlert = (type, message) => {
        setAlertType(type);
        setAlertMessage(message);
        setAlertVisible(true);
    };

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
            <Button title="Show Warning Alert" onPress={() => showAlert('warning', 'This is a warning message!')} />
            <Alert
                visible={alertVisible}
                onClose={() => setAlertVisible(false)}
                type={alertType}
                message={alertMessage}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    text: {
        fontFamily: 'IRANSansWeb',

    }
})
export default InquiryScreen;