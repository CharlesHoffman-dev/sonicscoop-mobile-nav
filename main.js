var mobileMenuButton = document.getElementById('mobile-menu-button')
var mobileMenu = document.getElementById('mobile-dropdown-menu')
var courses = document.getElementById('courses')
var coursesMenu = document.getElementById('sub-menu-courses')
var articles = document.getElementById('articles')
var articlesMenu = document.getElementById('sub-menu-articles')
var podcast = document.getElementById('podcast')
var podcastMenu = document.getElementById('sub-menu-podcast')

function toggleMobileMenu() {
    if (!mobileMenu.style.display || mobileMenu.style.display == "none") {
        mobileMenu.style.display = "block";
    }
    else {
        mobileMenu.style.display = "none";
    }
}

function toggleCoursesMenu() {
    if (!coursesMenu.style.display || coursesMenu.style.display == "none") {
        coursesMenu.style.display = "block";
    }
    else {
        coursesMenu.style.display = "none";
    }
}

function toggleArticlesMenu() {
    if (!articlesMenu.style.display || articlesMenu.style.display == "none") {
        articlesMenu.style.display = "block";
    }
    else {
        articlesMenu.style.display = "none";
    }
}

function togglePodcastMenu() {
    if (!podcastMenu.style.display || podcastMenu.style.display == "none") {
        podcastMenu.style.display = "block";
    }
    else {
        podcastMenu.style.display = "none";
    }
}

mobileMenuButton.addEventListener("click", toggleMobileMenu);
courses.addEventListener("click", toggleCoursesMenu);
articles.addEventListener("click", toggleArticlesMenu);
podcast.addEventListener("click", togglePodcastMenu);