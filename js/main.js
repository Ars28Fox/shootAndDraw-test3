const trigger = document.querySelector('.promo');
const brand = document.querySelector('.brand');
const content = document.querySelector('.content');
const digital = document.querySelector('.digital');
console.log(trigger.getBoundingClientRect());

function getStartCoordsY(elem) {
    let box = elem.getBoundingClientRect();
    return box.top + pageYOffset;
}

function getEndCoordsY(elem) {
    let box = elem.getBoundingClientRect();
    return box.top + pageYOffset + box.height;
}

let triggerBrandStartY = getStartCoordsY(trigger);
let triggerContentStartY = getStartCoordsY(content);
let triggerDigitalEndY = getStartCoordsY(digital);

window.addEventListener("scroll", function() {
    let pageY = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if (pageY > triggerBrandStartY / 2) {
        let brandScrollCount = pageY - triggerBrandStartY / 2;
        brand.style.transform = 'translateX(' + (brandScrollCount) + 'px)';
    }
    if (pageY > triggerContentStartY / 2) {
        let contentScrollCount = pageY - triggerContentStartY / 2;
        content.style.transform = 'translateX(' + (-contentScrollCount + 100) + 'px)';
    }
    if (pageY > triggerDigitalEndY / 2) {
        let digitalScrollCount = pageY - triggerDigitalEndY / 2;
        digital.style.transform = 'translateX(' + (digitalScrollCount - 100) + 'px)';
    }
});