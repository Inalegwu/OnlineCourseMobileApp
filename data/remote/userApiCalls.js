"use strict";

const axios = require("axios").default;

const API_BASE_URI = "https://e-limi.africa/api";

async function apiCall(config) {
  try {
    let res = await axios({ ...config, baseURL: API_BASE_URI });
    if (res.status === 200 && res.data !== null)
      return { status: true, data: res.data };
    else return { status: false, message: "Failed to fetch data" };
  } catch (ex) {
    return { status: false, message: ex.message };
  }
}

module.exports = {
  /***** Unauthenticated Routes ****/

  // Get all Categories or a Category by ID
  fetchCategories: (categoryId) => {
    if (categoryId) return apiCall({ url: `categories/${categoryId}` });
    else return apiCall({ url: "categories" });
  },

  // Fetch all Sub Categories By Parent Category
  fetchSubCategories: (parentID) => {
    if (parentID) return apiCall({ url: `sub_categories/${parentID}` });
    else return apiCall({ url: `sub_categories` });
  },

  // Get All Top Courses or a Course by ID
  fetchTopCourses: (courseId = "") => {
    if (courseId)
      return apiCall({
        url: `/top_courses/${courseId}`,
      });
    else
      return apiCall({
        url: `/top_courses`,
      });
  },

  // Fetch all the courses belong to a certain category
  fetchCategorywiseCourses: (categoryId = "") => {
    if (categoryId)
      return apiCall({
        url: "/category_wise_course",
        params: { category_id: categoryId },
      });
  },

  // Fetch Course by ID
  fetchCourseById: (courseId) => {
    if (courseId) {
      return apiCall({
        url: "/course_by_id",
        params: { course_id: courseId },
      });
    }
  },

  // Fetch Course by Search String
  fetchCourseBySearchString: (searchString) => {
    if (searchString) {
      return apiCall({
        url: "/courses_by_search_string",
        params: { search_string: searchString },
      });
    }
  },

  // Get All Sections by Course ID
  fetchAllSection: (token, courseID) => {
    return apiCall({
      url: "/sections",
      headers: { Auth: token },
      params: { course_id: courseID },
    });
  },

  // Fetch all System Settings
  fetchSystemSettings: () => {
    return apiCall({
      url: "/system_settings",
    });
  },

  // Fetch all Languages Supported by the System
  fetchSystemLanguages: () => {
    return apiCall({
      url: "/languages",
    });
  },

  // Get image for course, categories or user image
  // type can either be: user_image, course_thumbnail, category_thumbnail
  fetchImage: (type, identifier = "8") => {
    if (type && identifier) {
      return apiCall({
        url: "image",
        params: { type: type, identifier: identifier },
      });
    }
  },

  // Sign up New User
  signUp: (fName, lName, email, password) => {
    if (fName && lName && email && password)
      return apiCall({
        url: "/signup",
        method: "post",
        data: `first_name=${fName}&last_name=${lName}&email=${email}&password=${password}`,
      });
    else {
      console.log("Please provide all the required fields");
      return 1;
    }
  },

  // Forgot Password
  forgotPassword: (email) => {
    if (email)
      return apiCall({
        url: "/forgot_password",
        method: "post",
        data: `email=${email}`,
      });
    else {
      console.log("Please provide all the required fields");
      return 1;
    }
  },

  /* Authenticated Routes */

  // Login User
  login: (email, password) => {
    if (email && password)
      return apiCall({
        url: "/login",
        params: { email, password },
      });
  },

  // Update User Data
  updateUserData: (token, data) => {
    if (token && data)
      return apiCall({
        url: "/update_userdata",
        method: "post",
        headers: { Auth: token },
        data: `email=${data.email}&first_name=${data.fName}&last_name=${data.lName}&facebook_link=${data.fbLink}&twitter_link=${data.twLink}&linkedin_link=${data.lkLink}&biography=${data.biography}`,
      });
  },

  // Reset Password
  resetPassword: (
    token,
    currentPassword,
    newPassword,
    confirmedNewPassword
  ) => {
    if (token)
      return apiCall({
        url: "/update_password",
        method: "post",
        headers: { Auth: token },
        data: `current_password=${currentPassword}&new_password=${newPassword}&confirm_password=${confirmedNewPassword}`,
      });
  },

  // Update user password
  updatePassword: (token, newPassword) => {
    if (token && newPassword)
      return apiCall({
        url: "/update_password",
        headers: { Auth: token },
        data: `lesson_id=${lessonID}`,
      });
  },
  // Get User Info
  fetchUserInfo: (token) => {
    if (token)
      return apiCall({
        url: "/userdata",
        headers: { Auth: token },
      });
  },

  // Enrol into a Course
  enrol: (token, courseID) => {
    if (token && courseID) {
      return apiCall({
        url: "enroll_free_course",
        data: `course_id=${courseID}`,
        headers: { Auth: token },
      });
    }
  },

  // Fetch My Enrolment History
  fetchEnrolmentHistory: (token) => {
    if (token)
      return apiCall({
        url: "/enrol_history_by_user_id",
        headers: { Auth: token },
      });
  },

  // Fetch My Course
  fetchMyCourse: (token) => {
    if (token)
      return apiCall({
        url: "/my_courses",
        headers: { Auth: token },
      });
  },

  // Fetch My Wish List
  fetchMyWishList: (token) => {
    if (token) {
      return apiCall({
        url: "/my_wishlist",
        headers: { Auth: token },
      });
    }
  },

  // Toggle Wish List Items
  toggleWishListItem: (token) => {
    return apiCall({
      url: "/toggle_wishlist_items",
      headers: { Auth: token },
    });
  },

  // Get all Lessons either by Course ID, Section ID or Lesson ID by setting the type to
  // course, section or lesson together with ID
  fetchLessons: (token, type, id) => {
    if (token && type && id) {
      return apiCall({
        url: "lessons",
        headers: { Auth: token },
        params: { type: type, cou_sec_les_id: id },
      });
    } else console.log("Make sure you supply all the required params");
  },

  // Fetch Lesson Details
  fetchLessonDetails: (token, lessonID) => {
    if (token && lessonID)
      return apiCall({
        url: "/lesson_details",
        headers: { Auth: token },
        params: { lesson_id: lessonID },
      });
  },

  // Fetch Lesson Files Details
  fetchLessonFileDetails: (lessonID) => {
    if (lessonID)
      return apiCall({
        url: "/lesson_file_details",
        params: { lesson_id: lessonID },
      });
  },

  // Fetch Lesson Files URL
  fetchLessonFileUrl: (lessonID) => {
    if (lessonID)
      return apiCall({
        url: "/lesson_file_url",
        params: { lesson_id: lessonID },
      });
  },

  fetchLessonVideoUrl: (lessonID) =>{
    if (lessonID)
    return apiCall({
      url: `/lesson_videourl/${lessonID}`,
    })
  },

  fetchLessonThumbnailUrl: (token, lessonID) => {
    if (token && lessonID) {
      return apiCall({
        url: "lesson_thumbnail",
        headers: { Auth: token },
        params: { lesson_id: lessonID },
      });
    } else console.log("Make sure you supply all the required params");
  },

  // Get All Sectionwise Lessons
  fetchAllLessonsSectionWise: (token, sectionID) => {
    return apiCall({
      url: "/section_wise_lessons",
      headers: { Auth: token },
      params: { section_id: sectionID },
    });
  },

  // Fetch Course Details
  fetchCourseDetails: (token, courseID) => {
    return apiCall({
      url: "/course_details_by_id",
      headers: { Auth: token },
      params: { course_id: courseID },
    });
  },

  // Fetch My Courses by Category Wise
  fetchMyCoursesCategoryWise: (token, categoryID) => {
    if (token && categoryID) {
      return apiCall({
        url: "my_courses_by_category_id",
        headers: { Auth: token },
        params: { category_id: categoryID },
      });
    } else console.log("Make sure you supply all the required params");
  },
  // Fetch Instructor(s)
  fetchInstructorsByIdOrWithoutID: (token, instructorID) => {
    if (token && instructorID)
      return apiCall({
        url: "instructor",
        headers: { Auth: token },
        params: { instructor_id: instructorID },
      });
    else if (typeof instructorID === "undefined" || token)
      return apiCall({ url: "instructor", headers: { Auth: token } });
    else
      return {
        status: "failed",
        reason: "token and instructor ID is not given",
      };
  },

  //  Use React Native react-native-image-picker
  // Upload User Image
  uploadUserImage: (token, imageData) => {
    if (token && imageData)
      return apiCall({
        url: "/upload_user_image",
        method: "post",
        headers: {
          Auth: token,
          "Content-Type": "multipart/form-data",
        },
        data: imageData,
      });
  },

  // Save Course Progress
  saveCourseProgress: (token, lessonID, progress) => {
    return apiCall({
      url: "/save_course_progress",
      headers: { Auth: token },
      params: { lesson_id: lessonID, progress: progress },
    });
  },

  // Course Purchase and create Records on Payment Table
  coursePurchase: (token, amountPaid, courseID, method = "flutterwave") => {
    if (token && method && amountPaid && courseID) {
      return apiCall({
        url: "course_purchase",
        method: "post",
        data: `method=${method}&amount_paid=${amountPaid}&course_id=${courseID}`,
        headers: { Auth: token },
      });
    }
  },
  // 2748

  // Fetch Payment History of a user
  fetchPaymentHistory: (token) => {
    if (token)
      return apiCall({
        url: "purchase_history",
        headers: { Auth: token },
      });
    else console.log("Unauthorized access");
  },

  // Fetch Payment Details by Payment ID
  fetchPaymentDetails: (token, paymentID) => {
    if (token && paymentID)
      return apiCall({
        url: "payment_details_by_id",
        headers: { Auth: token },
        params: { payment_id: paymentID },
      });
    else console.log("Illegal arguments");
  },

  // upload_user_image    User_Model

  // get_user_image_url   User_Model

  // add_submission       Crud_Model.php

  // Submit Quiz
  submitQuiz: (token, lessonID) => {
    return apiCall({
      url: "submit_quiz",
      method: "post",
      headers: { Auth: token },
      data: `lesson_id=${lessonID}`,
    });
  },

  /**  TODO API  **/

  // certificate_addon_get

  // get_quiz_questions  Crud_Model.php

  // get_quiz_question_by_id   Crud_Model.php
};
