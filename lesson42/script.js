class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    get radius() {
      return this._radius;
    }
  
    set radius(value) {
      if (value < 0) {
        alert ("Radius cannot be negative");
      }
      this._radius = value;
    }
  
    get diameter() {
      return 2 * this._radius;
    }
  
    get area() {
      return Math.PI * this._radius ** 2;
    }
  
    get circumference() {
      return 2 * Math.PI * this._radius;
    }
}
  

const circle = new Circle(5);

console.log(circle.radius); 
console.log(circle.diameter); 
console.log(circle.area); 
console.log(circle.circumference); 

// ------------------------------------------------------------------------------


  class Marker {
    constructor(color, ink) {
      this.color = color;
      this.ink = ink;
    }
  
    write(text) {
      let writtenText = '';
      for (let i = 0; i < text.length; i++) {
        let char = text.charAt(i);
        if (char === ' ' || this.ink < 0.5) {
          writtenText += char;
        } else {
          writtenText += `<span style="color:${this.color}">${char}</span>`;
          this._ink -= 0.5;
        }
      }
      return writtenText;
    }
  }
  
  class RefillableMarker extends Marker {
    refill() {
      this.ink = 100;
    }
  }
  

  const marker1 = new Marker('blue', 50);
  const marker2 = new RefillableMarker('red', 20);
  
  console.log(marker1.write('Привет'));
  console.log(marker2.write('Привет'));
  marker2.refill();
  console.log(marker2.write('Привет'));
  