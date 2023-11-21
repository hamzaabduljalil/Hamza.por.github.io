let section = document.querySelector(".skills");
let spans = document.querySelectorAll(".prog>span")

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop) {
         spans.forEach(function(span){
            span.style.width=span.dataset.width
        });
    }
}


let el = document.querySelector(".scroll")
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("scroll", function () {
    let scrollTop = this.document.documentElement.scrollTop;
    el.style.width=`${(scrollTop/height)*100}%`
})