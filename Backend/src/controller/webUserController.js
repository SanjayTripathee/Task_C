import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { WebUser } from "../schema/model.js";
import { seceretekey } from "../../constant.js";


//create /=>createWebUserController and verifyEmail both router and controller is used for register account i.e singin
export const createWebUserController = expressAsyncHandler(
  async (req, res, next) => {
    let data = req.body; //dont store in result all because we need to put req.body at top and create.(data) save on result down so hassing step will clear if we do
    // like:   let result = await WebUser.create(req.body)then password will not hash i.e h_ide so,we need 2 line for our process ok...

    let hassPassword = await bcrypt.hash(data.password, 10);
    data = {
      ...data,
      isVerifyedEmail: false,
      password: hassPassword,
    };
    let result = await WebUser.create(data);
    //send email with link

    //generate token
    let info = {
      _id: result._id,
    };
    let expiryInfo = {
      expiresIn: "353d",
    };
    let myToken = await jwt.sign(info, seceretekey, expiryInfo); //we have define secreteKey in .env so import it ok...

    //make link=>i.e frontend token

    res.status(201).json({
      success: true,
      message: "WebUser created successfully",
      result: result,
    });
  }
);
