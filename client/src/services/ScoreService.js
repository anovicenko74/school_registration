import $api from "../http/index";
import {AxiosResponse} from 'axios'

export default class ScoreService {
    static async setScore(score, email) {
        return $api.post('/score', {score, email})
    }
}