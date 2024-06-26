// Inserting the Images

function insertImage() {

    document.querySelectorAll('.box').forEach(image => {

        if (image.innerText.length !== 0) {
                image.innerHTML = `${image.innerText} <img class='allimg' src="${image.innerText}.png" alt="" align='middle'>`
                image.style.cursor = 'pointer'
            }
        else {
            image.innerHTML = `${image.innerText} <img class='empty' src = "def.png" alt="">`
        }
    })
}
insertImage()

var tog = document.getElementById("tog")
let x_turn = "Yellow's turn";
let y_turn = "Red's turn";
let in_Turn = "Yellow's turn";
var turn = '';

//for img rot
var BSpos = 0;
var WSpos = 0;
var Bpos = 0;
var Wpos = 0;

let intervalId;


function spaces(clickedBox) {
    const id = parseInt(clickedBox.id);
    var inp = clickedBox.innerText;

  

    if (inp.includes("B")) { // Assuming "B" represents Yellow's move
        turn = x_turn;
    } 
    else if (inp.includes("W")) { // Assuming "W" represents Red's move
        turn = y_turn;
    }
     // Assuming clickedBox is defined elsewhere
    
    // Clear background color of all cells
    document.querySelectorAll('.box').forEach(cell => {
        cell.style.backgroundColor = '';
    });

    const down_id = id + 100;
    const up_id = id - 100;
    const left_id = id - 1;
    const right_id = id + 1;
    const topright_id = id - 101;
    const topleft_id = id - 99;
    const bottomleft_id = id + 99;
    const bottomright_id = id + 101;

    var down_cell = document.getElementById(down_id.toString());
    var up_cell = document.getElementById(up_id.toString());
    var left_cell = document.getElementById(left_id.toString());
    var right_cell = document.getElementById(right_id.toString());
    var bottomleft_cell = document.getElementById(bottomleft_id.toString());
    var bottomright_cell = document.getElementById(bottomright_id.toString());
    var topleft_cell = document.getElementById(topleft_id.toString());
    var topright_cell = document.getElementById(topright_id.toString());

    if (in_Turn === turn) {

        if (inp == "BSemiRicocchet") {
            pre_imgrot(id)
            BSpos = BSpos + 1;
            bul_dir = "down"

        }
        else if (inp == "WSemiRicocchet") {
            pre_imgrot(id)
            WSpos = WSpos + 1;
            bul_dir = "up"
        }
        
        else if (inp == "WRicocchet") {
            pre_imgrot(id)
            Wpos = Wpos + 1;
            bul_dir = "up"
        }

        else if (inp == "BRicocchet") {
            pre_imgrot(id)
            Bpos = Bpos + 1;
            bul_dir = "down"
        }
                
        
    // Down cell
    if (down_cell && down_cell.innerText.trim().length === 0) {
        down_cell.style.backgroundColor = 'green';
        down_cell.addEventListener('click', function() {
            move(down_cell, clickedBox);
        })
    }

    // Up cell
    if (up_cell && up_cell.innerText.trim().length === 0) {
        up_cell.style.backgroundColor = 'green';
        up_cell.addEventListener('click', function() {
            move(up_cell, clickedBox);
        })
    }

    // Left cell
    if (left_cell && left_cell.innerText.trim().length === 0) {
        left_cell.style.backgroundColor = 'green';
        left_cell.addEventListener('click', function() {
            move(left_cell, clickedBox);
        })
    }

    // Right cell
    if (right_cell && right_cell.innerText.trim().length === 0) {
        right_cell.style.backgroundColor = 'green';
        right_cell.addEventListener('click', function() {
            move(right_cell, clickedBox);
        })
    }

    //top left cell
    if (topleft_cell && topleft_cell.innerText.trim().length === 0) {
        topleft_cell.style.backgroundColor = 'green';
        topleft_cell.addEventListener('click', function() {
            move(topleft_cell, clickedBox);
        })
    }

    //top right cell
    if (topright_cell && topright_cell.innerText.trim().length === 0) {
        topright_cell.style.backgroundColor = 'green';
        topright_cell.addEventListener('click', function() {
            move(topright_cell, clickedBox);
        })
    }

    //bottomleft cell
    if (bottomleft_cell && bottomleft_cell.innerText.trim().length === 0) {
        bottomleft_cell.style.backgroundColor = 'green';
        bottomleft_cell.addEventListener('click', function() {
            move(bottomleft_cell, clickedBox);
        })
    }

    //bottomright cell
    if (bottomright_cell && bottomright_cell.innerText.trim().length === 0) {
        bottomright_cell.style.backgroundColor = 'green';
        bottomright_cell.addEventListener('click', function() {
            move(bottomright_cell, clickedBox);
        })
    }

    // Highlight the clicked box as well
    clickedBox.style.backgroundColor = 'pink';
    }
}

document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', function() {
        lop_bul()
        if (this.innerText.trim().length !== 0) { // Check if inner text is not empty
            spaces(this);
        }
    });
});

let bul_dir;
var timer_sec
function move(newplace, oldplace) {
    
    console.log('Move function called.');
    console.log('Newplace children length:', newplace.children.length);
    console.log('Oldplace inner text:', oldplace.innerText);

    if (newplace.innerText == '') { // Check if newplace doesn't have any child elements
        console.log('Newplace is empty. Moving content...');
        newplace.innerText = oldplace.innerText.trim();
        oldplace.innerText = '';
        oldplace.innerHTML = `${oldplace.innerText} <img class='empty' src = "def.png" alt="">`;
        newplace.innerHTML = `${newplace.innerText} <img class='empty' src = "${newplace.innerText}.png" alt="">`;
        console.log('Move successful.');
        console.log('Oldplace inner text: ', oldplace.innerText)
        console.log('Newplace inner text: ', newplace.innerText)

        if (turn == y_turn) {
            document.querySelectorAll('.box').forEach(boix => {
                if (boix.innerText.trim() == "WCanon") {
                    BCan_id = boix.id;
                    B_next = BCan_id;                
                    bul_dir = "up";
                    clearInterval(myInterval);
                    lop_bul()
                }})
            in_Turn = x_turn;
        }
        else if (turn == x_turn) {
            document.querySelectorAll('.box').forEach(boix => {
                if (boix.innerText.trim() == "BCanon") {
                    BCan_id = boix.id;
                    B_next = BCan_id;                    
                    console.log(B_next)
                    bul_dir = "down";
                    console.log(bul_dir)      
                    lop_bul()             
                }})
            in_Turn = y_turn;
        }
        tog.innerText = in_Turn
        
    } 
    else {
        console.log('Newplace is not empty. Move not executed.');
    }
    
    
}

/*
function bulle() {
    let BCan_id;
    document.querySelectorAll('.box').forEach(boix => {
        if (boix.innerText.trim() == "BCanon"){
            BCan_id = boix.id;
            console.log(BCan_id)
            var B_next = parseInt(BCan_id) - 100;
            var B_next_cell = document.getElementById(B_next.toString());
            console.log(B_next_cell.innerText)
            if (B_next_cell.innerText == "" ) {
                changeFontSize(B_next.toString(), '20px');
                B_next_cell.innerHTML += "<span class='dot'>•</span>";
                B_next = B_next - 100;
            }
        }
        else if (boix.innerText.trim() == "WCanon") {
            const WCan_id = boix.id;
        }
    });
}

let B_next; // Declare B_next outside the function to maintain its state

function bulle() {
    let BCan_id;
    console.log("bulle function called");
    document.querySelectorAll('.box').forEach(boix => {
        if (boix.innerText.trim() == "BCanon") {
            BCan_id = boix.id;
            console.log("BCanon found with id:", BCan_id);

            // Initialize B_next if it is not already set
            if (B_next === undefined) {
                B_next = parseInt(BCan_id) - 100;
            }

            var B_next_cell = document.getElementById(B_next.toString());
            console.log("Next cell id:", B_next);
            console.log("Next cell content before update:", B_next_cell.innerText);
            document.querySelector('.dot')?.remove();


            if (B_next_cell.innerText.trim() == "") {
                console.log("Next cell is empty, adding bullet");
                changeFontSize(B_next.toString(), '20px');
                B_next_cell.innerHTML += "<span class='dot'>•</span>";
                console.log("Next cell content after update:", B_next_cell.innerHTML);

                // Decrement B_next by 100 for the next interval
                
                B_next = B_next - 100;
                console.log("Next cell id updated to:", B_next);

            }
            else if (B_next_cell.innerText.trim() == "WSemiRicocchet") {
                if (WSpos == 0) {
                    B_next = B_next + 1;
                }
                else if (WSpos == 1) {
                    if (chumma) {
                        B_next = ''
                    }
                    else {
                        B_next = B_next -1;

                    }
                }
                else if (WSpos == 2) {
                    B_next = ''
                }
                else if (WSpos == 3) {
                    if (chumma) {
                        B_next = B_next - 1;
                    }
                    else {
                        B_next = ''
                    }
                }
            }
            else if (B_next_cell.innerText.trim() == "WRicocchet") {
                if (Wpos == 0) {
                    B_next = B_next - 1;
                }
                else if (Wpos == 1) {
                    if (chumma) {
                        B_next = B_next + 1;
                    }
                }
            }
            else if (B_next_cell.innerText.trim() == "BRicocchet") {
                if (Bpos == 0) {
                    B_next = B_next + 1;
                }
                else if (Bpos == 1) {
                    B_next = B_next - 1;
                }
            }
            else if (B_next_cell.innerText.trim() == "BSemiRicocchet") {
                if (BSpos == 0) {
                    B_next = B_next - 1;
                }
                else if (BSpos == 1) {
                    if (chumma) {
                        B_next = ''
                    }
                    else {
                        B_next = B_next + 1;
                    }
                }
                else if (BSpos == 2) {
                    B_next = ''
                }
                else if (BSpos == 3) {
                    if (chumma) {
                        B_next = B_next + 1;
                    }
                    else {
                        B_next = ''
                    }                    
                }
            }
            else if (B_next_cell.innerText.trim() == "BTitan") {
                console.log("R win")
            }
            else if (B_next_cell.innerText.trim() == "WTitan") {
                console.log("Y wins")
            }
            else {
                console.log("Next cell is not empty, skipping");
                intervalId = undefined;
                console.log(intervalId)
            }
        } else if (boix.innerText.trim() == "WCanon") {
            const WCan_id = boix.id;
        }
    });
}
*/
let B_next; // Declare B_next outside the function to maintain its state
/*
function bulle() {
    let BCan_id;
    console.log("bulle function called");
    document.querySelectorAll('.box').forEach(boix => {
        if (boix.innerText.trim() == "BCanon") {
            BCan_id = boix.id;
            console.log("BCanon found with id:", BCan_id);

            // Initialize B_next if it is not already set
            // Changed: Ensuring B_next is initialized properly
            if (B_next === undefined) {
                B_next = parseInt(BCan_id) - 100;
            }

            var B_next_cell = document.getElementById(B_next.toString());
            console.log("Next cell id:", B_next);
            console.log("Next cell content before update:", B_next_cell.innerText);
            document.querySelector('.dot')?.remove();

            if (B_next_cell.innerText.trim() == "") {
                console.log("Next cell is empty, adding bullet");
                changeFontSize(B_next.toString(), '20px');
                B_next_cell.innerHTML += "<span class='dot'>•</span>";
                console.log("Next cell content after update:", B_next_cell.innerHTML);

                // Decrement B_next by 100 for the next interval
                // Changed: Continue moving the bullet down
                B_next = B_next - 100;
                console.log("Next cell id updated to:", B_next);

            } else if (B_next_cell.innerText.trim() == "WSemiRicocchet") {
                // Changed: Handle WSemiRicocchet ricochet
                if (WSpos == 0) {
                    B_next = B_next + 1;
                } else if (WSpos == 1) {
                    if (chumma) {
                        B_next = '';
                    } else {
                        B_next = B_next - 1;
                    }
                } else if (WSpos == 2) {
                    B_next = '';
                } else if (WSpos == 3) {
                    if (chumma) {
                        B_next = B_next - 1;
                    } else {
                        B_next = '';
                    }
                }

            } else if (B_next_cell.innerText.trim() == "WRicocchet") {
                // Changed: Handle WRicocchet ricochet
                if (Wpos == 0) {
                    B_next = B_next - 1;
                } else if (Wpos == 1) {
                    if (chumma) {
                        B_next = B_next + 1;
                    }
                }

            } else if (B_next_cell.innerText.trim() == "BRicocchet") {
                // Changed: Handle BRicocchet ricochet
                if (Bpos == 0) {
                    B_next = B_next + 1;
                } else if (Bpos == 1) {
                    B_next = B_next - 1;
                }

            } else if (B_next_cell.innerText.trim() == "BSemiRicocchet") {
                // Changed: Handle BSemiRicocchet ricochet
                if (BSpos == 0) {
                    B_next = B_next - 1;
                } else if (BSpos == 1) {
                    if (chumma) {
                        B_next = '';
                    } else {
                        B_next = B_next + 1;
                    }
                } else if (BSpos == 2) {
                    B_next = '';
                } else if (BSpos == 3) {
                    if (chumma) {
                        B_next = B_next + 1;
                    } else {
                        B_next = '';
                    }
                }

            } else if (B_next_cell.innerText.trim() == "BTitan") {
                console.log("R win");
                alert("R wins");
                location.reload();
                // Changed: Clear interval if Titan is hit
                clearInterval(intervalId);
                intervalId = undefined;

            } else if (B_next_cell.innerText.trim() == "WTitan") {
                console.log("Y wins");
                alert("Y wins");
                location.reload();
                // Changed: Clear interval if Titan is hit
                clearInterval(intervalId);
                intervalId = undefined;

            } else {
                console.log("Next cell is not empty, skipping");
                // Changed: Clear interval if non-empty cell is encountered
                clearInterval(intervalId);
                intervalId = undefined;
            }
        } else if (boix.innerText.trim() == "WCanon") {
            const WCan_id = boix.id;
        }
    });
}
*/
var myInterval; // Declare myInterval in the outer scope

function lop_bul() {
    clearInterval(myInterval); // Clear the interval if it's already running

    const intervalFunction = () => {
        bul_dir = bullet(bul_dir, Bpos, Wpos, WSpos, BSpos);
    };

    myInterval = setInterval(intervalFunction, 500);
}

function bullet(bul, posB, posW, posWS, posBS) {
    console.log(bul);
    console.log("test")
    // Assuming B_next is a variable you have defined elsewhere in your code
    var B_next_cell = document.getElementById(B_next.toString());
    console.log(B_next_cell);

    if (!B_next_cell) {
        clearInterval(myInterval);// Clear the interval using the outer variable
        startCountdown()
        document.querySelectorAll('.box').forEach(imag => {
            if (imag.innerText.length == 0) {
                imag.innerHTML = `${imag.innerText} <img class='allimg' src="def.png" alt="" align='middle'>`;
            }

        });
        
    }
    else if (B_next_cell.innerText.trim() == '') {
        B_next_cell.innerHTML = `${B_next_cell.innerText} <img class='empty' src = "bul.png" alt="">`
    }
    else if (B_next_cell.innerText.trim() == 'WRicocchet'){
        if (posW == 0 || posW == 2) {
            var temp = B_next - 1;
            temp.innerHTML = `${temp.innerText} <img class='empty' src = "bul.png" alt="">`
            bul = "left"
        }
        else if (posW == 1) {
            var temp = B_next + 1;
            temp.innerHTML = `${temp.innerText} <img class='empty' src = "bul.png" alt="">`
            bul = "right"
        }

    }
    else if (B_next_cell.innerText.trim() == 'BRicocchet'){
        if (posB == 0 || posB == 2) {
            var temp = B_next + 1;
            temp.innerHTML = `${temp.innerText} <img class='empty' src = "bul.png" alt="">`
            bul = "right"
        }
        else if (posB == 1 && chumma) {
            var temp = B_next - 1;
            temp.innerHTML = `${temp.innerText} <img class='empty' src = "bul.png" alt="">`
            bul = "left"
        }
    }
    else if (B_next_cell.innerText.trim() == 'WSemiRicocchet'){
        if(posWS == 0) {
            var temp = B_next + 1;
            temp.innerHTML = `${temp.innerText} <img class='empty' src = "bul.png" alt="">`
            bul = "right"
        }
        
        else if (posWS == 1 && !chumma){
            var temp = B_next - 1;
            temp.innerHTML = `${temp.innerText} <img class='empty' src = "bul.png" alt="">`
            bul = "left"
        }
    }
    else if (B_next_cell.innerText.trim() == 'BSemiRicocchet'){
        if (posBS == 0){
            var temp = B_next - 1;
            temp.innerHTML = `${temp.innerText} <img class='empty' src = "bul.png" alt="">`
            bul = "left"
        }
       
        else if(posBS == 1 && !chumma){
            var temp = B_next + 1;
            temp.innerHTML = `${temp.innerText} <img class='empty' src = "bul.png" alt="">`
            bul = "right"
        }
    }
    else if (B_next_cell.innerText.trim() == 'BTitan'){
        alert("Red wins")
        location.reload();
    }
    else if (B_next_cell.innerText.trim() == 'WTitan'){
        alert("Yellow wins")
        location.reload();
    }
    else if (B_next_cell.innerText.trim().includes('Tank')) {
        clearInterval(myInterval);// Clear the interval using the outer variable
        startCountdown()
        document.querySelectorAll('.box').forEach(imag => {
            if (imag.innerText.length == 0) {
                imag.innerHTML = `${imag.innerText} <img class='allimg' src="def.png" alt="" align='middle'>`;
            }
        });
        
        
    }
    else if (B_next_cell.innerText.trim() == ('WCanon')) {
        clearInterval(myInterval); // Clear the interval using the outer variable
        startCountdown()
        document.querySelectorAll('.box').forEach(ima => {
            if (ima.innerText.length == 0) {
                ima.innerHTML = `${ima.innerText} <img class='allimg' src="def.png" alt="" align='middle'>`;
            }
        });
        
    }

    console.log(bul)
    
    if(bul == "down") {
        B_next = parseInt(B_next) - 100;
    }
    else if(bul == "up") {
        B_next = parseInt(B_next) + 100;
    }
    else if(bul == "right") {
        B_next = parseInt(B_next) + 1;
    }
    else if(bul == "left") {
        B_next = parseInt(B_next) - 1;
    }
    console.log(B_next)
    
    console.log(bul)
    return bul
}

function changeFontSize(elementId, newSize) {
    var element = document.getElementById(elementId);
    if (element) {
        element.style.fontSize = newSize;
    }
}
/*
function rot(idee,inpu) {
    console.log(idee)
    if (inpu == "BSemiRicocchet") {
        var newButton1 = document.createElement('button');
        newButton1.innerText = "Left";
        document.body.appendChild(newButton1);
        newButton1.addEventListener('click', function() {
            imgrot(document.getElementById(idee.toString()));
        })
        
        var newButton2 = document.createElement('button');
        newButton2.innerText = "Right";
        document.body.appendChild(newButton2);
    }
    
}
*/

function pre_imgrot(idd) {
    var newButton1 = document.createElement('button');
    newButton1.innerText = "Left";
    document.body.appendChild(newButton1);
        
    var newButton2 = document.createElement('button');
    newButton2.innerText = "Right";
    document.body.appendChild(newButton2);
    
    newButton1.addEventListener('click', function() {
            imgrot_l(document.getElementById(idd.toString()), newButton1, newButton2);

    })
    newButton2.addEventListener('click', function() {
            imgrot_r(document.getElementById(idd.toString()), newButton1, newButton2);
    })
}

function imgrot_l(imagee,Button1,Button2) {
    imagee.style.transform = 'rotate(-90deg)';
    console.log(Button1)
    if (turn == y_turn) {
        document.querySelectorAll('.box').forEach(boix => {
            if (boix.innerText.trim() == "WCanon") {
                BCan_id = boix.id;
                B_next = BCan_id;
                bul_dir = "up";
                lop_bul()
            }})
        in_Turn = x_turn;
    }
    else if (turn == x_turn) {
        document.querySelectorAll('.box').forEach(boix => {
            if (boix.innerText.trim() == "BCanon") {
                BCan_id = boix.id;
                B_next = BCan_id;
                console.log(B_next)
                bul_dir = "down";
                console.log(bul_dir)      
                lop_bul()             
            }})
        in_Turn = y_turn;
    }
    chumma = false
    if (Button1) {
        Button1.remove();
    }
    if (Button2) {
        Button2.remove();
    }
    tog.innerText = in_Turn
}

var chumma;
function imgrot_r(imagee,Button1,Button2) {
    imagee.style.transform = 'rotate(90deg)';
    console.log(Button1)
    if (turn == y_turn) {
        document.querySelectorAll('.box').forEach(boix => {
            if (boix.innerText.trim() == "WCanon") {
                BCan_id = boix.id;
                B_next = BCan_id;
                bul_dir = "up";
                lop_bul()
            }})
        in_Turn = x_turn;
    }
    else if (turn == x_turn) {
        document.querySelectorAll('.box').forEach(boix => {
            if (boix.innerText.trim() == "BCanon") {
                BCan_id = boix.id;
                B_next = BCan_id;
                console.log(B_next)
                bul_dir = "down";
                console.log(bul_dir)      
                lop_bul()             
            }})
        in_Turn = y_turn;
    }  
    chumma = true;
    if (Button1) {
        Button1.remove();
    }
    if (Button2) {
        Button2.remove();
    }
    tog.innerText = in_Turn
    
}


let countdown;
let timeLeft = 30;
let isPaused = false;

const timerElement = document.getElementById('timer');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resumeButton = document.getElementById('resume');
const resetButton = document.getElementById('reset');

// Function to update the timer display
function updateTimerDisplay() {
    timerElement.innerText = timeLeft;
}

// Function to start the countdown
function startCountdown() {
    if (countdown) {
        clearInterval(countdown);
    }
    timeLeft = 30;
    isPaused = false;
    updateTimerDisplay();
    countdown = setInterval(() => {
        if (!isPaused) {
            if (timeLeft > 0) {
                timeLeft--;
                updateTimerDisplay();
            } else {
                clearInterval(countdown);
                alert("TIME OVER")
                location.reload()
            }
        }
    }, 1000);
}

// Function to pause the countdown
function pauseCountdown() {
    isPaused = true;
}

// Function to resume the countdown
function resumeCountdown() {
    isPaused = false;
}

// Function to reset the countdown
function resetCountdown() {
    clearInterval(countdown);
    timeLeft = 30;
    isPaused = false;
    updateTimerDisplay();
}

// Attach event listeners to buttons

pauseButton.addEventListener('click', pauseCountdown);
resumeButton.addEventListener('click', resumeCountdown);
resetButton.addEventListener('click', resetCountdown);

// Initial display
updateTimerDisplay();
