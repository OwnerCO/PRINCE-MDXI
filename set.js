
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;



 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MDX~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNERmMnI3LzUrc3FWbnVqdUU2aStKaW5PbnB0MTdrV2Y0dFNtSFE0NDJYWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTURQeFQreklZejY3NTc2ZnF5QWw2b3Z3SnBsU1pqc3BRdnJUMzUvQTJIST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRT2ZMNzJmOXVqUW9xU2l3OHFuK2VKTHdralFCT1dDb0VTaloyNWlnb25RPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRZGMwVVF5Rjd0a2RGRklMWGYvZVB1WjQrY0gzZ1hxSmZpclplK0xoYlFzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndOYUFqbUU4azcvdStFa1hIK2RwYVAreWFiaHdkTTFGYVY0c2JuMU8ybUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InN0VE9LWmwzM3k4OGptUkRQTVpDTmttQ1BYa3lkUFFuZWQ3L1EwcE9nQmc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUVCRmRDcHNDSEhWWHE4NllDdWZ5dFVXRGM0OXdVb0o3Q3prYXpDbUIwbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1hBbjFqTUc0RWRML2JXelhSeDA3VC94U2tWb09EVm1NR0d3QjdVcUkxQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhMSG5MaHRjVVA3dU0zNm5pZzdRbXh5V2ViRlNOM1hXQ3F1Smo0emo4WXdTYkhsQ3A1QmNVby9aRHN1MU4rT1l4UDE1Y2NyaG9IcXdPNE8zZFh5Z2d3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAyLCJhZHZTZWNyZXRLZXkiOiJ1M2UxRUx2MzBXTGVUZTM4dStmWFdRSnJlREZMK1RSRlhCWVRjOHBXbUdjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJRSFZrbDBueFJVU1NORXlxOXlMekVnIiwicGhvbmVJZCI6ImU1MDg5OGY0LTE5ZTMtNGQyYi1iNDQ1LTRhYzlhMWE5OTE4MyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkRHg1NjdETGdCV05sSG5KL28rUHlUb1RwZXM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWHNVZGZwQW1Mbmp3Uk5xMFVKRzA5aklqNVFBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjMyUzNSVkMxIiwibWUiOnsiaWQiOiI1MTk2MDI4NTkzMDo4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlN5c3NvbHV0aW9ucyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS25rMlAwREVOekg4c0FHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiemdYT1dialIzT2ZNamVYODJ5YkRhd2pNUW5CbERmNlN0Qi9sOStaMHNEcz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSUNIVmRaQmdWTjBpbVppSXFGMkhpWENZNEJ4OUtwcmFBYWFyazUwM3RYM1htUk1uTjJzenpwMUFLRUNiTXAyU0V0SEFiaVJnb0N4Uk5QeWRDM1ZsREE9PSIsImRldmljZVNpZ25hdHVyZSI6ImgzeFpVTTdsK1VPekVCaEFTK1o4YjVNVVpVZnNBL2U2dXFCZU1yV1BOaTlLMEQ3OUNUc2hlcmw0S2tUWWNwSy9pL083SlNsSVdRVytxMnhiU3I0MGl3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNTE5NjAyODU5MzA6OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjNEZ6bG00MGR6bnpJM2wvTnNtdzJzSXpFSndaUTMra3JRZjVmZm1kTEE3In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ2NzA3NDM0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU84TyJ9", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "51960285930", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by SysSolutions-mdx", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "51960285930", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "SYSSOLUTIONS", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "SYSSOLUTIONS 𝐓𝐄𝐂𝐇", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "SYSSOLUTIONS 𝐓𝐄𝐂𝐇", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "true", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "true",
ANTIBAD: process.env.ANTIBAD || "true",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 Auto Call Reject Mode Active. 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "SYSSOLUTIONS 𝐌𝐃𝐗", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://cdn.giftedtech.web.id/file/MrbYl.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "true",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || " powered by syssolutions",
CHAT_BOT: process.env.CHAT_BOT || "true", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "true",
GOODBYE: process.env.GOODBYE || "true",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "America/Lima", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
