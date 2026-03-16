var col01;
var col02;
var col03;
var col04;
var col05;
var col06;


$(window).load(function () {

    var kits = $(".matchpage-team-kit");

    for (var i = 0; i < kits.length; i++) {
        var canvasShirt = $(kits[i]).find(".canvas_TeamShirt");
        var canvasShorts = $(kits[i]).find(".canvas_TeamShorts");
        var canvasSocks = $(kits[i]).find(".canvas_TeamSocks");
        var shirtColor = canvasShirt.data("colors");
        var shortsColor = canvasShorts.data("colors");
        var socksColor = canvasSocks.data("colors");
  

        //var shirtColor = $("#<%=lbl_UC_shirtColor.ClientID%>").text();
        //var shortsColor = $("#<%=lbl_UC_shortsColor.ClientID%>").text();
        //var socksColor = $("#<%=lbl_UC_socksColor.ClientID%>").text();
        if (shirtColor != null) {

            var shirtSplit = shirtColor.split('/');
            var shortsSplit = shortsColor.split('/');
            var socksSplit = socksColor.split('/');

            col01 = shirtSplit[0];
            col02 = shirtSplit[1];
            col03 = shortsSplit[0];
            col04 = shortsSplit[1];
            col05 = socksSplit[0];
            col06 = socksSplit[1];

            if (col02 == null) {

                SetPattern(canvasShirt, 1, 4, false, 1);
            } else {

                SetPattern(canvasShirt, 3, 4, false, 1);
            }
            if (col04 == null) {
                SetPattern(canvasShorts, 1, 4, false, 2);
            } else {

                SetPattern(canvasShorts, 6, 4, false, 2);
            }
            if (col06 == null) {
                SetPattern(canvasSocks, 1, 4, false, 3);
            } else {

                SetPattern(canvasSocks, 4, 4, false, 3);
            }
        }
    }
});


function SetPattern(element, pattern, divident, isIcon, type) {


    var drawingCanvas = element[0];

    var selectedOption = pattern;

    //var selectedOption = $("#ddl_shirtPattern option:selected").val();
    //if (!isIcon) {
    //    if (type == 1) {

    //        var div_shirt = $("#div_shirt");
    //        if (selectedOption == "0" && div_shirt.data("savedPattern") != null) {
    //            selectedOption = div_shirt.data("savedPattern");
    //        }
    //        else {
    //            div_shirt.data("savedPattern", selectedOption);
    //        }

    //    }

    //    if (type == 2) {

    //        var div_shorts = $("#div_shorts");
    //        if (selectedOption == "0" && div_shorts.data("savedPattern") != null) {
    //            selectedOption = div_shorts.data("savedPattern");
    //        }
    //        else {
    //            div_shorts.data("savedPattern", selectedOption);
    //        }

    //    }
    //    if (type == 3) {

    //        var div_socks = $("#div_socks");
    //        if (selectedOption == "0" && div_socks.data("savedPattern") != null) {
    //            selectedOption = div_socks.data("savedPattern");
    //        }
    //        else {
    //            div_socks.data("savedPattern", selectedOption);
    //        }

    //    }
    //}
    //div_shirt.data("type", selectedOption);

    drawingCanvas.height = (144 / divident);
    drawingCanvas.width = (144 / divident);

    // Check the element is in the DOM and the browser supports canvas
    if (drawingCanvas.getContext) {

        // Initaliase a 2-dimensional drawing context
        var context = drawingCanvas.getContext('2d');
        //Canvas commands go here
        if (isIcon == true) {
            context.fillStyle = "#a3a3a3";
        }
        else {
            if (type == 1) {
                context.fillStyle = col01;
            }
            if (type == 2) {
                context.fillStyle = col03;
            }
            if (type == 3) {
                context.fillStyle = col05;
            }
        }

        //hele trøjen
        context.fillRect(0, 0, 144 / divident, 144 / divident);

        if (type == 1) {

            if (isIcon == true) {
                context.fillStyle = "#4d4d4d";
            }
            else {
                context.fillStyle = col02;
            }

            if (selectedOption == "1") {

            }

            if (selectedOption == "2") {

                context.fillRect(72 / divident, 0, 72 / divident, 144 / divident);

            }
            if (selectedOption == "3") {

                context.fillRect(0, 0, 24 / divident, 144 / divident);
                context.fillRect(36 / divident, 0, 12 / divident, 144 / divident);
                context.fillRect(66 / divident, 0, 12 / divident, 144 / divident);
                context.fillRect(96 / divident, 0, 12 / divident, 144 / divident);
                context.fillRect(120 / divident, 0, 24 / divident, 144 / divident);
            }

            if (selectedOption == "4") {

                context.fillRect(0, 66 / divident, 144 / divident, 48 / divident);
            }

            if (selectedOption == "5") {

                context.fillRect(0, 72 / divident, 144 / divident, 72 / divident);
            }

            if (selectedOption == "6") {

                context.fillRect(0, 60 / divident, 144 / divident, 16 / divident);
                context.fillRect(54 / divident, 0, 16 / divident, 144 / divident);
            }
            if (selectedOption == "7") {

                context.fillRect(0, 0, 16 / divident, 16 / divident);
                context.fillRect(0, 32 / divident, 16 / divident, 16 / divident);
                context.fillRect(0, 64 / divident, 16 / divident, 16 / divident);
                context.fillRect(0, 96 / divident, 16 / divident, 16 / divident);
                context.fillRect(0, 128 / divident, 16 / divident, 16 / divident);

                context.fillRect(16 / divident, 16 / divident, 16 / divident, 16 / divident);
                context.fillRect(16 / divident, 48 / divident, 16 / divident, 16 / divident);
                context.fillRect(16 / divident, 80 / divident, 16 / divident, 16 / divident);
                context.fillRect(16 / divident, 112 / divident, 16 / divident, 16 / divident);

                context.fillRect(32 / divident, 0, 16 / divident, 16 / divident);
                context.fillRect(32 / divident, 32 / divident, 16 / divident, 16 / divident);
                context.fillRect(32 / divident, 64 / divident, 16 / divident, 16 / divident);
                context.fillRect(32 / divident, 96 / divident, 16 / divident, 16 / divident);
                context.fillRect(32 / divident, 128 / divident, 16 / divident, 16 / divident);

                context.fillRect(48 / divident, 16 / divident, 16 / divident, 16 / divident);
                context.fillRect(48 / divident, 48 / divident, 16 / divident, 16 / divident);
                context.fillRect(48 / divident, 80 / divident, 16 / divident, 16 / divident);
                context.fillRect(48 / divident, 112 / divident, 16 / divident, 16 / divident);

                context.fillRect(64 / divident, 0, 16 / divident, 16 / divident);
                context.fillRect(64 / divident, 32 / divident, 16 / divident, 16 / divident);
                context.fillRect(64 / divident, 64 / divident, 16 / divident, 16 / divident);
                context.fillRect(64 / divident, 96 / divident, 16 / divident, 16 / divident);
                context.fillRect(64 / divident, 128 / divident, 16 / divident, 16 / divident);

                context.fillRect(80 / divident, 16 / divident, 16 / divident, 16 / divident);
                context.fillRect(80 / divident, 48 / divident, 16 / divident, 16 / divident);
                context.fillRect(80 / divident, 80 / divident, 16 / divident, 16 / divident);
                context.fillRect(80 / divident, 112 / divident, 16 / divident, 16 / divident);

                context.fillRect(96 / divident, 0, 16 / divident, 16 / divident);
                context.fillRect(96 / divident, 32 / divident, 16 / divident, 16 / divident);
                context.fillRect(96 / divident, 64 / divident, 16 / divident, 16 / divident);
                context.fillRect(96 / divident, 96 / divident, 16 / divident, 16 / divident);
                context.fillRect(96 / divident, 128 / divident, 16 / divident, 16 / divident);

                context.fillRect(112 / divident, 16 / divident, 16 / divident, 16 / divident);
                context.fillRect(112 / divident, 48 / divident, 16 / divident, 16 / divident);
                context.fillRect(112 / divident, 80 / divident, 16 / divident, 16 / divident);
                context.fillRect(112 / divident, 112 / divident, 16 / divident, 16 / divident);

                context.fillRect(128 / divident, 0, 16 / divident, 16 / divident);
                context.fillRect(128 / divident, 32 / divident, 16 / divident, 16 / divident);
                context.fillRect(128 / divident, 64 / divident, 16 / divident, 16 / divident);
                context.fillRect(128 / divident, 96 / divident, 16 / divident, 16 / divident);
                context.fillRect(128 / divident, 128 / divident, 16 / divident, 16 / divident);


            }
            if (selectedOption == "8") {

                context.fillRect(0, 0, 38 / divident, 144 / divident);
                context.fillRect(106 / divident, 0, 38 / divident, 144 / divident);
            }
            if (selectedOption == "9") {

                context.fillRect(0, 0, 48 / divident, 144 / divident);
                context.fillRect(96 / divident, 0, 48 / divident, 144 / divident);
            }

            if (selectedOption == "10") {

                context.fillRect(0, 24 / divident, 144 / divident, 12 / divident);

                context.fillRect(0, 56 / divident, 144 / divident, 12 / divident);
                context.fillRect(0, 88 / divident, 144 / divident, 12 / divident);
                context.fillRect(0, 120 / divident, 144 / divident, 12 / divident);

                //context.fillRect(20, 0, 4, 60);
                //context.fillRect(35, 0, 4, 60);
                //context.fillRect(125, 0, 4, 60);
                //context.fillRect(110, 0, 4, 60);
            }

        }
        if (type == 2) {

            if (isIcon == true) {
                context.fillStyle = "#4d4d4d";
            }
            else {
                context.fillStyle = col04;
            }

            if (selectedOption == "1") {

            }
            if (selectedOption == "2") {

                context.fillRect(72 / divident, 0, 72 / divident, 144 / divident);

            }
            if (selectedOption == "3") {

                context.rotate(0.20);
                context.fillRect(48 / divident, 0, 12 / divident, 132 / divident);
                context.rotate(-0.20);
            }

            if (selectedOption == "4") {

                context.rotate(0.20);
                context.fillRect(48 / divident, 0, 12 / divident, 132 / divident);
                context.rotate(-0.20);
                context.rotate(-0.20);
                context.fillRect(82 / divident, 0, 12 / divident, 132 / divident);
                context.rotate(0.20);
            }

            if (selectedOption == "5") {
                context.fillRect(0, 96 / divident, 144 / divident, 48 / divident);
            }

            if (selectedOption == "6") {
                context.fillRect(0, 0, 40 / divident, 144 / divident);
                context.fillRect(104 / divident, 0, 40 / divident, 144 / divident);
            }
        }
        if (type == 3) {

            if (isIcon == true) {
                context.fillStyle = "#4d4d4d";
            } else {
                context.fillStyle = col06;
            }

            if (selectedOption == "1") {

            }
            if (selectedOption == "2") {

                context.fillRect(0, 0, 144 / divident, 48 / divident);

            }
            if (selectedOption == "3") {

                context.fillRect(0, 16 / divident, 144 / divident, 8 / divident);
                context.fillRect(0, 28 / divident, 144 / divident, 8 / divident);
                context.fillRect(0, 40 / divident, 144 / divident, 8 / divident);
                context.fillRect(0, 52 / divident, 144 / divident, 8 / divident);
                context.fillRect(0, 64 / divident, 144 / divident, 8 / divident);
                context.fillRect(0, 76 / divident, 144 / divident, 8 / divident);
                context.fillRect(0, 88 / divident, 144 / divident, 8 / divident);


            }

            if (selectedOption == "4") {

                context.fillRect(0, 16 / divident, 144 / divident, 8 / divident);
                context.fillRect(0, 28 / divident, 144 / divident, 8 / divident);
                context.fillRect(0, 40 / divident, 144 / divident, 8 / divident);
                context.fillRect(0, 52 / divident, 144 / divident, 8 / divident);


            }

            if (selectedOption == "5") {
                context.fillStyle = col06;

                context.fillRect(60 / divident, 0, 8 / divident, 116 / divident);

                context.fillRect(102 / divident, 0, 8 / divident, 144 / divident);

            }

        }
    }
};