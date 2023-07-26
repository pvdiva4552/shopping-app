import {configureStore} from '@reduxjs/toolkit'
import sliderReducer from '../Components/Features/Slices/SliderSlice'
import productsReducer from '../Components/Features/Slices/ProductsSlice'
export const Store=configureStore(
    {
        reducer:{
            slider:sliderReducer,
            products:productsReducer
        }
    }
)
export default Store;
