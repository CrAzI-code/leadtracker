
let myLeads = []
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

let inputBtn = document.getElementById("input-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))



if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
 }



deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)

})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""

    localStorage.setItem("myLeads", JSON.stringify(myLeads))


  
    
    render(myLeads)
    console.log(localStorage.getItem("myLeads"))
})



function render(leads){
    let listItems = ""
    for(let i = 0; i < leads.length; i = i+1){
        listItems +=  `
        <li>
            <a target='_blank' href= '${leads[i]}'>
                ${leads[i]}
            </a>  
        </li>`
    }

    ulEl.innerHTML = listItems
}



