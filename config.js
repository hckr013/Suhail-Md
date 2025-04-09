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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_32_04_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDk0LFxuICAgICAgICA5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTUyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjAzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAzMixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTYxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDksXG4gICAgICAgIDc3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDk2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTA1LFxuICAgICAgICA3MixcbiAgICAgICAgMzEsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDkzLFxuICAgICAgICA2MixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDcxLFxuICAgICAgICA1NixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNSxcbiAgICAgICAgMjUwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTQzLFxuICAgICAgICA2MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDg5LFxuICAgICAgICAyMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODcsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzksXG4gICAgICAgIDg1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDM5LFxuICAgICAgICA1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwLFxuICAgICAgICA1NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTksXG4gICAgICAgIDYyLFxuICAgICAgICA4MixcbiAgICAgICAgNzYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTIzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzksXG4gICAgICAgIDExLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTEzLFxuICAgICAgICA2NyxcbiAgICAgICAgOTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQwLFxuICAgICAgICA1N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY3LFxuICAgICAgICAxODMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDksXG4gICAgICAgIDc5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTUyLFxuICAgICAgICA0MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODMsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODcsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTcxLFxuICAgICAgICA3LFxuICAgICAgICAxODQsXG4gICAgICAgIDk1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTA2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlN0aHFXVXRzWUVFaUdYY0RyRnVHZDNkdzZaWFpTNUhqbHN6SzNXcm51aTA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjJDa19hQS15UWRpLWdoY0JsMnJLOXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjEwYzQ1NjQtMjZhNi00NmZhLWFmZTItNGNlOWJmMDE1ZDdhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkyLFxuICAgICAgMTQ4LFxuICAgICAgMjA5LFxuICAgICAgMTcwLFxuICAgICAgODIsXG4gICAgICAyMDQsXG4gICAgICA5MixcbiAgICAgIDUwLFxuICAgICAgMjIzLFxuICAgICAgODksXG4gICAgICAxNCxcbiAgICAgIDE2OSxcbiAgICAgIDI0OCxcbiAgICAgIDAsXG4gICAgICA2MyxcbiAgICAgIDEyMixcbiAgICAgIDQ3LFxuICAgICAgMTQ3LFxuICAgICAgMjI5LFxuICAgICAgODRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAwLFxuICAgICAgNDcsXG4gICAgICAxMTEsXG4gICAgICA2MixcbiAgICAgIDUsXG4gICAgICA2NCxcbiAgICAgIDQsXG4gICAgICAxNjIsXG4gICAgICAyNTEsXG4gICAgICAxOTEsXG4gICAgICAxNDQsXG4gICAgICAxMjMsXG4gICAgICAxODEsXG4gICAgICAxMjksXG4gICAgICAxNjMsXG4gICAgICA1MSxcbiAgICAgIDg2LFxuICAgICAgMSxcbiAgICAgIDIzOSxcbiAgICAgIDIzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJEMUpDTkhBTVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjkzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDYr9uMINmF2YDZgNmE2YDZgNqp4oGwwrnCslxcblxcbuKBsFxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG5cXG7wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIgXFxu8J2QmfCdkKLwnZCD8J2QoiDwnZCM8J2QmvCdkKXwnZCi8J2QpFxcblxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDo5M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMMzYrZFVDRUwyNDE3OEdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYjRsa3BtMmxpeUFxT2orVmFSdDkwS2thY0dwWWNjdm5DVmZORCtxMC9qalhvU1A0NjBkdTNFV0cxVTYzYW00ZnEwamtvRVYzM2pEeXZkSU50RUZCQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwid1pxMnJreEE5K2dCWHJ2ZzloaHUxcERjK3JGT2VveXZ2T09BQVcyU1NhU2U1NExoYlVwdWExeDQ4VmViWlo3dThmNkQrL2VPZ0F3Q1J2SldEZG0xQ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjkzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NDE2NTk1MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpOTFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSk5MLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUkF1Qk95RFgyODIzZ3RnVTMxaUhaYlFDMWRFZFN0ZWlxajl1OFRLeVpvMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjY5NjAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "null",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "🎗️ضــــٓــدی مــلــٓـک✨➪03247116683👨🏻‍💻",
  packname: process.env.PACK_NAME || "",
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
