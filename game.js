class Game {
    // Math.abs(this.paddle.y-(this.paddle.height/2)- this.ball.y) <= this.ball.rabius
  constructor(node){
    this.intervalID=null
    this.node =document.querySelector(node)
    this.ctx = this.node.getContext('2d')
    this.ball =new window.Ball(this.node.width/2+10,this.node.height-30, -2,-2,10 )
    this.paddle = new window.Paddle(10,75,false,parseInt( (this.node.width-75)/2),parseInt(this.node.height-10))
    this.block = new window.Block(5,5,70,20,5,20,55)
    document.addEventListener("keydown", this.paddle.keyDownHandler.bind(this.paddle), false);
    document.addEventListener("keyup", this.paddle.keyupHandler.bind(this.paddle), false);
  }

  game_start(){
    this.ctx.clearRect(0,0,this.node.width,this.node.height)
    this.ball.draw(this.ctx)
    this.paddle.draw(this.ctx)
    this.paddle.move(this.node)
    this.block.draw(this.ctx)
    this.BallCollisionDetection()
    this.BlockCollisionDetection()
  }

  BallCollisionDetection(){
      if (this.ball.y+this.ball.dy <this.ball.rabius) {
        this.ball.dy = -this.ball.dy
        this.ball.y +=   this.ball.rabius
      }
      if(this.ball.x+this.ball.dx > this.node.width - this.ball.rabius || this.ball.x+this.ball.dx < this.ball.rabius){
        this.ball.dx = -this.ball.dx
      }
      if (Math.abs(this.paddle.y+(this.paddle.height/2)- this.ball.y) <= this.ball.rabius ) {
        if (this.ball.x >= this.paddle.x && this.ball.x <= this.paddle.x +1) {
          this.ball.dy = -this.ball.dy
          this.ball.dx = -this.ball.dx
          this.ball.x -= 2
        }
        else if(this.ball.x >= this.paddle.x + this.paddle.width -1 && this.ball.x <= this.paddle.x + this.paddle.width){
          this.ball.dy = -this.ball.dy
          this.ball.dx = -this.ball.dx
          this.ball.x += 2
        }else if (this.ball.x >= this.paddle.x && this.ball.x <= this.paddle.x + this.paddle.width) {
         this.ball.dy = -this.ball.dy
         this.ball.y += this.ball.rabius
        }

      }
      else if (Math.abs(this.paddle.y-(this.paddle.height/2)- this.ball.y) <= this.ball.rabius  ) {
        if (this.ball.x >= this.paddle.x && this.ball.x <= this.paddle.x +1) {
          this.ball.dy = -this.ball.dy
          this.ball.dx = -this.ball.dx
          this.ball.y = Math.abs(this.paddle.y-(this.paddle.height/2)) - this.ball.rabius
          this.ball.x -= 2
        }else if(this.ball.x >= this.paddle.x + this.paddle.width -1 && this.ball.x <= this.paddle.x + this.paddle.width){
          this.ball.dy = -this.ball.dy
          this.ball.dx = -this.ball.dx
          this.ball.y = Math.abs(this.paddle.y-(this.paddle.height/2)) - this.ball.rabius
          this.ball.x += 2

        }else if (this.ball.x >= this.paddle.x && this.ball.x <= this.paddle.x + this.paddle.width) {
          this.ball.dy = -this.ball.dy
          this.ball.y = Math.abs(this.paddle.y-(this.paddle.height/2)) - this.ball.rabius
         }
      }
      if ( this.ball.y+this.ball.dy >this.node.height) this.game_over()

      //  this.ball.dy = -this.ball.dy
      // this.ball.y -= this.ball.rabius


    this.ball.x += this.ball.dx;
    this.ball.y += this.ball.dy;
  }

  BlockCollisionDetection(){
    this.game_clear()
    for (let c = 0; c <this.block.col; c++) {
      for (let r = 0; r < this.block.row; r++) {
        let b =this.block.blocks[c][r]
        if (b.status == 1) {
          if (this.ball.x >b.x && this.ball.x< b.x +this.block.width && this.ball.y > b.y && this.ball.y < b.y+this.block.height) {
            this.ball.dy = -this.ball.dy;
            b.status = 0
          }
        }
      }
    }
  }

 game_clear(){
   let blocks_status =[]
   this.block.BlockStatusCheck(blocks_status)
   blocks_status = blocks_status.filter((bl)=>bl == true)
   if (blocks_status.length == []) {
     alert("ゲームクリア")
     clearInterval(this.intervalID)
   }
 }
  game_over(){
    alert("ゲームオーバー")
    clearInterval(this.intervalID)
  }
}

const game = new Game("#myCanvas");
game.intervalID=setInterval(function (params) {
  game.game_start()
},10)

// game.game_start()
// this.ball.y = (Math.abs(this.paddle.y-(this.paddle.height/2)- this.ball.y) <= this.ball.rabius) ?
          //   Math.abs(this.paddle.y-(this.paddle.height/2)) - this.ball.rabius
          //   :
          //   null
// Math.abs(this.paddle.y+(this.paddle.height/2)) - this.ball.rabius

// if (Math.abs(this.paddle.y+(this.paddle.height/2)- this.ball.y) <= this.ball.rabius ) {
          //   this.ball.y -= this.paddle.height
 // }

// this.ball.y = (Math.abs(this.paddle.y-(this.paddle.height/2)- this.ball.y) <= this.ball.rabius) ?
              // Math.abs(this.paddle.y-(this.paddle.height/2)) - this.ball.rabius
              // :
              // Math.abs(this.paddle.y+(this.paddle.height/2)) - this.ball.rabius
          // this.ball.y =  - this.ball.rabius
          // this.ball.dy = -this.ball.dy
          // this.ball.dx = -this.ball.dx
          // this.ball.dx *= -1
          // this.ball.dy *= -1


// if (Math.abs(this.paddle.y+(this.paddle.height/2)- this.ball.y) <= this.ball.rabius ) {
          //   this.ball.y -= this.paddle.height
          // }
          // this.ball.y = (Math.abs(this.paddle.y-(this.paddle.height/2)- this.ball.y) <= this.ball.rabius) ?
          // Math.abs(this.paddle.y-(this.paddle.height/2)) - this.ball.rabius
          // :
          // Math.abs(this.paddle.y+(this.paddle.height/2)) - this.ball.rabius

          // this.ball.x += 1

          // this.ball.y = this.paddle.y - this.ball.rabius
          // this.ball.dy = -this.ball.dy
          // this.ball.dy *= -1






   // console.log);
    // this.game_clear()
      // if (this.ball.y + this.ball.dy >= this.paddle.y - this.paddle.height && this.ball.y+this.ball.dy >= this.paddle.y) {

          // if (this.ball.x >= this.paddle.x && this.ball.x <= this.paddle.x + this.paddle.width ) {
          //   this.ball.dy = -this.ball.dy
          //   this.ball.dx *= 1
          // }
      // }

         // this.ball.dx *= 1
        // if ( Math.abs(this.paddle.x-(this.paddle.width/2)- this.ball.x)< this.ball.x ||  Math.ads()) {
        //   this.ball.dy = -this.ball.dy
        // }

        // if ( this.ball.x >= this.paddle.x && this.ball.x <= this.paddle.x + this.paddle.width ) {
        //   this.ball.dy = -this.ball.dy
        // }




      // }else if (this.ball.y+this.ball.dy > this.paddle.y-this.paddle.height ) {
      // }else if ( this.ball.x >= this.paddle.x && this.ball.x <= this.paddle.x + this.paddle.width && Math.abs(this.paddle.y+(this.paddle.height/2)- this.ball.y) < this.ball.rabius ) {
      //   this.ball.dy = -this.ball.dy
        // }else if(this.ball.x >= this.paddle.x && this.ball.x <= this.paddle.x + this.paddle.width && this.ball.y + this.ball.dy >= this.paddle.y - this.paddle.height && this.ball.y+this.ball.dy >= this.paddle.y){
      //  else if ( this.ball.x >= this.paddle.x && this.ball.x <= this.paddle.x + this.paddle.width && Math.abs(this.paddle.y-(this.paddle.height/2)- this.ball.y) <= this.ball.rabius) {
      //   this.ball.dy = -this.ball.dy
      // }
      // ||Math.abs(this.paddle.y+(this.paddle.height/2)-this.ball.y) == this.ball.rabius
      // }else if ( this.ball.x >= this.paddle.x && this.ball.x <= this.paddle.x + this.paddle.width && this.ball.y+this.ball.dy >= this.paddle.y-this.paddle.height && this.ball.y+this.ball.dy <= this.paddle.y) {
      //   this.ball.dy = -this.ball.dy
      // }
      // }else if(this.ball.x >=this.paddle.x-parseInt((this.paddle.x/2)) && this.ball.x <= this.paddle.x+parseInt((this.paddle/2))){
      //   console.log("tt");
      //   this.ball.dy = -this.ball.dy
      // }


    //   if(this.ball.y+this.ball.dy >  this.paddle.y  ){
    //     }
    // // }
    // if (this.ball.y+this.ball.dy >this.node.height-this.ball.rabius) {
    //   this.ball.dy = -this.ball.dy
    // }

//if (ball.y >= paddle.y - ball.size && ball.y <= paddle.y + ball.size && ball.x >= paddle.x - (paddle.size / 2) && ball.x <= paddle.x + (paddle.size / 2)) {
  // ball.dy *= -1;
  // }
  // 10
  //
// console.log(`ball(x:${this.ball.x},y${this.ball.y}`);
// console.log(`paddle(x:${this.ball.x},y${this.ball.y}`);
