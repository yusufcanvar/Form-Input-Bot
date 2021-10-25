
function BotOpen() {
    // var mywindow = window.open("https://aosdestek.anadolu.edu.tr/soru-sor", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=900,left=500,width=800,height=1000");
    /*
        setTimeout(function(){
            mywindow.document.getElementById('tc').value = '324234';
        },2000)
        */

    //document.getElementById('tc').value = '324234'
    document.getElementById('screen').contentWindow.document.getElementById('tc').value = 'x'

    var iframe = document.getElementById("screen");
    var elmnt = iframe.contentWindow.document.getElementsById('tc');
    elmnt.style.display = "none";
}