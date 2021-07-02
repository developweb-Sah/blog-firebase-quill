import React, { Component } from "react";
import { Container } from "reactstrap";
import ArticleCard from "../../../Component/ArticleCard/ArticleCard.js";
import firebase from "../../../Component/Config/firebase.js";

const db = firebase.firestore();

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      articles: [],
    };
  }

  componentDidMount() {
    this.getMyArticle();
  }

  getMyArticle = () => {
    db.collection("Articles")
      .limit(8)
      .get()
      .then((docs) => {
        if (!docs.empty) {
          let allArticle = [];
          docs.forEach(function (doc) {
            const article = {
              id: doc.id,
              ...doc.data(),
            };
            allArticle.push(article);
          });
          this.setState(
            {
              articles: allArticle,
            },
            () => {
              this.setState({
                isLoaded: true,
              });
            }
          );
        }
      });
  };
  render() {
    return (
      <div>
        <Container>
          {this.state.isLoaded
            ? this.state.articles.map((article, index) => {
                return <ArticleCard key={index} data={article} />;
              })
            : ""}
        </Container>
      </div>
    );
  }
}
export default Main;
