import React from "react";
import { Card, CardImg, CardTitle, CardBody } from "reactstrap";
import { CardSubtitle } from "reactstrap";
import { Link } from "react-router-dom";
import classes from "./ArticleCard.module.css";

export function timeStampToString(ts) {
  const date = new Date(ts * 1000);
  return (
    date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate()
  );
}

const ArticleCard = (props) => {
  return (
    <Card className={classes.ArticleCard}>
      <Link to={"article/" + props.data.id}>
        <CardImg
          top=""
          width="100%"
          src="https://placeimg.com/325/180/any"
          alt="Card Image"
          className={classes.CardImage}
        />
      </Link>
      <CardBody className={classes.CardBody}>
        <CardTitle className={classes.CardTitle}>
          {props.data.title}
          <Link to={"article/" + props.data.id}></Link>
        </CardTitle>
        <CardSubtitle className={classes.CardSubtitle}>
          <CardSubtitle className={classes.ArticleLabel}>
            {props.data.categoryLabel}
          </CardSubtitle>
          <CardSubtitle className={classes.createDate}>
            {timeStampToString(props.data.createDate.seconds)}
          </CardSubtitle>
        </CardSubtitle>
      </CardBody>
    </Card>
  );
};

export default ArticleCard;
