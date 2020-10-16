const fetch = require('node-fetch');
const { TREFLE_TOKEN } = require('../config');



const TREFLE_BASE_URL = 'https://trefle.io/api/v1/species';

let PlantCache = new Map();


class TrefleApi {

    /******************************************************
     * Public helper methods
     ******************************************************/

    /**
     * Fetch plants
     **/

    static async getPlants() {
        let response = await TrefleApi._request('GET', '');

        return response;
    }


    /**
     * Fetch & cache plants with specific IDs
     **/

    static async getPlantsByIds(ids) {
        console.log('getPlantsByIds:', ids);

        // Fetch any of the plants we haven't already cached
        let promises = [];
        for (let id of ids) {
            if ( !PlantCache.has(id) ) {
                promises.push( TrefleApi._request('GET', `/${id}`) );
                console.log('  fetching', id);
            }
        }

        // Once they are all resolved, add them to cache
        let responses = await Promise.all(promises);
        for (let resp of responses) {
            let plant = resp.data.data;
            PlantCache.set(plant.id, plant);
            console.log('  caching', plant.id);
        }

        // Create a "faux" response
        let plants = ids.map((id) => PlantCache.get(id));
        let fauxResponse = { 
            ok: true, 
            data: { data: plants }
        };

        return fauxResponse;
    }


    /**
     * Fetch one plant
     **/

    static async getPlantById(id) {
        let response = await TrefleApi._request('GET', `/${id}`);

        return response;
    }


    /******************************************************
     * Private Methods
     ******************************************************/


    static async _request(method, endpoint, body = null) {
        // Construct URL: base + endpoint + token
        let url = `${TREFLE_BASE_URL}${endpoint}?token=${TREFLE_TOKEN}`;

        // Define basic fetch() options
        let options = { 
            method: method
         };

        // Add body (if applicable)
        if (body) {
            options.headers = { 'Content-Type': 'application/json' };
            options.body = JSON.stringify(body);
        }

        /**
         * Do the fetch() and create a "unified" response.
         * If server response is received:
         *      response.ok == true if response.status in 200 range
         *      response.status has HTTP status code
         *      response.statusText has HTTP status text
         *      response.data has data returned by server
         *      response.error is response.data.error if exists, else response.status + response.statusText
         * If server could not be reached:
         *      response.ok = false
         *      response.status = 0
         *      response.data = null
         *      response.error is exception error message
         **/

        let response;
        try {
            response = await fetch(url, options);
            response.data = await response.json();
            if (!response.ok) {
                // Use error message from JSON returned by server, else use fetch() error code/text
                response.error = response.data.error || `${response.status}: ${response.statusText}`;
            }
        } catch (err) {
            response = {
                ok: false,
                status: 0,
                data: null,
                error: `${err.name}: ${err.message}`
            }
        }

        return response;
    }

}

module.exports = TrefleApi;