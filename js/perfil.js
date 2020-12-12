
function salvarDadosPerfil() {
	var nomePerfil=document.getElementById("nomePerfil").value;
	var sobrenomePerfil=document.getElementById("sobrenomePerfil").value;
	var telefone=document.getElementById("telefone").value;
	var sobreVoce=document.getElementById("sobreVoce").value;
	var materiaPreco=document.getElementById("materiaPreco").value;
	localStorage.setItem("nomePerfil",nomePerfil);
	localStorage.setItem("sobrenomePerfil",sobrenomePerfil);
	localStorage.setItem("telefone",telefone);
	localStorage.setItem("sobreVoce",sobreVoce);
	localStorage.setItem("materiaPreco",materiaPreco);
}
if (localStorage.nomePerfil) {
	document.getElementById("nomePerfil").value=localStorage.nomePerfil;
	document.getElementById("sobrenomePerfil").value=localStorage.sobrenomePerfil;
	document.getElementById("telefone").value=localStorage.telefone;
	document.getElementById("sobreVoce").value=localStorage.sobreVoce;
	document.getElementById("materiaPreco").value=localStorage.materiaPreco;

}