"use strict";
var car;
var caso;
function submitCourse() {
    var errores = 0;
    var courseInput = document.getElementById("courseInput");
    var descriptionInput = document.getElementById("descriptionInput");
    // let colorInput = <HTMLInputElement>document.getElementById("colorInput");
    car = new Car(courseInput.value, descriptionInput.value);
    showVehicle();
    showWheelForm();
}
function showVehicle() {
    var carTitle = document.getElementById("carTitle");
    var plateOutput = document.getElementById("plateOutput");
    var brandOutput = document.getElementById("brandOutput");
    var colorOutput = document.getElementById("colorOutput");
    carTitle.innerText = "Car:";
    plateOutput.innerText = "Plate: " + car.plate;
    brandOutput.innerText = "Brand: " + car.brand;
    // colorOutput.innerText = "Color: " + car.color;
}
function submitWheelForm() {
    var errores = 0;
    for (var i = 1; i <= 4; i++) {
        var brandWheel = document.getElementById("brandWheel" + i);
        var diameterWheel = document.getElementById("diameterWheel" + i);
        var wheel_generica = new Wheel(Number(diameterWheel.value), brandWheel.value);
        car.addWheel(wheel_generica);
    }
    console.log(car);
    showWheels();
}
function showWheels() {
    var wheelTitle = document.getElementById("wheelTitle");
    var wheelOutput1 = document.getElementById("wheelOutput1");
    var wheelOutput2 = document.getElementById("wheelOutput2");
    var wheelOutput3 = document.getElementById("wheelOutput3");
    var wheelOutput4 = document.getElementById("wheelOutput4");
    wheelTitle.innerHTML = "Wheels:";
    wheelOutput1.innerHTML = "<b>Wheel 1:</b><br>  " + "Brand: " + car.wheels[0].brand + "  <br>Diameter: " + car.wheels[0].diameter;
    wheelOutput2.innerHTML = "<b>Wheel 2:</b><br>  " + "Brand: " + car.wheels[1].brand + "  <br>Diameter: " + car.wheels[1].diameter;
    wheelOutput3.innerHTML = "<b>Wheel 3:</b><br>  " + "Brand: " + car.wheels[2].brand + "  <br>Diameter: " + car.wheels[2].diameter;
    wheelOutput4.innerHTML = "<b>Wheel 4:</b><br>  " + "Brand: " + car.wheels[3].brand + "  <br>Diameter: " + car.wheels[3].diameter;
}
function showWheelForm() {
    var carForm = document.getElementById("create-car-form");
    var carWheel = document.getElementById("create-wheel-form");
    carForm.style.display = "none";
    carWheel.style.display = "block";
}
