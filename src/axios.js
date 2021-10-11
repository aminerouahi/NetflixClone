import axios from "axios";
/** url pour faire des requests to the movies database */
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});
export default instance;