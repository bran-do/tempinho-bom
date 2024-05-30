const TOKEN = import.meta.env.VITE_TOKEN;

export const searchCities = async (TERMO_DE_BUSCA) => {
  const response = await fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${TERMO_DE_BUSCA}`);
  const data = await response.json();
  if (data.length === 0) {
    window.alert('City not found');
    return data;
  }
  return data;
};

async function createCityObject(data) {
  const { location, current } = data;
  return {
    name: location.name,
    country: location.country,
    temp: current.temp_c,
    condition: current.condition.text,
    icon: current.condition.icon,
  };
}

export const getWeatherByCity = async (URL_CIDADE) => {
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=${URL_CIDADE}`);
  const data = await response.json();
  const finalObj = await createCityObject(data);
  finalObj.url = URL_CIDADE;
  return finalObj;
};
