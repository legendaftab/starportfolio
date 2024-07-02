/**
* Template Name: iPortfolio - v3.7.0
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/ 
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }


  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let body = select('body')
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Hero type effect
   */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      // duration: 1000,
      easing: 'ease-in-out',
      // once: true,
      mirror: false
    })
  });

})()

// Letterinteraction Swing Section Title

{
  setTimeout(() => document.body.classList.add('render'), 60);
  const navdemos = document.querySelectorAll('nav.demos > .demo');
  Array.from(navdemos).forEach(link => link.addEventListener('click', (ev) => {
    ev.preventDefault();
    document.body.classList.remove('render');
    document.body.addEventListener('transitionend', () => window.location = ev.target.href);
  }));
}

document.documentElement.className="js";
var supportsCssVars=function(){var e,t=document.createElement("style");
return t.innerHTML="root: { --tmp-var: bold; }",document.head.appendChild(t),e=!!(window.CSS&&window.CSS.supports&&window.CSS.supports("font-weight","var(--tmp-var)")),t.parentNode.removeChild(t),e};
supportsCssVars()||alert("Please view this title effect in a modern browser that supports CSS Variables.");


var waypoint = new Waypoint({
  element: document.querySelector("#skills"),
  handler: function(direction) {
    var skillCircle1 = document.querySelectorAll(".c-one");
    var skillCircle2 = document.querySelectorAll(".c-two");
    var skillCircle3 = document.querySelectorAll(".c-three");
    var skillCircle4 = document.querySelectorAll(".c-four");
    var skillCircle5 = document.querySelectorAll(".c-five");
    for (let c1 = 0; c1 < skillCircle1.length; c1++) {
      skillCircle1[c1].classList.toggle("c-85");
    }
    for (let c2 = 0; c2 < skillCircle2.length; c2++) {
      skillCircle2[c2].classList.toggle("c-80");
    }
    for (let c3 = 0; c3 < skillCircle3.length; c3++) {
      skillCircle3[c3].classList.toggle("c-65");
    }
    for (let c4 = 0; c4 < skillCircle4.length; c4++) {
      skillCircle4[c4].classList.toggle("c-70");
    }
    for (let c5 = 0; c5 < skillCircle5.length; c5++) {
      skillCircle5[c5].classList.toggle("c-50");
    }
  },
  offset: 250
});