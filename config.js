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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_47_04_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjIyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTksXG4gICAgICAgIDM0LFxuICAgICAgICA3MixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMCxcbiAgICAgICAgODksXG4gICAgICAgIDEyMixcbiAgICAgICAgNzYsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOSxcbiAgICAgICAgODAsXG4gICAgICAgIDExNixcbiAgICAgICAgNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNixcbiAgICAgICAgMTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNixcbiAgICAgICAgMTksXG4gICAgICAgIDY4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDM3LFxuICAgICAgICA3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTkyLFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI2LFxuICAgICAgICA5NSxcbiAgICAgICAgMjExLFxuICAgICAgICA4MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDU3LFxuICAgICAgICAzMixcbiAgICAgICAgMTc0LFxuICAgICAgICA2NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMCxcbiAgICAgICAgMjIwLFxuICAgICAgICA5NixcbiAgICAgICAgMixcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzIsXG4gICAgICAgIDMxLFxuICAgICAgICA5OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTY2LFxuICAgICAgICA3NixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTgsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDc3LFxuICAgICAgICA2NixcbiAgICAgICAgMTI4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjEwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDcsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTUsXG4gICAgICAgIDUwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTYyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA0NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTg2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjE2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTgxLFxuICAgICAgICA0MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTUzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzksXG4gICAgICAgIDc0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjEyLFxuICAgICAgICA2MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgNixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxODksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzLFxuICAgICAgICAyMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDgxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTIzLFxuICAgICAgICA4NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjAzLFxuICAgICAgICAwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDM3LFxuICAgICAgICAyMSxcbiAgICAgICAgOTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDg5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk3LFxuICBcImFkdlNlY3JldEtleVwiOiBcImlHVmpXUHhJaVNGVXJ2QlhJOEhuOURJSGpwL3laWTBWT09JZEFXei9JUG89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImdTLTJWRVh0UlJLSld6NXhKdUpKbEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjBiNWZjNWUtOTFkYS00YzExLTkwZjAtYTkyYTc1MzU5MmNmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMSxcbiAgICAgIDk3LFxuICAgICAgNTUsXG4gICAgICA2MCxcbiAgICAgIDIwOSxcbiAgICAgIDIzLFxuICAgICAgMjI2LFxuICAgICAgMixcbiAgICAgIDk2LFxuICAgICAgMTA1LFxuICAgICAgNzAsXG4gICAgICAxNTksXG4gICAgICA2NCxcbiAgICAgIDM0LFxuICAgICAgMTI3LFxuICAgICAgMjM5LFxuICAgICAgMjM5LFxuICAgICAgMTksXG4gICAgICA0OCxcbiAgICAgIDEwN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDEsXG4gICAgICA0NSxcbiAgICAgIDI0OCxcbiAgICAgIDEzNSxcbiAgICAgIDM4LFxuICAgICAgNjQsXG4gICAgICAyMTMsXG4gICAgICAyMDQsXG4gICAgICA0OSxcbiAgICAgIDI0OSxcbiAgICAgIDYxLFxuICAgICAgMjE4LFxuICAgICAgMTk5LFxuICAgICAgNDUsXG4gICAgICAxNTEsXG4gICAgICAyMzksXG4gICAgICAxNixcbiAgICAgIDUzLFxuICAgICAgOSxcbiAgICAgIDI1NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJIS1ZDMlBBU1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjkxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDYr9uMINmF2YDZgNmE2YDZgNqp4oGwwrnCslxcblxcbuKBsFxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG5cXG7wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIgXFxu8J2QmfCdkKLwnZCD8J2QoiDwnZCM8J2QmvCdkKXwnZCi8J2QpFxcblxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDo5MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMdjYrZFVDRU5lWjFMOEdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWjNhdnRKa0FldTUxdDdvRmUwNlBpdFptNVZEdTlQVU9yMjZMZjREREtVTkNVWEI1U0FDWDAza1FsR0liS2N5VUpMUE05cXV1bGpQRXJDSXVlY2MzQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiM2MvaUJnNktpeUVjR1BwazdBbTM0N0tPTWZiNWxDUlVqYjF5SkxiTkM2aE1iKzR4N05jd3AwTkdEbE5XTFJTQnc5OHV2L2JPamxqUmd1REtTMjMzQ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjkxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NDExMjg1OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpOTFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSk5MLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUkF1Qk95RFgyODIzZ3RnVTMxaUhaYlFDMWRFZFN0ZWlxajl1OFRLeVpvMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjY5NjAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
