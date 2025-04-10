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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_05_04_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk3LFxuICAgICAgICA2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEsXG4gICAgICAgIDgsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDc1LFxuICAgICAgICAxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDczLFxuICAgICAgICAzMixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTYzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDksXG4gICAgICAgIDExMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA5LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMjQ1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODksXG4gICAgICAgIDY4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjAzLFxuICAgICAgICA5MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTE3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDksXG4gICAgICAgIDQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODksXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDg2LFxuICAgICAgICA5OSxcbiAgICAgICAgNTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMixcbiAgICAgICAgODUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTc1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNixcbiAgICAgICAgMjI1LFxuICAgICAgICA4LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTMwLFxuICAgICAgICA2MSxcbiAgICAgICAgODgsXG4gICAgICAgIDU1LFxuICAgICAgICA2LFxuICAgICAgICAyNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTgzLFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOCxcbiAgICAgICAgMjE3LFxuICAgICAgICA4NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDY1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjM5LFxuICAgICAgICA1NixcbiAgICAgICAgNTUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI1LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjksXG4gICAgICAgIDI3LFxuICAgICAgICA3MCxcbiAgICAgICAgODMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI4LFxuICAgICAgICA0NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ2LFxuICAgICAgICAwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEsXG4gICAgICAgIDI0LFxuICAgICAgICA3MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDM4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxODYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDksXG4gICAgICAgIDM5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDc4LFxuICAgICAgICA3MixcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA3MixcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODUsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTgxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzcsXG4gICAgICAgIDc0LFxuICAgICAgICAxODMsXG4gICAgICAgIDI2LFxuICAgICAgICAxODMsXG4gICAgICAgIDMsXG4gICAgICAgIDEyLFxuICAgICAgICA0MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDQ2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDU0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDcxLFxuICAgICAgICAxODgsXG4gICAgICAgIDI1LFxuICAgICAgICA4NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDY0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAzMSxcbiAgICAgICAgODgsXG4gICAgICAgIDIsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTksXG4gICAgICAgIDE2NyxcbiAgICAgICAgODYsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDksXG4gICAgICAgIDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDc0LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlVNamtFUWQyL29DQXFHaEFuVCs0M2NZSTFXQm9lM1hkZ1V2ZzYwcHlyZjQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInFLb1lpTy1BU2dXZy1zVWtNY2VNcHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWQwZDE0YTktN2JmMC00YmJiLWFkOWUtNzNkNTk1Y2YzNTkwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIsXG4gICAgICA2MyxcbiAgICAgIDIwNCxcbiAgICAgIDIwMixcbiAgICAgIDgsXG4gICAgICAzMyxcbiAgICAgIDkzLFxuICAgICAgMTI3LFxuICAgICAgMTYsXG4gICAgICAxMDAsXG4gICAgICA5NCxcbiAgICAgIDIwLFxuICAgICAgMjU0LFxuICAgICAgMTYwLFxuICAgICAgMjA0LFxuICAgICAgMjUwLFxuICAgICAgMTQyLFxuICAgICAgMTA4LFxuICAgICAgMTU4LFxuICAgICAgMTAwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NyxcbiAgICAgIDE0MixcbiAgICAgIDIsXG4gICAgICAxMzMsXG4gICAgICAxNjMsXG4gICAgICA0MCxcbiAgICAgIDUzLFxuICAgICAgMjIzLFxuICAgICAgMTk3LFxuICAgICAgMTYwLFxuICAgICAgNjgsXG4gICAgICA4NyxcbiAgICAgIDE5NCxcbiAgICAgIDk5LFxuICAgICAgNTYsXG4gICAgICAxNzIsXG4gICAgICAxMDcsXG4gICAgICA1NyxcbiAgICAgIDE3NixcbiAgICAgIDIxMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3OFRFTFlEQlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNiv24wg2YXZgNmA2YTZgNmA2qnigbDCucKyXFxuXFxu4oGwXFxuwrNcXG7CslxcbuKBtFxcbuKBt1xcbsK5XFxuwrlcXG7igbZcXG7igbZcXG7igbhcXG7Cs1xcblxcblxcblxcbvCdkIXwnZCA8J2QjPCdkI7wnZCU8J2QkiBcXG7wnZCZ8J2QovCdkIPwnZCiIPCdkIzwnZCa8J2QpfCdkKLwnZCkXFxuXFxuXFxuXFxuXFxuXFxuXFxuPDNcIixcbiAgICBcImxpZFwiOiBcIjM3NTQyODYyODMxNjc0OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTUw2K2RVQ0VLdUUzNzhHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImRpNGtzYVpwMXUyNFFTZytIMjRUMDR5M1NhZjBRaTJiZ2lUZ1dGWnJMcXA4cFEvSkl6TFZFMnhpZXpwOGphMWsrMVc5YkxhUVgvNXgyK28zSWJPQUF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlpyTzEvUlc5OHVocW43SWdHb25Wb2Fmd2hYZmlBdjRsWXd5Nk43UjhTQml4TTZISGRZQlZzanpYNk1zVTErcDZ4cDN0VXB4aU9HMG9oRnVsNGtDbEJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4MzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NDI5MDM1MVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
