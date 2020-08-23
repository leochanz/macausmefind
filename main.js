
$(document).ready(function(){
	
$('.tab-content').hide();
$('.tabs > a').hide();
$('.tabs > a:first').show();

// show the first tab.
$('.tab-content:first').show();

// indicate first tab is active.
$('.tabs > a').removeClass('active');
$('.tabs > a:first').addClass('active');

$('.sidebar a').click(function(){
  // get the href, which is #tab1, #tab2 or #tab3
  var href = $(this).attr('href');
  
  
  // show only the target tab.
  $('.tabs > a' + href + '').show();

  $('.tabs > a').removeClass('active');
  $('.tabs > a' + href + '').addClass('active');
  
  $('.tab-content').hide();
  $('div' + href +'').show();
  
  $('.sidebar').hide();
  
  // disable default browser behavior.
  return false;
});

// when click on the tab link.
$('.tabs > a').click(function(){
  // get the href, which is #tab1, #tab2 or #tab3
  var href = $(this).attr('href');
  
  // hide all tabs.
  $('.tab-content').hide();
  
  // show only the target tab.
  $('div' + href +'').show();
  
  // indicate target tab is active.
  $('.tabs > a').removeClass('active');
  $(this).addClass('active');
  
  // disable default browser behavior.
  return false;
});

$('.closs_button').click(function(){
  // get the href, which is #tab1, #tab2 or #tab3
  var href = $(this).attr('href');
  
  // hide all tabs.
  $(href).hide();
  
  // show only the target tab.
  
  // indicate target tab is active.
  $('.tabs > a').removeClass('active');
  $('.tabs > a:first').addClass('active');
  $('.tab-content:first').show();
  
  // disable default browser behavior.
  return false;
});

});





