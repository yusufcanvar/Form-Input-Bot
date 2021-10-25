
function BotOpen() {
    var mywindow = window.open("https://aosdestek.anadolu.edu.tr/soru-sor", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=900,left=500,width=800,height=1000");


    mywindow.onload = function () {
        mywindow.document.getElementById('tc').value = '324234';
    }
}