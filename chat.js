var firebaseConfig = {
    apiKey: "AIzaSyBvpfZHLOcfieZfoT0iqLdgR9P6Jae1qio",
    authDomain: "social-media-app-e7ed6.firebaseapp.com",
    databaseURL: "https://social-media-app-e7ed6-default-rtdb.firebaseio.com",
    projectId: "social-media-app-e7ed6",
    storageBucket: "social-media-app-e7ed6.appspot.com",
    messagingSenderId: "400587086635",
    appId: "1:400587086635:web:ccdea0504cf673288a836e"
  };

// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";

}

function getData()  {
  firebaseConfig.databaseURL().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div<hr>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

// function redirectToRoomName(name)
// {
//   console.log(name);
//   localStorage.setItem("room_name", name);
//     window.location = "index.html";
// }

// function Logout()
// {
//   localStorage.removeItem("user_name");
//   localStorage.removeItem("room_name");
//     window.location = "index.html";
// }



