function sendContactViaPHP() {
    var valid;	
    valid = validateContact();
    if(valid) {
        jQuery.ajax({
            url: "js/contact_mail.php",
            data:'userName='+$("#userName").val()+'&userEmail='+
            $("#userEmail").val()+'&subject=GoodWin Advt Query&content='+
            $(content).val()+'\nPhone: '+$('#userPhone').val(),
            type: "POST",
            success:function(data){
                $("#mail-status").html(data);
            },
            error:function (data){}
        });
    }
}


function validateContact() {
    var valid = true;	
    $(".demoInputBox").css('background-color','');
    $(".info").html('');
    if(!$("#userName").val()) {
        $("#userName-info").html("(required)");
        $("#userName").css('background-color','#FFFFDF');
        valid = false;
    }
    if(!$("#userEmail").val()) {
        $("#userEmail-info").html("(required)");
        $("#userEmail").css('background-color','#FFFFDF');
        valid = false;
    }
    if(!$("#userEmail").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
        $("#userEmail-info").html("(invalid)");
        $("#userEmail").css('background-color','#FFFFDF');
        valid = false;
    }

    if(!$("#content").val()) {
        $("#content-info").html("(required)");
        $("#content").css('background-color','#FFFFDF');
        valid = false;
    }
    
    if(!$("#userPhone").val().match(/^\d{10}$/)) {
        $("#phone-info").html("(invalid - please enter 10 digit number )");
        $("#userPhone").css('background-color','#FFFFDF');
        valid = false;
    }
    return valid;
}




function loadImg(i) {
    var a = new Image();  // create image element
    a.onload = function() {  // this function is called only when the image successfully loads, eg. the file exists
        $div = $("<div class='column' id='div" + i + "'>");  // create a new div for the image
        $div.append($(a));  // put the image into the div
        $("#galleryRow").append($div);  // add the div to the body
        loadImg(i + 1);  // try to load the next image
    }
    a.className="img-fluid";
    a.style="width:400px;height:184px";
    a.src = "img/gallery/"+i + ".jpg";  // here we try to actually load the image
}
loadImg(1);