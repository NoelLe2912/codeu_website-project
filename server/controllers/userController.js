import userModel from "../models/userModel.js";

export const getUserData = async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await userModel.findById(userId);
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }
    return res.json({
      success: true,
      userData: {
        name: user.name,
        firstName: user.firstName,
        lastName: user.lastName,
        avatarUrl: user.avatarUrl,
        bio: user.bio,
        githubUrl: user.githubUrl,
        linkedinUrl: user.linkedinUrl,
        isAccountVerified: user.isAccountVerified,
        lectureProgress: user.lectureProgress || {},
      },
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const markLectureComplete = async (req, res) => {
  try {
    const { userId, courseId, chapterKey, lectureIndex } = req.body;

    if (!courseId || !chapterKey || lectureIndex === undefined) {
      return res.json({
        success: false,
        message: "Missing courseId, chapterKey or lectureIndex",
      });
    }

    const update = {
      $addToSet: {
        [`lectureProgress.${courseId}.${chapterKey}`]: Number(lectureIndex),
      },
    };
    const user = await userModel.findByIdAndUpdate(userId, update, {
      new: true,
    });
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    return res.json({
      success: true,
      message: "Lecture marked as completed",
      lectureProgress: user.lectureProgress || {},
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const unmarkLectureComplete = async (req, res) => {
  try {
    const { userId, courseId, chapterKey, lectureIndex } = req.body;

    if (!courseId || !chapterKey || lectureIndex === undefined) {
      return res.json({
        success: false,
        message: "Missing courseId, chapterKey or lectureIndex",
      });
    }

    const update = {
      $pull: {
        [`lectureProgress.${courseId}.${chapterKey}`]: Number(lectureIndex),
      },
    };

    const user = await userModel.findByIdAndUpdate(userId, update, {
      new: true,
    });
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    return res.json({
      success: true,
      message: "Lecture marked as incomplete",
      lectureProgress: user.lectureProgress || {},
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const getLectureProgress = async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await userModel.findById(userId);
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    return res.json({
      success: true,
      lectureProgress: user.lectureProgress || {},
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const {
      userId,
      firstName,
      lastName,
      avatarUrl,
      bio,
      githubUrl,
      linkedinUrl,
    } = req.body;
    const user = await userModel.findById(userId);

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    if (Object.prototype.hasOwnProperty.call(req.body, "firstName")) {
      user.firstName = firstName;
    }
    if (Object.prototype.hasOwnProperty.call(req.body, "lastName")) {
      user.lastName = lastName;
    }
    if (Object.prototype.hasOwnProperty.call(req.body, "avatarUrl")) {
      user.avatarUrl = avatarUrl;
    }
    if (Object.prototype.hasOwnProperty.call(req.body, "bio")) {
      user.bio = bio;
    }
    if (Object.prototype.hasOwnProperty.call(req.body, "githubUrl")) {
      user.githubUrl = githubUrl;
    }
    if (Object.prototype.hasOwnProperty.call(req.body, "linkedinUrl")) {
      user.linkedinUrl = linkedinUrl;
    }
    // Keep legacy name in sync for places that still use it
    if (
      Object.prototype.hasOwnProperty.call(req.body, "firstName") ||
      Object.prototype.hasOwnProperty.call(req.body, "lastName")
    ) {
      const combinedName = `${user.firstName} ${user.lastName}`.trim();
      if (combinedName) {
        user.name = combinedName;
      }
    }

    await user.save();

    return res.json({
      success: true,
      message: "Profile updated",
      userData: {
        name: user.name,
        firstName: user.firstName,
        lastName: user.lastName,
        avatarUrl: user.avatarUrl,
        bio: user.bio,
        githubUrl: user.githubUrl,
        linkedinUrl: user.linkedinUrl,
        isAccountVerified: user.isAccountVerified,
        lectureProgress: user.lectureProgress || {},
      },
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
