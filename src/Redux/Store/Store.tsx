import AuthSlice from '../Slices/AuthSlice';
import {persistReducer} from 'redux-persist';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import persistStore from 'redux-persist/es/persistStore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const authConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const authReducer = persistReducer(authConfig, AuthSlice);

const rootReducer: any = combineReducers({
    auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

const persistor = persistStore(store);

export {store, persistor};
