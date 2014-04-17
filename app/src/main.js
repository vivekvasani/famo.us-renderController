/*globals define*/
define(function(require, exports, module) {
    'use strict';
    // import dependencies
    var Engine = require('famous/core/Engine');
    var Surface = require('famous/core/Surface');
    var ImageSurface = require('famous/surfaces/ImageSurface');
    var StateModifier = require('famous/modifiers/StateModifier');
    var RenderController = require('famous/views/RenderController');

    // create the main context
    var mainContext = Engine.createContext();

    // your app here
    var logo = new ImageSurface({
        size: [200, 200],
        content: 'content/images/famous_logo.png'
    });

    var logoModifier = new StateModifier({
        origin: [0.5, 0.5]
    });

    var buttonModifier = new StateModifier({
        origin: [0.5, 0]
    });

    var button = new Surface({
        content: 'Click to show/hide logo',
        size: [200, 100],
        properties: {
          color: 'white',
          background: '#FA5C4F',
          textAlign: 'center',
          lineHeight: '100px'
        }
      });

    var renderCtrl = new RenderController();

    renderCtrl.show(logo);

    mainContext.add(logoModifier).add(renderCtrl);
    mainContext.add(buttonModifier).add(button);

    button.on('click', function() {
        if (renderCtrl._showing === 0) {
            renderCtrl.hide();
        }
        else {
            renderCtrl.show(logo);
        }
    });

});
