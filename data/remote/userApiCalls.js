"use strict";

const axios = require("axios").default;

async function apiCall(url, dataLoad = null, method = "GET", config = null) {
  let res;

  try {
    switch (method) {
      // category_id
      case "GET":
        // const params = new URLSearchParams(dataLoad)
        res = Boolean(config)
          ? await axios.get(url, config)
          : Boolean(dataLoad)
          ? await axios.get(url, { params: dataLoad })
          : await axios.get(url);
        break;
      case "POST":
        Boolean(config)
          ? (res = await axios.post(url, dataLoad, config))
          : (res = await axios.post(url, dataLoad));
        break;
      case "PUT":
        Boolean(config)
          ? (res = await axios.put(url, dataLoad, config))
          : (res = await axios.put(url, dataLoad));
        break;
      default:
        console.log("Method not Supported");
    }
    if (res.status === 200 && res.data) return { status: true, data: res.data };
    else return { status: true, data: null };
  } catch (ex) {
    return { status: false, data: ex.message };
  }
}

module.exports = {
  /***** Unauthenticated Routes ****/

  // Get All Top Courses or a Course by ID
  fetchTopCourses: (courseId = "") => {
    if (courseId)
      return apiCall(`https://e-limi.africa/api/top_courses/${courseId}`);
    else return apiCall("https://e-limi.africa/api/top_courses");
  },

  // Get all Categories or a Category by ID
  fetchCategories: (categoryId = "") => {
    if (categoryId)
      return apiCall(`https://e-limi.africa/api/categories/${categoryId}`);
    else return apiCall("https://e-limi.africa/api/categories");
  },

  // Fetch all the courses belong to a certain category
  fetchCategorywiseCourses: (categoryId = "") => {
    if (categoryId)
      return apiCall("https://e-limi.africa/api/category_wise_course", {
        category_id: categoryId,
      });
  },

  // Fetch Course by ID
  fetchCourseById: (courseId) => {
    if (courseId) {
      return apiCall("https://e-limi.africa/api/course_object_by_id", {
        course_id: courseId,
      });
    }
  },

  // Fatch all Languages Supported by the System
  fetchSystemLanguages: () => {
    return apiCall("https://e-limi.africa/api/languages");
  },

  /* Authenticated Routes */

  // Login User
  login: (email, password) => {
    if (email && password)
      return apiCall("https://e-limi.africa/api/login", { email, password });
  },

  // Update User Data
  updateUserData: (userData) => {
    if (userData)
      return apiCall("https://e-limi.africa/api/update_userdata", {
        ...userData,
      });
  },

  signUp: () => {},
};
