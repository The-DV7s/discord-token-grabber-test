const packages = [
  "com.dv7.tokengrabbertest.discord.client",
  "com.dv7.discord.mod",
  "com.dv7.eel.mod",
  "com.app.dv7creations.ddoscord",
  "lmao.discord.bg"
];

const packageStrings = [
  "03024502523098509828958778",
  "3096834687396396387420520",
  "0245789058972578298745",
  "2450257298525350892587285286526580265",
  "98752950259275785",
  "58724082589025925",
  "45025745",
  "052579828"
];

if (process.env.TARGET === packages[0]) {
  console.log("You are using our modded discord to test this.. Remember to not use the real discord or your account will get banned");
} else {
  console.log("You are using real discord");
  process.exit();
}

if (!packages.includes(process.env.TARGET)) {
  console.log(">> SCRIPT ERRORS DE CHECK <<\n SCRIPT ERROR : USING REAL DISCORD OR OTHER APP");
} else {
  console.log("USING OTHER APP");
}
