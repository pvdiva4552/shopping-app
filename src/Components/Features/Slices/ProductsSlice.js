import {createSlice} from '@reduxjs/toolkit'
import {storeData} from '../../../assets/data/dummyData'
const ProductsSlice=createSlice({
    name:'filtered products',
    initialState:{
        filteredProducts:JSON.parse(sessionStorage.getItem('filteredData')) || storeData,
        productCategories:['Hoodies','Dresses','Suits','Shoes','T-Shirts','Jeans','Jackets','Bags']
    },
    reducers:{
        typesOfProducts(state,action){
            const types=[...new Set(storeData.map((eachItem)=>eachItem.type))]
            state.productCategories=types;
        },
        filterProducts(state,action){
            
            try{
                const filter=storeData.filter((product)=>product.type===action.payload)
                state.filteredProducts=filter;
                console.log('filter',filter)
                sessionStorage.setItem('filteredData',JSON.stringify(filter))

            }
            catch(err){
                return err;
            }
            
        }
    }
})

export const {filterProducts,productCategories}=ProductsSlice.actions;
export default ProductsSlice.reducer;