"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rooms = exports.matches = exports.notifications = exports.forum = exports.user = exports.users = exports.me = exports.comments = exports.scores = exports.discussions = exports.beatmap = exports.beatmaps = exports.search = exports.wiki = exports.seasonal_backgrounds = exports.changelogs = exports.news = exports.authorize = exports.login = exports.login_lazer = void 0;
const v2_1 = require("../../types/v2");
const request_1 = require("../../utility/request");
const Auth = __importStar(require("../../utility/auth"));
const request = (0, request_1.namespace)('https://osu.ppy.sh/api/v2/');
/**
 * @deprecated Since version 1.0. Will be deleted in version 3.0. Use bar instead.
 */
const login_lazer = () => {
    throw new Error("New authorization method\nhttps://github.com/cyperdark/osu-api-extended/blob/master/changes/2.1.2.md\n\n");
};
exports.login_lazer = login_lazer;
/**
 * @deprecated Since version 1.0. Will be deleted in version 3.0. Use bar instead.
 */
const login = () => {
    throw new Error("New authorization method\nhttps://github.com/cyperdark/osu-api-extended/blob/master/changes/2.1.2.md\n\n");
};
exports.login = login;
/**
 * @deprecated Since version 1.0. Will be deleted in version 3.0. Use bar instead.
 */
const authorize = () => {
    throw new Error("New authorization method\nhttps://github.com/cyperdark/osu-api-extended/blob/master/changes/2.1.2.md\n\n");
};
exports.authorize = authorize;
// News
const news = async (obj = {}) => {
    const data = await request(`news`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${Auth.cache_token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            limit: obj.limit,
            year: obj.year,
            'cursor[published_at]': obj.cursorPublished,
            'cursor[_id]': obj.cursorId,
        }
    });
    return data;
};
exports.news = news;
// Changelogs
exports.changelogs = {
    all: async (obj = {}) => {
        const data = await request(`changelog`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${Auth.cache_token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            params: obj,
        });
        return data;
    },
    get: async (stream, build) => {
        const data = await request(`changelog/${stream}/${build}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${Auth.cache_token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        });
        return data;
    },
    lookup: async (changelog, obj = {}) => {
        const data = await request(`changelog/${changelog}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${Auth.cache_token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            params: obj,
        });
        return data;
    },
};
// Seasonal backgrounds
const seasonal_backgrounds = async () => {
    const data = await request(`seasonal-backgrounds`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${Auth.cache_token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    });
    return data;
};
exports.seasonal_backgrounds = seasonal_backgrounds;
// Wiki search
const wiki = async (language, path) => {
    const data = await request(`wiki/${language}/${path}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${Auth.cache_token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    });
    return data;
};
exports.wiki = wiki;
// Search
const search = async (obj = {}) => {
    const data = await request(`search`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${Auth.cache_token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        params: obj,
    });
    return data;
};
exports.search = search;
// Beatmaps
exports.beatmaps = {
    get: async (id) => {
        const data = await request(`beatmapsets/${id}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${Auth.cache_token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
        return data;
    },
    events: async (obj = {}) => {
        const data = await request(`beatmapsets/events`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${Auth.cache_token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            params: obj,
        });
        return data;
    },
    search: async (obj = {}) => {
        const oobj = {
            q: obj.query,
            c: obj?.general,
            m: v2_1._mode.indexOf(obj?.mode),
            s: obj?.section,
            g: v2_1._genre.indexOf(obj?.genre),
            l: v2_1._language.indexOf(obj?.language),
            e: obj?.include,
            r: obj?.rank,
            nsfw: undefined,
        };
        if (!obj?.nfsw)
            oobj.nsfw = 0;
        const data = await request(`beatmapsets/search`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${Auth.cache_token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            params: oobj,
        });
        return data;
    },
};
// Beatmap
exports.beatmap = {
    get: async (id) => {
        const data = await request(`beatmaps/${id}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${Auth.cache_token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
        return data;
    },
    search: async (obj = {}) => {
        const data = await request('beatmaps/lookup', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${Auth.cache_token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            params: {
                checksum: obj.checksum,
                filename: obj.filename,
                id: obj.diff_id,
            },
        });
        return data;
    },
    scores: {
        all: async (beatmap, obj = {}) => {
            const data = await request(`beatmaps/${beatmap}/scores`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${Auth.cache_token}`,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                params: { mode: obj.mode, mods: obj.mods },
            });
            return data;
        },
        user: async (beatmap, user, obj = {}) => {
            const data = await request(`beatmaps/${beatmap}/scores/users/${user}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${Auth.cache_token}`,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                params: { mode: obj.mode, mods: obj.mods }
            });
            return data;
        },
        user_all: async (beatmap, user, mode) => {
            const data = await request(`beatmaps/${beatmap}/scores/users/${user}/all`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${Auth.cache_token}`,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                params: { mode }
            });
            return data;
        },
    },
};
// Discussions
exports.discussions = {
    all: async (obj = {}) => {
        const data = await request(`beatmapsets/discussions`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${Auth.cache_token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            params: obj,
        });
        return data;
    },
    posts: async (obj = {}) => {
        const data = await request(`beatmapsets/discussions/posts`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${Auth.cache_token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            params: obj,
        });
        return data;
    },
    votes: async (obj = {}) => {
        const data = await request(`beatmapsets/discussions/votes`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${Auth.cache_token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            params: obj,
        });
        return data;
    },
};
// Scores
exports.scores = {
    users: {
        recent: async (user, obj = {}) => {
            const data = await request(`users/${user}/scores/recent`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${Auth.cache_token}`,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                params: obj,
            });
            return data;
        },
        best: async (user, obj = {}) => {
            const data = await request(`users/${user}/scores/best`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${Auth.cache_token}`,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                params: obj,
            });
            return data;
        },
        firsts: async (user, obj = {}) => {
            const data = await request(`users/${user}/scores/firsts`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${Auth.cache_token}`,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                params: obj,
            });
            return data;
        },
        pinned: async (user, obj = {}) => {
            const data = await request(`users/${user}/scores/pinned`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${Auth.cache_token}`,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                params: obj,
            });
            return data;
        },
    },
    score: {
        get: async (mode, score_id) => {
            const data = await request(`scores/${mode}/${score_id}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${Auth.cache_token}`,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            });
            return data;
        },
        download: async (mode, score_id, file_path) => {
            const data = await (0, request_1.download)(`https://osu.ppy.sh/api/v2/scores/${mode}/${score_id}/download`, file_path, {
                headers: {
                    Authorization: `Bearer ${Auth.cache_token}`,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            });
            return data;
        },
    }
};
// Comments
exports.comments = {
    all: async (obj = {}) => {
        const data = await request(`comments`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${Auth.cache_token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            params: obj,
        });
        return data;
    },
    one: async (comment) => {
        const data = await request(`comments/${comment}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${Auth.cache_token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        });
        return data;
    },
};
// Users
exports.me = {
    data: async (mode) => {
        const data = await request(`me/${mode}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${Auth.cache_token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        });
        return data;
    },
    download_quota: async () => {
        throw new Error("Currently unavailable");
        const data = await request(`me/download-quota-check`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${Auth.cache_token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        });
        return data;
    },
    friends: async () => {
        const data = await request(`friends`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${Auth.cache_token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        });
        return data;
    }
};
const users = async (ids = []) => {
    if (ids.length == 0)
        throw new Error("Add users in list");
    const data = await request(`users`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${Auth.cache_token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        params: { ids },
    });
    return data;
};
exports.users = users;
exports.user = {
    get: async (user, mode, key) => {
        const data = await request(`users/${user}/${mode}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${Auth.cache_token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            params: { key },
        });
        return data;
    },
    activity: async (user, obj = {}) => {
        const data = await request(`users/${user}/recent_activity`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${Auth.cache_token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            params: obj,
        });
        return data;
    },
    kudosu: async (user, obj = {}) => {
        const data = await request(`users/${user}/kudosu`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${Auth.cache_token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            params: obj,
        });
        return data;
    },
    beatmaps: {
        loved: async (user, obj = {}) => {
            const data = await request(`users/${user}/beatmapsets/loved`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${Auth.cache_token}`,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                params: obj,
            });
            return data;
        },
        ranked: async (user, obj = {}) => {
            const data = await request(`users/${user}/beatmapsets/ranked`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${Auth.cache_token}`,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                params: obj,
            });
            return data;
        },
        pending: async (user, obj = {}) => {
            const data = await request(`users/${user}/beatmapsets/pending`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${Auth.cache_token}`,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                params: obj,
            });
            return data;
        },
        graveyard: async (user, obj = {}) => {
            const data = await request(`users/${user}/beatmapsets/graveyard`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${Auth.cache_token}`,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                params: obj,
            });
            return data;
        },
        favourite: async (user, obj = {}) => {
            const data = await request(`users/${user}/beatmapsets/favourite`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${Auth.cache_token}`,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                params: obj,
            });
            return data;
        },
        most_played: async (user, obj = {}) => {
            const data = await request(`users/${user}/beatmapsets/most_played`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${Auth.cache_token}`,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                params: obj,
            });
            return data;
        },
    }
};
// Forum
exports.forum = {
    topics: {
        all: async (topic, obj = {}) => {
            const data = await request(`forums/topics/${topic}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${Auth.cache_token}`,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                params: obj,
            });
            return data;
        },
    },
};
// Notifications
exports.notifications = {
    all: async (max_id) => {
        const data = await request(`notifications`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${Auth.cache_token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            params: { max_id },
        });
        return data;
    },
};
// Matches
exports.matches = {
    all: async () => {
        const data = await request(`matches`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${Auth.cache_token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        });
        return data;
    },
    one: async (match) => {
        const data = await request(`matches/${match}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${Auth.cache_token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        });
        return data;
    }
};
// Rooms
exports.rooms = {
    all: async () => {
        const data = await request(`rooms`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${Auth.cache_token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        });
        return data;
    },
    one: async (room_id) => {
        const data = await request(`rooms/${room_id}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${Auth.cache_token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        });
        return data;
    },
    leader: async (room_id) => {
        const data = await request(`rooms/${room_id}/leaderboard`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${Auth.cache_token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        });
        return data;
    }
};
//# sourceMappingURL=index.js.map