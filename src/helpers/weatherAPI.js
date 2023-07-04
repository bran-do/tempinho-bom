// Remova os comentários a medida que for implementando as funções
const TOKEN = 'd14d5ccb65ca4874b8103716230407';

export const searchCities = (TERMO_DE_BUSCA) => {
  fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${TERMO_DE_BUSCA}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.length === 0) {
        window.alert('Nenhuma cidade encontrada');
      }
      return data;
    });
};

export const getWeatherByCity = (/* cityURL */) => {
  //   seu código aqui
};
