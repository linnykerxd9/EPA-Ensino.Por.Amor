  //Informações que apareceram no modal do mapa quando se clicar no marcador
  //e depois em ver perfil
  document.getElementById("nomeSobrenomeProfessor").textContent=localStorage.nomePerfil+" "+localStorage.sobrenomePerfil;
  document.getElementById("telefone").textContent=localStorage.telefone;
  document.getElementById("umPoucoSobreVoce").textContent=localStorage.sobreVoce;
  document.getElementById("materiaPreco").textContent=localStorage.materiaPreco;
  //função de inicio do mapa e todos os itens nele
      function initMap() {
        //inicio do mapa, onde ele ja inicia.
        var Localizacao = { lat: -11.9633596, lng: -54.1254023 };
        var link=document.getElementById("link");
        var map = new google.maps.Map(document.getElementById("mapa"), {
          zoom: 3.6,
          center: Localizacao,});
        //criando as pag de informações
       const infoWindow = new google.maps.InfoWindow();
        const perfil = new google.maps.InfoWindow();
         const perfil2 = new google.maps.InfoWindow();
       var btnParaLocalizar=document.getElementById("btnParaLocalizar");
       btnParaLocalizar.addEventListener("click",localizar);

       //função para localizar o endereço
        function localizar() {
          if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          //definindo as localizações
          const pos ={
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            };
            const posPessoa2={
              lat: position.coords.latitude-0.0029,
              lng: position.coords.longitude-0.0020,}
              const posPessoa3={
              lat: position.coords.latitude+0.0029,
              lng: position.coords.longitude+0.0020,}
            //definindo a localização das janelas de informação
          infoWindow.setPosition(pos);
          perfil.setPosition(posPessoa2);
          perfil2.setPosition(posPessoa3);
          //definindo os marcadores
          const pessoa1 = new google.maps.Marker({
          position: pos,
          map: map,
          icon:"../imagens/voce.png",
        });
          const segundaPessoa = new google.maps.Marker({
            position:posPessoa2,
            map:map,
            icon:"../imagens/usuarios.png",

          });
          const terceiraPessoa = new google.maps.Marker({
            position:posPessoa3,
            map:map,
            icon:"../imagens/usuarios.png",
          });
          //criando as funções quando clicar no marcador
          //para o mapa é diferente. 
          //para adicionar uma evento tem que se usar addListener e não addEventListener
          segundaPessoa.addListener("click", () => {
            //criando uma variavel para guardar oque sera mostrado(so funciona direito se fizer assim).
            var conteudo = '<div id="iw_container">' +
            '<div class="iw_title"><strong>Professor encontrado</strong></div>' +
            '<div class="iw_content"><br>Nome:' + localStorage.getItem("nomeCompleto_1")+'</div'+
            '<div id="divLink"><Br><a href="#modalPerfil1" class="modal-trigger"><br>ver o Perfil</a></div></div>'+
            '</div>';
           map.setCenter(pos); 
          perfil.setContent(conteudo);
          perfil.open(map); 
         });
          terceiraPessoa.addListener("click", () => {
            var conteudo = '<div id="iw_container">' +
            '<div class="iw_title"><strong>Professor encontrado</strong></div>' +
            '<div class="iw_content"><br>Nome:' + localStorage.getItem("nomeCompleto_1")+'</div'+
            '<div id="divLink"><Br><a href="#modalPerfil1" class="modal-trigger"><br>ver o Perfil</a></div></div>'+
            '</div>';
           map.setCenter(pos); 
          perfil2.setContent(conteudo);
          perfil2.open(map); 
         });

           map.setZoom(15);
          map.setCenter(pos); },() => {
          handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    } 
  };
    //função para mostrar se der algum erro
  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Erro: O servi\u00e7o de geolocaliza\u00e7\u00e3o falhou."
      : "Erro: Seu navegador n\u00e3o suporta geolocaliza\u00e7\u00e3o."
  );
  infoWindow.open(map);
      } 
        } 
        //cordenadas do teste
            //lat: position.coords.latitude-0.0029,
           // lng: position.coords.longitude-0.0020,
  
      //colocar marcador na tela
    //   const marker = new google.maps.Marker({
     //   position: Localizacao,
    //     map: map,
    //   });  