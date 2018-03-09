// Data for the "HTML Video" Page

var video = {
    controls: true, 
    width: 320,
    height: 240,
    source: [
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/movie.mp4", type: "video/mp4"},
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/movie.ogg", type: "video/ogg"},
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/movie.webm", type: "video/webm"}
    ]
};


window.onload = function () {

    var lVideo = document.querySelector("#outputVideo");
    lVideo.innerHTML += buildVideo(video);
};

buildVideo = function(obj) {

    var lVideo = "";
    
    lVideo += "<video width='"+ obj["width"] +"' height='"+ obj["height"] +"' ";
    if (obj["controls"] == true) { 
       lVideo += "controls>";
    } else {
       lVideo += ">"; 
    }

    lVideo += "<source src='"+ obj["source"][0]["src"] + "' type='" + obj["source"][0]["type"]+ "' />";
    lVideo += "<source src='"+ obj["source"][1]["src"] + "' type='" + obj["source"][1]["type"]+ "' />";
    lVideo += "<source src='"+ obj["source"][2]["src"] + "' type='" + obj["source"][2]["type"]+ "' />";
    lVideo +=  "Your browser does not support the video tag/type. </video>";

    return lVideo;
};
