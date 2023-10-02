import { Pressable, Text, View } from 'react-native';
import styles from './style';


const styledButton = (props) => {

const { type, content, onPress } = props ;

const bgColor = type === 'Primary' ? '#171A20CC' : '#FFFFFFA6' ;
const textColor = type === 'Primary' ? '#FFFFFF' : '#171A20' ;

    return (
      <View style={styles.container}> 
        <Pressable style={[styles.button, {backgroundColor: bgColor}]} 
        onPress={() => onPress()}>
            <Text style={[styles.text, {color: textColor}]}>{content}</Text>
        </Pressable>


      </View>
    )
}

export default styledButton;