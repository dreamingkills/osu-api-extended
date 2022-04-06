"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorize = exports.login = exports.login_lazer = exports.expired = exports.set_token = exports.set_expire = exports.isLogin = exports.expire = exports.cache_token = void 0;
const request_1 = require("../utility/request");
const readline_1 = __importDefault(require("readline"));
const open_1 = __importDefault(require("open"));
exports.cache_token = '';
exports.expire = 0;
const credentials = {
    type: 0,
    username: '',
    password: '',
    clientId: 0,
    clientSecret: '',
    redirect_uri: '',
};
const save_credentials = (type, obj) => {
    if (type == 1) {
        credentials.type = 1;
        credentials.username = obj.username;
        credentials.password = obj.password;
    }
    ;
    if (type == 2) {
        credentials.type = 2;
        credentials.clientId = obj.clientId;
        credentials.clientSecret = obj.clientSecret;
    }
    ;
    if (type == 3) {
        credentials.type = 3;
        credentials.clientId = obj.clientId;
        credentials.clientSecret = obj.clientSecret;
        credentials.redirect_uri = obj.redirect_uri;
    }
    ;
};
const sleep = (ms) => new Promise(r => setTimeout(r, ms));
const isLogin = async () => {
    const xpire = await (0, exports.expired)();
    if (exports.cache_token != '' && xpire)
        return true;
    return false;
};
exports.isLogin = isLogin;
const isInitial = () => exports.cache_token != '' ? true : false;
const set_expire = (v) => exports.expire = v;
exports.set_expire = set_expire;
const set_token = (v) => exports.cache_token = v;
exports.set_token = set_token;
const expired = async () => {
    const date = new Date();
    const date2 = new Date(exports.expire * 1000);
    const unix = Math.floor(date.getTime() / 1000);
    // console.log(10000, 'expired', credentials.type, (expire > 0 && unix < expire), unix, expire, date.toISOString().slice(0, 10), date2.toISOString().slice(0, 10)); // debug thing
    if ((exports.expire > 0 && unix < exports.expire))
        return true;
    await sleep(1000);
    await re_login();
    return false;
};
exports.expired = expired;
const re_login = async () => {
    if (credentials.type == 1)
        await (0, exports.login_lazer)(credentials.username, credentials.password);
    if (credentials.type == 2)
        await (0, exports.login)(credentials.clientId, credentials.clientSecret);
    if (credentials.type == 3)
        await (0, exports.authorize)(credentials.clientId, credentials.clientSecret, credentials.redirect_uri);
    return true;
};
const login_lazer = async (username, password) => {
    if (!isInitial())
        save_credentials(1, { username, password });
    const { access_token, expires_in } = await (0, request_1.request)('https://osu.ppy.sh/oauth/token', {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        data: JSON.stringify({
            username,
            password,
            grant_type: "password",
            client_id: 5,
            client_secret: 'FGc9GAtyHzeQDshWP5Ah7dega8hJACAJpQtw6OXk',
            scope: "*"
        })
    });
    const date = new Date();
    exports.cache_token = access_token;
    (0, exports.set_expire)(Math.floor(date.getTime() / 1000) + expires_in);
    return { access_token, expires_in };
};
exports.login_lazer = login_lazer;
const login = async (clientId, clientSecret) => {
    if (!isInitial())
        save_credentials(2, { clientId, clientSecret });
    const { access_token, expires_in } = await (0, request_1.request)('https://osu.ppy.sh/oauth/token', {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        data: JSON.stringify({
            grant_type: 'client_credentials',
            client_id: clientId,
            client_secret: clientSecret,
            scope: 'public',
            code: 'code',
        })
    });
    const date = new Date();
    exports.cache_token = access_token;
    (0, exports.set_expire)(Math.floor(date.getTime() / 1000) + expires_in);
    return { access_token, expires_in };
};
exports.login = login;
const authorize = async (clientId, clientSecret, redirect_uri, scope, state) => {
    if (!isInitial())
        save_credentials(3, { clientId, clientSecret, redirect_uri });
    const cl = readline_1.default.createInterface(process.stdin, process.stdout);
    const question = (q) => new Promise((res, rej) => cl.question(q + ': ', (answer) => res(answer)));
    await (0, open_1.default)(`https://osu.ppy.sh/oauth/authorize?client_id=${clientId}&redirect_uri=${redirect_uri}&response_type=code&scope=friends.read%20identify%20public`);
    const code = await question('Paste code here');
    const { access_token, expires_in } = await (0, request_1.request)('https://osu.ppy.sh/oauth/token', {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        data: JSON.stringify({
            grant_type: 'authorization_code',
            client_id: clientId,
            client_secret: clientSecret,
            redirect_uri,
            code,
        })
    });
    const date = new Date();
    exports.cache_token = access_token;
    (0, exports.set_expire)(Math.floor(date.getTime() / 1000) + expires_in);
    return { access_token, expires_in };
};
exports.authorize = authorize;
//# sourceMappingURL=auth.js.map