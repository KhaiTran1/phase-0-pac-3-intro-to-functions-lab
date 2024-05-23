function shout(cock){
    return cock.toUpperCase()
}

function whisper(balls){
    return balls.toLowerCase()
}

function logShout(dude){
    const spy = dude.toUpperCase()
    console.log(spy)
    return spy;
}
logShout ("hello")

function logWhisper(string){
    const spy = string.toLowerCase()
    console.log(spy)
    return spy
}
logWhisper ("HELLO")

function sayHiToHeadphonedRoommate(string){
    if (string === string.toLowerCase()){
        return "I can't hear you!"  
    } 
    else if (string === string.toUpperCase()){
        return "YES INDEED!"
    }
    else {
        return "I would love to!"
    }
}
