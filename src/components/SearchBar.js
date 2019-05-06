import React from "react";

class SearchBar extends React.Component {
  state = {
    input: ""
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.input);
    this.setState({
      input: ""
    });
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="imageSearch">Image Search: </label>
            <input
              type="text"
              id="imageSearch"
              value={this.state.input}
              onChange={(e) => this.setState({ input: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
