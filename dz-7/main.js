class Light
{
    constructor(selector) {
        this.$element = document.getElementById(selector)
    }
}


class Symbol extends Light
{
    constructor(options) {
        super(options.selector)
        this.$element.style.backgroundColor = options.color
        this.$element.textContent = options.text
    }
}

let color = prompt("Choose the color").trim()
if (color === "red") {
    const red = new Symbol({
        selector: "red",
        color: "red",
        text: "STOP!"
    })
} else if(color === "yellow") {
    const yellow = new Symbol({
        selector: "yellow",
        color: "yellow",
        text: "WAIT!"

    })
} else if(color === "green") {
    const green = new Symbol({
        selector: "green",
        color: "green",
        text: "GO"

    })
} else {
    alert("Error")
}