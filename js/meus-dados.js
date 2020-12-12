
function salvarMeusDados() {
	var nomeCompletoMeusDados=document.getElementById("nomeCompletoMeusDados").value;
	var cpfMeusDados=document.getElementById("cpfMeusDados").value;
	var rgMeusDados=document.getElementById("rgMeusDados").value;
	var orgaoEmissorMeusDados=document.getElementById("orgaoEmissorMeusDados").value;
	var dtNascimentoMeusDados=document.getElementById("dtNascimentoMeusDados").value;
	var ruaMeusDados=document.getElementById("ruaMeusDados").value;
	var numeroDaCasaMeusDados=document.getElementById("numeroDaCasaMeusDados").value;
	var bairroMeusDados=document.getElementById("bairroMeusDados").value;
	var cidadeMeusDados=document.getElementById("cidadeMeusDados").value;
	var estadoMeusDados=document.getElementById("estadoMeusDados").value;
	var cepMeusDados=document.getElementById("cepMeusDados").value;
	var telefoneMeusDados=document.getElementById("telefoneMeusDados").value;
	var celularMeusDados=document.getElementById("celularMeusDados").value;
	var celular2MeusDados=document.getElementById("celular2MeusDados").value;
	var cadastroEmailMeusDados=document.getElementById("cadastroEmailMeusDados").value;
	var cadastroSenhaMeusDados=document.getElementById("cadastroSenhaMeusDados").value;

	var titularCartaoMeusDados=document.getElementById("titularCartaoMeusDados").value;
	var bandeiraCartaoMeusDados=document.getElementById("bandeiraCartaoMeusDados").value;
	var codigoSegurancaMeusDados=document.getElementById("codigoSegurancaMeusDados").value;
	var dataValidadeMeusDados=document.getElementById("dataValidadeMeusDados").value;
	 localStorage.setItem("nomeCompleto_"+1,nomeCompletoMeusDados);
	 localStorage.setItem("cpf_"+1,cpfMeusDados);
	 localStorage.setItem("rg_"+1,rgMeusDados);
	 localStorage.setItem("orgaoEmissor_"+1,orgaoEmissorMeusDados);
	 localStorage.setItem("dtNascimento_"+1,dtNascimentoMeusDados);
	 localStorage.setItem("rua_"+1,ruaMeusDados);
	 localStorage.setItem("numeroDaCasa_"+1,numeroDaCasaMeusDados);
	 localStorage.setItem("bairro_"+1,bairroMeusDados);
	 localStorage.setItem("cidade_"+1,cidadeMeusDados);
	 localStorage.setItem("estado_"+1,estadoMeusDados);
	 localStorage.setItem("cep_"+1,cepMeusDados);
	 localStorage.setItem("telefone_"+1,telefoneMeusDados);
	 localStorage.setItem("celular_"+1,celularMeusDados);
	 localStorage.setItem("celular2_"+1,celular2MeusDados);  
	 localStorage.setItem("email_"+1,cadastroEmailMeusDados);  
	 localStorage.setItem("senha_"+1,cadastroSenhaMeusDados);  
	 localStorage.setItem("titularCartaoMeusDados_"+1,titularCartaoMeusDados);
	 localStorage.setItem("bandeiraCartaoMeusDados_"+1,bandeiraCartaoMeusDados);
	 localStorage.setItem("codigoSegurancaMeusDados_"+1,codigoSegurancaMeusDados);
	 localStorage.setItem("dataValidadeMeusDados_"+1,dataValidadeMeusDados);

}
if (localStorage.nomeCompleto_1) {
	document.getElementById("nomeCompletoMeusDados").value=localStorage.nomeCompleto_1;
	document.getElementById("cpfMeusDados").value=localStorage.cpf_1;
	document.getElementById("rgMeusDados").value=localStorage.rg_1;
	document.getElementById("orgaoEmissorMeusDados").value=localStorage.orgaoEmissor_1;
	document.getElementById("dtNascimentoMeusDados").value=localStorage.dtNascimento_1;
	document.getElementById("ruaMeusDados").value=localStorage.rua_1;
	document.getElementById("numeroDaCasaMeusDados").value=localStorage.numeroDaCasa_1;
	document.getElementById("bairroMeusDados").value=localStorage.bairro_1;
	document.getElementById("cidadeMeusDados").value=localStorage.cidade_1;
	document.getElementById("estadoMeusDados").value=localStorage.estado_1;
	document.getElementById("cepMeusDados").value=localStorage.cep_1;
	document.getElementById("telefoneMeusDados").value=localStorage.telefone_1;
	document.getElementById("celularMeusDados").value=localStorage.celular_1;
	document.getElementById("celular2MeusDados").value=localStorage.celular2_1;
	document.getElementById("cadastroEmailMeusDados").value=localStorage.email_1;
	document.getElementById("cadastroSenhaMeusDados").value=localStorage.senha_1;
}
if (localStorage.titularCartaoMeusDados_1) {
	document.getElementById("titularCartaoMeusDados").value=localStorage.titularCartaoMeusDados_1;
	document.getElementById("bandeiraCartaoMeusDados").value=localStorage.bandeiraCartaoMeusDados_1;
	document.getElementById("codigoSegurancaMeusDados").value=localStorage.codigoSegurancaMeusDados_1;
	document.getElementById("dataValidadeMeusDados").value=localStorage.dataValidadeMeusDados_1;
}