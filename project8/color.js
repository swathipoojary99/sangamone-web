function color(col) {
  setClipboard(col);
  alert("You have copied the colour " + col + " to your clipboard");
}

function setClipboard(text) {
  var type = "text/plain";
  var blob = new Blob([text], { type });
  var data = [new ClipboardItem({ [type]: blob })];

  navigator.clipboard.write(data).then(
    function () {
      /* success */
    },
    function () {
      /* failure */
    }
  );
}