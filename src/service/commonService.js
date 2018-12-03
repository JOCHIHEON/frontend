import axios from 'axios';

export default class CommonService {

    selectList(url, params){
        return axios.get(url,params);
    }
}