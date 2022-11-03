document.addEventListener('DOMContentLoaded', function() {

    //TOGGLE NAV MOBILE MENU FOR SMALL SCREENS
    const menubutton = document.querySelector('.menu-button');
    const menunav = document.querySelector('.toggle-nav');
    menubutton.addEventListener('click', function() {
        if (menunav.getAttribute('data-navstate') === 'open') {
            menunav.setAttribute('data-navstate', 'closed');
        } else {
            menunav.setAttribute('data-navstate', 'open');
        };
    });

    //WIDOW SLAYER - BY KCC NMA (https://codepen.io/kccnma/pen/LqOLPa)
    var alltextblocks = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, a');
    for ( var i=0; i<alltextblocks.length; i++ ) {
        var mytb = alltextblocks[i].innerHTML;
        var mytbs = alltextblocks[i].innerHTML.split( ' ' );
        var lasttbs = mytb.slice(-1);
        //console.log("length is " + mytbs.length + " last textblock is " + lasttbs);
        if ((mytbs.length > 1) && (lasttbs != ">")) {
            //console.log("widow slayed!");
            mytbs[mytbs.length-2] += "&nbsp;" + mytbs[mytbs.length-1];
            mytbs.pop();
            alltextblocks[i].innerHTML = mytbs.join( ' ' );
        }
    };
    
});
