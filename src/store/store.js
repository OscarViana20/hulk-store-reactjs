import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { authReducer } from '../reducers/authReducer';
import { productReducer } from '../reducers/productReducer';
import { categoryReducer } from '../reducers/categoryReducer';
import { shoppingReducer } from '../reducers/shoppingReducer';
import authSaga from '../sagas/authSaga';
import productSaga from '../sagas/productSaga';
import categorySaga from '../sagas/categorySaga';
import shoppingSaga from '../sagas/shoppingSaga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  category: categoryReducer,
  shopping: shoppingReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(authSaga);
sagaMiddleware.run(productSaga);
sagaMiddleware.run(categorySaga);
sagaMiddleware.run(shoppingSaga);

export default store;