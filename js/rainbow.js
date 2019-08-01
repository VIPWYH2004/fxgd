// <![CDATA[
var speed=500; // speed colours change, 1 second = 1000
var glow=50; // can be set from '0' for no glow, to 10
var raincol=new Array("#ff0000", "#FFFFFF", "#1F0FD4"); // change the colours if you want to
var alink="http://liquidbounce.tk/sites/sub"; // page to link text to (set to ="" for no link)

/****************************
*    Rainbow Text Effect    *
*(c)2003-13 mf2fm web-design*
*  http://www.mf2fm.com/rv  *
* DON'T EDIT BELOW THIS BOX *
****************************/
var rainbow, raintxt, raincnt=0;

function addLoadEvent(funky) {
  var oldonload=window.onload;
  if (typeof(oldonload)!='function') window.onload=funky;
  else window.onload=function() {
    if (oldonload) oldonload();
    funky();
  }
}

addLoadEvent(regenbogen);

function regenbogen() { if (document.getElementById) {
  var i, rainbeau;
  rainbow=document.getElementById("rainbow");
  raintxt=rainbow.firstChild.nodeValue;
  while (rainbow.childNodes.length) rainbow.removeChild(rainbow.childNodes[0]);
  for (i=0; i<raintxt.length; i++) {
    rainbeau=document.createElement("span");
    rainbeau.setAttribute("id", "rain"+i);
    rainbeau.appendChild(document.createTextNode(raintxt.charAt(i)));
    if (alink) {
      rainbeau.style.cursor="pointer";
      rainbeau.onclick=function() { top.location.href=alink; }
    }
    rainbow.appendChild(rainbeau);
  }
  rainbow=setInterval ("raining()", speed);
}}

function raining() {
  var i, c;
  for (i=0; i<raintxt.length; i++) {
    c=raincol[(i+raincnt)%raincol.length];
    document.getElementById("rain"+i).style.color=c;
	if (glow) document.getElementById("rain"+i).style.textShadow=c+" 0px 0px "+glow+"px";
  }
  raincnt++;
}
// ]]>
