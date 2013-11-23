/**
 * @author DAIMOHAN
 */
		var tempContext = null; // global variable 2d context
		var started = false;
		var mText_canvas = null;
		var x = 0, y =0, angle = 0, anglesteps = 4;
		window.add
		(window.onload = function() {
			var canvas = document.getElementById("event_canvas");
			console.log(canvas.parentNode.clientWidth);
			canvas.width = 640;//canvas.parentNode.clientWidth;
			canvas.height = 480;//canvas.parentNode.clientHeight;
			
			if (!canvas.getContext) {
			    console.log("Canvas not supported. Please install a HTML5 compatible browser.");
			    return;
			}
			
			// get 2D context of canvas and draw rectangel
			tempContext = canvas.getContext("2d");
			tempContext.fillStyle="blue";
			x = canvas.width/2;
			y = canvas.height/2;
			tempContext.moveTo(x, y-50);
			tempContext.lineTo(x-50, y+50);
			tempContext.lineTo(x+50, y+50);
			tempCOntext.fill();
	
	        // key event - use DOM element as object
	        canvas.addEventListener('keydown', doKeyDown, true);
	        canvas.focus();  
	        // key event - use window as object
	        window.addEventListener('keydown', doKeyDown, true);
	        
	        // mouse event
	        canvas.addEventListener("mousedown", doMouseDown, false);
	        canvas.addEventListener('mousemove', doMouseMove, false);
	        canvas.addEventListener('mouseup',   doMouseUp, false);
		});
		
		function getPointOnCanvas(canvas, x, y) {
			var bbox = canvas.getBoundingClientRect();
			return { x: x - bbox.left * (canvas.width  / bbox.width),
					y: y - bbox.top  * (canvas.height / bbox.height)
					};
		}
		
		function doKeyDown(e) {
			var keyID = e.keyCode ? e.keyCode :e.which;
			if(keyID === 38 || keyID === 87)  { // up arrow and W
				clearCanvas();
				x = x + 2*Math.cos(2*Math.PI*(angle/360));
				y = y + 2*Math.sin(2*Math.PI*(angle/360));
				tempContext.lineTo(x + 35, y + 25);
				tempContext.stroke();
				tempContext.drawImage(img,x,y);
				e.preventDefault();
			}			
			if(keyID === 37 || keyID === 65)  { // left arrow and A
				clearCanvas();
				angle = angle - anglesteps;
				tempContext.lineTo(x, y);
				tempContext.stroke();
				img.rotate(-anglesteps*Math.PI/180);
				tempContext.drawImage(img,x,y);
				e.preventDefault();
			}
			if(keyID === 39 || keyID === 68)  { // right arrow and D
				clearCanvas();
				angle = angle + anglesteps;
				tempContext.lineTo(x, y);
				tempContext.stroke();
				img.rotate(anglesteps*Math.PI/180);
				e.preventDefault();
			}
			if(keyID === 40 || keyID === 83)  { // down arrow and S
				clearCanvas();
				y = y + 10;
				tempContext.lineTo(x, y);
				tempContext.stroke();
				tempContext.fillRect(x-40, y-20, 80, 40);
				e.preventDefault();
			}
		}
		
		function clearCanvas() {
			tempContext.clearRect(0, 0, 640, 480);
		}
		
		function doMouseDown(event) {
			var x = event.pageX;
			var y = event.pageY;
			var canvas = event.target;
			var loc = getPointOnCanvas(canvas, x, y);
			console.log("mouse down at point( x:" + loc.x + ", y:" + loc.y + ")");
			tempContext.beginPath();
			tempContext.moveTo(loc.x, loc.y);
			started = true;
		}
		
		function doMouseMove(event) {
			var x = event.pageX;
			var y = event.pageY;
			var canvas = event.target;
			var loc = getPointOnCanvas(canvas, x, y);
			if (started) {
				tempContext.lineTo(loc.x, loc.y);
				tempContext.stroke();
			}
		}
		
		function doMouseUp(event) {
			console.log("mouse up now");
		    if (started) {
		    	doMouseMove(event);
		        started = false;
			}
		}