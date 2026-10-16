class ChristmasLights {
    
    constructor(lightCount) {
      this.lightCount = lightCount;
    }

    next() { }
}

const lights = new ChristmasLights(8);

for (let i = 0; i < 11; i++) {
    console.log(`Step ${i + 1}: ${lights.next().join(", ")}`);
}


// Solution: 
//
// class ChristmasLights {
//     constructor(lightCount) {
//       this.lightCount = lightCount;
//           this.currentLitIndex = 0; // Tracks which light is currently true
//     }
//
//   next() {
//     // Generate an array where only the light at currentLitIndex is true
//
//     const currentPattern = Array.from({ length: this.lightCount }, (_, index) => {
//       return index === this.currentLitIndex;
//     });
//
//     // Move the lit light to the next position, looping back to 0 at the end
//     this.currentLitIndex = (this.currentLitIndex + 1) % this.lightCount;
//     return currentPattern;
//   }
// }
//
// const lights = new ChristmasLights(8);
// for (let i = 0; i < 11; i++) {
//     console.log(`Step ${i + 1}: ${lights.next().join(", ")}`);
// }