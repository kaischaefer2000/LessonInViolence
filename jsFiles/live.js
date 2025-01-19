/// Accordeon functionality to expand the live shows.
var acc = document.getElementsByClassName("show");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var details = this.nextElementSibling;
    if (details.style.display === "block") {
      details.style.display = "none";
    } else {
      details.style.display = "block";
    }
  });
}

/// Maximize / minimize flyers.
function toggleBigImg(imgId, maxWidth) {
  const img = document.getElementById(imgId);
  img.classList.toggle("bigImg");
  img.style.width = img.classList.contains("bigImg") ? maxWidth : "15vw";
  img.style.transition = "width 0.8s ease-in-out";
}

function addClickEvent(imgInfo) {
  const img = document.getElementById(imgInfo.id);
  img.addEventListener("click", () =>
    toggleBigImg(imgInfo.id, imgInfo.maxWidth)
  );
}

const imgData = [
  { id: "LessonsInMetalFlyer", maxWidth: "30vw" },
  { id: "birthdayBashFlyer", maxWidth: "35vw" },
  { id: "JugendhausEinsFlyer", maxWidth: "40vw" },
  { id: "InfernumFlyer", maxWidth: "25vw" },
  { id: "MoshpitFlyer", maxWidth: "30vw" },
  { id: "ZyklopFlyer", maxWidth: "30vw" },
  { id: "MetalMassacreFlyer", maxWidth: "30vw" },
  { id: "LIM3Flyer", maxWidth: "30vw" },
  { id: "ParasitePitFlyer", maxWidth: "30vw" },
  { id: "BM23", maxWidth: "30vw" },
  { id: "MetalDayzFlyer", maxWidth: "30vw" },
  { id: "BastardFlyer", maxWidth: "45vw" },
  { id: "WalsrodeFlyer", maxWidth: "30vw" },
  { id: "MFF24", maxWidth: "30vw" },
  { id: "MünsterFlyer", maxWidth: "30vw" },
  { id: "UndergroundPitFlyer", maxWidth: "30vw" },
  { id: "ValhallaFlyer", maxWidth: "40vw" },
  { id: "LIM4Flyer", maxWidth: "30vw" },
  { id: "ThrashTalkFlyer", maxWidth: "30vw" },
  { id: "MetalExplosionFlyer", maxWidth: "40vw" },
  { id: "FellfresseFlyer", maxWidth: "40vw" },
  { id: "SharkFest1Flyer", maxWidth: "35vw" },
];

imgData.forEach(addClickEvent);

const x = window.matchMedia("(min-width: 750px)");
x.addEventListener("change", (e) => {
  if (e.matches) {
    imgData.forEach(addClickEvent);
  } else {
    imgData.forEach((imgInfo) => {
      const img = document.getElementById(imgInfo.id);
      img.removeEventListener("click", () =>
        toggleBigImg(imgInfo.id, imgInfo.maxWidth)
      );
    });
  }
});
