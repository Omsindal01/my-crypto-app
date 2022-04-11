import React, { Component } from "react";
class SearchBox extends Component {
  state = {};
  render() {
    console.log(this.props);
    const { query, onChange } = this.props;
    return (
      <input
        type="text"
        name="query"
        className="form-control my-3"
        placeholder="Search..."
        value={query}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    );
  }
}

export default SearchBox;
