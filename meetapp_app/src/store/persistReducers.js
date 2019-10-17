import {persistReducer} from 'redux-persist';

import AsyncStorage from '@react-native-community/async-storage';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'meetapp_app',
      storage: AsyncStorage,
      whitelist: ['Auth', 'User'],
    },
    reducers,
  );

  return persistedReducer;
};
