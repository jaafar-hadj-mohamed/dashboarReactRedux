
import productReducer from './productReducer';
import cartReducer from './cartReducer';

import { combineReducers} from 'redux';

const rootReducers=combineReducers({
myProduct:productReducer,
myCart:cartReducer
})
export default rootReducers;