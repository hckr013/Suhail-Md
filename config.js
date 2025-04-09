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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_05_04_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA4NyxcbiAgICAgICAgNTksXG4gICAgICAgIDE2MixcbiAgICAgICAgNzAsXG4gICAgICAgIDI3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDkwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTA3LFxuICAgICAgICA0MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjksXG4gICAgICAgIDg0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTE4LFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxODEsXG4gICAgICAgIDM0LFxuICAgICAgICA2MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMixcbiAgICAgICAgODUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzQsXG4gICAgICAgIDUsXG4gICAgICAgIDUwLFxuICAgICAgICA2NSxcbiAgICAgICAgODQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjEzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjQxLFxuICAgICAgICA1NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTksXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODEsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDgsXG4gICAgICAgIDIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDU3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDM4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTAwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0NixcbiAgICAgICAgOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDMxLFxuICAgICAgICAzOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxLFxuICAgICAgICAxODgsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDYyLFxuICAgICAgICA1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTcxLFxuICAgICAgICA3MixcbiAgICAgICAgNjQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNyxcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExLFxuICAgICAgICAyMzUsXG4gICAgICAgIDU0LFxuICAgICAgICA2OSxcbiAgICAgICAgNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjIyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM3LFxuICAgICAgICA1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjI0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDk2LFxuICAgICAgICAyNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDkzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkQ4dFlMeE1mWWtTRU1Tb1lVbFdweDhobXVLVGt5a2hUa2JrcHVQZDRnOFE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInN4dEt1alk2VGh1VW13UDlVQl9kQ1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDQ3YzliODYtOGYxMy00YWZkLTk3NTEtY2I0NGJkNTRlZjkyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NSxcbiAgICAgIDc0LFxuICAgICAgMjAxLFxuICAgICAgODgsXG4gICAgICAxMDMsXG4gICAgICAxLFxuICAgICAgMjAzLFxuICAgICAgMTc5LFxuICAgICAgMTMsXG4gICAgICAxNTIsXG4gICAgICAxODUsXG4gICAgICAxNjgsXG4gICAgICAyMjIsXG4gICAgICAyMTUsXG4gICAgICAyMjksXG4gICAgICAxMDcsXG4gICAgICAyMzEsXG4gICAgICAxMDgsXG4gICAgICAxNjksXG4gICAgICAyNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE2LFxuICAgICAgMjE5LFxuICAgICAgMzEsXG4gICAgICAxMjEsXG4gICAgICAxMDQsXG4gICAgICAxODksXG4gICAgICA3MyxcbiAgICAgIDIwLFxuICAgICAgMTc0LFxuICAgICAgMTg1LFxuICAgICAgMTM0LFxuICAgICAgMTIyLFxuICAgICAgMTQ0LFxuICAgICAgMjQ0LFxuICAgICAgMTkzLFxuICAgICAgMTc1LFxuICAgICAgODQsXG4gICAgICAzMixcbiAgICAgIDAsXG4gICAgICAxOTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMkpXQjY4RTNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4Mzo5NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqeKBsMK5wrJcXG5cXG7igbBcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxuXFxu8J2QhfCdkIDwnZCM8J2QjvCdkJTwnZCSIFxcbvCdkJnwnZCi8J2Qg/CdkKIg8J2QjPCdkJrwnZCl8J2QovCdkKRcXG5cXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6OTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTDc2K2RVQ0VPbkUyYjhHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInFFUFMxazNnMngvUjBGc0hyZlpqUEpsUEZ5UkVhMkNYTUFITUFzU1BOTjVQTjlYUjN2R2NkT2FpZ3ZPSVVmbHVZb09COG91d3RYQkpRL3hKdm1FR0R3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlErZGRwdXRacnVZTUdmVzZldmY1dWUvcEgzWG5ZZzRPR0pVNUUyU0YxS3gzOWdFT1Jmb1pDQkU3cSszbFFnOExFZEd5R3M5Uk5oanVQc0JOTFZVM2pnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4Mzo5NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDQyMDAzMDEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKTkxcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpOTC5qc29uIjogIntcImtleURhdGFcIjpcIlJBdUJPeURYMjgyM2d0Z1UzMWlIWmJRQzFkRWRTdGVpcWo5dThUS3labzA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI2OTYwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
