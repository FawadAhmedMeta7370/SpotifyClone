import {FC} from 'react';
import {IList} from '../../Interface/Interface';
import {FlatList, View} from 'react-native';
import ListCard from '../ListCard/ListCard';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

const List: FC<IList> = ({ListHeaderComponent ,share, data, onPress}) => {

  const tabBarHeight = useBottomTabBarHeight()

  return (
    <View style={{flex: 1}}>
      
      <FlatList
      ListHeaderComponent={ListHeaderComponent}
      data={data}
      renderItem={({item}) => {
        return <ListCard share={share} item={item} onPress={onPress} />;
      }}
      keyExtractor={item => item.id}
      />
      </View>
  );
};

export default List;
