
class Towers{
  constructor(reader){
    this.towers = [[3,2,1],[],[]];
    this.reader = reader;
  }

  run(completionCallback) {
    this.promptMove(move => {
       this.move(move[0], move[1])
        if (this.isWon()){
          completionCallback();
        } else {
          this.run(completionCallback)
        }
    });
  }

  promptMove(doMove){
    console.log(this.towers)

    this.reader.question("Pick from tower and to tower: ", response => {
      let from_tower = Number(response[0]);
      let to_tower = Number(response[2]);
      if (this.isValidMove(from_tower, to_tower)) {
        doMove([from_tower, to_tower]);
      } else {
        this.promptMove(doMove);
      }
    });
  }

  isValidMove(start, end) {
    let last_el_from = this.towers[start][this.towers[start].length-1];
    let last_el_to = this.towers[end][this.towers[end].length-1];
    if(!last_el_from) return false;
    if(!last_el_to) return true;
    if (last_el_from < last_el_to) return true;
    return false
  }

  move(from_tower, to_tower) {
    this.towers[to_tower].push(this.towers[from_tower].pop());
    console.log(this.towers);
  }

  print(){
    console.log( JSON.stringify(this.towers) );
  }

  isWon(){
    if (this.towers[2].length === 3 || this.towers[1].length === 3) {
      return true
    } else {
      return false
    }
  }
}

module.exports = Towers;
