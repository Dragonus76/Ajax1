$(function(){

			// charger un fichier 

			$('#majPremier').click(function(){

				$('#premier').load()

			});

		});


		
		$(document).ready(function () {
    var obj = document.createElement("audio");
    obj.src = "son/son.mp3";
    obj.volume = 1;
    obj.autoPlay = false;
    obj.preLoad = true;
    $("#click").click(function () {
        obj.play();
    });
});
