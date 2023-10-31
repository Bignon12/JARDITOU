$(document).ready(function(){ 
    

    $("#btn").click(function(){
        if ($("#div").is(":visible")){
            $("#div").hide();
        }
        else {
            $("#div").load("tableaucontent.html");
            $("#div").show();
        }
    });
});
        
