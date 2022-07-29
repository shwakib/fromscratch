import * as actionTypes from './actionTypes';
import { navigate } from '../../App';

export const addPlace = place => dispatch => {
    fetch("https://first-react-native-proje-7df03-default-rtdb.asia-southeast1.firebasedatabase.app/places.json", {
        method: "POST", body: JSON.stringify(place)
    })
        .catch(error => console.log(error))
        .then(response => response.json())
        .then(data => console.log(data))
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

export const loadPlaces = () => dispatch => {
    fetch("https://first-react-native-proje-7df03-default-rtdb.asia-southeast1.firebasedatabase.app/places.json")
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

export const authUser = () => {
    return {
        type: actionTypes.AUTHENTICATE_USER,
    }
}

const API_KEY = "AIzaSyAYqBhpJ_oghSLQFS - NlsOjqMy2omD4Jj4";
export const trySignup = (email, password) => dispatch => {
    fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY, {
        method: "POST",
        body: JSON.stringify({
            email: email, password: password, returnSecuretoken: true
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
                navigate("Login");
                dispatch(authUser());
                console.log(data);
            }
        })
}