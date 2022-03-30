export function requestUser(user) {
    const url = `https://api.github.com/users/${user}`
    const methods = {
        method: 'GET',
        headers: {
            accept: 'application/vnd.github.v3+json'
        }
    }
    const handlesErrorsStatusOk = response => {
        if (!response.ok) throw new Error()
        else return response
    }
    const getJsonUserData = response => response.json();

    const getImportantData = data => {
        console.log(data)
        return {
            nome: data.name,
            login: data.login,
            location: data.location,
            bio: data.bio,
            email: data.email,
            sequindo: data.following,
            sequidores: data.followers,
            image: data.avatar_url
        }
    }
    const handlesErrors = errors => {
        return [errors, true];
    }
    return fetch(url, methods)
        .then(handlesErrorsStatusOk)
        .then(getJsonUserData)
        .then(getImportantData)
        .catch(handlesErrors)
}
