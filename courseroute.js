const express = require('express');
const router = express.Router();
const courseService = require('./courseservice');

router.get('/', (req, res) => {
    const results = courseService.getCourses();
    if (results) {
        res.status(200).json(results);
    } else {
        res.status(404).send("Sorry, No courses found!");
    }
});

router.get('/:code', (req, res) => {
    const code = req.params.code;
    const results = courseService.getCourse(code);
    if (results) {
        res.status(200).json(results);
    } else {
        res.status(404).send("Sorry, No course found!");
    }
});

router.get('/duration/:duration', (req, res) => {
    const duration = req.params.duration;
    const results = courseService.getByDuration(duration);
    if (results) {
        res.status(200).json(results);
    } else {
        res.status(404).send("Sorry, No courses found with this duration!");
    }
});

router.get('/credits/:credits', (req, res) => {
    const credits = req.params.credits;
    const results = courseService.getByCredits(credits);
    if (results) {
        res.status(200).json(results);
    } else {
        res.status(404).send("Sorry, No courses found with this credit count!");
    }
});

module.exports = router;
