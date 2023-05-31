"use strict";
var Course = /** @class */ (function () {
    function Course(title, description) {
        this.wheels = new Array();
        this.title = title;
        this.description = description;
    }
    Course.prototype.addWheel = function (wheel) {
        this.wheels.push(wheel);
    };
    return Course;
}());
