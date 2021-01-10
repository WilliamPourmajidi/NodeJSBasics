var course = {
    titie: "Introduction to Cloud Computing",
    code: "12345",
    instructor: "william",
    level: "post-graduate",
    views: 0,
    updateViews: function () {
        this.views++;
    }

}

console.log(course);
course.updateViews();  //calling a method of an object (JSON!)
console.log(course);

//defining an object constructor

function Course(title, code, instructor, level, views) {
    this.title = title;
    this.code = code;
    this.instructor = instructor;
    this.level = level;
    this.views = views;
    this.updateViews = function () {
       return this.views++;
    }
}

var course_1 = new Course('Java Script Basics', 1104, `William Pourmajidi`, `Basic`, 0);

console.log(`our object is ready \n`, course_1)
// incrementing views
course_1.updateViews();
console.log(`lets check our varibale after increment\n`, course_1)

// a better way is to put the objects in an array
var courses = [
    new Course('Intro to A', 1100, `William Pourmajidi`, `Basic`, 0),
    new Course('Intro to B', 1101, `William Pourmajidi`, `Basic`, 0),
    new Course('Application of A', 1103, `William Pourmajidi`, `Advanced`, 0),
    new Course('Application of B', 1104, `William Pourmajidi`, `Advanced`, 0)
]

console.log(courses);

//accessing the elements of objects in the array
courses[0].updateViews();
courses[2].updateViews();

console.log(courses[0].views);
console.log(courses[1].views);
console.log(courses[2].views);
console.log(courses[3].views);

