import {FC} from 'react';
import {styles} from './style';
import {ScrollView, View} from 'react-native';
import Card from '../../Components/Card/Card';
import {IHomeScreen} from '../../Interface/Interface';
import LinearGradient from 'react-native-linear-gradient';
import IconButton from '../../Components/IconButton/IconButton';
import CustomTitle from '../../Components/CustomTitle/CustomTitle';

const HomeScreen: FC<IHomeScreen> = () => {
  return (
    <>
      <LinearGradient
        style={{flex: 1}}
        colors={['#858181', '#4e4c4c', '#161515']}>
        <ScrollView>
          <View style={styles.rootContainer}>
            <View>
              <View style={styles.titleIcon}>
                <CustomTitle>Made for you</CustomTitle>
                <View style={styles.iconContainer}>
                  <IconButton name="notifications-outline" color="white" />
                  <IconButton name="timer-outline" color="white" />
                  <IconButton name="settings-outline" color="white" />
                </View>
              </View>
              <Card />
            </View>

            <View>
              <CustomTitle>Trending Now</CustomTitle>
              <Card />
            </View>
            <View>
              <CustomTitle>Top picks for you</CustomTitle>
              <Card />
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </>
  );
};

export default HomeScreen;
