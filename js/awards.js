const awardnavitems = document.querySelectorAll(".awards-nav a");
const awarditems = document.querySelectorAll(".awards");

function hideallawarditems() {
  for (let i = 0 ; i <  awarditems.length ; i++) {
    awarditems[i].setAttribute('data-currentaward', 'false');
  };
};

for (let i = 0 ; i <  awardnavitems.length ; i++) {
  awardnavitems[i].addEventListener('click',function(e){
    let href = this.getAttribute("href");
    hideallawarditems();
    document.querySelector(href).setAttribute('data-currentaward','true');
  });
};