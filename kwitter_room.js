
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBe8Az-l4CdlCkUJN-HmaMQ2L9r-Q2hwtc",
      authDomain: "kwitter-fd062.firebaseapp.com",
      databaseURL: "https://kwitter-fd062-default-rtdb.firebaseio.com",
      projectId: "kwitter-fd062",
      storageBucket: "kwitter-fd062.appspot.com",
      messagingSenderId: "1043524397491",
      appId: "1:1043524397491:web:6001ccc61fd8a4a67f03c6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

   user_name= localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
    
    function addRoom(){
      room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
});
localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
   });
 });

}

getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}