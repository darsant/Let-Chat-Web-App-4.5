function addUser() {

    user_name = document.getElementById("user_name").value;
  
    localStorage.setItem("user_name", user_name);
    
      window.location = "index.html";
  }


  var firebaseConfig = {
    apiKey: "AIzaSyCO2zsLuivPr0nlvx8OAUlKoDru-htoOlU",
    authDomain: "let-s-chat-2abcd.firebaseapp.com",
    databaseURL: "https://let-s-chat-2abcd-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-2abcd",
    storageBucket: "let-s-chat-2abcd.appspot.com",
    messagingSenderId: "236488985162",
    appId: "1:236488985162:web:73891732a9b20717ad34b3"
  };
  