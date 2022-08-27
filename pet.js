$(document).ready(function(){
    $("#search-icon").click(function(){
        $(this).toggleClass('fa-times')
        $("#search-box").toggleClass('active')
       
    })

    $("#menu").click(function(){
        $(this).toggleClass('fa-times')
        $(".navbar").toggleClass("nav-toggle")

    })

   
})
