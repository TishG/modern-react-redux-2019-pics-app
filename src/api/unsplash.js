import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 367aa020e71fe7e8b77cd275d3df10e628db44bc658a71bd7c8b4b159f9b5efa"
  }
});
