function myfuction(){
    $("h1").addClass("big-title")
}

$("button").click(myfuction)

$("body").keypress(function(event){
    $("h1").text(event.key)
})
$("h1").on("mouseover",function(){
    $("h1").css("color","green")
})