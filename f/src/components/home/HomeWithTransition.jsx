import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "./Home";

const HomeWithTransition = () => {
  return (
    <TransitionGroup>
      <CSSTransition classNames="fade" timeout={3200}>
        <Home />
      </CSSTransition>
    </TransitionGroup>
  );
};

export default HomeWithTransition;
