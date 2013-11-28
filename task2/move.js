/**
 * @author DAIMOHAN
 */
		var tempContext = null; // global variable 2d context
		var a = null;
		var tri = null;
		var started = false;
		var mText_canvas = null;
		var x = 0, y =0, angle = 0, anglesteps = 4;
		
		//window.add
		window.onload = initialize();
		
		function initialize() {
			var canvas = document.getElementById("event_canvas");
			var reset = document.getElementById("reset");
			console.log(canvas.parentNode.clientWidth);
			canvas.width = 900;//canvas.parentNode.clientWidth;
			canvas.height = 700;//canvas.parentNode.clientHeight;
			
			if (!canvas.getContext) {
			    console.log("Canvas not supported. Please install a HTML5 compatible browser.");
			    return;
			}
			
			// get 2D context of canvas and draw rectangel
			tempContext = canvas.getContext("2d");
			a = canvas.getContext("2d");
	        tempContext.save();
	        a.save();
			a.fillStyle="blue";
			tempContext.fillStyle="blue";
			x = canvas.width/2;
			y = canvas.height/2;
			a.fillRect(x-40, y-20, 80, 40);
			a.fillStyle="red";
			a.fillRect(x-40, y-20, 60, 40);
			a.fillStyle="blue";
	
	        // key event - use DOM element as object
	        canvas.addEventListener('keydown', doKeyDown, true);
	        canvas.focus();  
	        // key event - use window as object
	        window.addEventListener('keydown', doKeyDown, true);
	        
	        // mouse event
	        canvas.addEventListener("mousedown", doMouseDown, false);
	       // canvas.addEventListener('mousemove', doMouseMove, false);
	       // canvas.addEventListener('mouseup',   doMouseUp, false);
	     //   reset.addEventListener("mousedown", doReset, false)

		}
		
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
				//x = x + 2*Math.cos(2*Math.PI*(angle/360));
				//y = y + 2*Math.sin(2*Math.PI*(angle/360));
				x = x + 8;
				tempContext.lineTo(x, y);
				tempContext.stroke();				
				
				a.translate(-400,-400);
				clearCanvas();
				a.translate(400,400);
				tempContext.lineTo(x, y);
				tempContext.stroke();
				
				a.fillRect(x-40, y-20, 80, 40);
				a.fillStyle="red";
				a.fillRect(x-40, y-20, 60, 40);
				a.fillStyle="blue";
				e.preventDefault();
			}			
			if(keyID === 37 || keyID === 65)  { // left arrow and A
				clearCanvas();
				angle = angle - anglesteps;
				tempContext.lineTo(x, y);
				tempContext.stroke();
				
				//a.save();
				a.translate(x,y);
				x = 0;
				y = 0;
				a.rotate(-anglesteps*Math.PI/180);
				a.translate(-400,-400);
				clearCanvas();
				a.translate(400,400);
				tempContext.lineTo(x, y);
				tempContext.stroke();
				
				a.fillRect(x-40, y-20, 80, 40);			
				a.fillStyle="red";
				a.fillRect(x-40, y-20, 60, 40);
				a.fillStyle="blue";
				//drawTriangle(x,y,angle);
				e.preventDefault();
			}
			if(keyID === 39 || keyID === 68)  { // right arrow and D
				clearCanvas();
				angle = angle + anglesteps;
				tempContext.lineTo(x, y);
				tempContext.stroke();
				
				//a.save();
				a.translate(x,y);
				x = 0;
				y = 0;
				a.rotate(+anglesteps*Math.PI/180);
				a.translate(-400,-400);
				clearCanvas();
				a.translate(400,400);
				tempContext.lineTo(x, y);
				tempContext.stroke();
				
				a.fillRect(x-40, y-20, 80, 40);
				a.fillStyle="red";
				a.fillRect(x-40, y-20, 60, 40);
				a.fillStyle="blue";
				//drawTriangle(x,y,angle);
				e.preventDefault();
			}
		}
		
		function clearCanvas() {
			tempContext.clearRect(0, 0, 1200, 900);
			
			//tempContext.clearRect(-1000, -1000, 1000, 1000);
		}
		
		function doReset() {
			clearCanvas();
			a.restore();
			tempContext.restore();
			initialize();
		}
		
		function doMouseDown(event) {
			clearCanvas();
			a.restore();
			tempContext.restore();
			initialize();
		}