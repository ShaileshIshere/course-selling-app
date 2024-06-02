const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://shailesh:d2Ps0UQEnEcmUUkM@cluster0.b5xkmr9.mongodb.net/deleting_course_selling_app');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username : String,
    password : String 
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username : String,
    password : String,
    purchasedCourses : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'course'
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title : String,
    description : String,
    imageLink : String,
    price : Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}