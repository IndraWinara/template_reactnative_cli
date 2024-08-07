import env from "../../utils/env";


const GET = async (url = '', payload = {}, token = '') => {
    const { REACT_URL } = env
    try {
        const options = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
        }

        const apiResult = await fetch(`${REACT_URL}/${url}`, options)
        const dataResult = await apiResult.json()
        return dataResult
    } catch (error) {
        console.log(`error get data from ${url} : ${error.message}`);
        return Promise.reject(error)

    }
}

const MUTATE = async (dataPayload) => {
    const { VITE_URL } = env
    const { url, method, payload, token, type } = dataPayload

    try {
        const options = {
            method,
            headers: { 'Content-Type': type, Authorization: `Bearer ${token}` },
            body: payload,
        };

        console.log(`url: ${url} method : ${method} payload : ${payload} , token : ${token}`);



        const apiResult = await fetch(`${REACT_URL}/${url}`, options);

        const dataResult = await apiResult.json();
        console.log('result MUTATE', dataResult);

        return dataResult
    } catch (error) {
        console.log(`error get data from ${url} : ${error.message}`);
    }
}


export {
    GET,
    MUTATE
}