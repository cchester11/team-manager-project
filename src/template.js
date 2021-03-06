const returnHTML = function() {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" rel='stylesheet' >
  <link href="./style/stylesheet.css" rel="stylesheet" >
  <script src="./index.js"></script>
  <title>Document</title>
</head>
<body>
  <div class='container-fluid bg-danger navbar-nav' id='containerZero'>
    <h1 class='float-start text-white navbar-text'>
      The Manager's Page
    </h1>
  </div> 

  <div class='container-fluid text-black' id='containerOne'>
    <div class='container' id="containerTwo">
      <div class="row row-cols-2 row-cols-lg-2 g-5 g-lg-9" id="row">
        <div class="col card p-3">
          <div class="p-3 border bg-light">Your Players</div>
          <div class="card" id="players-card"></div>
        </div>
        <div class="col card p-3">
          <div class="p-3 border bg-light">Custom column padding</div>
        </div>
      </div>
    </div>
    <div class="container" id="containerTwo">
      <div class="row row-cols-3 row-cols-lg-3 g-5 g-lg-9" id="row">
        <div class="col card p-3">
          <div class="p-3 border bg-light">Custom column padding</div>
        </div>
        <div class="col card p-3">
          <div class="p-3 border bg-light">Custom column padding</div>
        </div>
        <div class="col card p-3">
          <div class="p-3 border bg-light">Custom column padding</div>
        </div>
      </div>
    </div> 

    <div class='container border bg-light' id='containerTwo'>
      <div class="mb-3">
        <label for="playerName" class="form-label">Add your players name</label>
        <input type="email" class="form-control" id="playerName" placeholder="What is your players name?">
      </div>
      <div class="mb-3">
        <label for="playerBattingAvg" class="form-label">Add your players batting average</label>
        <input type="email" class="form-control" id="playerBattingAvg" placeholder="What is your players batting average?">
      </div>
      <button type="button" class="btn btn-success" id="addPlayerBtn">
        Add Player
      </button>
    </div>
  </div>

  <div class="container-fluid bg-danger" id='containerThree'>
    <footer class="text-white">Footer</footer>
  </div>
</body>
</html>
  `
}

module.exports = returnHTML