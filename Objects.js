var course = {
    titie: "Introduction to Cloud Computing",
    code: "12345",
    instrcutor: "william",
    level : "post-graduate",
    views: 0,
    updateViews: function (){
        this.views++;
    }

}


console.log(course);
course.updateViews();  //calling a method of an object (JSON!)

console.log(course);