var modal = document.getElementById('myModal');
var images = document.getElementsByClassName('myImages');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("pop-up-caption");
var seeIf=true;

for (var i = 0; i < images.length; i++) {
var img = images[i];
// and attach our click listener for this image.
    img.onclick = function(evt) {
        console.log(evt);
        modal.style.display = "block";
        modalImg.src = this.src;
       

    }
}

//close the modal image
modal.onclick =  function () {
    modal.style.display = "none";
    $("#layer").fadeToggle("fast");
	$('#overlay').css('filter','blur(0px)');
};



$(".myImages").click(function(){
	var filterVal = 'blur(5px)';
	$('#overlay').css('filter',filterVal);
 	$("#layer").fadeToggle("fast");
 });

