import $api from "../http";
import {AxiosResponse} from 'axios'

export default class UserService {
    static getUsers() {
        return $api.get('/users')
    }
}   

