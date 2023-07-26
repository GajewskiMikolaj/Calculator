window.onload = function () {
    console.log("info")
    calculator.init()
}

let calculator = {
    buttons: undefined,
    input: undefined,

    init: function () {
        this.buttons = document.querySelectorAll(".numbers button, .operators button")
        // console.log(this.buttons)
        this.input = document.getElementById("input")

        for (let i = 0; i < this.buttons.length; i++) {
            let el = this.buttons[i]
            el.addEventListener("click", this.btnClick)
        }
    },
 
    btnClick: function (e) {
        let divHtmlText = e.target.innerHTML
        console.log("KLIK:" + divHtmlText)
        calculator.addToInput(divHtmlText)
    },

    addToInput: function (str) {
        this.input.value += str
    }
}