const apiService = require("./userApiCalls");
const FormData = require("form-data");

const arcToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMjc0OCIsImZpcnN0X25hbWUiOiJwdXJpc3QiLCJsYXN0X25hbWUiOiJzaW1vbiIsImVtYWlsIjoibXFya3NpbW9uQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwidmFsaWRpdHkiOjF9.o2zAZDhlnks_it3BJfMkBia5IDot-HnXGxlYhO12p1w";

// apiService.fetchTopCourses().then(data => console.log(data))

// apiService.fetchCategories().then(data => console.log(data))

// apiService.fetchCategorywiseCourses(14).then(data => console.log(data))

// apiService.fetchCourseById(1).then(data => console.log(data))

// apiService.fetchAllSection(arcToken, "4").then(data => console.log(data))

// apiService.fetchAllLessonsSectionWise(arcToken, "179").then(data => console.log(data))

// apiService.fetchSystemLanguages().then(data => console.log(data))

// apiService.fetchCourseBySearchString("Figma").then(data => console.log(data))

// apiService.fetchSystemSettings().then(data => console.log(data))

// apiService
//   .signUp("evelyn", "simon", "evelynsimon@gmail.com", "1234567")
//   .then((data) => console.log(data));

apiService
  .login("evelynsimon@gmail.com", "1234567")
  .then((data) => console.log(data));

// apiService.forgotPassword("marcusdashe.developer@gmail.com").then(data => console.log(data))

// apiService.updateUserData(arcToken, {
//     email: "mqrksimon@gmail.com",
//     fName: "purist",
//     lName: "simon",
//     fbLink: "https://www.facebook.com/puristsimon",
//     twLink: "https://www.twitter.com/marcusdashe",
//     lkLink: "https://www.linkedin.com/marcusdashe",
//     biography: "proudly aspie"
// }).then(data => console.log(data))

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

// apiService.resetPassword(arcToken, "75356ab", "7654321", "7654321").then(data => console.log(data))

// apiService.fetchUserInfo(arcToken).then(data => console.log(data))

// apiService.enrol(arcToken, '7').then(data => console.log(data))

// apiService.fetchMyCourse(arcToken).then(data => console.log(data))

// apiService.fetchMyWishList(arcToken).then(data => console.log(data))

// apiService.toggleWishListItem(arcToken).then(data => console.log(data))

// apiService.fetchLessonDetails(arcToken, "523").then(data => console.log(data))

// apiService.fetchCourseDetails(arcToken, "2").then(data => console.log(data))

// apiService.submitQuiz(arcToken, "560").then(data => console.log(data.data.submitted_quiz_info[1]))

// apiService.submitQuiz(arcToken, "560").then(data => console.log(data))

// const formData = new FormData()

// formData.append('file', {
//     uri: Platform.OS === 'android' ? uri : 'file://' + photo.uri,
//     name: 'test',
//     type: 'image/jpeg' // or your mime type what you want
// });
