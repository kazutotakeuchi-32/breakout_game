class Animal {
  constructor(name) {
    this.name = name;
    this.dog = new Dog("dog")
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // スーパークラスのコンストラクターを呼び出し、name パラメータを渡す
    this.aa="kazuto"
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}


const a = new Animal("kazuto")
// const d = new Dog("dog");
// d.speak(); // Mitzie barks.
