import fs from "fs";

declare const Buffer: any;

const format = (data: any, map: any, score: any, id: any, mods: any, file: string): string => {
  /*const decode = Buffer.from(data.content, data.encoding);
  const replay = new osr.Replay();

  replay.replay_data = lzma.decompress(decode);

  replay.beatmapMD5 = map?.difficulties.find((r: any) => r.id === id).file_md5;
  replay.playerName = score[0].user.name;
  replay.number_300s = score[0].hits[300];
  replay.number_100s = score[0].hits[100];
  replay.number_50s = score[0].hits[50];
  replay.gekis = score[0].hits.geki;
  replay.katus = score[0].hits.katu;
  replay.misses = score[0].hits[0];
  replay.score = score[0].score.total;
  replay.max_combo = score[0].combo.max;
  replay.perfect_combo = score[0].combo.full;
  replay.mods = mods;
  replay.timestamp = new Date(score[0].date);

  const replayFile = replay.serializeSync();
  fs.writeFileSync(file, replayFile, data.encoding);
  */
  
  return file;
};

export default format;
