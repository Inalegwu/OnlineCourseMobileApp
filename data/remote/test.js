const apiService = require("./userApiCalls")
// const FormData = require("form-data")

const arcToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMjc0OCIsImZpcnN0X25hbWUiOiJNYXJjdXMiLCJsYXN0X25hbWUiOiJTaW1vbiIsImVtYWlsIjoibXFya3NpbW9uQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwidmFsaWRpdHkiOjF9.riU26T2q8vr3-KB89Tfq57D2gsXg4Nc99m3bre8ZCy8"


// apiService.fetchTopCourses().then(data => console.log(data))

// apiService.fetchCategories().then(data => console.log(data))

// apiService.fetchSubCategories(1).then(data => console.log(data))

// apiService.fetchCategorywiseCourses(14).then(data => console.log(data))

// apiService.fetchCourseById(2).then(data => console.log(data))

// apiService.fetchCourseDetails(arcToken, "24").then(data => console.log(data))


// apiService.fetchCourseBySearchString("Plumbing").then(data => console.log(data))

// apiService.fetchAllSection(arcToken, "7").then(data => console.log(data))

// apiService.fetchAllLessonsSectionWise(arcToken, "55").then(data => console.log(data))

// apiService.fetchSystemSettings().then(data => console.log(data))

// apiService.fetchSystemLanguages().then(data => console.log(data))

// apiService.fetchImage("course_thumbnail").then(data=> console.log(data))

// apiService.signUp("lois", "golu", "loisgolu@yahoomail.com", "23").then(data => console.log(data))

// apiService.signUp("thomas", "benjamin", "thomasbenjamin@gmail.com", "7").then(data => console.log(data))

// apiService.login("mqrksimon@gmail.com", "1").then(data => console.log(data))
// apiService.login("thomasbenjamin@gmail.com", "7").then(data => console.log(data))
// crisimon@gmail.com    -   123456
// mqrksimon@gmail.com   -   1

// apiService.forgotPassword("mqrksimon@gmail.com").then(data => console.log(data))

// apiService.updateUserData(arcToken, {
//     email: "mqrksimon@gmail.com",
//     fName: "Marcus",
//     lName: "Dashe",
//     fbLink: "https://www.facebook.com/purist",
//     twLink: "https://www.twitter.com/purist",
//     lkLink: "https://www.linkedin.com/purist",
//     biography: "Catarrh want to kill me"
// }).then(data => console.log(data))

// apiService.updateUserData(arcToken, {
//     email: "mqrksimon@gmail.com",
//     fName: "Marcus",
//     lName: "Simon",  
//     fbLink: "https://www.facebook.com/marcussimon",
//     twLink: "https://www.twitter.com/marcussimon",
//     lkLink: "https://www.linkedin.com/marcussimon",
//     biography: "Aspie"
// }).then(data => console.log(data))

// apiService.resetPassword(arcToken, "7", "1", "1").then(data => console.log(data))

// apiService.fetchUserInfo(arcToken).then(data => console.log(data))

// apiService.enrol(arcToken, 24).then(data => console.log(data))

/* apiService.fetchEnrolmentHistory(arcToken).then( data => console.log(data.data)) */ //data.message.map(obj => console.log(obj)))

// apiService.fetchMyCourse(arcToken).then(data => console.log(data))

// apiService.fetchMyWishList(arcToken).then(data => console.log(data))

// apiService.toggleWishListItem(arcToken).then(data => console.log(data))

/* apiService.fetchMyCoursesCategoryWise(arcToken, "7").then(data => console.log(data)) */

// apiService.fetchLessons(arcToken, "course", "19").then(data => console.log(data)) //7 

// apiService.fetchLessonDetails(arcToken, "334").then(data => console.log(data))

// apiService.fetchLessonFileDetails("334").then(data => console.log(data))

// apiService.fetchLessonFileUrl("334").then(data => console.log(data))

// apiService.fetchLessonVideoUrl("334").then(data => console.log(data))

// apiService.fetchLessonThumbnailUrl(arcToken, "549").then(data => console.log(data))

// apiService.fetchInstructorsByIdOrWithoutID(arcToken).then(data => console.log(data))

// apiService.coursePurchase(arcToken, "20,000.00", 16).then(data => console.log(data))

// apiService.fetchPaymentHistory(arcToken).then(data => console.log(data))

apiService.fetchPaymentDetails(arcToken, 32).then(data => console.log(data))

// apiService.saveCourseProgress(arcToken, "492", "1").then(data => console.log(data))

/*********************** YET TO BE IMPLEMENTED ************************************/

// apiService.submitQuiz(arcToken, "560").then(data => console.log(data.data.submitted_quiz_info[1]))

// apiService.submitQuiz(arcToken, "560").then(data => console.log(data))

// const formData = new FormData()

// formData.append('file', {
//     uri: Platform.OS === 'android' ? uri : 'file://' + photo.uri,
//     name: 'test',
//     type: 'image/jpeg' // or your mime type what you want
// });



