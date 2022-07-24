console.log('Assignment 6')
console.log('')
console.log('task 1')
const peter = {
    firstName:'Peter',
    lastName:'Smith',
    birthYear: 1990,
    jobTitle: 'student',
    score:[100,99,90,96],

calAvgScore:function(){
    this.avgScore=(this.score[0]+this.score[1]+this.score[2]+this.score[3])/this.score.length;
    return this.avgScore;
},
calMinScore:function(){
    this.minScore=Math.min(...this.score);
    return this.minScore;
},
calMaxScore:function(){
    this.maxScore=Math.max(...this.score);
    return this.maxScore;
},
calTaskCount:function(){
    this.taskLen=this.score.length;
    return this.taskLen;
},



showSummary:function(){
       
        this.summary=(`${this.firstName} ${this.lastName} has completed ${this.calTaskCount()} tasks. ${this.firstName}'s average score is  ${this.calAvgScore()}, ${this.firstName}'s highest score is ${this.calMaxScore()}, and ${this.firstName}'s lowest score is ${this.calMinScore()}. `);
    return this.summary;
}


}

console.log(peter.showSummary());

document.querySelector('.task1').textContent  = peter.showSummary();

console.log('')
console.log('task 2')

document.getElementById("submit").onclick = function(){
    var temp = document.getElementById("c").value;

        if (temp=="")throw console.log("No entry. Please enter a value between -88 and 58");
        if (isNaN(temp))throw console.log("Invalid input. Please enter a value between -88 and 58");
        if ( temp <= -89  )throw console.log("Input too low. Please enter a value between -88 and 58");
        if ( temp >= 59  )throw console.log("Input too high. Please enter a value between -88 and 58");
        if ( temp > -89 && temp < 59  ){
            const convert=(temp*(9/5))+32;
            const msg=(`${temp}°C is ${convert}°F`);
           
            console.log(msg)
            document.querySelector('.task2').textContent  = msg;
            return msg;
        }  
};


const open1 = document.getElementById('open1');
const modal_container1 = document.getElementById('modal_container1');
const close1 = document.getElementById('close1');
open1.addEventListener('click',() => {
    modal_container1.classList.add('show')
});
close1.addEventListener('click',() => {
    modal_container1.classList.remove('show')
});

const open2 = document.getElementById('open2');
const modal_container2 = document.getElementById('modal_container2');
const close2 = document.getElementById('close2');
open2.addEventListener('click',() => {
    modal_container2.classList.add('show')
});
close2.addEventListener('click',() => {
    modal_container2.classList.remove('show')
});

const open3 = document.getElementById('open3');
const modal_container3 = document.getElementById('modal_container3');
const close3 = document.getElementById('close3');
open3.addEventListener('click',() => {
    modal_container3.classList.add('show')
});
close3.addEventListener('click',() => {
    modal_container3.classList.remove('show')
});






