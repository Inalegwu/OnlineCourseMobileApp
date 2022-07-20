const apiService = require("./userApiCalls")
const FormData = require("form-data")

const arcToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMjc0OCIsImZpcnN0X25hbWUiOiJOYW5wZSIsImxhc3RfbmFtZSI6IkRhc2hlIiwiZW1haWwiOiJtcXJrc2ltb25AZ21haWwuY29tIiwicm9sZSI6InVzZXIiLCJ2YWxpZGl0eSI6MX0.tVjp-EdjEBMZv5H061iKYEHek0cXrbnAJZEsVXL4feE'
const criToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMzE4OCIsImZpcnN0X25hbWUiOiJjaHJpc3RhYmVsIiwibGFzdF9uYW1lIjoic2ltb24iLCJlbWFpbCI6ImNyaXNpbW9uQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwidmFsaWRpdHkiOjF9.z-ut9-ewWv3x8UalTQOcIRWpwL7KHa4ZdCRwNAX0ig0'

// apiService.fetchTopCourses().then(data => console.log(data))

// apiService.fetchCategories().then(data => console.log(data))

// apiService.fetchSubCategories(1).then(data => console.log(data))

// apiService.fetchCategorywiseCourses(14).then(data => console.log(data))

// apiService.fetchCourseById(1).then(data => console.log(data))

// apiService.fetchCourseDetails(arcToken, "24").then(data => console.log(data))

// apiService.filterCourse().then(data => console.log(data))

// apiService.fetchCourseBySearchString("Figma").then(data => console.log(data))

// apiService.fetchAllSection(arcToken, "19").then(data => console.log(data))

// apiService.fetchAllLessonsSectionWise(arcToken, "177").then(data => console.log(data))

// apiService.fetchSystemSettings().then(data => console.log(data))

// apiService.fetchSystemLanguages().then(data => console.log(data))

// apiService.fetchImage("course_thumbnail").then(data=> console.log(data))

// apiService.signUp("lois", "golu", "loisgolu@yahoomail.com", "23").then(data => console.log(data))
// apiService.signUp("thomas", "benjamin", "thomasbenjamin@gmail.com", "7").then(data => console.log(data))

// apiService.login("mqrksimon@gmail.com", "1").then(data => console.log(data))
// crisimon@gmail.com    -   123456
// mqrksimon@gmail.com   -   1

// apiService.forgotPassword("mqrksimon@gmail.com").then(data => console.log(data))

// apiService.updateUserData(criToken, {
//     email: "crisimon@gmail.com",
//     fName: "Christabel",
//     lName: "Dashe",
//     fbLink: "https://www.facebook.com/chrissimon",
//     twLink: "https://www.twitter.com/chrissimon",
//     lkLink: "https://www.linkedin.com/chrissimon",
//     biography: "My girl"
// }).then(data => console.log(data))

// apiService.updateUserData(arcToken, {
//     email: "mqrksimon@gmail.com",
//     fName: "Nanpe",
//     lName: "Dashe",
//     fbLink: "https://www.facebook.com/puristsimon",
//     twLink: "https://www.twitter.com/marcusdashe",
//     lkLink: "https://www.linkedin.com/marcusdashe",
//     biography: "Congenial"
// }).then(data => console.log(data))

// apiService.resetPassword(arcToken, "def016d", "1", "1").then(data => console.log(data))

// apiService.fetchUserInfo(arcToken).then(data => console.log(data))

// apiService.enrol(criToken, '16').then(data => console.log(data))

// apiService.fetchEnrolmentHistory(arcToken).then(data => data.data.message.map(obj => console.log(obj)))

// apiService.fetchMyCourse(criToken).then(data => console.log(data))

// apiService.fetchMyWishList(arcToken).then(data => console.log(data))

// apiService.toggleWishListItem(arcToken).then(data => console.log(data))

// apiService.fetchMyCoursesCategoryWise(arcToken, "1").then(data => console.log(data))

// apiService.fetchLessons(arcToken, "course", "7").then(data => console.log(data)) 

// apiService.fetchLessonDetails(arcToken, "334").then(data => console.log(data))

// apiService.fetchLessonThumbnailUrl(arcToken, "549").then(data => console.log(data))

// apiService.fetchInstructorsByIdOrWithoutID(arcToken).then(data => console.log(data))

// apiService.coursePurchase(arcToken, "10,000.00", 16).then(data => console.log(data))

// apiService.fetchPaymentHistory(arcToken).then(data => console.log(data))

// apiService.fetchPaymentDetails(arcToken, 23).then(data => console.log(data))

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

// function callit() {
//     let formData = new FormData()
//     formData.append('image',
//         {
//             uri: "",
//             name:`${arcToken}.jpg`,
//             type:'image/jpg'
//         })
//     apiService.uploadUserImage(arcToken, formData).then(data => console.log(data))
// };


