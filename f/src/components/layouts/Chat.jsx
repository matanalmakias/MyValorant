import React, { useEffect, useState } from "react";
import Btn1 from "../btns/Btn1";
import { content, msgs, user, userList } from "../../utils/content";
import Names from "../msgs/Names";
import OpenUserChat from "../msgs/OpenUserChat";

const Chat = () => {
  const [msgsState, setMsgsState] = useState([]);
  const [names, setNames] = useState([]);
  const [open, setOpen] = useState(false);
  const [openMsg, setOpenMsg] = useState(false);
  const [currentUserChat, setCurrentUserChat] = useState();

  const { messangerBtnText } = content.chat;
  const toggleMessanger = () => {
    setOpen((s) => !s);
  };
  const { msgs: userMsgs, name, _id } = user;
  useEffect(() => {
    userMsgs?.sentMsgs.forEach((item, index) => {
      const newMsg = msgs?.find((msg) => msg._id === item);
      setMsgsState((s) => [...s, newMsg]);
      setNames((s) => [
        ...s,
        {
          _id: newMsg.reciver._id,
          name: newMsg.reciver.name,
        },
      ]);
    });
    userMsgs?.recivedMsgs.forEach((item, index) => {
      const newMsg = msgs?.find((msg) => msg._id === item);
      setMsgsState((s) => [...s, newMsg]);
      setNames((s) => [
        ...s,
        {
          _id: newMsg.sender._id,
          name: newMsg.sender.name,
        },
      ]);
    });
  }, [user]);

  const uniqueNames = Array.from(
    new Map(names.map((item) => [item._id, item])).values()
  );
  const toggleOpenMsg = (userId) => {
    let arr = [];
    msgs?.forEach((item) => {
      if (item.sender._id === userId && item.reciver._id === user._id) {
        arr.push(item);
      } else if (item.reciver._id === userId && item.sender._id === user._id) {
        arr.push(item);
      }
    });
    setCurrentUserChat(arr);
    setOpen(false);
    setOpenMsg(true);
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        left: "20px",
        color: "white",
        padding: "10px",
      }}
    >
      {open && (
        <ul className="d-flex  card align-items-center justify-content-center">
          {uniqueNames.map((item, index) => (
            <Names toggleOpenMsg={toggleOpenMsg} item={item} key={index} />
          ))}
        </ul>
      )}
      {openMsg && (
        <ul className="d-flex  card align-items-center justify-content-center">
          {currentUserChat.map((item, index) => (
            <OpenUserChat user={user} key={index} item={item} />
          ))}
        </ul>
      )}
      <span onClick={() => toggleMessanger()}>
        <Btn1 icon={`AiFillMessage`} text={messangerBtnText} />
      </span>
    </div>
  );
};

export default Chat;
