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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_45_04_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjIwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTQyLFxuICAgICAgICA0MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI0LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgNjAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTA3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODcsXG4gICAgICAgIDY2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTEyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA2NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTQsXG4gICAgICAgIDk3LFxuICAgICAgICA0NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjM1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDg1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODEsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1LFxuICAgICAgICA4NixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDgsXG4gICAgICAgIDU5LFxuICAgICAgICA0NixcbiAgICAgICAgMTU2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODksXG4gICAgICAgIDcxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDYyLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzksXG4gICAgICAgIDExMyxcbiAgICAgICAgODIsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTIzLFxuICAgICAgICA2OCxcbiAgICAgICAgMixcbiAgICAgICAgNTEsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjU0LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTM4LFxuICAgICAgICA4OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTk5LFxuICAgICAgICA3NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjM4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDc4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAzNixcbiAgICAgICAgMjI2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTA0LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJvVmRWQ1dCWE4vbkk1RmxPL0ZZTWRCUmRHNW1LSisrbnZhNkszZXBGSFlRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJwaGhiR0NleVNwcVZlU0dTUEhMTFBBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjE0Y2U0ODhlLWIzYTUtNDZhOC04YzA1LTE1MTY3M2U5ZDBkOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDIsXG4gICAgICAxOTgsXG4gICAgICA1OCxcbiAgICAgIDM0LFxuICAgICAgMTMzLFxuICAgICAgMTMyLFxuICAgICAgNTUsXG4gICAgICA5OCxcbiAgICAgIDIxMixcbiAgICAgIDE3MCxcbiAgICAgIDE2NCxcbiAgICAgIDIxNyxcbiAgICAgIDE4MyxcbiAgICAgIDE4MSxcbiAgICAgIDI5LFxuICAgICAgMjQ1LFxuICAgICAgMTgyLFxuICAgICAgMTExLFxuICAgICAgMSxcbiAgICAgIDIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY1LFxuICAgICAgMTU3LFxuICAgICAgMjUwLFxuICAgICAgMTI2LFxuICAgICAgMjE1LFxuICAgICAgMjA4LFxuICAgICAgMTgsXG4gICAgICAxMDYsXG4gICAgICAxMDIsXG4gICAgICAxMTEsXG4gICAgICAxNSxcbiAgICAgIDE4MixcbiAgICAgIDE2MyxcbiAgICAgIDE2LFxuICAgICAgMTY4LFxuICAgICAgMTg3LFxuICAgICAgMTIzLFxuICAgICAgMTY2LFxuICAgICAgMjgsXG4gICAgICAyMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVFpKN0gxU1RcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4Mzo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDYr9uMINmF2YDZgNmE2YDZgNqp4oGwwrnCslxcblxcbuKBsFxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG5cXG7wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIgXFxu8J2QmfCdkKLwnZCD8J2QoiDwnZCM8J2QmvCdkKXwnZCi8J2QpFxcblxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01UNitkVUNFSzdKNDc4R0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHpsbVFCYzBTT1FKM05tVXRxVExzTm5TNVNyTEhFbGpVYUhiZFRoNmNEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJhTy96UlJaV3RieWUrZXpsTllqa0JrOXhLaGdoRjd5ZUIrRGhlZkw4SXZHTjdmWm1vRzM4NWl1RTRlREEySzVJTlREOWROeHRWMGVSMnlxeU9ldTRBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ2dVhWYVVPOTRFV0J5dVVSOUNHbGxTSmViaW1WZGR2OTByTnY4eG1qbWlCVkovRTdGV2xqUHJTZXcwbWhXc3BVUFVqaGNWcmFsVkljTFpRTlF2cDFDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDcxMTY2ODM6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDQzNjQ3MjIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKTnpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpOei5qc29uIjogIntcImtleURhdGFcIjpcIjcrY1hZdUlvUEhBK0J2TnYwSU1HVzc0dGhjV1dkaGpjT2dYaE9vL1FJb2M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI2OTc4LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
