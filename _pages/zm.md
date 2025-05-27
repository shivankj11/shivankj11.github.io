---
layout: app
title: Zetamac-Voice
permalink: /zm
---

<html>
  <body>
    <div class='zm-header'>
      <h1>
        <button class="theme-toggle-btn" id="home-btn" title="Home" onclick="window.location.href='/'">
          ❮❮
        </button>
        Zetamac-Voice
        <button class="theme-toggle-btn" id="theme-toggle" title="Toggle dark/light mode">
          <span id="theme-icon">light</span>
        </button>
      </h1>
      <hr style='width: 100%; margin-bottom: 10px;'/>
    </div>
    <div id='zm-welcome'>
      <p>The Arithmetic Game is a fast-paced speed drill where you are given two minutes to solve as many arithmetic problems as you can.</p>
      <p><a href="https://arithmetic.zetamac.com">Link to Zetamac</a>  |  <a href="/assets/zetamac_high_score.png">High Score</a></p>
      <form action='/zm-game' class='game-options'>
        <dl>
          <dt>
            <label>
              <input checked name='add' type='checkbox'>
              Addition
            </label>
          </dt>
          <dd>Range: (<input type="text" name="add_left_min" id="add_left_min" value="2"> to <input type="text" name="add_left_max" id="add_left_max" value="100">) +
	  (<input type="text" name="add_right_min" id="add_right_min" value="2"> to <input type="text" name="add_right_max" id="add_right_max" value="100">)</dd>
          <dt>
            <label>
              <input checked name='sub' type='checkbox'>
              Subtraction
            </label>
          </dt>
          <dd>Addition problems in reverse.</dd>
          <dt>
            <label>
              <input checked name='mul' type='checkbox'>
              Multiplication
            </label>
          </dt>
          <dd>Range: (<input type="text" name="mul_left_min" id="mul_left_min" value="2"> to <input type="text" name="mul_left_max" id="mul_left_max" value="12">) ×
	  (<input type="text" name="mul_right_min" id="mul_right_min" value="2"> to <input type="text" name="mul_right_max" id="mul_right_max" value="100">)</dd>
          <dt>
            <label>
              <input checked name='div' type='checkbox'>
              Division
            </label>
          </dt>
          <dd>Multiplication problems in reverse.</dd>
        </dl>
        <p>
          Duration:
          <select name='duration' style="font-size: 16px; margin: 1px 2px;">
            <option value='30'>30 seconds</option>
            <option value='60'>60 seconds</option>
            <option selected value='120'>120 seconds</option>
            <option value='300'>300 seconds</option>
            <option value='600'>600 seconds</option>
          </select>
        </p>
        <div class='button-row'>
          <input type='submit' id='start-audio' value='Start Audio'>
          <input type='submit' id='start' value='Start'>
        </div>
      </form>
    </div>
    <script src='https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js'></script>
    <script src='/zm-game.js'></script>
  </body>
</html>
