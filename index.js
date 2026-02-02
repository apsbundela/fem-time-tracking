import data from "./data.js";

const tabs = document.getElementById("tabs");
const cards = document.querySelectorAll(".tck-timeframe-wrap");
let activeTab = "daily";

// Make daily tab active on page load
const allTabs = tabs.querySelectorAll("li");
allTabs.forEach(tab => {
    if (tab.dataset.activeTab === activeTab) 
        tab.classList.add("active");
    else  tab.classList.remove("active");
});


//Select which timeframe tab is active
tabs.addEventListener("click", (e)=>{
    const dataset = e.target.dataset;

    if(!dataset.activeTab) return;

    //Remove active class from all tabs
    const allTabs = tabs.querySelectorAll("li");
    allTabs.forEach((tb)=>tb.classList.remove("active"));

    // Add active class to current selected tav
    e.target.classList.add("active");
    
    activeTab = dataset.activeTab;
    updateDataCard();
})

// Update card data
function updateDataCard () {
    cards.forEach((card)=>{
        const currenTime = card.querySelector(".tck-category-hrs");
        const prevousTime = card.querySelector(".tck-category-last");
        const title = card.dataset.title;
        data.forEach((d)=>{
            const dTitle = d.title.toLowerCase();
            if(dTitle === title){
                let currTime =  d?.timeframes[activeTab]?.current;
                let prevTime = d?.timeframes[activeTab]?.previous;
                currenTime.textContent = `${currTime}hrs`;
                prevousTime.textContent = `Last Week - ${prevTime} hrs`;

            }
        })
    })
}

updateDataCard();


