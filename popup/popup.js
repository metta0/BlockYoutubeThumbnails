document.addEventListener('DOMContentLoaded', function() {
    // Get the elements
    const form = document.querySelector('form');
    const thumbnailModeRadios = document.querySelectorAll('input[name="thumbnailMode"]');
    const exceptCharacterTextarea = document.getElementById('exceptCharacter');
    const exceptChannelTextarea = document.getElementById('exceptChannel');
    const statusElement = document.getElementById('status');
    
    // Function to load settings
    function loadSettings() {
      chrome.storage.sync.get(['thumbnailMode', 'exceptCharacter', 'exceptChannel'], function(items) {
        if (items.thumbnailMode) {
          document.querySelector(`input[name="thumbnailMode"][value="${items.thumbnailMode}"]`).checked = true;
        }
        if (items.exceptCharacter) {
          exceptCharacterTextarea.value = items.exceptCharacter;
        }
        if (items.exceptChannel) {
          exceptChannelTextarea.value = items.exceptChannel;
        }
        statusElement.textContent = '✅ Preferences loaded';
      });
    }
  
    // Function to save settings
    function saveSettings() {
      const selectedThumbnailMode = document.querySelector('input[name="thumbnailMode"]:checked').value;
      const exceptCharacter = exceptCharacterTextarea.value;
      const exceptChannel = exceptChannelTextarea.value;
  
      chrome.storage.sync.set({
        thumbnailMode: selectedThumbnailMode,
        exceptCharacter: exceptCharacter,
        exceptChannel: exceptChannel
      }, function() {
        statusElement.textContent = '✅ Preferences saved';
      });
    }
  
    // Load settings when the DOM is loaded
    loadSettings();
  
    // Add event listeners to radio buttons
    thumbnailModeRadios.forEach(radio => {
      radio.addEventListener('change', saveSettings);
    });
  
    // Add event listeners to textareas
    exceptCharacterTextarea.addEventListener('input', saveSettings);
    exceptChannelTextarea.addEventListener('input', saveSettings);
  });
  