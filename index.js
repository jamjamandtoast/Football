"use strict";

let teamList = document.getElementById("teamList");
const buttButt = document.getElementById("buttButt");
let teamInfoPara = document.getElementById("teamInfo");

let teams = [
  {code:"DAL", name:"Dallas Cowboys", plays:"Arlington, TX"},
  {code:"DEN", name:"Denver Broncos", plays:"Denver, CO"},
  {code:"HOU", name:"Houston Texans", plays:"Houston, TX"},
  {code:"KAN", name:"Kansas City Chiefs", plays:"Kansas City, MO"},
];

window.onload = function() {
    buttButt.onclick = onbuttButtClicked;
    initteamList(); 
}

function initteamList() {
    let length = teams.length;
    for (let index = 0; index < length; index++) {
        let team = teams[index];
        let theOption = document.createElement("option");

        theOption.textContent = team.name;
        theOption.value = team.code;
        teamList.appendChild(theOption);
    }
}

function onbuttButtClicked() {
    let teamListValue = teamList.value;

    console.log("clicked");
    if (teamListValue == -1) {
        teamInfoPara.innerHTML ="Not a single team selected! Sorry!";
        return;
    }
    else {
        for(let i = 0; i < teams.length; i++) {
            if(teamListValue == teams[i].code) {
                teamInfoPara.innerHTML = `You selected ${teams[i].name}, who play in ${teams[i].plays}`;
                break;
            }
        }
    }
}
