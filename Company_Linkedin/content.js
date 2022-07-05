chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "start" ) {
     start();
         }
  }
);

let web_link = [];
let employeeCount = [];
let count = [];

let about_link =[];
function start() {

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "companyData" ) {
     companyData();
         }
    else if (request.message === "linkedinPerson"){
      linkedinPerson();
    }
    else if (request.message === "scriptTracker"){
      scriptTracker();
    }
  }
);
function companyData(){

  for (var i = 0; i <1; i++) {


    
    
    
    //website
    var y = document.querySelector('[class ="link-without-visited-state ember-view"]')
    web_link.push(y.href);
    console.log(web_link); 

       //employee count
      var k = document.querySelector('[class="text-body-small t-black--light mb4"]')
      var temp = k.textContent;
      var num = temp.match(/\d+/g);
      count.push(num[0]);
      console.log(count);

            //company size
            var j = document.getElementsByClassName("text-body-small t-black--light mb1").item;
            console.log(j);
            var cs_temp = j.textContent;
            console.log(cs_temp);  
    

        
  }

     var web_address= Array.from(new Set(web_link));
     var employeeCount= Array.from(new Set(count));

  
          chrome.runtime.sendMessage({
              data: {web_address, employeeCount }     
          }, function (response) {
             // console.dir(response);
          });
     
}   

function linkedinPerson(){
  let lead= [];
  let company = [];
  for (var i = 0; i <1; i++) {

   

        

    let lead_dataName = document.getElementsByClassName('text-heading-xlarge inline t-24 v-align-middle break-words');


 for (var j = 0; j < lead_dataName.length; j++) {
    let value = lead_dataName[j].textContent;
        
    var str = value;
    var words = str.split(" ");
    words.splice(2);
    console.log(words);
    var joinName = words.join(" ");
    console.log(joinName);
       
      
        lead.push(joinName);
       

     }    


  

    let company_dataName = document.querySelector('[aria-label="Current company"]')
    let company_value = company_dataName.textContent;
    
    company.push(company_value);
   




}
      var leadName= Array.from(new Set(lead));
      var companyName= Array.from(new Set(company));


          chrome.runtime.sendMessage({
              data: {leadName, companyName}
          
          }, function (response) {
            // console.dir(response);
          });

}

}