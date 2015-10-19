(function(){

  'use strict';

  document.addEventListener('mouseenter', function(event) {
    if (!/menu-item/.test(event.target.className)) {
      return;
    }

    Promise
      .resolve()
      .then(function() {
        return Velocity(event.target, 'stop');
      })
      .then(function() {
        return Velocity(event.target, {
          backgroundColorAlpha: 0.3
        }, {
          duration: 'normal'
        });
      });
  }, true);

  document.addEventListener('mouseleave', function(event) {
    if (!/menu-item/.test(event.target.className)) {
      return;
    }

    Promise
      .resolve()
      .then(function() {
        return Velocity(event.target, 'stop');
      })
      .then(function() {
        return Velocity(event.target, {
          backgroundColorAlpha: 1
        }, {
          duration: 'normal'
        });
      });
  }, true);

}());
