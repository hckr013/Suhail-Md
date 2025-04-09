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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_06_04_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA5OSxcbiAgICAgICAgMjI5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDYwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTk3LFxuICAgICAgICA5MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTczLFxuICAgICAgICA4NyxcbiAgICAgICAgMjMwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAzNSxcbiAgICAgICAgMjI0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjAzLFxuICAgICAgICA4NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICA5MSxcbiAgICAgICAgODYsXG4gICAgICAgIDg3LFxuICAgICAgICA4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTY1LFxuICAgICAgICA0NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzksXG4gICAgICAgIDMxLFxuICAgICAgICA0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTI2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjE0LFxuICAgICAgICA0MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzksXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NixcbiAgICAgICAgNTksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjksXG4gICAgICAgIDU4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjMxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTYwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDkyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1NixcbiAgICAgICAgODksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDg2LFxuICAgICAgICA1MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDM4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxODAsXG4gICAgICAgIDY2LFxuICAgICAgICA4OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjA0LFxuICAgICAgICA1MixcbiAgICAgICAgNzgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTI0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTI5LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjE1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTI3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTMyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg5LFxuICAgICAgICA3LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDQsXG4gICAgICAgIDE2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDMyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTgxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzEsXG4gICAgICAgIDE5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDM3LFxuICAgICAgICA3MixcbiAgICAgICAgMTk2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDM3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxODIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjIzLFxuICAgICAgICA3MixcbiAgICAgICAgNzYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjA4LFxuICAgICAgICA4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTAzLFxuICAgICAgICA0NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNixcbiAgICAgICAgNTksXG4gICAgICAgIDUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2LFxuICBcImFkdlNlY3JldEtleVwiOiBcImsxNUIrV2RqVTZFT0NuQzFCOVRjVGRJNUlWMW0xcFoySGFIaE9MbmdXeUk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIktvVGdwMlBjUkV5dVpqdGNRS1pEMGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjEyMTE1MTctMjdlNi00Mjc4LTg4NGItOTQ4MjljNzczMzkyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk0LFxuICAgICAgMTI2LFxuICAgICAgODcsXG4gICAgICA5NSxcbiAgICAgIDE3NCxcbiAgICAgIDMyLFxuICAgICAgMyxcbiAgICAgIDc1LFxuICAgICAgMyxcbiAgICAgIDIzMCxcbiAgICAgIDg5LFxuICAgICAgMTg3LFxuICAgICAgMTg0LFxuICAgICAgODEsXG4gICAgICAyOCxcbiAgICAgIDcwLFxuICAgICAgMjQxLFxuICAgICAgMjI1LFxuICAgICAgMjAsXG4gICAgICA5NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5LFxuICAgICAgNDEsXG4gICAgICAxOTksXG4gICAgICA3NCxcbiAgICAgIDE0NSxcbiAgICAgIDE1MyxcbiAgICAgIDcsXG4gICAgICA1MixcbiAgICAgIDE2OCxcbiAgICAgIDc0LFxuICAgICAgMTUwLFxuICAgICAgOTMsXG4gICAgICAxMTQsXG4gICAgICA5OSxcbiAgICAgIDIxMSxcbiAgICAgIDY3LFxuICAgICAgNzMsXG4gICAgICAxOTAsXG4gICAgICAxNzIsXG4gICAgICAxODlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiODdEOE5DQUtcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4Mzo5NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqeKBsMK5wrJcXG5cXG7igbBcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxuXFxu8J2QhfCdkIDwnZCM8J2QjvCdkJTwnZCSIFxcbvCdkJnwnZCi8J2Qg/CdkKIg8J2QjPCdkJrwnZCl8J2QovCdkKRcXG5cXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6OTVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTDc2K2RVQ0VPS1oycjhHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjVyL2pWU1drMFhpWm54MmZJWEt0SkpBd2VLMXVmdnBqZ2dlWnFKZVkzWEJScXdEVGN6NmIrNFZ4QWFhSmM3aFpkeUNqNGhzOU9EOG5uRHpYMXRzRUFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlh3T2lBczBUMzhFV09wZEJ0YnFrSnpESzh3cHFZRFFlSldxRzI5TG9UNHdqc2xHY0wxWW0ybDEzL1N2ajJuczdKSCs3TkVSMTVUTG9JTW5iSVJndUJBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4Mzo5NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDQyMTExNzMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKTkxcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpOTC5qc29uIjogIntcImtleURhdGFcIjpcIlJBdUJPeURYMjgyM2d0Z1UzMWlIWmJRQzFkRWRTdGVpcWo5dThUS3labzA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI2OTYwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
