import * as actionTypes from './actionTypes'
import axios from 'axios'

export function changeCategory (category){
    return{type:actionTypes.CHANGE_CATEGORY,payload:category}
}

export function getCategoriesSuccess (categories){
    return{type:actionTypes.GET_CATEGORIES_SUCCESS,payload:categories}
}

export function getCategories(){
    return function(dispatch){
        let url ="http://localhost:3300/"
        return  axios.get(url).then(response=>response.json())
       
        //  .then(response=>response.data)
        // axios.get(url).then(function (response) {res.send(response.data)})

        .then(result=>dispatch(getCategoriesSuccess(result)))
    }
}
