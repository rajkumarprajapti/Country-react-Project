import axios from "axios";
// this baseurl is api country data where we have to fetch our data
const api = axios.create({
    baseURL: "https://restcountries.com/v3.1",
  });
// http get methode is starting

export const getCountryData = () => {
    return api.get("/all?fields=name,population,region,capital,flags");
  };
// after that we willl get changing in our country pages


