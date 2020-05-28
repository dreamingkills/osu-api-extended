# osu-api-extended

osu api

## Installation

npm package:
`npm i osu-api-extended`

## Usage
```
const osu = require("osu-api-extended");
osu.key = "a220d93669497e124f73324a8a32a1018ddf32f2";

// USE:

osu.beatmap({
  b: 1636879
}).then(data => console.log(data));

// OR

async function name() {
  try {
    let beatmap = await osu.beatmap({ b: 1636879 });
    console.log(beatmap);
  } catch (err) { console.log('name', err); };
};

// Work for every calls!
```

## Help
```
osu.help.(name).then(data => console.log(data));
```
### Name:
* beatmap
* user
* scores
* best
* recent
* pp_calc

## Calls
```
osu.beatmap({
  b: 2097898
}).then(data => console.log(data));

osu.user({
  u: 4504101
}).then(data => console.log(data));

osu.scores({
  b: 2097898,
  u: 4504101
}).then(data => console.log(data));

osu.best({
  u: 4504101
}).then(data => console.log(data));

osu.recent({
  b: 4504101
}).then(data => console.log(data));

osu.pp_calc({
  id: 4504101
}).then(data => console.log(data));
```

## Calc funcs
```
osu.accuracy(400, 20, 1, 2, 0, 0, 0).then(data => console.log(data));
```

## Not Supported

* /api/get_match
* /api/get_replay