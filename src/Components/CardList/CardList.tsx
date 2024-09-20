import {FC} from 'react';
import {FlatList} from 'react-native';
import Card from '../Card/Card';
import {ICardList} from '../../Interface/Interface';

const CardList: FC<ICardList> = ({type, data, onPress}) => {
  
  // console.log("data ==> ", JSON.stringify(data,null,2));
  
  return (
    <FlatList
      data={data}
      renderItem={({item}) => {
        return <Card type={type} item={item} onPress={() => onPress && onPress(item.id)}></Card>;
      }}
      keyExtractor={item => item.id}
      horizontal={true}
    />
  );
};

export default CardList;
