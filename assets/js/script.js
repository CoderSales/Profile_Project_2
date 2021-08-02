// See References at end of code for website addresses (to save space in code ) e.g. "// (Reference (1))", in code commments, refers to 1st Reference, given in last comment of this file, at end of code.
// JavaScript getTime() Method (Reference (1))    // JavaScript getTime() Method    // Try It Yourself  (Reference (2))
var url = "https://en.wikipedia.org/w/api.php"; 
var params = {    action: "query",    list: "search",    srsearch: "Nelson Mandela",    format: "json"    };
url = url + "?origin=*";
Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});
fetch(url)  .then(function(response){return response.json();})
    .then(function(response) {if (response.query.search[0].title==="Nelson Mandela"){console.log("Your search page 'Nelson Mandela' exists on English Wikipedia");  }  })
    .catch(function(error){console.log(error);});
// set a html element equal to something:  (Reference(6))
let str = "Visit  W3Schools!"; 
document.getElementById("output").innerHTML = str.search("W3Schools");
// Simple Search in JavaScript [JavaScript Series]  (Reference(7))
const searchInput = document.getElementById('search');
searchInput.addEventListener( 'input', (event) => {    console.log(event);    } );
const userInput = document.getElementById('userinput');
userInput.addEventListener("change", goWiki) 
function goWiki() {    console.log("Enter pressed (after changed input to bar 2)");    }
//The vanilla JS way to listen for click events (Reference(9))
document.addEventListener('click', function (event) {
	if (!event.target.matches('.click-me')) return;  // If the clicked element doesn't have the right selector, bail
	event.preventDefault();  // Don't follow the link
    // (Reference (10))|log time of click|Get current time in Hours24: Minutes: Seconds format in JavaScript|(Reference(11))|(Reference (12))|Display minutes and seconds as two digits:
        var dt = new Date(); //Date constructor 
        var mm = (dt.getMinutes()<10?'0':'') + dt.getMinutes();  var ss = (dt.getSeconds()<10?'0':'') + dt.getSeconds();
        console.log("Clicked on search bar 2 at " + mm + ":" + ss);  /*log click amd time:*/   }, false);
/* References:
1. https://www.w3schools.com/jsref/jsref_gettime.asp
2. https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_gettime
3. https://www.w3docs.com/snippets/javascript/how-to-get-a-timestamp-in-javascript.html
4. https://stackoverflow.com/questions/37096367/how-to-convert-seconds-to-minutes-and-hours-in-javascript
5. 
6. https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_search
7. https://www.youtube.com/watch?v=SWkPXbQXArk&t=1s
8. 
9. https://gomakethings.com/listening-for-click-events-with-vanilla-javascript/#the-vanilla-js-way-to-listen-for-click-events
10. https://www.w3docs.com/snippets/javascript/how-to-get-a-timestamp-in-javascript.html
11. https://www.includehelp.com/code-snippets/get-current-time-in-hours24-minutes-seconds-format-in-javascript.aspx
12. https://stackoverflow.com/questions/8935414/getminutes-0-9-how-to-display-two-digit-numbers
13.
14. 
15.                                          */