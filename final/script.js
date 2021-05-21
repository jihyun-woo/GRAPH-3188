$(document).ready(function() {
    $(".navi1").hover(showStar1, hideAllStars);
    $(".navi2").hover(showStar2, hideAllStars);
    $(".navi3").hover(showStar3, hideAllStars);
    $(".navigation").hover(stopAnim, contAnim);


    function showStar1() {
        $("#star1").css("visibility", "visible");
    }
    function showStar2() {
        $("#star2").css("visibility", "visible");
    }
    function showStar3() {
        $("#star3").css("visibility", "visible");
    }
    function hideAllStars() {
        $("#star1").css("visibility", "hidden");
        $("#star2").css("visibility", "hidden");
        $("#star3").css("visibility", "hidden");
    }
    function stopAnim() {
        $(".navigation").removeClass("anim");
    }
    function contAnim() {
        $(".navigation").addClass("anim");
    }
});

console.log("test");