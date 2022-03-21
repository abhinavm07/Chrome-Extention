let myLeads=[];
// myLeadsString=JSON.stringify(myLeads); // Changes anything into strings.
// console.log(myLeads)

// myLeads=JSON.parse(myLeads);//changes string to arrey or respective component that has been supplied

// myLeads.push("www.abhinavisAwesome.com")

// console.log(myLeads)

const inputEL=document.getElementById("input-el")
const ulEl= document.getElementById("ul-id")
const inputBtn = document.getElementById("input-btn")
const leadsFromStorage=JSON.parse(localStorage.getItem("myLeadsKey"))

console.log(leadsFromStorage)

let jhonothan ="";

if(leadsFromStorage){
    myLeads=leadsFromStorage
    console.log(myLeads)
    render(myLeads)
}


let saveTabBtn = document.getElementById("saveTab-btn");

saveTabBtn.addEventListener("click",saveTab);

function saveTab(){
    chrome.tabs.query({active: true,currentWindow:true},function(tabs){
        console.log(tabs)
        console.log(tabs[0].url)
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeadsKey",JSON.stringify(myLeads))
        render(myLeads);
    })    
}


function render(leads){
    
    let listItems ="";

        for(let i =0;i<leads.length;i++){
                // listItems+="<li><a target='_blank'href='"+myLeads[i]+"'>"+myLeads[i]+"</a></li>"
                listItems+=`
                <li> 
                <a target ='blank' href='${leads[i]}'>${leads[i]} </a>
                
                </li>
                `

            console.log(myLeads)
        }

    ulEl.innerHTML=listItems; 
}


// localStorage.setItem("myLeads","www.AbhinavIsAwesome.com")
// localStorage.clear();
// console.log(localStorage.getItem("myLeads"))

inputBtn.addEventListener("click",save);

function save(){
    jhonothan=inputEL.value
    if(jhonothan!=""){
    myLeads.push(jhonothan); //.value gets the value imputed by the user in the text field.
    inputEL.value ="";

    localStorage.setItem("myLeadsKey",JSON.stringify(myLeads)); //(ThisIsKey,ThisIsValue)
    render(myLeads);
    }
}


// this is the safer way to do things
// let listItems ="";


// for(let i=0;i<myLeads.length;i++){
//     const neededTags = document.createElement("li");
//     neededTags.textContent=myLeads[i];
//     ulEl.append(neededTags);
// }





// function test(){
        
//     const list = document.createElement("li");
//     const atag = document.createElement("a").href = myLeads
//     list.append(atag);
//     ulEl.append(list);
// }


let deleteBtn = document.getElementById("delete-btn")

deleteBtn.addEventListener("dblclick",deleteAll);


function deleteAll(){
    localStorage.clear();
    myLeads=[];
    render(myLeads);
}
