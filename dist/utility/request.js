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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.namespace = exports.download = exports.request = void 0;
const auth = __importStar(require("../utility/auth"));
const https_1 = __importDefault(require("https"));
const fs_1 = __importDefault(require("fs"));
const o = (obj) => {
    let params = '';
    for (const i in obj) {
        if (obj[i] == undefined)
            continue;
        if (typeof obj[i] == 'object')
            obj[i].filter((d) => params += `${i}[]=${d}&`);
        else if (typeof obj[i] == 'number' && obj[i] > 0)
            params += `${i}=${obj[i]}&`;
        else if (typeof obj[i] == 'string')
            params += `${i}=${obj[i]}&`;
    }
    ;
    return params.slice(0, params.length - 1);
};
/**
 * Executes an HTTP request
 * @param {string} url The url
 * @returns {Promise<any>} The response
 */
const request = (url, { method = "GET", headers, data, params } = {}) => new Promise(async (res, rej) => {
    if (url.includes('https://osu.ppy.sh/api/v2')) {
        await auth.expired();
        headers.Authorization = `Bearer ${auth.cache_token}`;
    }
    ;
    // console.log('\n', url, method, headers, data, params, '\n'); // debug too
    const req = https_1.default.request(url + (o(params) ? '?' + o(params) : ''), { method, headers }, r => {
        let data = '';
        r.on('data', (chunk) => data += chunk);
        r.on('end', async () => {
            if (/^application\/json/.test(r.headers['content-type']))
                try {
                    const prs = JSON.parse(data);
                    if (prs.authentication == 'basic') {
                        auth.set_expire(0);
                        auth.set_token('');
                        const again = await (0, exports.request)(url, { method, headers, data, params });
                        return res(again);
                    }
                    ;
                    return res(prs);
                }
                catch (err) {
                    console.log(`JSON Parse on content of type ${r.headers['content-type']} failed.\nError: ${err}\nData: ${data}`);
                }
            res(data);
        });
    }).on('error', rej);
    if (data)
        req.write(data);
    req.end();
});
exports.request = request;
/**
 * Executes an HTTP request
 * @param {string | URL} url The url
 * @param {string} dest The file destination
 * @returns {Promise<any>} The response
 */
const download = (url, dest, { headers, data, params } = {}) => new Promise((res, rej) => {
    const file = fs_1.default.createWriteStream(dest);
    const req = https_1.default.get(url + (params ? '?' + o(params) : ''), { method: 'GET', headers }, r => {
        r.pipe(file);
        file.on('finish', () => {
            file.close();
            res(dest);
        });
    }).on('error', (err) => {
        fs_1.default.unlinkSync(dest);
        rej(err);
    });
    if (data)
        req.write(data);
    req.end();
});
exports.download = download;
/**
 * Makes a namespace
 * @param {string} url The namespace url
 * @param {{ query?: string }} [params] Options ig
 * @returns {(params: string, { query: string }) => Promise<any>} The function that does the reqs
 */
const namespace = (url, { query } = {}) => {
    return (path, params) => (0, exports.request)(url + path, params);
};
exports.namespace = namespace;
//# sourceMappingURL=request.js.map