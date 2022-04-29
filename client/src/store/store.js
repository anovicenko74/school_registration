import { makeAutoObservable } from "mobx";
import { IUser } from "../models/IUser";
import AuthService from "../services/AuthService";
import axios from 'axios'
import { AuthResponse } from "../models/response/AuthResponse";
import { API_URL } from "../http";
import { useFetching } from "../hooks/useFetching";
import ScoreService from "../services/ScoreService";

export default class Store {
    user = {}
    isAuth = false;
    isLoading = false

    constructor() {
        makeAutoObservable(this)
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    setUser(user) {
        this.user = user
    }

    setLoading(bool) {
        this.isLoading = bool;
    }

    async login(email, password) {
        try {
            const response = await AuthService.login(email, password);
            console.log(response);
            localStorage.setItem("token", response.data.accessToken)
            this.setAuth(true);
            this.setUser(response.data.user)
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async registration(email, password, school_class) {
        try {
            const response = await AuthService.registration(email, password, school_class);
            console.log(response);
            localStorage.setItem("token", response.data.accessToken)
            this.setAuth(true);
            this.setUser(response.data.user)
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem("token")
            this.setAuth(false);
            this.setUser({})
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async checkAuth() {
        try {
            this.setLoading(true)
            const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true})
            console.log(response);
            localStorage.setItem("token", response.data.accessToken)
            this.setAuth(true);
            this.setUser(response.data.user)
        } catch(e) {
            console.log(e.response?.data?.message);
        } finally {
            this.setLoading(false)
        }
    }

    async setScore(score, email) {
        try {
           const response = await ScoreService.setScore(score, this.user.email)
        } catch (e) {
            console.log(e.response?.data?.message);
        }
        
    }
}