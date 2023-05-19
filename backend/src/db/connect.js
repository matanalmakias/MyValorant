import mongoose from "mongoose";
import dbConfig from "./config/db.config.js";
import { Role } from "./models/role.js";
import { GeneralChat } from "../db/models/generalChat.js";
const { HOST, DB, PORT, ROLES, DAYS } = dbConfig;

const connect = async () => {
  //mongoose 7 update:
  mongoose.set("strictQuery", false);
  // await mongoose.connect(
  // `mongodb+srv://matan:n3XTDyNe9rB0arcW@cluster0.845lyom.mongodb.net/Madigital`
  // );
  // mongodump --uri "mongodb+srv://matan:n3XTDyNe9rB0arcW@cluster0.845lyom.mongodb.net/Madigital" --ssl --authenticationDatabase=admin --db=Madigital --out="C:\שמור\קורס Full Stack\dump"
  await mongoose.connect(`mongodb://${HOST}:${PORT}/${DB}`);
  console.log(`Succesfully connected to the database ${DB}`);
  initDB();
};
const initDB = async () => {
  //save without joi
  //if Day collection is Empty:
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      ROLES.map((s) => new Role({ name: s })).forEach((role) => {
        role.save((err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("added ", role.name, "to Roles collection");
          }
        });
      });
    }
  });
  const isGeneralChatExist = await GeneralChat.findOne({ name: `General` });
  if (!isGeneralChatExist) {
    const generalChat = new GeneralChat({ name: `General`, msgs: [] });
    await generalChat.save();
  }
};

const initDB2 = async () => {
  try {
    const count = await Role.estimatedDocumentCount();
    if (count === 0) {
      const roles = ROLES.map((r) => new Role({ name: r }));

      //dont use forEach with await
      for (let role of roles) {
        await role.save();
        console.log("added ", role.name, "to Roles collection");
      }
    }
  } catch (e) {
    console.log("Failed with error: ", e);
  }
};
export { connect };
