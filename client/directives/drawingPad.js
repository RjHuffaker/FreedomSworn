angular.module("freedomsworn")
  .directive("drawingPad", ['$meteor', '$parse',
    function($meteor, $parse){
      return {
        restrict: "A",
        link: function(scope, element, attrs){
          
          var ctx = element[0].getContext('2d');
          
          var canvas = document.getElementsByTagName('canvas')[0];
          
          // variable that decides if something should be drawn on mousemove
          var drawing = false;
          
          // the last coordinates before the current move
          var lastX, lastY;
          
          canvas.width  = 250;
          canvas.height = 350;
          
          scope.$watchCollection('scene.sketchEvents', function(newVal, oldVal){
            if(!drawing && newVal){
              var newLength = newVal.length;
              var oldLength = oldVal.length;
              for(var i = oldLength; i < newLength; i++){
                var coord = newVal[i];
                draw(coord.lX, coord.lY, coord.cX, coord.cY);
              }
            }
          });
          
          element.bind('mousedown', function(event){
            if(event.offsetX!==undefined){
              lastX = event.offsetX;
              lastY = event.offsetY;
            } else { // Firefox compatibility
              lastX = event.layerX - event.currentTarget.offsetLeft;
              lastY = event.layerY - event.currentTarget.offsetTop;
            }

            // begins new line
            ctx.beginPath();

            drawing = true;
          });
          
          element.bind('mousemove', function(event){
            if(drawing){
              // get current mouse position
              var currentX, currentY;
              
              if(event.offsetX!==undefined){
                currentX = event.offsetX;
                currentY = event.offsetY;
              } else {
                currentX = event.layerX - event.currentTarget.offsetLeft;
                currentY = event.layerY - event.currentTarget.offsetTop;
              }
              
              draw(lastX, lastY, currentX, currentY);
              
              recordSketch(lastX, lastY, currentX, currentY);
              
              // set current coordinates to last one
              lastX = currentX;
              lastY = currentY;
            }
            
          });
          
          element.bind('mouseup', function(event){
            drawing = false;
            scope.scene.save();
          });
          
          element.bind('mouseleave', function(event){
            if(drawing){
              drawing = false;
              scope.scene.save();
            }
          });
          
          // canvas reset
          function reset(){
           element[0].width = element[0].width; 
          }
          
          function recordSketch(lX, lY, cX, cY){
            scope.scene.sketchEvents.push({
              lX: lX,
              lY: lY,
              cX: cX,
              cY: cY
            });
          }
          
          function draw(lX, lY, cX, cY){
            
            // line from
            ctx.moveTo(lX, lY);
            // to
            ctx.lineTo(cX, cY);
            // color
            ctx.strokeStyle = "#111";
            // draw it
            ctx.stroke();
            
          }
          
          function init(){
            for(var i = 0; i < scope.scene.sketchEvents.length; i++){
              var coord = scope.scene.sketchEvents[i];
              draw(coord.lX, coord.lY, coord.cX, coord.cY);
            }
          }
          
          init();
          
        }
      };
    }]);