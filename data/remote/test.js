const apiService = require("./userApiCalls");

// const arcToken =
//   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMjc0OCIsImZpcnN0X25hbWUiOiJNYXJjdXMiLCJsYXN0X25hbWUiOiJEYXNoZSIsImVtYWlsIjoibWFyY3VzZGFzaGUuZGV2ZWxvcGVyQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwidmFsaWRpdHkiOjF9.1CGt3rcoe6R-e0ma6dsH_5Gebnnhuybzx2_q9aa6YUQ";

let arcToken;

// apiService.fetchTopCourses().then(data => console.log(data))

// apiService.fetchCategories().then(data => console.log(data))

// apiService.fetchCategorywiseCourses(14).then(data => console.log(data))

// apiService.fetchCourseById(1).then(data => console.log(data))

// apiService.fetchSystemLanguages().then(data => console.log(data))

// apiService.fetchCourseBySearchString("Figma").then(data => console.log(data))

// apiService.fetchSystemSettings().then(data => console.log(data))

apiService
  .login("siphoikwue@outlook.com", "inalegwu2004")
  .then((data) => console.log(data));

// apiService.fetchMyCourse(arcToken).then((data) => console.log(data));

// apiService.fetchMyWishList(arcToken).then(data => console.log(data))

// apiService.fetchAllSection(arcToken, "19").then(data => console.log(data))

// apiService.fetchAllLessonsSectionWise(arcToken, "179").then(data => console.log(data))

// apiService.toggleWishListItem(arcToken).then(data => console.log(data))

// apiService.fetchLessonDetails(arcToken, "523").then(data => console.log(data))

// (isset($_GET['auth_token']) && !empty($_GET['auth_token'])) || (

// apiService.fetchCourseDetails(arcToken, "7").then(data => console.log(data))

// apiService.submitQuiz("523").then(data => console.log(data))
