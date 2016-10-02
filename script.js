/**
 * Created by Mohsen on 9/30/2016.
 */

window.onload = function() {
    document.getElementById('command').onkeydown = function (event) {
        var e = event || window.event;
        if (e.keyCode == 13) {
            process();
        }
    }
}
function process() {
    var command = document.getElementById('command').value;
    var history = document.getElementById("history");
    var para = document.createElement("p");
    para.setAttribute('class', 'results');
    //var node = document.createTextNode("user@mohsenansari.com:~$ "+command);
    para.innerHTML = "user@mohsenansari.com:~$ "+command;
    //para.appendChild(node);
    history.appendChild(para);
    document.getElementById('command').value = ""
    if(command == "help"){
        var par = document.createElement("p");
        par.setAttribute('class', 'results');
        par.innerHTML = "list of possible commands are: <br>" +
            "download resume: to generate a link to my resume in pdf format <br>" +
            "change background: to randomly change the picture in the background to another space cat image! <br>" +
            "bio: to get a brief inroduction of me <br>" +
            "projects: to get the links to my projects including this website";
        history.appendChild(par);
    }
    else if(command == "download resume"){
        var link = document.createElement("a");
        var reslink = document.createTextNode("MohsenAnsari.pdf");
        link.setAttribute('href', "http://mohsenansari.com/resume/MohsenAnsariResume.pdf");
        link.setAttribute('class', 'results');
        link.setAttribute('target', "_blank");
        link.appendChild(reslink);
        history.appendChild(link);
    }
    else if(command == "change background"){
        var picnumber = Math.floor((Math.random() * 6) + 1);
        console.log(picnumber);
        document.body.style.background = "url(\"./bkg/bkg"+picnumber+".jpg\")";
    }
    else if(command == "clear"){
        var removables = document.getElementsByClassName('results');
        var numremovables = removables.length;
        for (var i=0 ; i<numremovables; i++){
            //remove the first element cause first element changes after every removing
            document.getElementById('history').removeChild(removables[0]);
        }
    }
    else if(command == "bio"){
        var par = document.createElement("p");
        par.setAttribute('class', 'results');
        par.innerHTML = "Thanks for your interest in my bio! <br>" +
        "My name is Mohsen Ansari, I was born in 1992. Currently I'm studying M.Sc." +
            " in computer science at the <a href='http://ucalgary.ca' target='_blank'> University of Calgary</a>. <br>"+
            "I like developing websites and building softwares (shocking!). As you can see, I also like to make unusual websites. <br>" +
            "If you've got any feedback for this website or you want to contact me, you can send me an email to this address: <br>" +
            "<a href=\'mailto:mohsen.ansari.ucalgary.ca\' target='_blank'>mohsen.ansari@ucalgary.ca</a><br>" +
            "You can also check my <a href=\'https://ca.linkedin.com/in/mohsenansari\' target='_blank'>LinkedIn</a> profile or look at my resume to know more about my technical skills. <br>" +
            "For non-technical ones, we need to be friends in real life otherwise, just knowing that I like playing volleyball would be enough :)";
        history.appendChild(par);
    }
    else if(command == "projects"){
        var par = document.createElement("p");
        par.setAttribute('class', 'results');
        par.innerHTML = "Well I've done multiple projects that aren't visible online anymore. <br>" +
            "But here are the ones that are available: <br>" +
            "<a href='http://petroninja.mohsenansari.com' target='_blank'> Vogel IPR oil extraction </a>. for this one I " +
            "used HTML, CSS, and Javascript. If you go to the page and fill in the inputs it shows the chart of how much" +
            "oil can be extracted from a well. For the plots I used Google charts btw.<br>"+
            "<a href=\'https://github.com/mohsenari/parallel-streaming-ParS\' target='_blank'>Parallel HTTP for video streaming on wireless networks</a>" +
            "This project is written in JAVA and it uses mutiple connections to download video files from server. I tried to make it " +
            "in such a way that follows DASH(Dynamic Adaptive Streaming over HTTP) standard.<br>" +
            "You can also check my <a href=\'https://ca.linkedin.com/in/mohsenansari\' target='_blank'>LinkedIn</a> profile or look at my resume to know more about my technical skills. <br>" +
            "For non-technical ones, we need to be friends in real life otherwise, just knowing that I like playing volleyball would be enough :)";
        history.appendChild(par);
    }
    else{
        var para = document.createElement("p");
        para.setAttribute('class', 'results');
        var node = document.createTextNode(command+": command not found");
        para.appendChild(node);
        history.appendChild(para);
    }
}

var bar = document.querySelector('#bar');
interact('#bar')
    .draggable({
        intertia: true,
        onmove: dragMoveListener
    });
function dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.parentNode.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.parentNode.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.parentNode.webkitTransform =
        target.parentNode.style.transform =
            'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.parentNode.setAttribute('data-x', x);
    target.parentNode.setAttribute('data-y', y);
}