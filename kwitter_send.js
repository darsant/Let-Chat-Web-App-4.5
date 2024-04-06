var firebaseConfig = {
    apiKey: "AIzaSyCO2zsLuivPr0nlvx8OAUlKoDru-htoOlU",
    authDomain: "let-s-chat-2abcd.firebaseapp.com",
    databaseURL: "https://let-s-chat-2abcd-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-2abcd",
    storageBucket: "let-s-chat-2abcd.appspot.com",
    messagingSenderId: "236488985162",
    appId: "1:236488985162:web:73891732a9b20717ad34b3"
  };
  

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
 } });  }); }
getData();

function logout()
{
    localStorage.removeItem("user_name")
    localStorage.removeItem("room_name")
    window.location = "2_index.html"
}

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value = "";
}
