// import { mongoose } from "mongoose";
import { Tweet } from "../models/tweetSchema.js";
import { User } from "../models/userSchema.js";

export const createTweet = async (req, res) => {
  try {
    const { descripction, id } = req.body;
    if (!descripction || !id) {
      return res.status(400).json({
        message: "Please provide a description and an id",
        success: fales,
      });
    }

    await Tweet.create({
      descripction,
      userId: id,
    });

    return res.status(201).json({
      message: "Tweet created successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTweet = async (req, res) => {
  try {
    const { id } = req.params;
    await Tweet.findByIdAndDelete(id);
    return res.status(200).json({
      message: "Tweet deleted successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const LikeOrDislike = async (req, res) => {
  try {
    const LoggedInUserId = req.body.id;
    const tweetId = req.params.id;
    const tweet = await Tweet.findById(tweetId);
    if (tweet.like.includes(LoggedInUserId)) {
      //dislike
      await Tweet.findByIdAndUpdate(tweetId, {
        $pull: { like: LoggedInUserId },
      });
      return res.status(200).json({
        message: "Tweet disliked successfully",
      });
    } else {
      //like
      await Tweet.findByIdAndUpdate(tweetId, {
        $push: { like: LoggedInUserId },
      });
      return res.status(200).json({
        message: "Tweet liked successfully",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getAllTweets = async (req, res) => {
  try {
    const id = req.params.id;
    const LoggedInUser = await User.findById(id);
    const LoggedInUserTweets = await Tweet.find({ userId: id });
    const followingUserTweet = await Promise.all(
      LoggedInUser.following.map((otherUserID) => {
        return Tweet.find({ userId: otherUserID });
      })
    );
    return res.status(200).json({
      tweets: LoggedInUserTweets.concat(...followingUserTweet),
    });
  } catch (error) {
    console.log(error);
  }
};

export const getFollowingTweets = async (req, res) => {
  try {
    const id = req.params.id;
    const LoggedInUser = await User.findById(id);
    const followingUserTweet = await Promise.all(
      LoggedInUser.following.map((otherUserID) => {
        return Tweet.find({ userId: otherUserID });
      })
    );
    return res.status(200).json({
      tweets: [].concat(...followingUserTweet),
    });
  } catch (error) {
    console.log(error);
  }
};
