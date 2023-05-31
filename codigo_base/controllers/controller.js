"use strict";
var course;
var caso;
function submitCourse() {
    // primer form
    var errores = 0;
    var courseInput = document.getElementById("courseInput");
    var descriptionInput = (document.getElementById("descriptionInput"));
    // let colorInput = <HTMLInputElement>document.getElementById("colorInput");
    course = new Course(courseInput.value, descriptionInput.value);
    showVehicle();
    showStudentForm();
}
function showVehicle() {
    var carTitle = document.getElementById("carTitle");
    var plateOutput = document.getElementById("plateOutput");
    var brandOutput = document.getElementById("brandOutput");
    // let colorOutput = <HTMLInputElement>document.getElementById("colorOutput");
    carTitle.innerText = "Car:";
    plateOutput.innerText = "Plate: " + course.title;
    brandOutput.innerText = "Brand: " + course.description;
    // colorOutput.innerText = "Color: " + car.color;
}
function submitWheelForm() {
    var errores = 0;
    for (var i = 1; i <= 4; i++) {
        var brandWheel = (document.getElementById("brandWheel" + i));
        var diameterWheel = (document.getElementById("diameterWheel" + i));
        var wheel_generica = new Wheel(Number(diameterWheel.value), brandWheel.value);
        car.addWheel(wheel_generica);
    }
    console.log(car);
    showWheels();
}
function showWheels() {
    var wheelTitle = document.getElementById("wheelTitle");
    var wheelOutput1 = (document.getElementById("wheelOutput1"));
    var wheelOutput2 = (document.getElementById("wheelOutput2"));
    var wheelOutput3 = (document.getElementById("wheelOutput3"));
    var wheelOutput4 = (document.getElementById("wheelOutput4"));
    wheelTitle.innerHTML = "Wheels:";
    wheelOutput1.innerHTML =
        "<b>Wheel 1:</b><br>  " +
            "Brand: " +
            car.wheels[0].brand +
            "  <br>Diameter: " +
            car.wheels[0].diameter;
    wheelOutput2.innerHTML =
        "<b>Wheel 2:</b><br>  " +
            "Brand: " +
            car.wheels[1].brand +
            "  <br>Diameter: " +
            car.wheels[1].diameter;
    wheelOutput3.innerHTML =
        "<b>Wheel 3:</b><br>  " +
            "Brand: " +
            car.wheels[2].brand +
            "  <br>Diameter: " +
            car.wheels[2].diameter;
    wheelOutput4.innerHTML =
        "<b>Wheel 4:</b><br>  " +
            "Brand: " +
            car.wheels[3].brand +
            "  <br>Diameter: " +
            car.wheels[3].diameter;
}
function showStudentForm() {
    var courseForm = (document.getElementById("create-course-form"));
    var studentForm = (document.getElementById("create-student-form"));
    courseForm.style.display = "none";
    studentForm.style.display = "block";
}
