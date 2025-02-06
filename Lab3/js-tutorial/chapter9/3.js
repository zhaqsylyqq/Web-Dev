class VoiceSynth {

  constructor(name) {
    this.bpm = 0;
    this.name = name;
  }

  sing(speed) {
    this.speed = speed;
    console.log(`${this.name} is singing at ${this.speed} bpm`);
  }

  stop() {
    this.bpm = 0;
    console.log(`${this.name} has stopped singing`);
  }
}

class UTAU extends VoiceSynth {

  //to not get an error in functios using this 
  //we should use super() in the child constructor
  constructor(name) {
    super(name);
  }
  
  contribute() {
    console.log('Contribute to the UTAU project');
  }

  stop() {
    super.stop(); //call parent stop
    this.contribute(); //call this class' contribute
  }

  update() {
    console.log(`You have updated the voicebank of ${this.name}`);
  }
}

let rin = new VoiceSynth('Rin');
rin.sing(140);


