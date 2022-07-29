import * as actionTypes from './actionTypes'

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