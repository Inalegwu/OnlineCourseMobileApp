const apiService = require("./userApiCalls");
const FormData = require("form-data");

const arcToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMjc0OCIsImZpcnN0X25hbWUiOiJwdXJpc3QiLCJsYXN0X25hbWUiOiJzaW1vbiIsImVtYWlsIjoibXFya3NpbW9uQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwidmFsaWRpdHkiOjF9.YkwO_ewh2j8HYcpoO-LdhNNaid_qLJno1UtoXSRjdJY";
// const criToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMzE4OCIsImZpcnN0X25hbWUiOiJjaHJpc3RhYmVsIiwibGFzdF9uYW1lIjoic2ltb24iLCJlbWFpbCI6ImNyaXNpbW9uQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwidmFsaWRpdHkiOjF9.z-ut9-ewWv3x8UalTQOcIRWpwL7KHa4ZdCRwNAX0ig0'

// apiService.fetchTopCourses().then(data => console.log(data))

apiService.fetchCategories().then((data) => console.log(data));

// apiService.fetchSubCategories().then(data => console.log(data))

// apiService.fetchCategorywiseCourses(14).then(data => console.log(data))

// apiService.fetchCourseById(21).then(data => console.log(data))

// apiService.fetchCourseDetails(arcToken, "24").then(data => console.log(data))

// apiService.filterCourse().then(data => console.log(data))

//apiService.fetchCourseBySearchString("Figma").then(data => console.log(data))

// apiService.fetchAllSection(arcToken, "19").then(data => console.log(data))

// apiService.fetchAllLessonsSectionWise(arcToken, "177").then(data => console.log(data))

// apiService.fetchSystemSettings().then(data => console.log(data))

// apiService.fetchSystemLanguages().then(data => console.log(data))

// apiService.fetchImage("course_thumbnail").then(data=> console.log(data))

// apiService.signUp("christabel", "simon", "crisimon@gmail.com", "123456").then(data => console.log(data))

// apiService
//   .login("ikwueinalegwu@gmail.com", "inalegwu2004")
//   .then((data) => console.log(data));
// crisimon@gmail.com    -   123456
// mqrksimon@gmail.com   -   7654321
// apiService.forgotPassword("mqrksimon@gmail.com").then(data => console.log(data))

// apiService.updateUserData(arcToken, {
//     email: "mqrksimon@gmail.com",
//     fName: "Nanpe",
//     lName: "Dashe",
//     fbLink: "https://www.facebook.com/puristsimon",
//     twLink: "https://www.twitter.com/marcusdashe",
//     lkLink: "https://www.linkedin.com/marcusdashe",
//     biography: "Congenial"
// }).then(data => console.log(data))

// apiService.resetPassword(arcToken, "58a8564", "7654321", "7654321").then(data => console.log(data))

// apiService.fetchUserInfo(arcToken).then(data => console.log(data))

// apiService.enrol(arcToken, '16').then(data => console.log(data))

// apiService.fetchMyCourse(arcToken).then(data => console.log(data))

// apiService.fetchMyWishList(arcToken).then(data => console.log(data))

// apiService.fetchMyCoursesCategoryWise(arcToken, "1").then(data => console.log(data))

// apiService.toggleWishListItem(arcToken).then(data => console.log(data))

// apiService
//   .fetchLessons(arcToken, "course", "7")
//   .then((data) => console.log(data));

// apiService.fetchLessonDetails(arcToken, "334").then(data => console.log(data))

// apiService.fetchLessonThumbnailUrl(arcToken, "334").then(data => console.log(data))

// apiService.saveCourseProgress(arcToken, "523").then(data => console.log(data))

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
