"use strict";

const axios = require("axios").default;

// const API_BASE_URI = "https://e-limi.africa/api"

async function apiCall(config) {
  try {
    let res = await axios({ ...config, baseURL: "https://e-limi.africa/api" });
    if (res.status === 200 && res.data) return { status: true, data: res.data };
    else return { status: true, message: "Failed to fetch data" };
  } catch (ex) {
    return { status: false, message: ex.message };
  }
}

module.exports = {
  /***** Unauthenticated Routes ****/

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

  // Get all Categories or a Category by ID
  fetchCategories: (categoryId = "") => {
    if (categoryId)
      return apiCall({
        url: `/categories/${categoryId}`,
      });
    else
      return apiCall({
        url: `/categories`,
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
        url: "/course_object_by_id",
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

  // Fetch all Languages Supported by the System
  fetchSystemLanguages: () => {
    return apiCall({
      url: "/api/languages",
    });
  },

  // Fetch all System Settings
  fetchSystemSettings: () => {
    return apiCall({
      url: "/system_settings",
    });
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

  // My Course
  fetchMyCourse: (token) => {
    if (token) {
      return apiCall({
        url: "/my_courses",
        headers: { Auth: token },
      });
    }
  },

  // My Wish List
  fetchMyWishList: (token) => {
    if (token) {
      return apiCall({
        url: "/my_wishlist",
        headers: { Auth: token },
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

  // Get All Sectionwise Lessons
  fetchAllLessonsSectionWise: (token, sectionID) => {
    return apiCall({
      url: "/section_wise_lessons",
      headers: { Auth: token },
      params: { section_id: sectionID },
    });
  },

  // Toggle Wish List Items
  toggleWishListItem: (token) => {
    return apiCall({
      url: "/toggle_wishlist_items",
      headers: { Auth: token },
    });
  },

  // Fetch Lesson Details
  fetchLessonDetails: (token, lessonID) => {
    return apiCall({
      url: "/lesson_details",
      headers: { Auth: token },
      params: { lesson_id: lessonID },
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

  // Submit Quiz
  submitQuiz: (lessonID) => {
    return apiCall({
      url: "submit_quiz",
      method: "post",
      data: {
        lesson_id: lessonID,
      },
    });
  },

  // Update User Data
  // updateUserData: (userData) => {
  //     if(userData)
  //         return apiCall("https://e-limi.africa/api/update_userdata", { ...userData })

  // },

  // signUp: ()=> {

  // }
};
