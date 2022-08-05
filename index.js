var subtextToBeTyped = ["university student ", "computer scientist ", "software engineer "]
var index = 0, typingName = true, subtextIndex = 0, isAdding = true

function playNameAnim() {
  setTimeout(function () {
    // if(typingName){
    //   document.getElementById("name").innerText = textToBeTyped.slice(0, index)
    //   if (index > textToBeTyped.length && typingName) {
    //     setTimeout( function () {
    //       document.documentElement.style.setProperty('--nametype', '0');
    //       document.documentElement.style.setProperty('--subnametype', '1');
    //       index = 0
    //       typingName = false
    //       playNameAnim()
    //     }, 1000)
    //     return;
    //   } else {
    //     index++
    //   }
    //
    // } else {
      document.getElementById("subname").innerText = subtextToBeTyped[subtextIndex].slice(0, index)

      if(isAdding){
        index++
        if(index > subtextToBeTyped[subtextIndex].length){
          setTimeout( function () {
             isAdding = false
           }, 500)
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


setTimeout( function () {
  playNameAnim()
}, 600)
