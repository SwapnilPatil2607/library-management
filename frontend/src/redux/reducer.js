import {GET_BOOKS_FAILURE,GET_BOOKS_REQUEST,GET_BOOKS_SUCCESSFUL} from "./actionType";

const initstate={
    edited:[],
    books:[],
    loading:false,
    load_error:false
}

export const reducer= (state=initstate, {type,payload})=>{
    switch(type){
        case GET_BOOKS_FAILURE:
        return{
            ...state,
            load_error:true,
            loading:false
        }
        case GET_BOOKS_SUCCESSFUL:
            console.log(payload)
            return{
                ...state,
                books:[...payload],
                edit:[...payload],
                loading:false
            }
        case GET_BOOKS_REQUEST:
            return{
                ...state,
                loading:true
            }
        default:
            return state
    }
}