<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
  <title>macausmefind</title>
  <link rel="stylesheet" href="style3.css">
  <link rel="stylesheet" href="swiper.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.6.3/dist/js/foundation.min.js">
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
 
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  
  <script src="https://kit.fontawesome.com/a076d05399.js"></script>
  <script src="javascript1.js"></script>
<style>

</style>
</head>
<body>

<script>// Require variables to be declared prior to use
var button // Represents the 'button' div
var payload // Represents the div that will be hidden


// Called when the 'button' div is clicked.
// Toggles the 'payload' div's membership of the 'hidden' class.
function togglePayload() {
payload.classList.toggle('hidden');
}


// Sets everything up. Called automatically when the page loads.
function init() {
// Connect the button variable with the button div
button = document.querySelector('.button')

// Connect the payload variable with the payload div
payload = document.querySelector('.payload')

// Call the togglePayload function when the button div is clicked
button.onclick = togglePayload;
}
// Run the init function when the page loads.
document.addEventListener("DOMContentLoaded", init, false);

function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}


</script>



<div class="w3-bar" style="background-color: #2d2d86; position:fixed; z-index: 2;">
  <a href="#" class="w3-bar-item w3-button w3-left">
  <button class="w3-button w3-large" style="background-color:#9f9fdf;" onclick="w3_open()"><i class="fas fa-bars"></i></button>
  </a>
  <a href="#" class="w3-bar-item" style="float:both;" >
  <span style="font-family:Brush Script Std;
               color:white;
		       font-size:1.75em;">MacauSMEfind</span>
  </a>
  <a href="#" class="w3-bar-item w3-button w3-right">
  <button class="w3-button w3-large" style="background-color:#9f9fdf;" onclick=""><i class="fas fa-cog"></i></button>
  </a>
</div>

<div id="pop-up" class="payload w3-card-4 w3-animate-top w3-light-blue w3-bottombar w3-border-cyan" 
     style="">
<p>
<button id="close" class="button w3-button w3-circle w3-black w3-border-light-blue w3-right btn-lg" >
        
<i class="fas fa-times"></i></button>
</p>
<img src="bojack.png" alt="開發成員" width="100px" height="100px;" style="position:absolute;top:10px;left:10px;" />
<span style="position:relative;">
<h3 class="w3-left-align w3-text-white" style="font-family:細明體;padding-left: 120px;">發現中小企</h3>
<h6 class="w3-left-align w3-text-white" style="font-family:細明體;padding-left: 120px;word-warp:break-word;">發現中小企是由個人開發網頁，目標是提供一個穩定的平台讓使用者記錄並分享他們在澳門所見的
中小企業，從而共同分發掘澳門不為人知的有趣企業。</h6>
</span>

</div>

<div class="w3-sidebar w3-bar-block w3-animate-left"  id="mySidebar">
 <table class="w3-table">
  <thead class="thead-light">
  <tr class="w3-light-grey" style="display:block; width:100%; height:60px;">
      <th class="w3-bar-item">
           <button class="w3-bar-item  w3-button w3-large" onclick="w3_close()"><i class="fas fa-times"></i>關閉</button>
      </th>
	  <th></th>
  </tr>
   </thead>
   <tbody>
  
  <tr class="w3-hover-none">
   <td style="width:185px;"><input type="text" class="w3-input w3-white w3-mobile " placeholder="搜尋.." ></td>
   <td style="width:70px;"><button class="w3-button w3-green w3-mobile w3-large"><i class="fas fa-search"></i></button></td>
  </tr>
  <tr  class="w3-margin-top">
      <td><a href="file:///C:/Users/kench/OneDrive/%E6%A1%8C%E9%9D%A2/website/smewebsite.html"  class="w3-bar-item w3-light-grey w3-button w3-leftbar w3-border-indigo">
	  <i class="fas fa-home">首頁</a></td>
  </tr>
  <tr>
      <td><a href="#about" class="w3-bar-item w3-light-grey w3-button">
	  <i class="fas fa-info-circle"></i>關於網頁</a></td>
  </tr>
  <tr>
      <td><a href="#developer" class="w3-bar-item w3-light-grey w3-button">
	  <i class="fas fa-user-friends"></i>成員</a></td>
  </tr>
  <tr>
      <td><a href="#contact" class="w3-bar-item w3-light-grey w3-button">
	  <i class="fas fa-phone"></i>聯絡</a></td>
  </tr>
  <tr class="w3-margin-top">
      <td><a href="file:///C:/Users/kench/OneDrive/%E6%A1%8C%E9%9D%A2/website/smewebsite-form.html" class="w3-bar-item w3-light-grey w3-button">
	  <i class="fas fa-plus"></i>新增帖文</a></td>
  </tr>
  <tr>
      <td><a href="#delete" class="w3-bar-item w3-light-grey w3-button">
	  <i class="fas fa-trash"></i>刪除帖文</a></td>
  </tr>
  <tr>
      <td><a href="#heart" class="w3-bar-item w3-light-grey w3-button">
	  <i class="far fa-star"></i>收藏</a></td>
  </tr>
  </tbody>
</table>
</div>

<center><div class="slideshow-container">

<div class="mySlides fade">
  <img src="img1.jpg" class="slideshow" >
</div>

<div class="mySlides fade">
  <img src="img2.jpg" class="slideshow" >
</div>

<div class="mySlides fade">
  <img src="img3.png" class="slideshow" >
</div>

</div>
<br>

<div style="text-align:center">
  <span class="dot"></span> 
  <span class="dot"></span> 
  <span class="dot"></span> 
</div>
</center>

<script>
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Store
localStorage.setItem("lastname", "Smith");

// Retrieve
document.getElementById("result").innerHTML = localStorage.getItem("lastname");

$(document).ready(function(){
    var newElem = $("<div>I am new element!</div>");
    $("body").insertAfter(newElem);

});

var newElem = $("<div>I am new element!</div>");
    $("body").insertAfter(newElem);


</script>


<div class="panel panel-primary center" id="main">
  <div class="panel-heading center" style="background-color:#004d99;">
	<h1><i class="fas fa-utensils"></i>光輝咖啡</h1>
  </div>
  <div class="panel-body w3-left-align">
	<div>
	  <img src="shop1.jpg" width="360px" height="200px" class="center">
	</div>
	<div class="w3-margin-top">
	  <p>地址:
	  <a href="https://www.google.com/maps/place/%E5%85%89%E8%BC%9D%E5%92%96%E5%95%A1/@22.2020255,113.548387,15z/data=!4m2!3m1!1s0x0:0xbb1ca8825ca52177?sa=X&ved=2ahUKEwicx-qij-vqAhUQfd4KHey-DroQ_BIwE3oECBIQCA" style="text-decoration:none;">
	  <font color="red"><i class="fas fa-map-marker-alt"></i></font>澳門高士德大馬路33號C號</a></p>
	</div>
	<div>
	  <p style="word-wrap: break-word;">連結:<a href="https://www.facebook.com/pages/%E5%85%89%E8%BC%9D%E5%92%96%E5%95%A1/159967070726097">
	  https://www.facebook.com/pages/光輝咖啡/159967070726097</p></a>
	</div>
	<div>
	  <p>留言：今日一家尋食到澳門，高仕德街下車後剛轉街角看見一間舊式茶室…舊式餐室，好多人都污糟邋遢，
	  食物質素差，唔衛生。其實都不其然，玻璃肚的我對食和衛生都有一定要求。一踏進店給人一種被時間遺忘，
	  一陣煎肉，烘包香氣傳來。短短二十分鐘就有五十多個外賣客真不簡單。豬扒包，脆香肉濃又不油膩雲吞撈，
	  醬油香濃麪質爽口魚餅撈，手打魚餅肉質爽Q</p>
	</div>
	<div>
	  <p>評分：
	  <i class="fas fa-star"></i>
	  <i class="fas fa-star"></i>
	  <i class="fas fa-star"></i>
	  <i class="fas fa-star"></i>
	  <i class="fas fa-star-half-alt"></i>
	  </p>
	</div>  
  </div>
</div>

<a href="#top" style="position: fixed; right: 20px; bottom: 20px">
Back to Top
</a>



<script>
// Check browser support
if (typeof(Storage) !== "undefined") {
  // Store
  localStorage.setItem("lastname", "Smith");
  // Retrieve
  document.getElementById("result").innerHTML = localStorage.getItem("lastname");
} else {
  document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}
</script>


</body>
</html>
