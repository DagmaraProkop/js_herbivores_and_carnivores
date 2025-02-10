'use strict';

class Animal {
  static alive = [];

  constructor(health = 100, name) {
      this.name = name;
      this.health = 100;

      Animal.alive.push(this);
    }

    die() {
      Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
    }
  }


class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (!(animal instanceof Herbivore) || animal.hidden) {
      return;
    }

    animal.health -= 50;

    if (animal.health <= 0) {
      animal.die();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
