let sendButton = document.getElementById("send")


let index = document.getElementById("index")
let sensor = document.getElementById("sensor")
let action = document.getElementById("action")
let delay = document.getElementById("delay")
let line_color = document.querySelectorAll(".line_color")
let speed_a = document.getElementById("speed_a")
let timer = document.getElementById("timer")
let output = document.getElementById("output")
sendButton.addEventListener("click", () => {

            
            // console.log(line_color.filter(a => a.checked))
            console.log(line_color)
        output.innerHTML += `ichibot.setIndex(${index.value}, ${sensor.value}, ${action.value} , ${delay.value} , GARIS_HITAM, ${speed_a.value}, ${timer.value}, PID_3,  KIPAS_OFF, NORMAL); \n`
        index.value = parseInt(index.value) + 1
    })


