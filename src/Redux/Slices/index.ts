import { combineReducers } from "redux";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// import authReducer from "./auth";
import authReducer from "./auth";
import splashReducer from "./splash";
import loadingReducer from "./loading";
// const persistConfig = {
//     key: "root",
//     storage,
// };

// const authPersistedReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
    auth: authReducer,
    splash: splashReducer,
    loading: loadingReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
