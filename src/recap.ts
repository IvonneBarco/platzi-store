const myName = 'Nicolas';
const myAge = 20;
const suma = (a: number, b: number) => {
  return a + b;
};

suma(12, 8);

class Persona {
  constructor(private age: number, private name: string) {}

  getSummary() {
    return `my name is ${this.name}, ${this.age}`;
  }
}

const nicolas = new Persona(15, 'Nicolas');
nicolas.getSummary();
