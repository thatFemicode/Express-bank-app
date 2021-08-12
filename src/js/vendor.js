import 'jquery';
import 'jquery.ripples';
import { gsap } from 'gsap';
const mainContainer = document.querySelector('#page-main');

$('#page-main').ripples({
  resolution: 512,
  dropRadius: 10,
});
$('#page-dashboard').ripples({
  resolution: 512,
  dropRadius: 10,
});
$('.dashboard-main-operation-card').ripples({
  resolution: 512,
  dropRadius: 10,
});
$('.dashboard-body-opener').ripples({
  resolution: 512,
  dropRadius: 10,
});
$('.dashboard-body-account').ripples({
  resolution: 512,
  dropRadius: 10,
});

// UI elements for gsap
const banner = document.querySelector('#banner-bg');
const header = document.querySelector('.header-nav');
const text = document.querySelector('.header-text');
const image = document.querySelector('.header-image');
const cards = document.querySelector('.header-cards');
// cREATING TIMELINE FOR BANNERBG
const bannerTl = gsap.timeline();
bannerTl
  .to(banner, {
    duration: 1.4,
    width: 0,
    skewX: 7,
    ease: 'power3.inOut',
    stagger: {
      amount: 0.2,
    },
  })
  .from(header, {
    opacity: 0,
    y: 16,
    ease: 'power3.inOut',
  })
  .from(text, {
    delay: 0.2,
    opacity: 0,
    x: -20,
    ease: 'power3.inOut',
  })
  .from(image, {
    opacity: 0,
    y: 50,
    ease: 'power3.inOut',
  })
  .from(cards, {
    delay: 0.2,
    opacity: 0,
    x: 40,
    ease: 'power3.inOut',
  });
