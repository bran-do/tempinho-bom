// Remova os comentários a medida que for implementando as funções
const TOKEN = 'd14d5ccb65ca4874b8103716230407';

export const searchCities = async (TERMO_DE_BUSCA) => {
  const response = await fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${TERMO_DE_BUSCA}`);
  const data = await response.json();
  if (data.length === 0) {
    window.alert('Nenhuma cidade encontrada');
    return data;
  }
  return data;
};

async function createCityObject(data) {
  const currentObj = {
    temp: '',
    condition: '',
    icon: '',
  };
  currentObj.temp = data.current.temp_c;
  currentObj.condition = data.current.condition.text;
  currentObj.icon = data.current.condition.icon;
  return currentObj;
}

export const getWeatherByCity = async (URL_CIDADE) => {
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=${URL_CIDADE}`);
  const data = await response.json();
  const finalObj = await createCityObject(data);
  return finalObj;
};
