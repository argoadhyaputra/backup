function getRandomComputerChar(userChoice){
    var randomNum = Math.random() * 5;
    var choice;
    if(randomNum > 0 & randomNum < 1.5) {
        choice = "gunting";
    }else if (randomNum > 2.5 & randomNum < 3.5) {
        choice = "kertas";
    }else {
        choice = "batu";
    }
    console.log(choice)

    if (choice == userChoice) {
        console.log("SERI!!")
    } else if (
        choice == "gunting" & userChoice == "batu" || 
        choice == "kertas" & userChoice == "gunting" || 
        choice == "batu" & userChoice == "kertas") {
        console.log("kamu menang")
    } else if (
        choice == "gunting" & userChoice == "kertas" ||
        choice == "kertas" & userChoice == "batu" ||
        choice == "batu" & userChoice == "gunting") {
        console.log("kamu kalah")
    }

}
function ambilPilihan(e) {
    getRandomComputerChar(e)
}

gsap.to(".zombie", {y:0}, {y:200}).delay(1);
gsap.to(".zombie", {x:0}, {x:200}).delay(2);
var tl = gsap.timeline();
var head = document.querySelector('.zombie #zombie #head');
tl.fromTo('#head', {opacity:1, rotation:'0deg'}, {opacity:1, yoyo:true, repeat:-1, rotation:'2deg'})
tl.fromTo('#computer #head', {opacity:1, rotation:'0deg'}, {opacity:1, yoyo:true, repeat:-1, rotation:'2deg'});
tl.fromTo('#computer #lefthand', {opacity:1, rotation:'0deg', transformOrigin:"right 50%"}, {opacity:1, yoyo:true, repeat:-1, rotation:'-4deg'});
tl.fromTo('#computer #righthand', {opacity:1, rotation:'0deg', transformOrigin:"right 50%"}, {opacity:1, yoyo:true, repeat:-1, rotation:'-4deg'});

gsap.to('.ufos', {x:0, delay:2});
gsap.to('#cahaya', {opacity:1, delay:3});
gsap.to('.comps', {opacity:1, delay:3.2});
gsap.to('#cahaya', {opacity:0, delay:4});
gsap.to('.ufos', {x:600, delay:4.5});