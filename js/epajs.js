 M.AutoInit();

//Local storage do cadastro 

function dadosCadastro() {
	if (localStorage.cont) {
          localStorage.cont = Number(localStorage.cont)+1;
       } else {
          localStorage.cont = 1;
       }
    var nomeCompleto=document.getElementById("nomeCompleto").value;
    var cpf=document.getElementById("cpf").value;
    var rg=document.getElementById("rg").value;
    var orgaoEmissor=document.getElementById("orgaoEmissor").value;

    //formatação da data
    var dtNascimento=document.getElementById("dtNascimento").value;
    var data = new Date(dtNascimento);
	  var dataFormatada = data.toLocaleDateString('pt-br', {timeZone: 'UTC'});
	//final formatação

    var rua=document.getElementById("rua").value;
    var numeroDaCasa=document.getElementById("numeroDaCasa").value;
  	var bairro=document.getElementById("bairro").value;
  	var cidade=document.getElementById("cidade").value;
  	var estado=document.getElementById("estado").value;
  	var cep=document.getElementById("cep").value;
  	var telefone=document.getElementById("telefone").value;
  	var celular=document.getElementById("celular").value;
  	var celular2=document.getElementById("celular2").value;
  	var materiaParaEnsinar=Number(document.getElementById("materiaParaEnsinar").value);
  	var totalMaterias=["matematica","portugues","geo"];
  	var anosEnsinando=document.getElementById("anosEnsinando").value;
  	var cadastroEmail=document.getElementById("cadastroEmail").value;
    var cadastroSenha=document.getElementById("cadastroSenha").value;
    localStorage.setItem("nomeCompleto_"+localStorage.cont,nomeCompleto);
	  localStorage.setItem("cpf_"+localStorage.cont,cpf);
    localStorage.setItem("rg_"+localStorage.cont,rg);
	  localStorage.setItem("orgaoEmissor_"+localStorage.cont,orgaoEmissor);
	  localStorage.setItem("dtNascimento_"+localStorage.cont,dtNascimento);
	  localStorage.setItem("rua_"+localStorage.cont,rua);
	  localStorage.setItem("numeroDaCasa_"+localStorage.cont,numeroDaCasa);
	  localStorage.setItem("bairro_"+localStorage.cont,bairro);
	  localStorage.setItem("cidade_"+localStorage.cont,cidade);
	  localStorage.setItem("estado_"+localStorage.cont,estado);
	  localStorage.setItem("cep_"+localStorage.cont,cep);
	  localStorage.setItem("telefone_"+localStorage.cont,telefone);
	  localStorage.setItem("celular_"+localStorage.cont,celular);
	  localStorage.setItem("celular2_"+localStorage.cont,celular2);  
  	localStorage.setItem("materiaParaEnsinar_"+localStorage.cont,totalMaterias[0]);
	  localStorage.setItem("anosEnsinando_"+localStorage.cont,anosEnsinando);
	  localStorage.setItem("email_"+localStorage.cont,cadastroEmail);
	  localStorage.setItem("senha_"+localStorage.cont,cadastroSenha);
}
function logarHome(){
    var email=document.getElementById("email").value;
    var senha=document.getElementById("senha").value;
    var mensagemErroLogin= false;
    for (var i=0; i <=localStorage.cont; i++) {
      var loginEmail=localStorage.getItem("email_"+i);
      var loginSenha= localStorage.getItem("senha_"+i);
     if (email == loginEmail && senha == loginSenha) {
      localStorage.setItem("acesso",true);
      window.location.href="paginas/perfil.html"; 
      var mensagemErroLogin= true;
    }
    }
    if (mensagemErroLogin== false) {
      alert("Email ou senha inválido!!");}
}
function logar(){
    var email=document.getElementById("email").value;
    var senha=document.getElementById("senha").value;
    var mensagemErroLogin= false;
    for (var i=0; i <=localStorage.cont; i++) {
      var loginEmail=localStorage.getItem("email_"+i);
      var loginSenha= localStorage.getItem("senha_"+i);
     if (email == loginEmail && senha == loginSenha) {
      localStorage.setItem("acesso",true);
      window.location.href="perfil.html"; 
      var mensagemErroLogin= true;
    }
    }
    if (mensagemErroLogin== false) {
      alert("Email ou senha inválido!!");}
}

