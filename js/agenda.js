  var botaoAgendar = document.getElementById("botaoAgendar01");
		botaoAgendar.addEventListener("click", botaoAgendar01);

		function botaoAgendar01(){
       var data01 = document.getElementById('data01').value;
       var hora = document.getElementById('hora').value;
       var aluno = document.getElementById('aluno').value;

       var data = new Date(data01);
       var dataFormatada= data.toLocaleDateString('pt-br',{timeZone:'UTC'});

       document.getElementById("mostrarnagenda01").textContent = dataFormatada;
       document.getElementById("mostrarnagenda02").textContent = hora;
       document.getElementById("mostrarnagenda03").textContent = aluno;
       }