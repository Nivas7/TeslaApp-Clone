import { Text, View, ImageBackground } from 'react-native';
import styles from './style';
import StyledButton from '../Stylebutton';

const CarItem = (props) => {


  const { name, tagline, taglineCTA, image } = props.car;


    return (
        <View style={styles.carContainter}>
  
          <ImageBackground
          source = {image}
          style={styles.image}
          />
          <View style={styles.titles}> 
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>
              {tagline}
              {" "}
              <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
            </Text>
          </View>

          <View style={styles.buttonContainer}>
          <StyledButton type={'Primary'}  content={"Custom Order"} onPress={() => {
          console.warn("Custom Order was clicked")
          }} />
        
        <StyledButton type={'Secondary'}  content={"Existing Inventory"} onPress={() => {
          console.warn("Existing Inventory was clicked")
          }} />
          </View>

        </View>
    )
}

export default CarItem;

