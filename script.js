function miFuncion(){
let http = new XMLHttpRequest();
http.open('get', 'https://samcodehub.github.io/API/mascotas.json', true);
http.send();
http.onload = function(){
   if(this.readyState == 4 && this.status == 200){
      let mascotas = JSON.parse(this.responseText);
		let output='';
		
		for(let item of mascotas){
			console.log(item);
				 output += `
					<div class="cards">
					   <img src="${item.image}" alt="${item.sexo}">
					   <p class="title">${item.nombre}</p>
					   <p class="sexo">sexo : ${item.sexo}</p>
					   <p class="sexo">estado : ${item.estado}</p>
					   <p class="description">cualidades : ${item.cualidades}</p>
					   <p class="price"><span>${item.edad}</span><span> Años</span></p>
					   <p class="cart">Adoptame <i class="bx bx-cart-alt"></i></p>
					</div>`;
			 
			  }
		document.querySelector("#slider").innerHTML = output;
		   }
}
}      
miFuncion();