import { Request, Response } from "express";
import { Users } from "../models/users";

const getParams = (req: Request) => {
  const { name, email, gender, bio, dob, picture, rank, isActive } = req.body;

  return {
    name,
    email,
    gender,
    bio,
    dob,
    picture,
    rank,
    isActive,
  };
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await Users.find();

    res.json({
      status: 200,
      body: users,
    });
  } catch (err) {
    res.json({
      error: err,
    });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const user = await Users.findById({ _id });

    res.json({
      status: 200,
      body: user,
    });
  } catch (err) {
    res.json({
      error: err,
    });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const newUser = getParams(req);
    const user = await Users.create(newUser);

    res.json({
      status: "User created Succesfully",
      body: user,
    });
  } catch (err) {
    res.json({
      error: err,
    });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const user = await Users.findById({ _id });
    const updateUser = getParams(req);

    if (user) {
      const updatedUser = await user.update(updateUser);
      res.json({
        status: 200,
        body: updatedUser,
      });
    } else {
      throw new Error("User not found");
    }
  } catch (err) {
    res.json({
      error: err,
    });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    await Users.deleteOne({ _id });
    res.json({
      status: 200,
      body: {
        messagge: "User deleted successfully.",
      },
    });
  } catch (err) {
    res.json({
      error: err,
    });
  }
};
