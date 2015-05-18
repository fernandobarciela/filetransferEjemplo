



function sacafoto(){
	navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.FILE_URI
});
}/* el codifgo entre llaves es sintaxis jason. variables ocn valores*/

function onSuccess(imageData) {
    var image = document.getElementById('mi_imagen');
    image.src = imageData; 

//aca va el upload


function win(r) {
alert("foto subida con exito");
}

function fail(error) {
alert("no se pudo subir");
}



var uri = encodeURI("200.26.189.133/~ucymxbzr/fotos/upload.php");

var options = new FileUploadOptions();
options.fileKey="foto";
options.fileName="RAUL_"+imageData.substr(imageData.lastIndexOf('/')+1);


var ft = new FileTransfer();
ft.onprogress = function(progressEvent) {
    if (progressEvent.lengthComputable) {
		
		var percent = progressEvent.loaded / progressEvent.total;
		$("#porcentaje").html("Subido:" + percent + "%");

}
};
ft.upload(imageData, uri, win, fail, options);
}

function onFail(message) {
    alert('Failed because: ' + message);
}
