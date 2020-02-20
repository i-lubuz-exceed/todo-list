$(function(){
    $(".buttonForm").click(function(){ 
        var r=Math.floor(Math.random() * (256));
        var g=Math.floor(Math.random() * (256));
        var b=Math.floor(Math.random() * (256));
        var randomcolor='#' + r.toString(16) + g.toString(16) + b.toString(16);
        var enteredText = $("#myInput").val();
        $("#list").prepend(`<li class= "listli"><input id="checkbox" type="checkbox"/><div>${enteredText}</div></li>`);
        $(".listli:eq(0)").css("background-color", randomcolor)
    })
    $(".box").click(function(){
        var colorbox = $(this).css("background-color")
        $("input:checkbox:checked").each(function(){
            $(this).parent().css("background-color", colorbox)
        });
    })
});
