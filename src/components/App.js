import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = {
    images: []
  };
  onSearchSubmit = (input) => {
    unsplash
      .get("/search/photos", {
        params: {
          query: input
        }
      })
      .then((response) =>
        this.setState({
          images: response.data.results
        })
      )
      .catch((err) => console.log(err));
  };
  render() {
    const containerStyle = {
      marginTop: "10px"
    };
    return (
      <div className="ui container" style={containerStyle}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
