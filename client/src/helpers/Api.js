
const TREFLE_TOKEN = `2_7ir7W0G4vcNeyPivAfaXhat4T2D7HFlD42-zsWitY`

const BASE_URL_TREFLE = `https://trefle.io/api/v1/species/${trefle_plant_id}?token=${TREFLE_TOKEN}`;

const TREFLE_DATA = {
        id: 0,
        common_name: '',
        scientific_name: '',
        year: 0,
        family_common_name: '',
        image_url: '',
        family: ''
}



class Api {

    static async request(method, endpoint, body = null) {
        // Define basic options
        let options = { 
            method: method,
            headers: { 'Content-Type': 'application/json' }
         };

        // Add body (if applicable)
        if (body) {
            options.body = JSON.stringify(body);
        }

        // Add JWT token (if exists)
        let token = Auth.getToken();
        if (token) {
            options.headers['x-access-token'] = token;
        }

        /**
         * Do the fetch() and create a "unified" response.
         * If server response is received:
         *      response.ok == true if response.status in 200 range
         *      response.status has status code
         *      response.statusText has status text
         *      response.data has data returned by server
         *      response.error is response.status + response.statusText
         * If server did not respond:
         *      response.ok = false
         *      response.status = 0
         *      response.data = null
         *      response.error is exception error message
         **/

        let response;
        try {
            response = await fetch(BASE_URL_TREFLE+endpoint, options);
            response.data = await response.json(TREFLE_DATA);
            console.log('fetch response:', response);
            if (!response.ok) {
                // Use error message from JSON returned by server, else use fetch() error code/text
                response.error = response.data.error || `${response.status}: ${response.statusText}`;
            }
        } catch (err) {
            response = {
                ok: false,
                data: null,
                status: 0,
                error: `${err.name}: ${err.message}`
            }
        }

        return response;
    }

}

export default Api;