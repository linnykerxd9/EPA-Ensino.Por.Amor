
var logado=false;
if (localStorage.getItem("acesso")=="true") {
	logado= true;
}
if (logado != true) {
	alert("Você não esta logado!!");
	window.location.href="../index.html";
}
function deslogar(){
	localStorage.setItem("acesso",false);
	window.location.href="../index.html";
}