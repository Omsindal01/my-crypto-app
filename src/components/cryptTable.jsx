import React, { Component } from "react";
import axios from "axios";
import "./style.css";
import SearchBox from "./searchBox";

class Cryto extends Component {
  state = {
    currencies: [],
    searchQuery: "",
  };
  async componentDidMount() {
    const currencies = await axios.get(
      `https://api.coinstats.app/public/v1/coins?skip=0&limit=100¤cy=INR`
    );
    this.setState({ currencies: currencies.data.coins });
  }
  handleSearch = (query) => {
    this.setState({ searchQuery: query });
  };
  getpageData = () => {
    const { searchQuery } = this.state;
    let allcurrencies, currencies;
    allcurrencies = this.state.currencies;
    if (searchQuery)
      currencies = allcurrencies.filter((m) =>
        m.name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else currencies = allcurrencies;
    return currencies;
  };
  render() {
    const { searchQuery } = this.state;
    const result = this.getpageData();
    return (
      <React.Fragment>
        <SearchBox query={searchQuery} onChange={this.handleSearch} />
        <table className="table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name </th>
              <th>Symbol</th>
              <th>Market Cap</th>
              <th>Price</th>
              <th>Available Supply</th>
              <th>Volume (24 Hours)</th>
            </tr>
          </thead>
          <tbody>
            {result.map((currency) => (
              <tr key={currency.rank}>
                <td>{currency.rank}</td>
                <td>
                  <img src={currency.icon} className="logo" />
                  {currency.name}
                </td>
                <td>{currency.symbol}</td>
                <td>₹{currency.marketCap}</td>
                <td>₹{currency.price}</td>
                <td>{currency.availableSupply}</td>
                <td>{currency.volume}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Cryto;
