import axios from "axios";

// apikey ----> server ---> axios (interceptor) https

//fetch - network request, promise based: resolve two times, error: network error, response: object(limited)
//axios- network request, promise based: one times, error: network error, notFound, bad auth ... , response: big obj:more info about the response, axios interptors

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export { axiosInstance };
