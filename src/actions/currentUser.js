//synchronous action creators
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER", 
        user
    }
}
//asynchronous action creator
export const login = credentials => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        .then(response => response.json())
        .then(user => {
            if (user.error) {
                alert(user.error)
            } else {
                dispatch(setCurrentUser(user))
            }
        })
        .catch(console.log)
    }
}