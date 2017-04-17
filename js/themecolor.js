document.addEventListener("DOMContentLoaded", function (event) {
          
    var elements = document.getElementsByClassName('link');

    for (var n = 0; n < elements.length; ++n) {
        elements[n].addEventListener('click', collapse, false);
    }
    
    function collapse() {
        document.getElementById("pure-toggle-left").checked = false;
        //console.log('zwijam');
    }



    var refreshuj = document.getElementsByClassName('refresh');
    for (var m = 0; m < refreshuj.length; ++m) {
        refreshuj[m].addEventListener('click', pobierz, false);
    }
    function pobierz() {
        loading();
        var container = document.getElementById("container");
        container.innerHTML = "";
       
       
        //console.log('refresh, pobieram na nowo');
    }






    var uiSettings = new Windows.UI.ViewManagement.UISettings();
    var rgba = uiSettings.getColorValue(Windows.UI.ViewManagement.UIColorType.accent);
    var cssColorString = "rgba(" + rgba.r + "," + rgba.g + "," + rgba.b + ", " + rgba.a + ")";
    cssColorStringAlpha = cssColorString.replace(/[\d\.]+\)$/g, '0.9)');
    var DopasowasnyHamburger = document.getElementById("windowsColor");
    DopasowasnyHamburger.style.backgroundColor = cssColorStringAlpha;


    var DopasowasnyHamburgerDolny = document.getElementById("windowsColor2");
    DopasowasnyHamburgerDolny.style.backgroundColor = cssColorString;


    var kolorloadera = document.getElementById("loader");
    kolorloadera.style.borderTop = cssColorString + " 16px solid";

    

	
	//your code to run since DOM is loaded and ready
});
