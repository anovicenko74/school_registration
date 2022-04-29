import $api from "../http/index";

export default class AuthService {
    static async login(email, password){
        return $api.post('/login', {email, password})
    }

    static async registration(email, password, school_class) {
        return $api.post('/registration', {email, password, school_class})
    }

    static async logout() {
        return $api.post('/logout')
    }

    
}
