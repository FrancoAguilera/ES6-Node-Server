import { Request, Response } from "express";
import { Users } from "../models/users.model";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await Users.find();

    res.json({
      status: 200,
      users,
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
      user,
    });
  } catch (err) {
    res.json({
      error: err,
    });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, gender, bio, dob, picture, rank, isActive } = req.body;

    const newUser = {
      name,
      email,
      gender,
      bio,
      dob,
      picture,
      rank,
      isActive,
    };

    await Users.create(newUser);

    res.json({
      status: "User created Succesfully",
      body: newUser,
      timestamp: Date.now(),
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
    const { name, email, gender, bio, dob, picture, rank, isActive } = req.body;

    const updateUser = {
      name,
      email,
      gender,
      bio,
      dob,
      picture,
      rank,
      isActive,
    };

    if (user) {
      await user.update(updateUser);
      res.json({
        status: 200,
        updateUser,
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
      messagge: "User deleted successfully.",
    });
  } catch (err) {
    res.json({
      error: err,
    });
  }
};
