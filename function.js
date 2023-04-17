

document.addEventListener("DOMContentLoaded", function(event) {

	var deslizar = document.getElementById('deslizar');
	var openDesilzar = false;
	deslizar.addEventListener("click", function() {
		if(openDesilzar == false){
			document.querySelectorAll('.menu-text').forEach(item => item.style.display = "block");
			document.querySelectorAll('#navbar').forEach(item => item.style.width = "16rem");
			document.querySelectorAll('#empresa-logo').forEach(item => item.style.fontSize = "32px");
			document.querySelectorAll('#deslizar').forEach(item => item.innerHTML= '<i class="fa-solid fa-angles-left fa-2xl"></i>');
			document.querySelectorAll('.image-profile').forEach(item => {item.style.width = "78px";});
			document.querySelectorAll('.image-profile').forEach(item => {item.style.height = "78px";});
			

		}
		if(openDesilzar == true){
			document.querySelectorAll('.menu-text').forEach(item => item.style.display = "none");
			document.querySelectorAll('#navbar').forEach(item => item.style.width = "4rem");
			document.querySelectorAll('#empresa-logo').forEach(item => item.style.fontSize = "22px");
			document.querySelectorAll('#deslizar').forEach(item => item.innerHTML= '<i class="fa-solid fa-angles-right fa-2xl"></i>');
			document.querySelectorAll('.image-profile').forEach(item => {item.style.width = "62px";});
			document.querySelectorAll('.image-profile').forEach(item => {item.style.height = "62px";});
		}
		openDesilzar = !openDesilzar;
	
	});


	

	
});

