let openSideBarButton = document.getElementById("navlistopn");
let closeSideBarButton = document.getElementById("navclosbtn");
let navlistopn = document.getElementById("navlistopn");

openSideBarButton.addEventListener("click", () => {
  //function calling for opening side bar
  openNav();
  navlistopn.style.display = "none";
});

closeSideBarButton.addEventListener("click", () => {
  //function calling for closing side bar
  closeNav();
  navlistopn.style.display = "block";
});

// Created function for opening side bar

function openNav() {
  document.getElementById("mySideNav").style.width = "45vw";
}

// Created function for closing side bar

function closeNav() {
  document.getElementById("mySideNav").style.width = "0";
}
let SlideIndex = 0;

let object = [
  {
    name: "Monkey D. Luffy",
    image: "clipart1278662.png",
    quote:
      "Power isn't determined by your size, but the size of your heart and dreams!",
    color1: "#e80027",
    color2: "#760010",
  },
  {
    name: "Roronoa Zoro",
    image:
      "roronoa-zoro-monkey-d-luffy-vinsmoke-sanji-tony-tony-chopper-usopp-one-piece-07f61dda75e77ca8aef1e05ea3e8d6bd.png",
    quote:
      "A Crew With No Respect And A Captain That Doesn't Demand It Falls Apart Quickly!",
    color1: "rgb(46, 139, 3)",
    color2: "rgb(11, 62, 6)",
  },
  {
    name: "Vinsmoke Sanji",
    image: "Sanji.png",
    quote:
      "It doesn't matter if you spend 10 thousand berries or one million berries, you should never waste food!",
    color1: "rgb(18, 18, 40)",
    color2: "rgb(11, 12, 33)",
  },
  {
    name: "Cat Buggler Nami",
    image: "Nami.png",
    quote:
      "Life is like a pencil that will surely run out, but will leave the beautiful writing of life!",
    color1: "rgb(115, 20, 43)",
    color2: "rgb(69, 7, 18)",
  },
  {
    name: "God Usopp",
    image:
      "usopp-one-piece-treasure-cruise-monkey-d-luffy-roronoa-zoro-nico-robin-one-piece-f8663a975c56b8797ebb378b12108d2a.png",
    quote: "There comes a time when a man has to stand and fight!",
    color1: "rgb(179, 154, 30)",
    color2: "rgb(115, 97, 22)",
  },

  {
    name: "Chopper",
    image:
      "tony-tony-chopper-monkey-d-luffy-vinsmoke-sanji-shanks-chopper-55fd500e29594e411994725d75650780.png",
    quote: "Nothing is impossible for a man with a skull flag!",

    color1: "rgb(75, 187, 226)",
    color2: "rgb(52, 142, 172)",
  },
  {
    name: "Nico Robin",
    image: "Robin.png",
    quote: "Fools who don't respect the past are doomed to repeat it!",
    color1: "rgb(33, 19, 45)",
    color2: "rgb(19, 11, 26)",
  },
  {
    name: "Cybroge Franky",
    image:
      "franky-nami-monkey-d-luffy-usopp-bentham-one-piece-7f8dca894f6bda26dd4c2f3e8a33f74c.png",
    quote:
      "no matter what kind of weapons you may hold, just being alive isn't a sin!",
    color1: "rgb(150, 9, 79)",
    color2: "rgb(82, 3, 49)",
  },
  {
    name: "The SK Brook",
    image: "  brook_by_bodskih_dej5nr9.png",
    quote: "No matter how deep the night, it always turns to day, eventually!",

    color1: "#e98733",
    color2: "#cb6817",
  },
  {
    name: "Fish-Man Jimbe",
    image:
      "akainu-jinbe-monkey-d-luffy-list-of-one-piece-episodes-eighty-one-8c1c0d0e8160d85698c88937da9075b3.png",
    quote: "What's gone is gone, but ask yourself this; what remains?",
    color1: "#a1231c",
    color2: "#a1231c",
  },
];

let head = document.querySelector("#head").style;

let change = () => {
  back =
    "linear-gradient(45deg," +
    object[SlideIndex].color1 +
    "," +
    object[SlideIndex].color2 +
    ")";

  document.getElementById("CrewName").innerText = object[SlideIndex].name;
  document.getElementById("Quote").innerText = object[SlideIndex].quote;
  document.getElementById("peopleBanner").src = object[SlideIndex].image;
  head.setProperty("--pseudo-backgroundcolors", back);
  document.getElementById("fa-left").style.color = object[SlideIndex].color1;
};

document.addEventListener("click", (e) => {
  if (e.target.className == "fa-solid angles fa-angle-right") {
    if (SlideIndex >= 9) {
      SlideIndex = 0;
    } else {
      SlideIndex += 1;
    }
    change();
  }
  if (e.target.className == "fa-solid angles fa-angle-left") {
    if (SlideIndex <= 0) {
      SlideIndex = 9;
    } else {
      SlideIndex -= 1;
    }
    change();
  }
});
