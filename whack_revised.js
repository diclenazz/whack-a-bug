let bugs = document.querySelectorAll("#bug-container img");
let gameText= document.querySelector("#game p")

let whackCount=0;
let totalBugs=bugs.length;

    for(let i = 0; i < bugs.length; i++) {
      bugs[i].addEventListener("click", whackBug);
    }


/**
   * TODO
   * whacks the clicked bug and increments the score. The bug cannot be whacked again afterwards.
   */
function whackBug(event) {
  // your code goes here

  let clickedBug= event.target;

  if(clickedBug.classList.contains("whacked"))
  {
    return;
  }
  clickedBug.src="bug-whacked.png";
  clickedBug.classList.add("whacked");
  whackCount++;

  if (whackCount===totalBugs)
  {
    gameText.textContent="all bugs have been whacked";
  }
}
