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

    var y = document.getElementsByClassName("captions");
    for (i = 0; i < y.length; i++) {
        y[i].style.display = "none";
    }
    y[slideIndex-1].style.display = "block";
}

function showDivs2(n) {
    var i;
    var x = document.getElementsByClassName("slides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[n-1].style.display = "block";

    var y = document.getElementsByClassName("captions");
    for (i = 0; i < y.length; i++) {
        y[i].style.display = "none";
    }
    y[n-1].style.display = "block";
}

function openResume() {
    window.open("./AleksanderD_Resume.pdf");
}

function openLinkedIn() {
    window.open("https://www.linkedin.com/in/adimitrov500");
}

function openGitHub() {
    window.open("https://github.com/AleksDimitrov");
}

function goToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}