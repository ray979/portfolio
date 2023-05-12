/*Hide full size grad image*/
document.querySelector("#grad-image").addEventListener("click", function () {
  document.querySelector(".popup-images").style.display = "block";
});


/*Reveal full size grad image*/
document
  .querySelector(".popup-images span")
  .addEventListener("click", function () {
    document.querySelector(".popup-images").style.display = "none";
  });


/*Skill Level Animation*/
window.addEventListener("scroll", function changeSkillLevel() {
  var scrollTopPosition = document.documentElement.scrollTop;
  var alertOnElementPosition = document.querySelector("#skills").offsetTop;
  if (scrollTopPosition >= alertOnElementPosition) {
    numberOfSkills = document.querySelectorAll(".skill-level").length;
    for (var i = 0; i < numberOfSkills; i++) {
      document.querySelectorAll(".skill-level")[i].style.width =
        document.querySelectorAll(".skills-box h5")[i].innerHTML;
    }
    this.removeEventListener("scroll", changeSkillLevel, false);
  }
});

document.querySelectorAll("video.card-img-top").forEach(function (video){
  video.addEventListener("mouseover", function(e){
    video.play();
  });
  video.addEventListener("mouseout", function(e){
    video.pause();
  });
});
