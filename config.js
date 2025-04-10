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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_51_04_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTU3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDQzLFxuICAgICAgICA5MixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTMzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjE5LFxuICAgICAgICA0MixcbiAgICAgICAgMTEzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM2LFxuICAgICAgICA5NSxcbiAgICAgICAgMjI5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDg3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjMwLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDczLFxuICAgICAgICAzNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc0LFxuICAgICAgICA2MixcbiAgICAgICAgNzUsXG4gICAgICAgIDg4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTAxLFxuICAgICAgICA0NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyMCxcbiAgICAgICAgNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNSxcbiAgICAgICAgMTAwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDAsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDg5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDcsXG4gICAgICAgIDE5LFxuICAgICAgICAzNixcbiAgICAgICAgOTgsXG4gICAgICAgIDI3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTksXG4gICAgICAgIDI1MixcbiAgICAgICAgMixcbiAgICAgICAgNjMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjksXG4gICAgICAgIDI4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDc5LFxuICAgICAgICA1MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDU4LFxuICAgICAgICAxODYsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDcwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDkyLFxuICAgICAgICA1MyxcbiAgICAgICAgODIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDMsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDQxLFxuICAgICAgICA0NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM3LFxuICAgICAgICA3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDAsXG4gICAgICAgIDIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxLFxuICAgICAgICA4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjksXG4gICAgICAgIDIwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTY1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOCxcbiAgICAgICAgODMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAzMixcbiAgICAgICAgMjQwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJWSm04NFpVenR2ZGIvbFl5RVF5dWNQcWpLTm9ITnVKUXIvcEpLVDBseHFzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIyQUF3M1JWSlFjLWxVV0tHN3lkeUZnXCIsXG4gIFwicGhvbmVJZFwiOiBcImNjNzNmMzE1LWMwMTEtNDcxZS04ZmY2LWFmYmI3ZmZkZTIwOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NixcbiAgICAgIDE0OSxcbiAgICAgIDE4MSxcbiAgICAgIDY1LFxuICAgICAgMTMxLFxuICAgICAgNDksXG4gICAgICAyMjMsXG4gICAgICAxNixcbiAgICAgIDM2LFxuICAgICAgNyxcbiAgICAgIDI0NyxcbiAgICAgIDE3MCxcbiAgICAgIDQ3LFxuICAgICAgMTc1LFxuICAgICAgMjEzLFxuICAgICAgMTc5LFxuICAgICAgMTM3LFxuICAgICAgMjAyLFxuICAgICAgMjIwLFxuICAgICAgMTgyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg3LFxuICAgICAgMTgwLFxuICAgICAgMTM3LFxuICAgICAgNjEsXG4gICAgICAxNzEsXG4gICAgICAxOTQsXG4gICAgICA3MCxcbiAgICAgIDIxMyxcbiAgICAgIDY1LFxuICAgICAgMjE1LFxuICAgICAgMTk2LFxuICAgICAgMjM0LFxuICAgICAgMTA0LFxuICAgICAgMjM3LFxuICAgICAgMjA1LFxuICAgICAgMTQ2LFxuICAgICAgMjI4LFxuICAgICAgMjA4LFxuICAgICAgMTgzLFxuICAgICAgMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRFFCM0JaQU5cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4MzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDYr9uMINmF2YDZgNmE2YDZgNqp4oGwwrnCslxcblxcbuKBsFxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG5cXG7wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIgXFxu8J2QmfCdkKLwnZCD8J2QoiDwnZCM8J2QmvCdkKXwnZCi8J2QpFxcblxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01MNitkVUNFUGJ0Mzc4R0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHpsbVFCYzBTT1FKM05tVXRxVExzTm5TNVNyTEhFbGpVYUhiZFRoNmNEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJEamtlVEdXaGJmZlNNbCtST1NRV1pzdU43bnNHaklHN0IwWk1uK2gvWUVBOGwyUmwyemh2aEg2NmxVZ282K1BaNWZlamJWSVBMYm9XVVdPNVNId0lBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJFbUhzRVZxS0cvdWdDcXgwVFRFNE9VSGFIY0FRYUFaYnplOWFKcGRhZUw5WThqeThxMnVxTS9EUC9NUFlzQnIrQWQzcHY0OVRRV0Q1aUQzZmZKWG9nZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDcxMTY2ODM6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDQzMDM4NjUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKTnlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpOeS5qc29uIjogIntcImtleURhdGFcIjpcImNSUFFleTErRU1yVmJiUzdYbnhXLzJPY21yUExWQUdKSHlVTE54M1lhaUE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI2OTc4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDQyOTAzNzc4MDNcIn0iCn0="  // PUT your SESSION_ID 


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
