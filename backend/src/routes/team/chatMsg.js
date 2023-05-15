import { TeamChat } from "../../db/models/team/chat.js";

export const checkTeamChatRoom = async (req, res, next) => {
  const teamChatRoom = await TeamChat.findOne(req.user.team._id);
  if (!teamChatRoom) {
    const newChat = new TeamChat({
      _id: req.user.team._id,
    });
    await newChat.save();
  }
  next();
};

export const addTeamChatMsg = async (req, res) => {
  const teamChatRoom = await TeamChat.findOne(req.user.team._id);
  const msg = req.body.msg;
  teamChatRoom.msgs.push({
    msg,
    sender: { name: req.user.nickName, _id: req.user._id },
  });
  await teamChatRoom.save();
  res.json({ msg: `The msg is sent successfuly` });
};
