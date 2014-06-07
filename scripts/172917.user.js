// ==UserScript==
// @name       Gplus clear posts button
// @namespace  http://ysmood.org
// @version    0.6
// @description  A tool to remove all the loaded posts.
// @match      https://plus.google.com/*
// @copyright  Jul 2013, ys
// ==/UserScript==

// Generated by CoffeeScript 1.6.2
(function() {
  var clear_posts, init, load_posts, run, run_by_press;

  init = function() {
    var run_btn, stream_stage;

    stream_stage = document.querySelector('.wIa');
    if (stream_stage === null) {
      return;
    }
    run_btn = document.createElement('div');
    run_btn.innerHTML = '<div class="c-b c-b-T" title="shortcut: C">Clear Posts</div>';
    run_btn.style.position = 'fixed';
    run_btn.style.bottom = '20px';
    run_btn.style.left = '20px';
    run_btn.zIndex = '10000';
    run_btn.addEventListener('mouseover', function() {
      return run_btn.firstChild.className = 'c-b c-b-T c-b-C';
    });
    run_btn.addEventListener('mouseout', function() {
      return run_btn.firstChild.className = 'c-b c-b-T';
    });
    run_btn.addEventListener('click', run);
    stream_stage.appendChild(run_btn);
    return document.addEventListener('keypress', run_by_press);
  };

  clear_posts = function() {
    var all_current_posts, e, _i, _len, _results;

    all_current_posts = document.querySelectorAll('.ChZ7Rc');
    _results = [];
    for (_i = 0, _len = all_current_posts.length; _i < _len; _i++) {
      e = all_current_posts[_i];
      _results.push(e.parentElement.removeChild(e));
    }
    return _results;
  };

  load_posts = function() {
    var load_more_btn;

    load_more_btn = document.querySelector('.Op');
    return load_more_btn.click();
  };

  run = function() {
    clear_posts();
    return load_posts();
  };

  run_by_press = function(e) {
    console.log(11);
    if (e.keyCode === 99 && !document.activeElement.isContentEditable && document.activeElement.tagName !== 'INPUT') {
      return run();
    }
  };

  init();

}).call(this);