const cards = document.querySelector(".cards");
class Animal {
  constructor(name, image, numberOfLegs) {
    (this.name = name),
      (this.image = image),
      (this.numberOfLegs = numberOfLegs);
  }
}
class Dog extends Animal {
  constructor(name, image, numberOfLegs, age) {
    super(name, image, numberOfLegs);
    this.age = age;
  }
  print() {
    let html = `
      <div class="card">
          <div class="card-header">
            <img src="${this.image}" alt="" />
          </div>
          <div class="card-body">
            <h3>Name :${this.name}</h3>
            <h3>Number Of Legs : ${this.numberOfLegs}</h3>
            <h3>Age : ${this.age}</h3>
          </div>
        </div>
    `;
    cards.innerHTML += html;
  }
}
class Duck extends Animal {
  constructor(name, image, numberOfLegs, age) {
    super(name, image, numberOfLegs);
    this.age = age;
  }
}

const dog1 = new Dog("Rifki", "https://picsum.photos/640/360", 4, 7);
const dog2 = new Dog("Poncik", "https://picsum.photos/640/360", 4, 9);
const dog3 = new Dog("Tuylu", "https://picsum.photos/640/360", 4, 4);
const duck1 = new Dog("Mucver", "https://picsum.photos/640/360", 2, 4);
const duck2 = new Dog("Patso", "https://picsum.photos/640/360", 2, 3);
const duck3 = new Dog("Cerum", "https://picsum.photos/640/360", 2, 1);
const arr = [dog1, dog2, dog3, duck1, duck2, duck3];
arr.forEach((item) => {
  item.print();
});
