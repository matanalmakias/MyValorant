import React from "react";
import { coacherPageContent } from "../../utils/content";
import { Col } from "react-bootstrap";
import "../../sizes.scss";
const CoacherItem = ({ item }) => {
  const { name, priceForHour, ratingCount, about, pickBtn, msg } =
    coacherPageContent;
  return (
    <Col sm className="   gap-1 p-2 shadow card text-center ">
      <label htmlFor="name" className="form-label bg4 p-2 w-100">
        <p className="bg1 heading4"> {name}</p>
        <p className="bg5 coacher-item p-1">{item.name}</p>
      </label>
      <label htmlFor="about" className="form-label bg4 p-2">
        <p className="bg1 heading4">{about}</p>
        <p className="bg5 p-3 coacher-item">{item.desc}</p>
      </label>
      <div className="d-flex">
        <label htmlFor="price" className="form-label bg4 p-2 w-50">
          <p className="bg1 heading4 p-2">{priceForHour}</p>
          <p className="bg5 p-1 coacher-item">${item.priceForHour}</p>
        </label>
        <label
          htmlFor="ratings-count"
          className="form-label bg4 p-2 w-50 gap-1 m-1"
        >
          <p className="bg1 heading4 p-2">{ratingCount}</p>
          <p className="bg5 p-1 coacher-item">{item.ratings.length}</p>
        </label>
      </div>
      <button className="btn4 w-100">{msg}</button>
      <button className="btn3 fw-bold w-100 mt-1">{pickBtn}</button>
    </Col>
  );
};

export default CoacherItem;
