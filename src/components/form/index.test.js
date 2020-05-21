import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
// import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import Form from ".";

//const mock = new MockAdapter(axios);
const MyComponent = (props) => <Form {...props} />;
const flushPromises = () => new Promise((resolve) => setImmediate(resolve));

const result = { weather: [{ main: "Clouds", description: "few clouds" }] };
// describe("Form", () => {
//   beforeEach(() => {
//Essa é uma das formas de testar api
//Simula um comportamento mais real
//Se o mock não bater com o request real o teste falha(e vice versa)
// mock
//   .onGet(
//     "http://api.openweathermap.org/data/2.5/weather?q=Florianopolis&appid=e3871c3246ab5e89c7d0327b1be511a9"
//   )
//   .reply(200, result);
// });

// afterEach(() => mock.reset());
//   it("Should be call setWeather with api result parameters", async () => {
//     const setWeather = jest.fn();
//     render(<MyComponent setWeather={setWeather} />);
//     const valueToInput = "Florianopolis";
//     const inputCityName = screen.getByTestId("city-name-input");
//     const inputSubmit = screen.getByTestId("submit");

//     fireEvent.change(inputCityName, { target: { value: valueToInput } });
//     fireEvent.submit(inputSubmit);

//     await flushPromises(); //Pela api ser async
//     expect(setWeather).toHaveBeenCalledTimes(1);
//     expect(setWeather).toHaveBeenCalledWith(result.weather);
//   });
// });

jest.mock("axios");
//Se for optar por esta abordagem pode ser deixar o jest.mock no arquivo de configuracao do jest (setupTests)
describe("Form 2", () => {
  beforeEach(() => jest.clearAllMocks()); //Sempre lembrar de limpar os mocks antes de cada teste
  it("Should be call setWeather with api result parameters", async () => {
    //Essa é outra forma
    //Faz o mock do axios e define os retornos para as chamadas
    //Simplifica a parte de URLS
    axios.get.mockResolvedValue({ data: { weather: result.weather } });
    const setWeather = jest.fn();
    render(<MyComponent setWeather={setWeather} />);
    const valueToInput = "Florianopolis";
    const inputCityName = screen.getByTestId("city-name-input");
    const inputSubmit = screen.getByTestId("submit");

    fireEvent.change(inputCityName, { target: { value: valueToInput } });
    fireEvent.submit(inputSubmit);

    await flushPromises(); //Pela api ser async
    expect(setWeather).toHaveBeenCalledTimes(1);
    expect(setWeather).toHaveBeenCalledWith(result.weather);
  });

  //Podendo ser testado todos os parametros passados pro request, como URL, e parametros
  //Mesma lógica para o POST, PUT etc
  //Se usar GraphQl, com algum middleware como Apollo, é bem parecido
  //Faz o mock do middleware e verifica os parametros =)
  it("Shoud be call weather api", async () => {
    axios.get.mockResolvedValue({ data: { weather: result.weather } });
    const setWeather = jest.fn();
    render(<MyComponent setWeather={setWeather} />);
    const valueToInput = "Florianopolis";
    const inputCityName = screen.getByTestId("city-name-input");
    const inputSubmit = screen.getByTestId("submit");

    fireEvent.change(inputCityName, { target: { value: valueToInput } });
    fireEvent.submit(inputSubmit);

    await flushPromises(); //Pela api ser async
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      "http://api.openweathermap.org/data/2.5/weather?q=Florianopolis&appid=e3871c3246ab5e89c7d0327b1be511a9"
    );
  });
});
