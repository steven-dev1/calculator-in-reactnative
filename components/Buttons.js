import { TouchableOpacity, Text } from "react-native";
// import { Text } from "react-native-web";

export default function Buttons({children, onPress}) {
    return (
        <TouchableOpacity style={{backgroundColor: "#303136", borderRadius: 8, padding: 10}} onPress={onPress}>
            <Text style={{fontWeight: 'bold', fontSize: 25, color: "#FF7629"}}>{children}</Text>
        </TouchableOpacity>
        
    )
}
