document.addEventListener("DOMContentLoaded", function() {
    const typingContainer = document.querySelector(".typing-container");
    const texts = ["Hi !","Hello !"]; // Array of texts to display
    let index = 0; // Index to keep track of the current text
  
    function typeWriter(text, i) {
      if (i < text.length) {
        typingContainer.textContent += text.charAt(i);
        i++;
        setTimeout(function() {
          typeWriter(text, i);
        }, 100); // Typing speed
      } 
      else {
        setTimeout(function() {
          // Clear the text content and move to the next text
          typingContainer.textContent = "";
          index = (index + 1) % texts.length;
          typingContainer.setAttribute('data-text', texts[index]); // Update data-text attribute
          typeWriter(texts[index], 0); // Start typing the next text
        }, 1000); // Delay before typing the next text
      }
    }
  
    // Start typing the first text
    typeWriter(texts[index], 5);
  });
  