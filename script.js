$(function(){
    $(".buttonForm").click(function(){
        const massivecolor = ["#F16D69","#F379A2","#9170CB","#5EB3F6","#67D7E5","#FFE083"]
        const randomcolor = massivecolor[Math.floor(Math.random() * massivecolor.length)];
        const enteredText = $("#myInput").val();
        $("#list").prepend(`<li class= "listli"><div id="bordfix"><input id="checkbox" type="checkbox"/></div><div id="listdiv">${enteredText}</div></li>`);
        $(".listli:eq(0)").css("background-color", randomcolor)
    })
    $(".box").click(function(){
        const colorbox = $(this).css("background-color")
        $("input:checkbox:checked").each(function(){
            $(this).parent().parent().css("background-color", colorbox)
        });
    })
});
