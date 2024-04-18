 // the function should be in the right sequence
$(document).ready(function(){
    // Show or hide the dropdown menu when clicking on the trigger element
    $(".dropdown-trigger").click(function(event){
        event.stopPropagation(); // Prevents the event from bubbling up the DOM tree
        $(this).next(".dropdown-menu").toggle();
    });

    // Hide the dropdown menu when clicking anywhere else
    $(document).click(function(){
        $(".dropdown-menu").hide();
    });

    // Prevent the dropdown menu from hiding when clicking on it
    $(".dropdown-menu").click(function(event){
        event.stopPropagation();
    });
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function mySearch() {

  // Declare search string
  var filter = searchBox.value.toUpperCase();

  // Loop through first tbody's rows
  for (var rowI = 0; rowI < trs.length; rowI++) {

    // define the row's cells
    var tds = trs[rowI].getElementsByTagName("td");

    // hide the row
    trs[rowI].style.display = "none";

    // loop through row cells
    for (var cellI = 0; cellI < tds.length; cellI++) {

      // if there's a match
      if (tds[cellI].innerHTML.toUpperCase().indexOf(filter) > -1) {

        // show the row
        trs[rowI].style.display = "";

        // skip to the next row
        continue;
      }
    }
  }
}

// declare elements
const searchBox = document.getElementById('myInput');
const table = document.getElementById("plant_table");
const trs = table.tBodies[0].getElementsByTagName("tr");

// add event listener to search box
searchBox.addEventListener('keyup', mySearch);

 function copyCode() {
        const codeElement = document.getElementById('code');
        const code = codeElement.textContent || codeElement.innerText;
        navigator.clipboard.writeText(code).then(function() {
            alert('Citation copied successfully!');
        }, function(err) {
            console.error('Unable to copy code: ', err);
        });
    }





