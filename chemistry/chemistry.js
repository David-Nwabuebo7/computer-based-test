const every = document.getElementById("every");

//const form = document.getElementById("form");

const next = document.getElementById("next")

let password = false;

let username = false;

const caution = document.getElementById("caution");

let printName = document.getElementById("nameout");


let consoleArray = [];




const GrabForm = document.getElementById("form")





const RedirectUrl = () => {
    location.assign("Questions.html")
    //return false;
}



if (next) {

    next.addEventListener("click", (event) => {


        console.log("ssicrs9d");

        const FullName = document.getElementById("name");


        let nameVal = FullName.value;





        const pass = document.getElementById("passcode");


        let passval = pass.value;

        console.log(nameVal, passval);
        consoleArray.push(nameVal, passval);

        // this was used store the name and password in then local storage.
        localStorage.setItem('name', nameVal);
        localStorage.setItem('password', passval);

        if (nameVal != "" && passval === "chemistry") {
            console.log("correct")

            password = true;

            username = true;

        } else if (nameVal === "" && passval === "") {
            console.log("pls fill in the input fields")

            password = false;

            username = false;

            caution.textContent = "please fill  the input fields";
        } else if (nameVal === "" && passval != "chemistry") {
            console.log("no name wrong passcode")

            username = false;

            password = false;

            caution.textContent = "no name provided And wrong passcode"
        } else if (nameVal === "" && passval === "chemistry") {
            console.log("pls input your name")
            username = false;

            password = true;

            caution.textContent = "please input your name"

        } else if (event.getModifierState('CapsLock')) {
            //	username= false;

            //password=false;

            caution.textContent = "warning! capslock is on"
            console.log("warning! capslock is on")
        } else if (passval === "" && nameVal != "") {
            console.log("pls input a passcode")
            password = false;

            username = true

            caution.textContent = "please input a passcode"
        } else if (nameVal != "" && passval != "chemistry") {
            console.log("wrong passcode")
            username = true;

            password = false;

            caution.textContent = "wrong passcode"
        }


        if (username === true && password === true) {
            //let Disnext = next.disabled = false;
            // RedirectUrl()
        } else {
            //let Disnext = next.disabled = true;
        }






    });

}






if (GrabForm) {
    GrabForm.addEventListener("submit", (event) => {
        event.preventDefault()
        let FormPass = document.getElementById("passcode").value;

        let FormName = document.getElementById("name").value;
        console.log(FormPass);


        if (FormName != "" && FormPass === "chemistry") {
            console.log("correct")

            password = true;

            username = true;




        } else if (FormPass === "" & FormName === "") {
            console.log("pls fill in the input fields")

            password = false;

            username = false;

            //c="please fill  the input fields";
        } else if (FormName === "" && FormPass != "chemistry") {
            console.log("no name wrong passcode")

            username = false;

            password = false;

            // cautio//n.tex//tContent= "no name provided //And wrong passcode"
        } else if (FormName === "" && FormPass === "chemistry") {
            console.log("pls input your name")
            username = false;

            password = true;



        } else if (FormPass === "" && FormName != "") {
            console.log("pls input a passcode")
            password = false;

            username = true

            //caution.textContent= "please input a passcode"
        } else if (FormName != "" && FormPass != "chemistry") {
            console.log("wrong passcode")
            username = true;

            password = false;

            //caution.textContent= "wrong passcode"
        }



        if (username === true && password === true) {
            RedirectUrl();
            FormPass = "";

            FormName = "";
        }






    });


}







//let inputNameVAL= inputName.value;
//console.log(inputName.value)
//let pass = document.getElementById("passcode").value
const Greaterthan = (m, n) => {
    return m > n;
}

console.log(Greaterthan(90, 9));


function noisy(f) {
    return function (arg) {
        console.log("calling with",
            arg);
        let val = f(arg);
        console.log("calling with",
            arg,
            "_got",
            val);
        return val;
    };

}
noisy("yes");


let counter = 0;
const FinalResult = document.getElementById("result");
// this is used to make the naval equaln to name
const userName = localStorage.getItem('name');
const radio = () => {

    const RadioName = document.getElementById("options").checked;

    const RadioName2 = document.getElementById("options2").checked;

    const RadioName3 = document.getElementById("options3").checked;

    const RadioName4 = document.getElementById("options4").checked;

    const RadioName5 = document.getElementById("options5").checked;

    console.log(RadioName + "\n" + RadioName2 + "\n" + RadioName3 + "\n" + RadioName4 + "\n" + RadioName5);
    if (RadioName) {
        counter += 1;

        //console.log(counter)
    }
    if (RadioName2) {
        counter += 1;
        //	console.log(counter)
    }
    if (RadioName3) {
        counter += 1;
        //console.log(counter)
    }
    if (RadioName4) {
        counter += 1;
        //console.log(counter)
    }
    if (RadioName5) {
        counter += 1;
        //console.log(counter)

    }
    console.log(counter);
    // this is uesd to manipulate the counter value
    let currentcounter = counter / 5 * 100;
    let html = `${userName} you scored ${currentcounter}% `

    FinalResult.textContent = html;
    let remarks = document.getElementById("remarks")
    if (currentcounter <= 40) {

        remarks.textContent = " olodo 😂😂😂"


        console.log(FinalResult.textContent)
    } else if (currentcounter <= 60) {
        remarks.textContent = " good but you can do better"


    } else if (currentcounter > 60) {

        remarks.textContent = " excellent🥳😇🥳"

    }
}
console.log(counter);

const SubmitBtn = document.querySelector("#sub");
const show = document.querySelector('.show');

SubmitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    //classname return or set an attribute to a#n element
    show.className = 'hide';
    // nextelementsibling return the node of the next elemt
    show.nextElementSibling.className = 'show';
    radio();
});
const Last = document.getElementById("last-btn");

const LastRedirect = () => {
    window.location.assign("chemistry.html")
}

Last.addEventListener("click", () => {
    LastRedirect();
})


// there are two bugs first i want nameout to display the inputed name e.g candidate name = "efosa"😂 and i want print to display the inputed name and the value of counter after checking the radio thicks e.g efosa your result is 0 😂😂😂.

printName.textContent = `candidate name ~  ${userName}`;
console.log("/u00d7")