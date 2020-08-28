var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyCWBgY-PLEL7qHq2kHr7qnea7kHUirVAg0', true)

request.onload = function () {
  // Begin accessing JSON data here
}

// Send request
request.send();


if('geolocation' in navigator) {
  console.log('geolocation available');
  navigator.geolocation.getCurrentPosition(position => {
    
	console.log(position);
    var lat = position.coords.latitude;
	var lng = position.coords.longitude;
	var latlng = lat + ',' + lng;
	
	initMap(lat,lng);
	geocode(latlng);

	$("#get_location").click(function(){
	  document.getElementById("map-popup").style.display = "block";
	  document.getElementById("darkscreen").style.display = "block";
	  
	  return false;
    });
	
	$('#cancel').click(function(){

      document.getElementById("map-popup").style.display = "none";
	  document.getElementById("darkscreen").style.display = "none";
      return false;
    });
  })
} else {
  console.log('geolocation not available')
  $("#get_location").click(function(){
	  $('#latlng').val('geolocation not available');
});
};


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

	
var formArray = [];
const localStorage = window.localStorage;

//form validation
function onSubmitPressed() {
	
	event.preventDefault();
	
    var type =  document.getElementById("type").value;
    var name =  document.getElementById("name").value;
    var imagefile =  document.getElementById("myFileInput").value;
    var imageurl = document.getElementById("imageurl").value;
    var coordinates = document.getElementById("latlng").value;
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
	
	
	if( type !== "" && type !== undefined && type !== null && type.length !== 0) {
	  if(name != "" && imagefile != "" && imageurl != "" && coordinates != "" && address != "" && comment != ""){
		
	    document.getElementById('smeform').reset();
	    document.getElementById('imageurl').value = "" ;
		
	    document.getElementById("imgPreview").style.display = "none";
	    document.getElementById("confirm-popup").style.display = "block";
	    document.getElementById("darkscreen").style.display = "block";
	  
	    var logo = getLogo(type);
	    dataTransfer(type,name,imagefile,imageurl,coordinates,address,comment);
		
	    var formObj = {'type':type,'logo':logo,'name':name,'imagefile':imagefile,'imageurl':imageurl, 'latlng': coordinates, 'address':address, 'comment':comment};
	    formArray.push(formObj);
		
	    var submittimes = localStorage.getItem( 'submittimes' );
	    var thisArrayNumber = submittimes.valueOf(); 
	
	    var formArrayName = 'formArray' + thisArrayNumber  + ''; 
	    var formArraySubmittedName = 'formArraySubmitted' + thisArrayNumber  + ''; 
	
	    thisArrayNumber ++;
	
	    localStorage.setItem( 'submittimes' , thisArrayNumber  );
	    localStorage.setItem( formArraySubmittedName , 'NO' );
            
	    alert('if this is the last message, it means the function below fails.');
	   
	    alert('we have not stored: ' + formArrayName + ' ');	  
		  
	    localStorage.setItem(formArrayName,JSON.stringify(formObj));
		  
	    alert('we just stored: ' + formArrayName + ' ');
		  
            loadMain();
	    
	    alert('we just called loadMain().');
	  };
	};
	return false;
};

function dataTransfer(type,name,imagefile,imageurl,latlng,address,comment) {
	document.getElementById("type2").value = type;
        document.getElementById("name2").value = name;
	document.getElementById("imagefile2").value = imagefile;
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

function addToMain(number) {
		
        var formArrayName = 'formArray' + number + '';
	var formdata = JSON.parse(localStorage.getItem(formArrayName));
	var logo = formdata.logo;
        var name = formdata.name;
	var imageurl = formdata.imageurl;
	var coordinates = formdata.latlng;
	var address = formdata.address;
	var comment = formdata.comment;
	
       var newMainElement = `
	<div class="panel panel-primary center main">
    <div class="panel-heading center">
	<h1><i class="${logo}"></i> ${name}</h1>
    </div>
    <div class="panel-body w3-left-align">
	<div><img src="${imageurl}"></div>
	<div class="w3-margin-top">
	<p><i class="fas fa-globe" style="color:blue"></i>：${coordinates}</p></div>
	<div>
	  <p><i class="fas fa-map-marker-alt" style="color:red"></i>：${address}</p>
	</div>
	<div><i class="fas fa-pen"></i>留言：<br>
	<div class="w3-border comment" style="width:100%;">${comment}</div>
	</div>
    </div>
    </div>
	`;
	
    $("div .tab-content:first").prepend(newMainElement);
};


function loadMain() {
	var number = localStorage.getItem('submittimes');
	for (i = 0; i < number; i++) {
        var formArraySubmittedNameGet = 'formArraySubmitted' + i + ''; 
	var submityesorno = localStorage.getItem(formArraySubmittedNameGet);
	if ( submityesorno && submityesorno == 'NO') {
            addToMain(i);
            localStorage.setItem( formArraySubmittedNameGet , 'YES' );	
	};
    };
};


$(document).ready(function(){
	
	var submittimes = localStorage.getItem( 'submittimes' );
	if (submittimes === undefined || submittimes === null || submittimes.length === 0){
        var x = 0;
        localStorage.setItem( 'submittimes' , x );
    } 

	
	var number = localStorage.getItem('submittimes');
	for (i = 0; i < number; i++) {
        var formArraySubmittedNameGet = 'formArraySubmitted' + i + ''; 
	    var submityesorno = localStorage.getItem(formArraySubmittedNameGet);
		
        addToMain(i);
	    localStorage.setItem( formArraySubmittedNameGet , 'YES' );	
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

});
