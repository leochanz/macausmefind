let map;
let markers = [];

function initMap(latitude,longitude) {

  const haightAshbury = {
   lat: latitude,
   lng: longitude
  };
  
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: haightAshbury,
    //mapTypeId: "terrain"
	mapTypeId: google.maps.MapTypeId.ROADMAP
  }); // This event listener will call addMarker() when the map is clicked.


  map.addListener("click", event => {
    clearMarkers();
    markers = [];
    addMarker(event.latLng);
	latlng0 = new String(event.latLng);
	var latlng = latlng0.substring(latlng0.indexOf("(")+1, latlng0.indexOf(")"));
	geocode(latlng);
    }); // Adds a marker at the center of the map.

  addMarker(haightAshbury);
 // Adds a marker to the map and push to the array.
}

function addMarker(location) {
  const marker = new google.maps.Marker({
    position: location,
	title: "1",
    map: map
  });
  markers.push(marker);
} // Sets the map on all markers in the array.

function setMapOnAll(map) {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
} // Removes the markers from the map, but keeps them in the array.

function clearMarkers() {
  setMapOnAll(null);
} // Shows any markers currently in the array.
	
function geocode(latitudeandlongtitude) {

	var latlng = latitudeandlongtitude;
	let url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+ latlng +'&language=zh-TW&key=AIzaSyC4F6RLADVFT80lJHi_zvztaAcoxs407Ug' 
	
	fetch(url)
	.then( response => response.json() )
	.then( data => {
        var formattedAddress = data.results[0].formatted_address;
		$('#confirmAddress').text(formattedAddress);

        $("#confirm").click(function(){
			$('#latlng').val(latlng); 
			$('#address').val(formattedAddress);
			document.getElementById("map-popup").style.display = "none";
			document.getElementById("darkscreen").style.display = "none";
			
			return false;
        });		
		
	})
	.catch( err => console.warn(err.message));
}

function hideallpreviews(){
    document.getElementById("imgPreview0").style.display = "none";
	document.getElementById("imgPreview1").style.display = "none";
	document.getElementById("imgPreview2").style.display = "none";
};

//form validation
const localStorage = window.localStorage;

function onSubmitPressed() {
	
	event.preventDefault();
			
	const hiddenInput = document.querySelector('#myFileInput');
	var numberofFiles = Object.keys(hiddenInput.files).length;
    var imageurl0 = document.getElementById("imageurl0").value;
	var imageurl1 = document.getElementById("imageurl1").value;
	var imageurl2 = document.getElementById("imageurl2").value;
		
    var type =  document.getElementById("type").value;
    var name =  document.getElementById("name").value;
    var imagefile = document.getElementById("myFileInput").value;
    var latlng = document.getElementById("latlng").value;
    var address = document.getElementById("address").value;
    var comment = document.getElementById("comment").value;
	
	if (comment === ""){
		$('#comment').addClass('error');
	};
	
	if ( type == "" || type === undefined || type === null || type.length == 0){
		$('#type').addClass('error');
	};
	
	$('#smeform input*').each(function(){
		if ($(this).val() == ""){
		    $(this).addClass('error');
        };
	});
	
	
	if( type !== "" && type !== undefined && type !== null) {
	  if(name != "" && numberofFiles != 0 && numberofFiles < 4 && imageurl0 != "" && latlng != "" && address != "" && comment != ""){

	    document.getElementById('smeform').reset();
	    document.getElementById("myFileInput").value = "";
	    document.getElementById('imageurl1').value = "" ;
		
	    hideallpreviews();
	    document.getElementById("confirm-popup").style.display = "block";
	    document.getElementById("darkscreen").style.display = "block";
	  
	    var logo = getLogo(type);
	    var color = getColor(type);
	    dataTransfer(type,name,latlng,address,comment);
  
        if(numberofFiles == 1){
			var formObj = {'type':type,'logo':logo,'color':color,'name':name,
		                   'numberofFiles':numberofFiles,'image1':imageurl0,
			               'latlng': latlng, 'address':address, 'comment':comment};
		} else if(numberofFiles == 2){
            var formObj = {'type':type,'logo':logo,'color':color,'name':name,
		                   'numberofFiles':numberofFiles,'image1':imageurl0, 'image2':imageurl1,
			               'latlng': latlng, 'address':address, 'comment':comment};
        } else if(numberofFiles == 3){
			var formObj = {'type':type,'logo':logo,'color':color,'name':name,
		                   'numberofFiles':numberofFiles,'image1':imageurl0,'image2':imageurl1,'image3':imageurl2,
			               'latlng': latlng, 'address':address, 'comment':comment};

		};
		
	    var submittimes = localStorage.getItem( 'submittimes' );
	    var thisArrayNumber = submittimes.valueOf(); 
	
	    var formArrayName = 'formArray' + thisArrayNumber  + ''; 
	
	    thisArrayNumber ++;
	
	    localStorage.setItem( 'submittimes' , thisArrayNumber  );
	    localStorage.setItem( formArrayName ,JSON.stringify(formObj));
		  
        addToMain(thisArrayNumber - 1);
	  };
	};
	return false;
};

function dataTransfer(type,name,latlng,address,comment) {
	document.getElementById("type2").value = type;
    document.getElementById("name2").value = name;
	document.getElementById("latlng2").value = latlng;
	document.getElementById("address2").value = address;
	document.getElementById("comment2").value = comment;
};

function getLogo(type) {
	var logoArray = {'餐廳':'fas fa-utensils', 
	                 '外賣店':'fas fa-shopping-bag',
			 '餅店':'fas fa-bread-slice',
			 '超市':'fas fa-shopping-cart', 
			 '便利店/雜貨店': 'fas fa-store', 
			 '專賣店':'fas fa-store-alt', 
			 '個人服務':'fas fa-user-friends',
			 '運輸':'fas fa-truck',
			 '商用服務':'fas fa-hand-holding-usd',
			 '教育':'fas fa-chalkboard-teacher',
			 '娛樂':'far fa-laugh-squint',
			 '其他':'fas fa-building',
			 };
	var logo = logoArray[type];
	return logo;
};

function getColor(type) {
	var colorArray = {'餐廳':'#e60000', 
	                 '外賣店':'#e60000',
			 '餅店':'#e60000',
			 '超市':'#ff9933', 
			 '便利店/雜貨店': '#ff9933', 
			 '專賣店':'#ff9933', 
			 '個人服務':'#004d99',
			 '運輸':'#004d99',
			 '商用服務':'#004d99',
			 '教育':'#2eb82e',
			 '娛樂':'#9933ff',
			 '其他':'#8c8c8c',
			 };
	var color = colorArray[type];
	return color;
};

function compressImage(version, number, file){
    event.preventDefault();
	if (!file) return;
	
	const reader = new FileReader();
		
	reader.readAsDataURL(file);
    reader.onload = function(event) {
        const imgElement = document.createElement("img");
	    imgElement.src = event.target.result;		
  
        imgElement.onload = function(e){
            const canvas = document.createElement("canvas");
	        const MAX_WIDTH = 240;
	        const scaleSize = MAX_WIDTH / e.target.width;
            canvas.width = MAX_WIDTH;
            canvas.height = e.target.height * scaleSize;
				
	        const ctx = canvas.getContext("2d");
				
	        ctx.drawImage(e.target, 0, 0, canvas.width, canvas.height);
	        const srcEncoded = ctx.canvas.toDataURL(e.target, "image/jpeg");
			
            $('#imageurl'+ number+'').val(srcEncoded); 
			
			if(version == 1){
				document.querySelector("#imgPreviewButton").addEventListener("click", function() {
                    imgPreview(number, srcEncoded);
				    document.getElementById("imgPreview1").style.display = "none";
			        document.getElementById("imgPreview1").setAttribute("src", "");
			        document.getElementById("imgPreview2").style.display = "none";
			        document.getElementById("imgPreview2").setAttribute("src", "");
                    return false;
                });
			} else if(version == 2) {			
			     document.querySelector("#imgPreviewButton").addEventListener("click", function() {
                    imgPreview(number, srcEncoded);
			        document.getElementById("imgPreview2").style.display = "none";
			        document.getElementById("imgPreview2").setAttribute("src", "");
                    return false;
                });
			} else if(version == 3){
			    document.querySelector("#imgPreviewButton").addEventListener("click", function() {
                    imgPreview(number, srcEncoded);
                    return false;
                });
			};
        };			
    };
}; 

function imgPreview(number, url){

	var imagePreview = "imgPreview" + number + "";
	
	if(url && url != "" ) {    
	        document.getElementById(imagePreview).style.backgroundImage = "url('" + url + "')";
		    document.getElementById(imagePreview).style.display = "block";
	} else {
            alert("圖片未能正確上傳，請再次嘗試");
			document.getElementById(imagePreview).style.backgroundImage = "none";
			document.getElementById(imagePreview).style.display = "none";

	};
};

function ImageSubmit(version,number,file){
	event.preventDefault();
	
	if (!file) return;
	
	const reader = new FileReader();
		
	reader.readAsDataURL(file);
	
    reader.onload = function(event) {
        const imgElement = document.createElement("img");
	    imgElement.src = event.target.result;		
  
        imgElement.onload = function(e){
            const canvas = document.createElement("canvas");
			if(version == 1){
			  const MAX_WIDTH = 80;
              document.getElementById("imageurlF1").disabled = true;
			  document.getElementById("imageurlF2").disabled = true;
			} else if(version == 2) {	
	          const MAX_WIDTH = 40;			
              document.getElementById("imageurlF1").disabled = false;
			  document.getElementById("imageurlF2").disabled = true;
			} else if(version == 3){
			  const MAX_WIDTH = 26.66;
              document.getElementById("imageurlF1").disabled = false;
			  document.getElementById("imageurlF2").disabled = false;
			};

	        const scaleSize = MAX_WIDTH / e.target.width;
            canvas.width = MAX_WIDTH;
            canvas.height = e.target.height * scaleSize;
				
	        const ctx = canvas.getContext("2d");
				
	        ctx.drawImage(e.target, 0, 0, canvas.width, canvas.height);
	        const srcEncoded = ctx.canvas.toDataURL(e.target, "image/jpeg");
			
			$('#imageurlF'+ number+'').val(srcEncoded); 
        };			
    };	
}; 

//Add New ELements To Main Page
function addToMain(number) {
    var formArrayName = 'formArray' + number + '';
	var formdata = JSON.parse(localStorage.getItem(formArrayName));
	var logo = formdata.logo;
	var color = formdata.color;
    var name = formdata.name;
	
	var coordinates = formdata.latlng;
	var address = formdata.address;
	var comment = formdata.comment;
	
	var numberofFiles = formdata.numberofFiles;	
	var imageurl1 = formdata.image1;
	var imageurl2 = formdata.image2;
	var imageurl3 = formdata.image3;
	
	if(numberofFiles == 1){
		var newMainElement = `
	<div class="col s12 m6 l4">
	  <div class="panel center main">
        <div class="panel-heading center" style="background-color:${color};">
        </div>
		<div class="display w3-hover-opacity" style="background-image:url('${imageurl1}');"></div>
        <div class="panel-body w3-left-align" style="padding:10px;">
		<h5><i class="${logo}"></i> ${name}</h5>
	    <div class="w3-margin-top">
	      <p><i class="fas fa-globe" style="color:blue"></i>：${coordinates}</p>
		  </div>
	    <div>
	      <p><i class="fas fa-map-marker-alt" style="color:red"></i>：${address}</p>
	    </div>
	    <div><i class="fas fa-comment-dots"></i>留言：<br>
	    <div class="w3-border comment" style="width:100%;">${comment}</div>
	    </div>
        </div>
      </div>
	</div>
	`;
        $("#showElement").prepend(newMainElement);
	} else if(numberofFiles == 2){
		var newMainElement = `
	<div class="col s12 m6 l4">
	  <div class="panel center main">
        <div class="panel-heading center" style="background-color:${color};">
        </div>
		<div class="w3-content w3-display-container">
		    <div class="mySlides slide${number} display w3-hover-opacity" style="background-image:url('${imageurl1}');display:block;"></div>
		    <div class="mySlides slide${number} display w3-hover-opacity" style="background-image:url('${imageurl2}');"></div>

            <button class="w3-button w3-black w3-display-left" onclick="plusDivs${number}(-1)">&#10094;</button>
            <button class="w3-button w3-black w3-display-right" onclick="plusDivs${number}(1)">&#10095;</button>
        </div>
        <div class="panel-body w3-left-align" style="padding:10px;">
		<h5><i class="${logo}"></i> ${name}</h5>
	    <div class="w3-margin-top">
	      <p><i class="fas fa-globe" style="color:blue"></i>：${coordinates}</p>
		  </div>
	    <div>
	      <p><i class="fas fa-map-marker-alt" style="color:red"></i>：${address}</p>
	    </div>
	    <div><i class="fas fa-comment-dots"></i>留言：<br>
	    <div class="w3-border comment" style="width:100%;">${comment}</div>
	    </div>
        </div>
      </div>
	  <script>
          var slideIndex${number} = 1;
          showDivs${number}(slideIndex${number});

          function plusDivs${number}(n) {
              showDivs${number}(slideIndex${number} += n);
          }

          function showDivs${number}(n) {
              var i;
              var x = document.getElementsByClassName("slide${number}");
              if (n > x.length) {slideIndex${number} = 1}
              if (n < 1) {slideIndex${number} = x.length}
              for (i = 0; i < x.length; i++) {
                  x[i].style.display = "none";  
              }
             x[slideIndex${number} - 1].style.display = "block";  
          }
       </script>
	</div>
	`;
        $("#showElement").prepend(newMainElement);
	}else if(numberofFiles == 3){
		var newMainElement = `
	<div class="col s12 m6 l4">
	  <div class="panel center main">
        <div class="panel-heading center" style="background-color:${color};">
        </div>
		<div class="w3-content w3-display-container">
		    <div class="mySlides slide${number} display w3-hover-opacity" style="background-image:url('${imageurl1}');display:block;"></div>
		    <div class="mySlides slide${number} display w3-hover-opacity" style="background-image:url('${imageurl2}');"></div>
            <div class="mySlides slide${number} display w3-hover-opacity" style="background-image:url('${imageurl3}');"></div>
			
            <button class="w3-button w3-black w3-display-left" onclick="plusDivs${number}(-1)">&#10094;</button>
            <button class="w3-button w3-black w3-display-right" onclick="plusDivs${number}(1)">&#10095;</button>
        </div>
        <div class="panel-body w3-left-align" style="padding:10px;">
		<h5><i class="${logo}"></i> ${name}</h5>
	    <div class="w3-margin-top">
	      <p><i class="fas fa-globe" style="color:blue"></i>：${coordinates}</p>
		  </div>
	    <div>
	      <p><i class="fas fa-map-marker-alt" style="color:red"></i>：${address}</p>
	    </div>
	    <div><i class="fas fa-comment-dots"></i>留言：<br>
	    <div class="w3-border comment" style="width:100%;">${comment}</div>
	    </div>
        </div>
      </div>
	  <script>
          var slideIndex${number} = 1;
          showDivs${number}(slideIndex${number});

          function plusDivs${number}(n) {
              showDivs${number}(slideIndex${number} += n);
          }

          function showDivs${number}(n) {
              var i;
              var x = document.getElementsByClassName("slide${number}");
              if (n > x.length) {slideIndex${number} = 1}
              if (n < 1) {slideIndex${number} = x.length}
              for (i = 0; i < x.length; i++) {
                  x[i].style.display = "none";  
              }
             x[slideIndex${number} - 1].style.display = "block";  
          }
       </script>
	</div>
	`;
        $("#showElement").prepend(newMainElement);
	};

};

$(document).ready(function(){
	localStorage.setItem( 'geolocation' , '' );
	var submittimes = localStorage.getItem( 'submittimes' );
	if (submittimes === undefined || submittimes === null || submittimes.length === 0){
            localStorage.setItem( 'submittimes' , 0 );
        };
	
	var number = localStorage.getItem('submittimes');
	for (i = 0; i < number; i++) {
            addToMain(i);
    };
	
	$('#smeform').keydown(function(){
            $('#smeform *').removeClass('error');
        });
	
	$('#type, #myFileInput').click(function(){
            $('#smeform *').removeClass('error');
        });

	$("#finalsubmit").click(function(){	
	    document.getElementById("confirm-popup").style.display = "none";
        document.getElementById("darkscreen").style.display = "none";

    });
		
	$("#finalcancel").click(function(){
		
	    event.preventDefault();
		  
	    document.getElementById("confirm-popup").style.display = "none";
        document.getElementById("darkscreen").style.display = "none";
		  
	    return false;
    });
    
	document.getElementById("get_location").addEventListener("click", function(){
     
      var mylocation = localStorage.getItem( 'geolocation' ); 
	
	  if(mylocation == 'available'){
	   	  document.getElementById("map-popup").style.display = "block";
	      document.getElementById("darkscreen").style.display = "block";
		  
		  return false;
	  } else {
    
	    if('geolocation' in navigator) {

            localStorage.setItem( 'geolocation' , 'available' );
            navigator.geolocation.getCurrentPosition(position => {
    
            var lat = position.coords.latitude;
	        var lng = position.coords.longitude;
	        var latlng = lat + ',' + lng;
	
	        initMap(lat,lng);
	        geocode(latlng);

            document.getElementById("map-popup").style.display = "block";
	        document.getElementById("darkscreen").style.display = "block"; 
	        $('#cancel').click(function(){

              document.getElementById("map-popup").style.display = "none";
	          document.getElementById("darkscreen").style.display = "none";
              return false;
           });
          })
        } else {
            console.log('geolocation not available');
	        $('#latlng').val('geolocation not available');
        };
      };
    return false;
   });
   
});
