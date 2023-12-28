import { CHANGE_LOADER, GET_USERS, SET_SEARCH_NAME } from "../actions/user"



const initialData = {
    users: [],
    loading: false,
    searchName: '',
    filterUsers: [],
}

export const usersReducer = (state =initialData, action) =>{
    switch(action.type){
        case GET_USERS:
            return{ ...state, users: action.payload };
        case CHANGE_LOADER:
            return{ ...state, loading: action.payload};
        case SET_SEARCH_NAME:
            return{ ...state, searchName: action.payload};
        default:
            return state
    }
}