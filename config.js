const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923247116683";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGE || process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_53_04_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjE2LFxuICAgICAgICA2MixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTE5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDU1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTIsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDUzLFxuICAgICAgICA3MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2LFxuICAgICAgICA0MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTIxLFxuICAgICAgICA4NSxcbiAgICAgICAgOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDYzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDUzLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3LFxuICAgICAgICA2MixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4MixcbiAgICAgICAgNCxcbiAgICAgICAgNzksXG4gICAgICAgIDk5LFxuICAgICAgICA0NixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjksXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQsXG4gICAgICAgIDg5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNixcbiAgICAgICAgMjM3LFxuICAgICAgICA0MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTY3LFxuICAgICAgICA5MixcbiAgICAgICAgNjMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjksXG4gICAgICAgIDM3LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODUsXG4gICAgICAgIDE2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMCxcbiAgICAgICAgODUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDg4LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDgwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTk3LFxuICAgICAgICA4OSxcbiAgICAgICAgNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzLFxuICAgICAgICA4OCxcbiAgICAgICAgMzksXG4gICAgICAgIDgwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODYsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAxLFxuICAgICAgICA0NixcbiAgICAgICAgNjksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExLFxuICAgICAgICA5NixcbiAgICAgICAgMjIwLFxuICAgICAgICAzNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgODYsXG4gICAgICAgIDMwLFxuICAgICAgICA0NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDYyLFxuICAgICAgICA5OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjYsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDEsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTUyLFxuICAgICAgICA5OSxcbiAgICAgICAgODksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTY3LFxuICAgICAgICA4MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxLFxuICAgICAgICAxODUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJCOE03cGVkMFgzZlJyNGVzMEVBOU43bFlUZTdnNmdMMHhSMU5YNWdRVUFBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJTN2RRNWhXZVRpQ3gzTkRmSEJ4Zk1nXCIsXG4gIFwicGhvbmVJZFwiOiBcIjAyNWU2OTgxLTI1NjktNDVhMi1iZjc5LTAxYzhmMjZlNGVjMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDAsXG4gICAgICA0OCxcbiAgICAgIDIxMSxcbiAgICAgIDY5LFxuICAgICAgMTY1LFxuICAgICAgMTIsXG4gICAgICAyMzEsXG4gICAgICAxNDgsXG4gICAgICAyNSxcbiAgICAgIDU1LFxuICAgICAgMTE3LFxuICAgICAgMTQzLFxuICAgICAgNjYsXG4gICAgICAxODUsXG4gICAgICA1MyxcbiAgICAgIDQ5LFxuICAgICAgMjI1LFxuICAgICAgMTUsXG4gICAgICAyMjYsXG4gICAgICAxNzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc0LFxuICAgICAgMTE5LFxuICAgICAgMjMsXG4gICAgICAyMDcsXG4gICAgICAyMzYsXG4gICAgICAyMjQsXG4gICAgICAxLFxuICAgICAgMTQsXG4gICAgICAxMjEsXG4gICAgICA0OCxcbiAgICAgIDIyNyxcbiAgICAgIDEzLFxuICAgICAgMjQyLFxuICAgICAgNyxcbiAgICAgIDI0MixcbiAgICAgIDIyMSxcbiAgICAgIDE0OCxcbiAgICAgIDExNSxcbiAgICAgIDU0LFxuICAgICAgMTgyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk01UzI4WFAzXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqeKBsMK5wrJcXG5cXG7igbBcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxuXFxu8J2QhfCdkIDwnZCM8J2QjvCdkJTwnZCSIFxcbvCdkJnwnZCi8J2Qg/CdkKIg8J2QjPCdkJrwnZCl8J2QovCdkKRcXG5cXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNUDYrZFVDRVBmcjRiOEdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQ09LR09zeUY0anVKdlR1SHd6d2ZOWUpjMzRDMTY4SDJpYjZaTWtScEtRQWF1NWVkVGhkdE9oQzlpWkZOVmp2RUE1T1JoclkxeDM4T3pFemN4TEtIQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSG56bS9mNVB2RU5QaTlDcFU1NU50NVZaZVlHNkc2L3JGK0p3T0tRNE81eEcvcll3OXZOMCtFWjBuOFUzQ2RuZjVTZWlNYXJBVjU3eTM2ankveS9jRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ0MzM2Mzc4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSk56XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKTnouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI3K2NYWXVJb1BIQStCdk52MElNR1c3NHRoY1dXZGhqY09nWGhPby9RSW9jPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNjk3OCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "null",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "🎗️ضــــٓــدی مــلــٓـک✨➪03247116683👨🏻‍💻",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
