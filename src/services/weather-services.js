import axios from "axios";

const baseApiUrl = "http://api.openweathermap.org/data/2.5";
const key = "e3871c3246ab5e89c7d0327b1be511a9";

export default {
  getWeatherByCity: async (cityName) => {
    const response = await axios.get(
      `${baseApiUrl}/weather?q=${cityName}&appid=${key}`
    );
    return response.data;
  },
};
