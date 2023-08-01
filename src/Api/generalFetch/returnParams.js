export default function ReturnParams({ setLoad }) {
    let headerss = {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
        "Accept": "application/json",
    }

    function getParams(method, obj) {
        setLoad(true)
        let params = 0

        if (method != 'GET' && method != 'get') {
            params = {
                method: method,
                headers: headerss,
                body: JSON.stringify(obj)
            }
        } else {
            params = {
                method: method,
                headers: headerss,
            }
        }
        return params
    }

    return { getParams }
}