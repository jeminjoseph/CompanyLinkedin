chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, { "message": "start" });
  });
  chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    console.log(message);

    var content=document.getElementById("company_result")

    for (var i=0;i<1;i++){
     
        content.appendChild($('<div class="company_result_item"><h3>Website:</h3>'+message.data.web_address+'</div>')[0]);
     
        content.appendChild($('<div class="company_result_item"><h3>Employee Count:</h3>'+message.data.employeeCount+'</div>')[0]);
      }
    //}
    
    
});