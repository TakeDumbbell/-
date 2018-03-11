emotion-video-control
=====================

### This is my test of video control based on emotion-recognition 

## ``I have used two open-source project to build this systerm ``

## * [python-websocket-server](https://github.com/TakeDumbbell/python-websocket-server)
   We can use python send message to js easily by this project  

## * [python-websocket-server](https://github.com/TakeDumbbell/face_classification)
   This project make this systerm can call our computer's camera

## The structure of this project

### files structure
   * The models of face_classification are stored in trained_models file
   * The communication part are stored in websocket_server file
   * The video-play part are store in video the js for it are stored in videojs file

### logic structure
   * This systerm was made up with server-side and clint-side
      * The server-side is on the python and combine with face_classification <br> 
      ``it means that we can call the camera and catch your face then analyze your emotion, and use it decide if it' need to send message to the client(vedio-play)`` <br>
      * The client-side is playing video at the same time <br>
      ``when it was received the message form the server-side, it should change it's play plan, speed or increase the voice``
