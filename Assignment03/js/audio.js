// Data for the "HTML Audio" Page

var audio = {
    controls: true, 
    source: [
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/Track03.mp3", type: "audio/mpeg"},
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/Track03.ogg", type: "audio/ogg"}
    ]
};

window.onload = function () {

    var lAudio = document.querySelector("#outputAudio");
    lAudio.innerHTML = buildAudio(audio);
};

buildAudio = function(obj) {

    var lAudio = "";
    
    if (obj["controls"] == true) { 
       lAudio += "<audio controls>";
    } else {
       lAudio += "<audio>"; //lAudio += "<audio autoplay>"; //use this option to start autoplay without controls
    }

    lAudio += "<source src='"+ obj["source"][0]["src"] + "' type='" + obj["source"][0]["type"]+ "' />";
    lAudio += "<source src='"+ obj["source"][1]["src"] + "' type='" + obj["source"][1]["type"]+ "' />";
    lAudio +=  "Your browser does not support the audio element. </audio>";

    return lAudio;
};