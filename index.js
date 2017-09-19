const fs = require("fs");
const WavDecoder = require("wav-decoder");
const Pitchfinder = require("pitchfinder");

async function go() {
  // see below for optional constructor parameters.
  const detectPitch = new Pitchfinder.YIN();

  const buffer = fs.readFileSync("octave/68437__pinkyfinger__piano-a.wav");
  const decoded = await WavDecoder.decode(buffer); // get audio data from file using `wav-decoder`
  const float32Array = decoded.channelData[0]; // get a single channel of sound
  const pitch = detectPitch(float32Array); // null if pitch cannot be identified
  console.log(pitch);
}

go();
