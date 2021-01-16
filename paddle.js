class Paddle{

  constructor(height,width,pressed,x,y){
    this.width  = width
    this.height = height
    this.top    = pressed
    this.left   = pressed
    this.right  = pressed
    this.down   = pressed
    this.x = x
    this.y = y
  }

  draw(ctx){
    ctx.beginPath();
    ctx.rect(this.x,this.y ,this.width,this.height);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }

  keyDownHandler(e){
    switch (e.key) {
      case "Top":
      case "ArrowUp":
        this.top = true
        return
      case "Down":
      case "ArrowDown":
        this.down = true
        return
      case "Right":
      case "ArrowRight":
        this.left = true
        return
      case "Left":
      case "ArrowLeft":
        this.right = true
        return
    }
  }

  keyupHandler(e){
    switch (e.key) {
      case "Top":
      case "ArrowUp":
        this.top = false
      case "Down":
      case "ArrowDown":
        this.down = false
      case "Right":
      case "ArrowRight":
        this.left = false
      case "Left":
      case "ArrowLeft":
        this.right = false
      break;
    }
  }

  move(canvas){
    if (this.top && this.y > 0) {
      this.y -= 7
    }else if (this.down && this.y < canvas.height - this.height) {
      this.y += 7
    }else if (this.left && this.x < canvas.width-this.width) {
      console.log("test");
      this.x += 7
    }else if (this.right && this.x > 0) {
      this.x -= 7
    }
  }

}


export default Paddle
