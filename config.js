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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_05_04_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDczLFxuICAgICAgICA0NixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDU3LFxuICAgICAgICA1MyxcbiAgICAgICAgMzksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDksXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNSxcbiAgICAgICAgODcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTM4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjA3LFxuICAgICAgICA0MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjksXG4gICAgICAgIDk3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU5LFxuICAgICAgICA5NCxcbiAgICAgICAgOTksXG4gICAgICAgIDUwLFxuICAgICAgICAxMjksXG4gICAgICAgIDI0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTksXG4gICAgICAgIDgxLFxuICAgICAgICA2MixcbiAgICAgICAgMzAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI5LFxuICAgICAgICA3NixcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDY5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNixcbiAgICAgICAgODAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzgsXG4gICAgICAgIDcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODAsXG4gICAgICAgIDk0LFxuICAgICAgICA2NSxcbiAgICAgICAgMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDM5LFxuICAgICAgICA0MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI2LFxuICAgICAgICAxODMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMyxcbiAgICAgICAgMTIwLFxuICAgICAgICA2OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMzgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjU0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzNixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDksXG4gICAgICAgIDI5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTIwLFxuICAgICAgICA0MixcbiAgICAgICAgNTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTA2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgODIsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDYxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDY2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDg1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDkwLFxuICAgICAgICAxODMsXG4gICAgICAgIDYyLFxuICAgICAgICA5NixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDksXG4gICAgICAgIDE4MixcbiAgICAgICAgNzAsXG4gICAgICAgIDYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiV1FyMzBHQ1ZsOG12ODFrbjBHZUJPaWJOeFVLMXRRL3plVmM2OENienRCbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQXBFRnozYXJUaUdaSEFjdnQ1aVo5d1wiLFxuICBcInBob25lSWRcIjogXCJmN2ZmZjdjZC1mNDhlLTQ0MTUtOWZkYi01YWE4ZmEyMjZhMTRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI0LFxuICAgICAgMzMsXG4gICAgICAyMTIsXG4gICAgICAxMzcsXG4gICAgICA1LFxuICAgICAgNjIsXG4gICAgICAxMzcsXG4gICAgICAyNDYsXG4gICAgICAxNixcbiAgICAgIDIzMCxcbiAgICAgIDExNyxcbiAgICAgIDE5MSxcbiAgICAgIDksXG4gICAgICAxMzEsXG4gICAgICAzMixcbiAgICAgIDE4OSxcbiAgICAgIDEzNSxcbiAgICAgIDIxMyxcbiAgICAgIDEzNCxcbiAgICAgIDE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk1LFxuICAgICAgMTA2LFxuICAgICAgMTM2LFxuICAgICAgMTg3LFxuICAgICAgMjYsXG4gICAgICA0NyxcbiAgICAgIDEzMyxcbiAgICAgIDU0LFxuICAgICAgMzYsXG4gICAgICAyMTIsXG4gICAgICAyMTgsXG4gICAgICAyMjMsXG4gICAgICA0NSxcbiAgICAgIDE4LFxuICAgICAgODcsXG4gICAgICAxMDMsXG4gICAgICAyMzcsXG4gICAgICAxNjEsXG4gICAgICAxODUsXG4gICAgICAyMjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUEUzNVpZQThcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4Mzo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDYr9uMINmF2YDZgNmE2YDZgNqp4oGwwrnCslxcblxcbuKBsFxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG5cXG7wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIgXFxu8J2QmfCdkKLwnZCD8J2QoiDwnZCM8J2QmvCdkKXwnZCi8J2QpFxcblxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDo2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01iNitkVUNFTmFYNWI4R0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHpsbVFCYzBTT1FKM05tVXRxVExzTm5TNVNyTEhFbGpVYUhiZFRoNmNEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJTVUo3UkJZd2FDbGdZNjhrTnAzcU5sQWdseWFlVEdhK2w4eUkxYW1TaGRabnJJVE91L1l3Q1FaSDlsMnVhYlJzNXQxbGdOZ3lFZTV2cXp5eG1QRG9EQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJGYkxMYXJRMkx4Tjl2dXdib3hqYVdTZERodVdWSEd5WlZjWmdMRklaMjV5QWNpRGk5b3BjR0pCRjhORGFLVU5pWDdybW9NUjh0TmZzTU8raElxWTBoZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDcxMTY2ODM6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDQzOTExMzAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKTjZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpONi5qc29uIjogIntcImtleURhdGFcIjpcIkF6dG5pNXhOY3l1RTZJY1FmSVVscko3emhDYlo5d3ZlN3RzYW9iR1JTaGs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI2OTgxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQ0MzkxMTE4NzIxXCJ9Igp9"  // PUT your SESSION_ID 


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
