chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
      text: "OFF",
    });
  });

  const extensions = "https://www.youtube.com/*";
  const webstore = 'https://developer.chrome.com/docs/webstore';
  
  chrome.action.onClicked.addListener(async (tab) => {
    if (tab.url.startsWith(extensions)) {
      // Retrieve the action badge to check if the extension is 'ON' or 'OFF'
      const nowState = await chrome.action.getBadgeText({ tabId: tab.id });
      // Next state will always be the opposite
    
      if (nowState === "ON") {
        // Insert the CSS file when the user turns the extension on
        await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ["content.js"]
        }).then(() => console.log("script injected"));
      } else if (nowState === "OFF") {
        // Remove the CSS file when the user turns the extension off
        await chrome.scripting.removeCSS({
          files: ["focus-mode.css"],
          target: { tabId: tab.id },
        });
      }
     
    }
  });