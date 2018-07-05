function Drawble(id, opt){
  this.opt = opt || {};
  this.containerId = id;
  this.containerWidth = this.opt.width || 500;
  this.containerHeight = this.opt.height || 300;
};

Drawble.prototype.show = function(){
  this._createAndAppendCanvas();
  this._addEventListener();
};

Drawble.prototype._createAndAppendCanvas = function(){
  this.canvas = document.createElement("canvas");
  this.canvas._this = this;
  this.context2D = this.canvas.getContext("2d");
  this.canvas.width = this.containerWidth;
  this.canvas.height = this.containerHeight;
  this.canvas.style.border = this.opt.borderWidth ?
  `${this.opt.borderWidth} solid ${this.opt.borderColor}` : `1px solid black`;

  const div = document.getElementById(this.containerId);
  if(div){
    div.appendChild(this.canvas);
  }
};

Drawble.prototype._addEventListener = function(){
  if(!this.canvas){
    return;
  }

  this.canvas.addEventListener("mousedown", this._mousedown, false);
  this.canvas.addEventListener("mouseup", this._mouseup, false);
  this.canvas.addEventListener("mousemove", this._mousemove, false);
  this.canvas.addEventListener("mouseout", this._mouseout, false);
};


Drawble.prototype._mousedown = function(event){
  event.target._this.startX = event.offsetX;
  event.target._this.startY = event.offsetY;
  event.target._this._isMouseDown = true;
};

Drawble.prototype._mousemove = function(event){
  if(event.target._this._isMouseDown){
    event.target._this._defaultDraw(event.offsetX, event.offsetY);
    event.target._this.startX = event.offsetX;
    event.target._this.startY = event.offsetY;
  }
};

Drawble.prototype._mouseup = function(event){
  event.target._this._isMouseDown = false;
};

Drawble.prototype._mouseout = function(event){
  event.target._this._isMouseDown = false;
};

Drawble.prototype._defaultDraw = function(x,y){
  this.context2D.beginPath();
  this.context2D.moveTo(this.startX, this.startY);
  this.context2D.lineTo(x,y);
  this.context2D.stroke();
};
