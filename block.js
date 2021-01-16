class Block{
  constructor(row,col,width,height,padding,setTop,setLeft){
    this.row      = row
    this.col      = col
    this.width    = width
    this.height   = height
    this.padding  = padding
    this.setTop   = setTop
    this.setLeft  = setLeft
    this.blocks   = []
    this.BlockSet()
  }

  BlockSet(){
    for (let c = 0; c < this.col; c++) {
        this.blocks[c] = []
      for (let r = 0; r < this.row; r++) {
        this.blocks[c][r] = {x:0,y:0,status:1};
      }
    }
  }

  BlockStatusCheck(bls){
    for (let c = 0; c < this.col; c++) {
      for (let r = 0; r < this.row; r++) {
        if (this.blocks[c][r].status==1) {
          bls.push(true)
        }else{
          bls.push(false)
        }
      }
    }
  }

  draw(ctx){
    for (let c = 0; c < this.col; c++) {
      for (let r = 0; r < this.row; r++) {
        if (this.blocks[c][r].status == 1) {
          let blockX =  (c*(this.width+this.padding))+this.setLeft
          let blockY = (r*(this.height+this.padding))+this.setTop
          this.blocks[c][r].x = blockX
          this.blocks[c][r].y = blockY
          ctx.beginPath()
          ctx.rect(blockX,blockY,this.width,this.height,)
          ctx.fillStyle="#0095DD"
          ctx.fill()
          ctx.closePath()
        }
      }
    }
  }
}

export default Block;

// ctx.fillStyle="red"
          // ctx.fillStyle="#111111"
