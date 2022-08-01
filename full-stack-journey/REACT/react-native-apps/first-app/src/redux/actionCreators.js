import * as actionTypes from './actionTypes';

export const addPlace = place => (dispatch, getState) => {
    let token = getState().token;
    fetch(`https://first-react-native-proje-7df03-default-rtdb.asia-southeast1.firebasedatabase.app/places.json?auth=${token}`, {
        method: "POST", body: JSON.stringify(place)
    })
        .catch(error => console.log(error))
        .then(response => response.json())
        .then(data => console.log(data))
}

export const removePlace = key => (dispatch, getState) => {
    let token = getState().token;
    fetch(`https://first-react-native-proje-7df03-default-rtdb.asia-southeast1.firebasedatabase.app/places/${key}.json?auth=${token}`, { method: "DELETE" })
        .catch(error => console.log(error))
        .then(response => response.json())
        .then(data => {
            dispatch(deletePlace(key))
        })
}

export const deletePlace = key => {
    return {
        type: actionTypes.DELETE_PLACE,
        payload: key
    }
}

export const setPlaces = places => {
    return {
        type: actionTypes.SET_PLACES,
        payload: places
    }
}

export const loadPlaces = () => (dispatch, getState) => {
    let token = getState().token;
    fetch(`https://first-react-native-proje-7df03-default-rtdb.asia-southeast1.firebasedatabase.app/places.json?auth=${token}`)
        .catch(err => {
            alert("Something Went Wrong, Sorry!");
            console.log(err);
        })
        .then(res => res.json())
        .then(data => {
            const places = [];
            for (let key in data) {
                places.push({
                    ...data[key],
                    key: key
                })
            }
            dispatch(setPlaces(places));
        })
}

export const authUser = token => {
    return {
        type: actionTypes.AUTHENTICATE_USER,
        payload: token
    }
}

const API_KEY = "AIzaSyAYqBhpJ_oghSLQFS - NlsOjqMy2omD4Jj4";
export const trySignup = (email, password, switchViews) => dispatch => {
    fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY, {
        method: "POST",
        body: JSON.stringify({
            email: email, password: password, returnSecureToken: true
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .catch(err => {
            console.log(err);
            alert("Authentication Failed");
        })
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                alert(data.error.message);
            }
            else {
                switchViews();
                console.log(data);
            }
        })
}

export const tryLogin = (email, password, navigate) => dispatch => {
    fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + API_KEY, {
        method: "POST",
        body: JSON.stringify({
            email: email, password: password, returnSecureToken: true
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .catch(err => {
            console.log(err);
            alert("Authentication Failed");
        })
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                alert(data.error.message);
            }
            else {
                dispatch(authUser(data.idToken));
                navigate("Home");
            }
            console.log(data);
        })
}