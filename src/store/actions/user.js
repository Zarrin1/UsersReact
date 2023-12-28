export const GET_USERS = 'GET_USERS';
export const CHANGE_LOADER = 'CHANGE_LOADER';
export const SET_SEARCH_NAME = 'SET_SEARCH_NAME';
export const getUsers = () =>{
    return async(dispatch) => {
        try {
            dispatch({type: CHANGE_LOADER, payload: true})
            const response = await fetch('https://reqres.in/api/users');
            const responseJson = await response.json();
            dispatch({type: GET_USERS, payload: false})
            dispatch({type: CHANGE_LOADER, payload: false})
        }catch(e) {
            console.log(e);
            dispatch({type:CHANGE_LOADER, payload: false})
            alert("Error")
        }
    }
}