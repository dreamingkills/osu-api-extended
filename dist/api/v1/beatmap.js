"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const languages = ['any', 'other', 'english', 'japanese', 'chinese', 'instrumental', 'korean', 'french', 'german', 'swedish', 'italian'];
const genres = ['any', 'unspecified', 'video game', 'anime', 'rock', 'pop', 'other', 'novelty', 'other', 'hip hop', 'electronic'];
const modes = ['std', 'taiko', 'ctb', 'mania'];
const status_name = (id) => {
    switch (id) {
        case -2:
            return 'graveyard';
        case -1:
            return 'WIP';
        case 0:
            return 'pending';
        case 1:
            return 'ranked';
        case 2:
            return 'approved';
        case 3:
            return 'qualified';
        case 4:
            return 'loved';
        default:
            return 'undefined';
    }
};
const format = (data) => {
    const info = {
        id: {
            set: +data[0].beatmapset_id,
            diff: +data[0].beatmap_id,
        },
        date: {
            submit: data[0].submit_date,
            approved: data[0].approved_date,
            update: data[0].last_update,
        },
        metadata: {
            artist: {
                original: data[0].artist,
                unicode: data[0].artist_unicode,
            },
            title: {
                original: data[0].title,
                unicode: data[0].title_unicode,
            },
            creator: {
                id: +data[0].creator_id,
                name: data[0].creator,
            },
            favs: +data[0].favourite_count,
            rating: parseFloat(Number(data[0].rating).toFixed(2)),
            source: data[0].source,
            genre_id: {
                id: +data[0].genre_id,
                name: genres[+data[0].genre_id],
            },
            language_id: {
                id: +data[0].language_id,
                name: languages[+data[0].genre_id],
            },
            tags: data[0].tags,
        },
        status: {
            id: +data[0].approved,
            name: status_name(+data[0].approved),
        },
        difficulties: [],
        misc: {
            download_unavailable: !!data[0].download_unavailable,
            audio_unavailable: !!data[0].audio_unavailable,
            storyboard: !!data[0].storyboard,
            video: !!data[0].video,
            packs: data[0].packs,
            bg: {
                full: `https://assets.ppy.sh/beatmaps/${data[0].beatmapset_id}/covers/fullsize.jpg`,
                raw: `https://assets.ppy.sh/beatmaps/${data[0].beatmapset_id}/covers/raw.jpg`,
                slim: {
                    1: `https://assets.ppy.sh/beatmaps/${data[0].beatmapset_id}/covers/slimcover.jpg`,
                    2: `https://assets.ppy.sh/beatmaps/${data[0].beatmapset_id}/covers/slimcover@2x.jpg`,
                },
                cover: {
                    1: `https://assets.ppy.sh/beatmaps/${data[0].beatmapset_id}/covers/cover.jpg`,
                    2: `https://assets.ppy.sh/beatmaps/${data[0].beatmapset_id}/covers/cover@2x.jpg`,
                },
                card: {
                    1: `https://assets.ppy.sh/beatmaps/${data[0].beatmapset_id}/covers/card.jpg`,
                    2: `https://assets.ppy.sh/beatmaps/${data[0].beatmapset_id}/covers/card@2x.jpg`,
                },
                list: {
                    1: `https://assets.ppy.sh/beatmaps/${data[0].beatmapset_id}/covers/list.jpg`,
                    2: `https://assets.ppy.sh/beatmaps/${data[0].beatmapset_id}/covers/list@2x.jpg`,
                },
            },
        },
    };
    for (let i = 0; i < data.length; i++) {
        const d = data[i];
        const obj = {
            id: +d.beatmap_id,
            diff: d.version,
            mode: {
                id: +d.mode,
                name: modes[+d.mode],
            },
            file_md5: d.file_md5,
            stats: {
                star: {
                    pure: parseFloat(Number(d.difficultyrating).toFixed(2)),
                    aim: parseFloat(Number(d.diff_aim).toFixed(2)),
                    speed: parseFloat(Number(d.diff_speed).toFixed(2)),
                },
                ar: parseFloat(Number(d.diff_approach).toFixed(2)),
                od: parseFloat(Number(d.diff_overall).toFixed(2)),
                cs: parseFloat(Number(d.diff_size).toFixed(2)),
                hp: parseFloat(Number(d.diff_drain).toFixed(2)),
                bpm: {
                    avg: +d.bpm,
                },
                combo: +d.max_combo,
                time: {
                    full: +d.total_length,
                    drain: +d.hit_length,
                },
                objects: {
                    all: +d.count_normal + +d.count_slider + +d.count_spinner,
                    circles: +d.count_normal,
                    sliders: +d.count_slider,
                    spinners: +d.count_spinner,
                },
            },
            plays: +d.playcount,
            pass: +d.passcount,
        };
        info.difficulties.push(obj);
    }
    ;
    return info;
};
exports.default = format;
//# sourceMappingURL=beatmap.js.map