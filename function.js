function copy(ch) {
  // Get the text you want to copy
  var textToCopy = document.getElementById(ch).value;

  // Create a temporary input element to hold the text
  var tempInput = document.createElement("input");
  document.body.appendChild(tempInput);
  tempInput.value = textToCopy;

  // Select and copy the text
  tempInput.select();
  document.execCommand("copy");

  // Remove the temporary input element
  document.body.removeChild(tempInput);

  // Optionally, alert the user that the text has been copied
  alert("link copied to clipboard!");
}
