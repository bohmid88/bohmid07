function copy(ch) {
  var textToCopy = document.getElementById(ch).value;
  var tempInput = document.createElement("input");
  document.body.appendChild(tempInput);
  tempInput.value = textToCopy;
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  alert("link copied to clipboard!");
}
