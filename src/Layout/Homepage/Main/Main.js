import React, { Component } from "react";
import { Container } from "reactstrap";
import ArticleCard from "../../../Component/ArticleCard/ArticleCard.js";
import firebase from "../../Component/Config/firebase";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      articles: [],
    };
  }

  render() {
    return (
      <div>
        <ArticleCard />
      </div>
    );
  }
}
export default Main;
