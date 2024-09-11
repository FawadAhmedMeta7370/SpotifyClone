import { FC } from "react";
import { TextInput, View } from "react-native";
import { ISearch } from "../../Interface/Interface";
import Ionicons from "react-native-vector-icons/Ionicons";
import { styles } from "./style";

const SearchBar : FC <ISearch> = () => {
    return(
        <View style={styles.container}>
            <Ionicons style={{margin: '3.4%'}} name={"search-outline"} color={"black"} size={30}/>
            <TextInput style={styles.input} placeholderTextColor={"#605e5eff"} placeholder="Artists, songs or podcasts"></TextInput>
        </View>
    )
}

export default SearchBar