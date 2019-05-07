	(function(){


	var hexcolor =document.getElementById('hex-value');
	var btn=document.getElementById('btn');
	btn.addEventListener('click',colorH);
	function colorH(){
		var hexcolors =[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
		var hexa='#';
		 for(var i=0;i<6;i++){
		 	var random= Math.floor(Math.random() * hexcolors.length);
			hexa +=hexcolors[random];

	 }
	 document.body.style.backgroundColor=hexa;
	 hexcolor.textContent=hexa;

	}

	})();





/* var color="0123456789ABCDEF";
  document.getElementsByClassName("btn btn-secondary")[0].addEventListener("click",function(){   
         var changer = "#";
         for (var i = 0; i<6; i++) {          
          changer += color[Math.floor(Math.random()*16)];          } 
                      document.getElementsByTagName('body')[0].style.backgroundColor =changer; 
                                     document.getElementById('hex-value').innerHTML = changer;  } );*/






















