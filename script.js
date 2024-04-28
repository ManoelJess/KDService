function openNav(){
    document.getElementById("mySiedebart").style.width="100w";
    document.querySelector("body").style.overflow="hidden"
}

function closeNav(){
    document.getElementById("mySiedebart").style.width="0";
    document.querySelector("body").style.overflow="auto"
}

/*document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    var responseDiv = document.getElementById('response');
    responseDiv.innerHTML = '<p>Nom : ' + name + '</p>' +
                             '<p>Email : ' + email + '</p>' +
                             '<p>Message : ' + message + '</p>';
});*/
