const apiService = require("./userApiCalls")

// apiService.fetchTopCourses(19).then(data => console.log(data.data))

// apiService.fetchCategories().then(data => console.log(data))

// apiService.fetchCategorywiseCourses(14).then(data => console.log(data))

// apiService.fetchCourseById(1).then(data => console.log(data))

apiService.fetchSystemLanguages().then(data => console.log(data))

// apiService.login("marcusdashe.developer@gmail.com", "_Marc406").then(data => console.log(data.data))

