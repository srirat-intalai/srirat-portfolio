/* ============ หน้าปก กด Enter เข้าเว็บ ============ */
var coverPage = document.getElementById("coverPage");
var mainSite = document.getElementById("mainSite");
var btnEnter = document.getElementById("btnEnter");

function enterWebsite() {
    coverPage.classList.add("hide");
    setTimeout(function () {
        coverPage.style.display = "none";
        mainSite.style.display = "block";
    }, 500);
}

if (btnEnter) {
    btnEnter.addEventListener("click", enterWebsite);
}


/* ============ ปุ่มสลับธีมมืด/สว่าง ============ */

var btnTheme = document.getElementById("btnTheme");
var iconSun = document.getElementById("iconSun");
var iconMoon = document.getElementById("iconMoon");

function setThemeIcon(isDark) {
    if (isDark) {
        iconSun.style.display = "none";
        iconMoon.style.display = "block";
    } else {
        iconSun.style.display = "block";
        iconMoon.style.display = "none";
    }
}

function toggleTheme() {
    var isDark = document.body.classList.toggle("dark-mode");
    setThemeIcon(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
}

var savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    setThemeIcon(true);
}

if (btnTheme) {
    btnTheme.addEventListener("click", toggleTheme);
}


/* ============ ปุ่มสลับภาษา ไทย/อังกฤษ ============ */

var btnLang = document.getElementById("btnLang");
var langLabel = document.getElementById("langLabel");

function toggleLang() {
    var isEnglish = document.body.classList.toggle("show-en");
    if (isEnglish) {
        langLabel.textContent = "TH";
    } else {
        langLabel.textContent = "EN";
    }
    localStorage.setItem("lang", isEnglish ? "en" : "th");
}

var savedLang = localStorage.getItem("lang");
if (savedLang === "en") {
    document.body.classList.add("show-en");
    langLabel.textContent = "TH";
}

if (btnLang) {
    btnLang.addEventListener("click", toggleLang);
}


/* ============ เมนูแฮมเบอร์เกอร์ (จอมือถือ) ============ */

var btnBurger = document.getElementById("btnBurger");
var menu = document.getElementById("menu");

if (btnBurger) {
    btnBurger.addEventListener("click", function () {
        menu.classList.toggle("open");
    });
}

var menuLinkList = document.querySelectorAll(".menuLink");
for (var i = 0; i < menuLinkList.length; i++) {
    menuLinkList[i].addEventListener("click", function () {
        menu.classList.remove("open");
    });
}


/* ============ สไลด์รูปในหัวข้อ About Me ============ */

var slideImgList = document.querySelectorAll(".slideImg");
var slideDotsBox = document.getElementById("slideDots");
var slideIndex = 0;
var slideTimer = null;

for (var s = 0; s < slideImgList.length; s++) {
    var dot = document.createElement("span");
    if (s === 0) {
        dot.classList.add("active");
    }
    dot.setAttribute("data-index", s);
    slideDotsBox.appendChild(dot);
}
var slideDotList = document.querySelectorAll("#slideDots span");

function showSlide(index) {
    if (index >= slideImgList.length) {
        index = 0;
    }
    if (index < 0) {
        index = slideImgList.length - 1;
    }

    for (var a = 0; a < slideImgList.length; a++) {
        slideImgList[a].classList.remove("active");
        slideDotList[a].classList.remove("active");
    }

    slideImgList[index].classList.add("active");
    slideDotList[index].classList.add("active");
    slideIndex = index;
}

function startAutoSlide() {
    slideTimer = setInterval(function () {
        showSlide(slideIndex + 1);
    }, 3500);
}

function stopAutoSlide() {
    clearInterval(slideTimer);
}

var slidePrev = document.getElementById("slidePrev");
var slideNext = document.getElementById("slideNext");

if (slidePrev) {
    slidePrev.addEventListener("click", function () {
        showSlide(slideIndex - 1);
        stopAutoSlide();
        startAutoSlide();
    });
}

if (slideNext) {
    slideNext.addEventListener("click", function () {
        showSlide(slideIndex + 1);
        stopAutoSlide();
        startAutoSlide();
    });
}

for (var d = 0; d < slideDotList.length; d++) {
    slideDotList[d].addEventListener("click", function () {
        var clickIndex = Number(this.getAttribute("data-index"));
        showSlide(clickIndex);
        stopAutoSlide();
        startAutoSlide();
    });
}

if (slideImgList.length > 0) {
    startAutoSlide();
}


/* ============ ปุ่มลูกศรเลื่อนผลงานซ้าย-ขวา ============ */

var projectList = document.getElementById("projectList");
var projPrev = document.getElementById("projPrev");
var projNext = document.getElementById("projNext");

if (projPrev) {
    projPrev.addEventListener("click", function () {
        projectList.scrollLeft = projectList.scrollLeft - 380;
    });
}

if (projNext) {
    projNext.addEventListener("click", function () {
        projectList.scrollLeft = projectList.scrollLeft + 380;
    });
}

var actList = document.getElementById("actList");
var actPrev = document.getElementById("actPrev");
var actNext = document.getElementById("actNext");

if (actPrev) {
    actPrev.addEventListener("click", function () {
        actList.scrollLeft = actList.scrollLeft - 380;
    });
}

if (actNext) {
    actNext.addEventListener("click", function () {
        actList.scrollLeft = actList.scrollLeft + 380;
    });
}

var certGrid = document.getElementById("certGrid");
var certPrev = document.getElementById("certPrev");
var certNext = document.getElementById("certNext");

if (certPrev) {
    certPrev.addEventListener("click", function () {
        certGrid.scrollLeft = certGrid.scrollLeft - 380;
    });
}

if (certNext) {
    certNext.addEventListener("click", function () {
        certGrid.scrollLeft = certGrid.scrollLeft + 380;
    });
}


/* ============ ปุ่มกรองหมวดใบรับรอง ============ */

var filterBtnList = document.querySelectorAll(".filterBtn");
var certBoxList = document.querySelectorAll(".certBox");

for (var f = 0; f < filterBtnList.length; f++) {
    filterBtnList[f].addEventListener("click", function () {
        for (var g = 0; g < filterBtnList.length; g++) {
            filterBtnList[g].classList.remove("active");
        }
        this.classList.add("active");

        var chooseCat = this.getAttribute("data-cat");

        for (var c = 0; c < certBoxList.length; c++) {
            var thisCat = certBoxList[c].getAttribute("data-cat");
            if (chooseCat === "all" || thisCat === chooseCat) {
                certBoxList[c].style.display = "block";
            } else {
                certBoxList[c].style.display = "none";
            }
        }
    });
}


/* ============ กล่องดูรูปใบรับรองขยายใหญ่ ============ */

var certPopup = document.getElementById("certPopup");
var certPopupImg = document.getElementById("certPopupImg");
var certPopupBg = document.getElementById("certPopupBg");
var certPopupClose = document.getElementById("certPopupClose");

var certImgList = document.querySelectorAll("img.certImg, img.projectImg, img.actImg");

for (var p = 0; p < certImgList.length; p++) {
    certImgList[p].addEventListener("click", function () {
        certPopupImg.src = this.src;
        certPopup.hidden = false;
    });
}

function closeCertPopup() {
    certPopup.hidden = true;
    certPopupImg.src = "";
}

if (certPopupBg) {
    certPopupBg.addEventListener("click", closeCertPopup);
}
if (certPopupClose) {
    certPopupClose.addEventListener("click", closeCertPopup);
}


/* ============ ฟอร์มติดต่อ เช็คก่อนส่ง ============ */

var contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        var inputName = document.getElementById("inputName");
        var inputEmail = document.getElementById("inputEmail");
        var inputSubject = document.getElementById("inputSubject");
        var inputMessage = document.getElementById("inputMessage");
        var formOk = document.getElementById("formOk");

        var ทุกอย่างผ่าน = true;

        if (inputName.value.trim() === "") {
            inputName.parentElement.classList.add("errorNow");
            ทุกอย่างผ่าน = false;
        } else {
            inputName.parentElement.classList.remove("errorNow");
        }

        var emailValue = inputEmail.value.trim();
        if (emailValue.indexOf("@") === -1 || emailValue.indexOf(".") === -1) {
            inputEmail.parentElement.classList.add("errorNow");
            ทุกอย่างผ่าน = false;
        } else {
            inputEmail.parentElement.classList.remove("errorNow");
        }

        if (inputSubject.value.trim() === "") {
            inputSubject.parentElement.classList.add("errorNow");
            ทุกอย่างผ่าน = false;
        } else {
            inputSubject.parentElement.classList.remove("errorNow");
        }

        if (inputMessage.value.trim() === "") {
            inputMessage.parentElement.classList.add("errorNow");
            ทุกอย่างผ่าน = false;
        } else {
            inputMessage.parentElement.classList.remove("errorNow");
        }

        if (ทุกอย่างผ่าน) {
            formOk.classList.add("show");
            contactForm.reset();

            setTimeout(function () {
                formOk.classList.remove("show");
            }, 5000);
        }
    });
}


/* ============ สไลด์รูปในกรอบโทรศัพท์ หัวข้อ Soft Skills (เปลี่ยนเองอัตโนมัติเหมือนรูป About Me) ============ */

var softSlideImgList = document.querySelectorAll(".softSlideImg");

if (softSlideImgList.length > 0) {
    var softSlideIndex = 0;

    setInterval(function () {
        softSlideImgList[softSlideIndex].classList.remove("active");
        softSlideIndex = (softSlideIndex + 1) % softSlideImgList.length;
        softSlideImgList[softSlideIndex].classList.add("active");
    }, 3500);
}
