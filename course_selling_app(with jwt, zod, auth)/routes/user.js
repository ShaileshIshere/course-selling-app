const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username,
        password
    });

    res.json({
        msg : "user has been created successfuly"
    })
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const user = User.find({
        username,
        password
    });

    if(user) {
        const token = jwt.sign({
            username,
            password
        }, JWT_SECRET);
        res.json({
            token
        });
    }
    else {
        res.status(411).json({
            msg : "Incorrect username and password"
        });
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({});

    res.json({
        courses : response
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseID = req.params.courseId;
    const username = req.username;

    await User.updateOne({
        username : username
    }, {
        "$push": {
            purchasedCourses : courseID
        }
    });

    res.json({
        msg : "purchase compelete !!"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username : req.username
    });

    const courses = await Course.find({
        _id: {
            "$in" : user.purchasedCourses
        }
    });

    res.json({
        courses : courses
    })
});

module.exports = router