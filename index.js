var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}

function showDivs2(n) {
    var i;
    var x = document.getElementsByClassName("slides");
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    }
    x[n-1].style.display = "block";
}

function openResume() {
    window.open("./AleksanderD_ResumeFullV8.pdf");
}

function openLinkedIn() {
    window.open("https://www.linkedin.com/in/adimitrov500");
}

function openGitHub() {
    window.open("https://github.com/AleksDimitrov");
}