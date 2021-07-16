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
      var answer = document.getElementById('answer').value
      var cur_clue = window.location.pathname.replace('/', '')
      var value = localStorage.getItem(cur_clue)

      // Store
      // retrieve try number
      if (value == null) {
        value = { 'max': 0 }
      } else {
        value = JSON.parse(value)
        value['max'] += 1
        value[value['max']] = answer
      }
      localStorage.setItem(cur_clue, JSON.stringify(value));
    } else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
    checkanswer(answer, cur_clue)
  }

  function checkanswer(answer, cpage){
    $.ajax({
            headers: { "Accept": "application/json"},
            type: 'GET',
            url: '/user_response',
            crossDomain: true,
            data: {'answer': answer, 'cpage': cpage},
            success: function(data, textStatus, request){
                if (data.hasOwnProperty('err')) {
                    console.log(data['err'])
                    $(".wrong").show()
                    setTimeout(function() { $(".wrong").hide(); }, 1500);
                } else {
                    window.location.href = "/"+data['done'];
                }
            }
    });
  }

  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }
  function openPopup() {
    document.getElementById("popup").style.display = "block";
  }

  $( document ).ready(function() {
    $('.response').html(`
        <div class="row justify-content-center">
        <div class="col-5">
          <input type="text" size="50" placeholder="Enter Answer" id='answer' name="answer" required>
          <span style="display:none" class="wrong">Wrong Answer</span>
        </div>
        <div class="col-1 d-flex justify-content-center">
          <button class="uth-btn-circle" onclick="storeanswer()">
            <span class="material-icons md-36 image-icon">arrow_forward</span>
          </button>
        </div>
      </div>
    `)
  });