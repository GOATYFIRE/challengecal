// const cost = document.querySelector(".amount");
// const ten = document.querySelector(".ten");
// const two = document.querySelector(".two");
// const three = document.querySelector(".three");
// const four = document.querySelector(".four");

// var number1 = 200 / 2;


// console.log(` ${number1}%`)

// document.getElementById("total").innerHTML = `$${number1}`;



function myFunction() {
    document.getElementById("totaltip").innerHTML = "You gave 5$, your total is 55$ <br> Thank you for your donation!";
    document.getElementById("total").innerHTML = "55$"
    document.getElementsByClassName("t").innerHTML = "55$"
  }

  function zero() {
    document.getElementById("totaltip").innerHTML = "Thank you for shoping"
    document.getElementById("total").innerHTML = "50$"
    document.getElementsByClassName("t").innerHTML = "50$"
  }

  function two() {
    document.getElementById("totaltip").innerHTML = "You gave 10$, your total is 60$ <br> Thank you for your donation!";
    document.getElementById("total").innerHTML = "60$";
    document.getElementsByClassName("t").innerHTML = "60$";

  }

  function three() {
    document.getElementById("totaltip").innerHTML = "You gave 15$, your total is 65$$ <br> Thank you for your donation!"
    document.getElementById("total").innerHTML = "65$"
    document.getElementsById("t").innerHTML = "65$"
  }

  function four() {
    document.getElementById("totaltip").innerHTML = "You gave 20$, your total is 70$$ <br> Thank you for your donation!"
    document.getElementById("total").innerHTML = "70$"
    document.getElementsByClassName("t").innerHTML = "70$"
  }
