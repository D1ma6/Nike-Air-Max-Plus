let tl1 = gsap.timeline({defaults: {duration:1.6}})


tl1.from(".right", {
    delay: 0.6,
    width:0,
    ease: Expo.easeInOut
})
tl1.from(".right__content", {
    opacity: 0,
    top: -20
})
gsap.from(".right__arrow", {
    delay: 2.2,
    duration: 1,
    opacity: 0,
    bottom: -20
})
gsap.to(".left__overlay", {
    duration: 1.4,
    delay: 0.6,
    width: "100%"
})

gsap.from(".left__socialMedia__link:nth-child(3)", 1.3, {
    delay: 2,
    opacity: 0,
    y: 30,
    ease: Power3.easeInOut
})
gsap.from(".left__socialMedia__link:nth-child(2)", 1.3, {
    delay: 2.1,
    opacity: 0,
    y: 30,
    ease: Power3.easeInOut
})
gsap.from(".left__socialMedia__link:nth-child(1)", 1.3, {
    delay: 2.2,
    opacity: 0,
    y: 30,
    ease: Power3.easeInOut
})

gsap.from(".left__top__title", 1.3, {
    delay: 2.4,
    opacity: 0,
    y: 20,
    ease: Power3.easeInOut
})
gsap.from(".left__top__para", 1.3, {
    delay: 2.5,
    opacity: 0,
    y: 15,
    ease: Power3.easeInOut
})
gsap.from(".left__top__order__container", 1.3, {
    delay: 2.6,
    opacity: 0,
    y: 30,
    ease: Power3.easeInOut
})
gsap.from(".left__bottom__more", 1.3, {
    delay: 2.6,
    opacity: 0,
    y: 30,
    ease: Power3.easeInOut
})
gsap.from(".left__bottom__gallery__item:nth-child(1)", 1.3, {
    delay: 2.9,
    opacity: 0,
    y: 20,
    ease: Power3.easeInOut
})
gsap.from(".left__bottom__gallery__item:nth-child(2)", 1.3, {
    delay: 3,
    opacity: 0,
    y: 30,
    ease: Power3.easeInOut
})
gsap.from(".left__bottom__gallery__item:nth-child(3)", 1.3, {
    delay: 3.1,
    opacity: 0,
    y: 35,
    ease: Power3.easeInOut
})

gsap.from(".header__logo", 1, {
    delay: 0.6,
    opacity: 0,
    x: -20,
    ease: Power3.easeInOut
})
gsap.from(".header__menu", 1, {
    delay: 1.3,
    opacity: 0,
    x: -20,
    ease: Power3.easeInOut
})
gsap.from(".header__title", 1, {
    delay: 1.8,
    opacity: 0,
    y: -20,
    ease: Power3.easeInOut
})