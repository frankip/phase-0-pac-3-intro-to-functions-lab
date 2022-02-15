function shout(name) {
    return name.toUpperCase()
}

function whisper(name) {
    return name.toLowerCase()
}

function logShout(string) {
    let name = string.toUpperCase()
    console.log(name)
}

function logWhisper(string) {
    console.log(string.toLowerCase())
}   

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        console.log(string === string.toLowerCase());
        return "I can't hear you!"
        
    }
    else if (string === string.toUpperCase()) {
            console.log(string === string.toUpperCase());
            return "YES INDEED!"
            
        }
    
    else if (string == "Let's have dinner together!") {
                return "I would love to!"
            }
    
}