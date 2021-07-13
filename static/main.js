function storename() {
    // Check browser support
    if (typeof(Storage) !== "undefined") {
      // Store
      localStorage.setItem("name", document.getElementById('fname').value);
      // Retrieve
      //document.getElementById("result").innerHTML = localStorage.getItem("lastname");
    } else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
  }

  function storeanswer() {
    // Check browser support
    if (typeof (Storage) !== "undefined") {
      // Store
      // retrieve try number
      var cur_clue = window.location.pathname.replace('/', '')
      var value = localStorage.getItem(cur_clue)
      if (value == null) {
        value = { 'max': 0 }
      } else {
        value = JSON.parse(value)
        value['max'] += 1
        value[value['max']] = document.getElementById('answer')
      }

      localStorage.setItem(cur_clue, JSON.stringify(value));
    } else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
  }

  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }
  function openPopup() {
    document.getElementById("popup").style.display = "block";
  }