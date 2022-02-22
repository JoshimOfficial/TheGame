let questions_level_one = [" '1+1 = 2' right?", "You use facebook right?"];
let questions_level_two = [" Are you a hacker?", "Are you human?" ]
let btn_no = document.querySelector(".option_one");
let btn_yes = document.querySelector(".option_two")




for(let i = 0; i < questions_level_one.length; i++) {

  let  count = 1;
btn_no.onclick = function (){
  count++;
  let find_question = document.querySelectorAll("span");
  find_question[0].innerText = "0" + count + ". " + questions_level_one[1];
 

}


}




window.addEventListener("load", ()=>{

    function lvlone() {
        let find_question = document.querySelectorAll("span");
        find_question[0].innerText = "0" + count + ". " + questions_level_one[0];
    }

    return lvlone()
    
})

