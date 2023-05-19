import { User } from "../../db/models/user.js";
import nodeEvents from "../../nodeEvents/nodeEvents.js";
export const getUsers = async (req, res, next) => {
  try {
    const { userId } = req.params;

    req.senderUser = await User.findById(req.userId);
    req.recivedUser = await User.findById(userId);

    next();
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const initializePrivateMsg = (req, res, next) => {
  const { senderUser, recivedUser } = req;
  if (!senderUser.privateMsg) {
    senderUser.privateMsg = { sentMsg: [] };
  } else if (!senderUser.privateMsg.sentMsg) {
    senderUser.privateMsg.sentMsg = [];
  }
  if (!recivedUser.privateMsg) {
    recivedUser.privateMsg = { recivedMsg: [] };
  } else if (!recivedUser.privateMsg.recivedMsg) {
    recivedUser.privateMsg.recivedMsg = [];
  }
  next();
};

export const sendPrivateMessage = async (req, res) => {
  try {
    const { senderUser, recivedUser } = req;
    senderUser.privateMsg.sentMsg.push({
      user: recivedUser._id,
      msg: req.body.msg,
    });

    recivedUser.privateMsg.recivedMsg.push({
      user: senderUser._id,
      msg: req.body.msg,
    });

    await senderUser.save();
    await recivedUser.save();
    res.json({ msg: `Message sent to ${recivedUser.nickName}` });
    nodeEvents.emit("/auth-update");
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
    console.log(error);
  }
};
