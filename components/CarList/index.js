import { Dimensions, FlatList,  View} from 'react-native';
import styles from './style';
import cars from './cars';
import CarItem from '../carItem';

const CarList = (props) => {
    return(
        <View style={styles.container}>
            <FlatList 
                data={cars}
                renderItem={({item}) => <CarItem car={item} />}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'slow'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    );
}
export default CarList;