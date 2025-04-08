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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_27_04_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDgzLFxuICAgICAgICA2MixcbiAgICAgICAgMTY1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDYwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTExLFxuICAgICAgICA5MSxcbiAgICAgICAgMTM3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjM1LFxuICAgICAgICA3MixcbiAgICAgICAgMTc2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjMxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTM4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAzMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDcyLFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzksXG4gICAgICAgIDk5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3LFxuICAgICAgICA2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQxLFxuICAgICAgICA1NixcbiAgICAgICAgNzgsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDUsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjgsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODMsXG4gICAgICAgIDQyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAzNixcbiAgICAgICAgMjU1LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTgwLFxuICAgICAgICA0NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE2LFxuICAgICAgICA2NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDU1LFxuICAgICAgICA1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDYyLFxuICAgICAgICA4LFxuICAgICAgICAxODEsXG4gICAgICAgIDcwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDExMixcbiAgICAgICAgOTMsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTg3LFxuICAgICAgICA2OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDY4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzLFxuICAgICAgICAyNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNixcbiAgICAgICAgNTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwLFxuICAgICAgICA5MixcbiAgICAgICAgNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTYxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4LFxuICAgICAgICA3NixcbiAgICAgICAgMTgzLFxuICAgICAgICAzNixcbiAgICAgICAgMjksXG4gICAgICAgIDU2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTkxLFxuICAgICAgICA3MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZkpGTFdtV3BtU3dCNGw3UHc0Y0V5MFRJdnB5LzQ3bFplZk8rd3NDZHpPaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMyLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMyLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNEcyOUFtbW1TRWE4Q2d5d2dMamk1d1wiLFxuICBcInBob25lSWRcIjogXCJlZDA5NWM5My04ZWMxLTQwYjEtYTZkMi0zM2ZkMWUwOTQ3N2NcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjQsXG4gICAgICAyMjIsXG4gICAgICAxMDAsXG4gICAgICAxNzUsXG4gICAgICAxLFxuICAgICAgMjE2LFxuICAgICAgMjQzLFxuICAgICAgNzQsXG4gICAgICAxMDQsXG4gICAgICAyNTEsXG4gICAgICA5OCxcbiAgICAgIDE3MCxcbiAgICAgIDMyLFxuICAgICAgMjMxLFxuICAgICAgMjA0LFxuICAgICAgMjMsXG4gICAgICA3MyxcbiAgICAgIDE4NSxcbiAgICAgIDEyOCxcbiAgICAgIDk3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgzLFxuICAgICAgMjAyLFxuICAgICAgMjQ2LFxuICAgICAgMjAyLFxuICAgICAgMTY4LFxuICAgICAgMjE0LFxuICAgICAgNjgsXG4gICAgICAyMzEsXG4gICAgICAxNzEsXG4gICAgICA0NixcbiAgICAgIDEyNixcbiAgICAgIDE1MyxcbiAgICAgIDE2OSxcbiAgICAgIDkyLFxuICAgICAgMTg5LFxuICAgICAgMTU0LFxuICAgICAgMjE2LFxuICAgICAgMjAzLFxuICAgICAgNTksXG4gICAgICAyMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRzRXMUU4UUZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4Mzo5MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqeKBsMK5wrJcXG5cXG7igbBcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxuXFxu8J2QhfCdkIDwnZCM8J2QjvCdkJTwnZCSIFxcbvCdkJnwnZCi8J2Qg/CdkKIg8J2QjPCdkJrwnZCl8J2QovCdkKRcXG5cXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6OTJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHo2K2RVQ0VNcmsxTDhHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInZjR004eTRFdVdDZ0lqdjdreDgvdC9iQmhicHo5S3RXMm1VZTJCMTBZbVpFanJnajkwQXVaall0a3BhTHRYSmhMcHBSaEZ0RHRnRngyenhTWnpQRUFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlEwamhCUjZReWtaUmxiQXZUYlBvNElINUwybkxKQ3FaUkwwZVJLLy92Wi9wWlhzYXFGWnA1Ni9ZRkNkZlF4cW12NHlDcnh1NTZZTjZocUh0OWFNbmlBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4Mzo5MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDQxMjI0NDZcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
