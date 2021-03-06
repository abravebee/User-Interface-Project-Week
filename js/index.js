// JS goes here

// Navigation - Expandable Menu

const toggleMenu = () => {
    // menu.classList.toggle('menu--open');
     if(menu.className.includes("menu--open")) {
       
        menu.classList.remove("menu--open");
        TweenLite.to(menu, 1, { 
          ease: Circ.easeOut, 
          height: 50
        });
       
      } else {
        menu.classList.add("menu--open");
        TweenLite.set(".menu--open", {clearProps:"all"})
        TweenLite.from(menu, 1, { 
          ease: Circ.easeOut, 
          height: 50
        });

       }
    
  }

  const collapseButton = () => {
    menuButton.style.display = "none";
    menuClose.style.display = "block";
    
  }

  
  const expandButton = () => {
    menuButton.style.display = "block";
    //rapidly move up and in
    menuClose.style.display = "none";
    //rapidly move up and out
  }
  
  
  const menu = document.querySelector('.navbar');

  const menuClose = document.querySelector('.menu-close');
  const menuButton = document.querySelector('.menu-button');
 
  menuButton.addEventListener('click', () => {
    toggleMenu();
    collapseButton();
});

menuClose.addEventListener('click', () => {
    toggleMenu();
    expandButton();
});





// class NavLink {
//   constructor(link) {
//     this.link = link;

//     this.link.addEventListener('click', () => { this.select() });

//     select(){
//       const links = document.querySelectorAll('.nav-links');

      
//     }
    
//   }
// }

// const navlinks = document.querySelectorAll('.nav-links');

// navlinks = Array.from(navlinks).map( link => new NavLink(link));

//grab all nav-links

//when a nav-link is clicked, it zooms to right
//then menu collapses
 
//


/* <html>
<h2>Navigate to URL</h2>
<script>
function navigateToURL() {
window.location.href = "http://www.roseindia.net";
}
</script>
<a href="#" onclick="navigateToURL();">Click here to Navigate RoseIndia home page</a>
</html> */

function navigateHome() {
  window.location.href = "./index.html";
}

function navigateServices() {
    window.location.href = "./services.html";
}

const homeLink = document.querySelector('#home-link');

const animateHomeNav = () => {
  TweenMax.to(homeLink, .5, {
    x:1000, 
    ease:Power4.easeIn
});

setTimeout (
  toggleMenu, 500
)

setTimeout (
  containerLeave, 1000
)

setTimeout(
navigateHome, 1250
)
}

const servicesLink = document.querySelector('#services-link');

const animateServicesNav = () => {
  TweenMax.to(servicesLink, .5, {
    x:1000, 
    opacity: 0,
    ease:Power4.easeIn
});

  setTimeout (
    toggleMenu, 500
  )

  setTimeout (
    containerLeave, 1000
  )

  setTimeout(
  navigateServices, 1250
  )
}

const container = document.querySelector('.container');

const containerLeave = () => {
  TweenMax.to(container, .5, {
    x:1000,
    opacity: 0,
    ease:Power4.easeOut
  });
}