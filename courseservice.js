const courses = require('./coursedb');

function getCourses() {
    return courses;
}

function getCourse(code) {
    return courses.find((course) => course.code == code);
}

function getByDuration(duration) {
    return courses.filter(course => course.duration == duration);
}

function getByCredits(credits) {
    return courses.filter(course => course.credits == credits);
}

module.exports = { getCourses, getCourse, getByDuration, getByCredits };
