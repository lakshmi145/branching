import axios from 'axios'

const SHOP_BASE_URL = 'http://localhost:9191/api/ics/controller/';

class IceCreamShopService {

    addIceCream(iceCream) {
        return axios.post(SHOP_BASE_URL + 'add-icecream', iceCream)
    }
    
    deleteIceCream(flavourCode) {
        return axios.delete(SHOP_BASE_URL + 'delete-icecream' + '/' + flavourCode)
    }

    getIceCream(flavourCode) {
        return axios.get(SHOP_BASE_URL + 'get-icecream' + '/' + flavourCode)
    }
    
    getAllIceCreams() {
        return axios.get(SHOP_BASE_URL + 'get-icecream-all')
    }
    updateIceCream(flavourCode, iceCream) {
        return axios.put(SHOP_BASE_URL + 'update-icecream' + '/' + flavourCode, iceCream)
    }
 
}

export default new IceCreamShopService();