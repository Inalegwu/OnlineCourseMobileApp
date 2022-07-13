"use strict"

const axios = require("axios").default


const API_BASE_URI = "https://e-limi.africa/api"

async function apiCall(config){
    try{
        let res = await axios({ ...config, baseURL: API_BASE_URI })
        if(res.status === 200 && res.data !== null)
            return { status: true, data : res.data }
        else 
            return { status: true, message: "Failed to fetch data" }
        }  
    catch(ex){
        return { status: false, message : ex.message }
    }
}

module.exports =  {

    /***** Unauthenticated Routes ****/

    // Get All Top Courses or a Course by ID
    fetchTopCourses :  (courseId="") => { 
                    if(courseId)  
                        return apiCall({
                            url:`/top_courses/${courseId}`
                        })
                    else 
                        return apiCall({
                            url: `/top_courses`
                        })
                },

    // Get all Categories or a Category by ID
    fetchCategories :  (categoryId="") =>  {
                    if(categoryId)
                        return apiCall({
                            url: `/categories/${categoryId}`
                        })
                    else
                        return apiCall({
                            url: `/categories`
                        })
            },

    // Fetch all the courses belong to a certain category
    fetchCategorywiseCourses : (categoryId="") => {
                if(categoryId)
                    return apiCall({
                        url: '/category_wise_course',  
                        params: { category_id: categoryId }
                    })
    },

    // Fetch Course by ID
    fetchCourseById : (courseId) => {
        if(courseId){
            return apiCall({
                url: "/course_object_by_id", 
                params: { course_id: courseId }
            })
        }
    },

    // Fetch Course by Search String
    fetchCourseBySearchString : (searchString) => {
        if(searchString){
            return apiCall({
                url: "/courses_by_search_string", 
                params: { search_string: searchString }
            })
        }
    },
    
    // Fetch all Languages Supported by the System
    fetchSystemLanguages : () => {
        return apiCall({
            url: "/api/languages", 
        })
    },
    
    // Fetch all System Settings
    fetchSystemSettings: () => {
        return apiCall({
            url: "/system_settings"
        })
    },

    // Sign up New User
    signUp: (fName, lName, email, password) => {
        return apiCall({
            url: "/signup",
            method: "post",
            data: `first_name=${fName}&last_name=${lName}&email=${email}&password=${password}`
        })
    },

    // Forgot Password
    forgotPassword: (email) => {
        return apiCall({
            url: "/forgot_password",
            method: "post",
            data: `email=${email}`
        })
    },

   
    /* Authenticated Routes */

    // Login User
    login : (email, password) => { 
        if(email && password)
            return apiCall({
                url: "/login", 
                params: { email, password } 
            })
        },

     // Reset Password
     resetPassword: (token, currentPassword, newPassword, confirmedNewPassword) => {
        if(token)
        return apiCall({
            url: "/update_password",
            method: "post",
            headers: { Auth: token },
            data: `current_password=${currentPassword}&new_password=${newPassword}&confirm_password=${confirmedNewPassword}`
        })
    },
    
    // Update User Data
    updateUserData: (token, data) => {
        if(token && data)
            return apiCall({
                url: "/update_userdata",
                method: "post",
                headers: { Auth: token },
                data: `email=${data.email}&first_name=${data.fName}&last_name=${data.lName}&facebook_link=${data.fbLink}&twitter_link=${data.twLink}&linkedin_link=${data.lkLink}&biography=${data.biography}`
            })

    },

    //  Use React Native react-native-image-picker 
    // Upload User Image
    uploadUserImage: (token, imageData) => {
        if(token && imageData)
            return apiCall({
                url: "/upload_user_image",
                method: "post",
                headers: { 
                    Auth: token,
                    'Content-Type': 'multipart/form-data'
                },
                data: imageData
            })
    },
   

    // Get User Info
    fetchUserInfo: (token) => {
            if(token)
            return apiCall({
                url: "/userdata",
                headers: { Auth: token}
            })
    },
    
    // Enrol into a Course
    enrol : (token, courseID) => {
        if(token && courseID){
            return apiCall({
                url: "/enrol",
                method: "post",
                data: `course_id=${courseID}`,
                headers: { Auth: token }
            })
        }
    },
            
    // My Course
    fetchMyCourse: (token) => {
            if(token){
                return apiCall({ 
                    url: "/my_courses",
                    headers: { Auth: token }
                })
            }
    },

    // My Wish List
    fetchMyWishList: (token) => {
        if(token){
            return apiCall({
                url: "/my_wishlist",
                headers: { Auth: token } 
            })
        }
    },
    // Get All Sections by Course ID
    fetchAllSection: (token, courseID) => {
        return apiCall({
            url:  "/sections",
            headers: {Auth: token },
            params: { course_id: courseID}
        })
    },

    // Get All Sectionwise Lessons
    fetchAllLessonsSectionWise: (token, sectionID) => {
        return apiCall({
            url: "/section_wise_lessons",
            headers: { Auth: token },
            params: { section_id: sectionID}
        })
    },

    // Toggle Wish List Items
    toggleWishListItem: (token) => {
        return apiCall({
            url: "/toggle_wishlist_items",
            headers: {Auth: token}
        })
    },

    // Fetch Lesson Details
    fetchLessonDetails: (token, lessonID) => {
        return apiCall({
            url: "/lesson_details",
            headers: { Auth: token},
            params: {lesson_id: lessonID}
        })
    },

    // Fetch Course Details
    fetchCourseDetails: (token, courseID) => {
        return apiCall({
            url: "/course_details_by_id",
            headers: { Auth: token },
            params: { course_id: courseID }
        })
    },

    // Submit Quiz 
    submitQuiz: (token, lessonID) => {
        return apiCall({
            url: "submit_quiz",
            method: "post",
            headers: { Auth: token },
            data: `lesson_id=${lessonID}`
        })
    },

    // enrol_to_free_course     Crud_Model.php

      
    // enrol_a_user_manually   Crud_Model.php

 
    // course_purchase      Crud_Model.php

    // Update user password
    updatePassword: (token, newPassword)=> {
        return apiCall({
            url: "/update_password",
            headers: { Auth: token },
            data: `lesson_id=${lessonID}`
        })
    }
    

    
    

    
        


    /**  TODO API  **/
    // filter_course

    // course_data

    // get_image

    //  is_purchased

    // certificate_addon_get

    // get_quiz_questions  CRUD_Model.php

    // get_quiz_question_by_id   Crud_Model.php

    // add_user  User_Model

    // get_instructor User_Model

   
}