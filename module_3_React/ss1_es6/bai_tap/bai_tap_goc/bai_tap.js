let courses = [ 
  { 
    id: 1, 
    title: "ReactJS Tutorial", 
    rating: 4.2, 
  }, 
  { 
    id: 2, 
    title: "Angular Tutorial", 
    rating: 2.5, 
  }, 
  { 
    id: 3, 
    title: "VueJS Tutorial", 
    rating: 3.8, 
  }, 
  { 
    id: 4, 
    title: "Java Tutorial", 
    rating: 4, 
  }, 
  { 
    id: 5, 
    title: "JavaScript Tutorial", 
    rating: 3.5, 
  }, 
];
//yêu cầu 1
console.log("Yeu cau 1: ");
const newCourses = courses.filter((e,i) => e.rating >= 4);
newCourses.forEach((e, i) => {    
    console.log(`ID: ${e.id}   |title:  ${e.title}   |Rating:  ${e.rating}`); 
});

//yêu cầu 2
console.log("Yeu cau 2: ");
const newCoursesRatingLess = courses.filter((e,i) => e.rating < 4);
newCoursesRatingLess.forEach((e, i) => {  
    console.log(`<id> ${e.id} - <title> ${e.title} - ${e.rating} <rating>`); 
});

//yêu cầu 3:
let addedCourses = [ 
    { 
      id: 6, 
      title: "PHP Tutorial", 
      rating: 3, 
    }, 
    { 
      id: 7, 
      title: "C# Tutorial", 
      rating: 2, 
    }, 
    { 
      id: 8, 
      title: "Docker Tutorial", 
      rating: 3.8, 
    } 
  ]; 
let groupCourses =[...courses,...addedCourses];
console.log(groupCourses);