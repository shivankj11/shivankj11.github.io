---
layout: app
title: Zetamac-Voice
permalink: /zm-game
---

<html style='overflow: hidden;'>
  <body>
    <script src='https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js'></script>
    <script src='/zm-game.js'></script>
    <div id='game'>
      <!-- <span class='left'>Seconds left:</span> -->
      <!-- <span class='correct'>Score: 0</span> -->
      <div class='banner'>
        <div class='start'>
          <span class='problem'></span>
          =
          <input class='answer'>
        </div>
        <div class='end'>
          <p class='correct' style='margin-top: 30px;'>Score: <span id="final-score">0</span></p>
          <p style="font-size: 18px;">
            <a id="try-again-link" href="#">Try again</a>
            or <a href="/zm">change settings</a>.
          </p>
        </div>
      </div>
    </div>
     <script>
      function parseBool(val) {
        return val === 'true' || val === true || val === 'on' || val === 1 || val === '1';
      }
      function getOptionsFromQuery() {
        var params = new URLSearchParams(window.location.search);
        return {
          add: parseBool(params.get('add')),
          sub: parseBool(params.get('sub')),
          mul: parseBool(params.get('mul')),
          div: parseBool(params.get('div')),
          add_left_min: Number(params.get('add_left_min')) || 2,
          add_left_max: Number(params.get('add_left_max')) || 100,
          add_right_min: Number(params.get('add_right_min')) || 2,
          add_right_max: Number(params.get('add_right_max')) || 100,
          mul_left_min: Number(params.get('mul_left_min')) || 2,
          mul_left_max: Number(params.get('mul_left_max')) || 12,
          mul_right_min: Number(params.get('mul_right_min')) || 2,
          mul_right_max: Number(params.get('mul_right_max')) || 100,
          duration: Number(params.get('duration')) || 120
        };
      }
      Arithmetic.init(getOptionsFromQuery());
    </script>
    
  </body>
</html>

