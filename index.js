var subtextToBeTyped = [" university student ", " computer scientist ", " software engineer "];
var index = 0, typingName = true, subtextIndex = 0, isAdding = true, timeSinceLoad = 0;
// window.addEventListener('scroll', function () {
//
// });

// 0 = home page
// 1 = projects

function delay (URL) {
    setTimeout( function() { window.location = URL }, 500 );
}


// function bubbleMove() {
//   timeSinceLoad+=2;
//   document.documentElement.style.setProperty("--offset", timeSinceLoad+"px");
//   console.log(document.documentElement.style.getPropertyValue("--offset"));
// }
// document.getElementById("submit").onclick = function(event) {
//
//
//     // alert("Submit button is clicked!");
//     document.documentElement.style.setProperty("--intro-opacity", 0);
//     document.documentElement.style.setProperty("--project-opacity", 1);
//     document.documentElement.style.setProperty("--project-index", 55);
//     event.preventDefault();
// }

// window.onscroll = function (e) {
//   // document.documentElement.style.setProperty("--back-color", "blue");
//   document.documentElement.style.setProperty("--offset", window.pageYOffset+"px");
//
//   if(window.pageYOffset < 50){
//     console.log("dude");
//   }
//
//   console.log(window.pageYOffset);
// }

window.onload = function(){
  setTimeout( function () {
    document.documentElement.style.setProperty("--right-opacity", 1);
    setTimeout( function () {
      playNameAnim();
    }, 500)
    // setInterval(bubbleMove, 1);
  }, 250)
}

function playNameAnim() {
  setTimeout(function () {

      document.getElementById("subname").innerText = subtextToBeTyped[subtextIndex].slice(0, index)

      if(isAdding){
        index++
        if(index > subtextToBeTyped[subtextIndex].length){
          setTimeout( function () {
             isAdding = false
           }, 700)
        }
      } else {
        index--
        if(index < 0){
          subtextIndex++
          isAdding = true
          index = 0
        }
      }


    if(isAdding || subtextIndex != subtextToBeTyped.length-1){
      playNameAnim()
    }
  }, 30)
}
