import React, { useEffect, useState } from "react";
import { coacherList, coacherPageContent, content } from "../../utils/content";
import CoacherItem from "./CoacherItem";
import "./styles/coach.scss";
import { motion } from "framer-motion";
import BackBtn from "../btns/BackBtn";
import { Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import LoadingAnimation from "../loaders/LoadingAnimation";
const Coach = () => {
  const { heading2, subHeading } = coacherPageContent;
  const { buttonText, becomeAcoachText } = content.becomeAcoach;
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  const nav = useNavigate();
  return (
    <div className="coach-container text-center w-100 p-2">
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <motion.div
          className="w-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <BackBtn />
          <p className="heading2 text-white bg5 p-3">{heading2}</p>
          <p className="sub-heading2 text-white bg5">{subHeading}</p>
          <button
            className="bg7"
            onClick={() => nav(`/valocoach/become-a-coach`)}
          >
            {buttonText}
          </button>
          <Row className="d-flex gap-2 coach-item">
            {coacherList?.map((item, index) => (
              <CoacherItem item={item} key={item._id} />
            ))}
          </Row>
        </motion.div>
      )}
    </div>
  );
};

export default Coach;
