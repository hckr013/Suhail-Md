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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_05_04_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyNixcbiAgICAgICAgOTYsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTksXG4gICAgICAgIDgxLFxuICAgICAgICA1MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxLFxuICAgICAgICAzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDc0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgODksXG4gICAgICAgIDEzMixcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTExLFxuICAgICAgICA2MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTA2LFxuICAgICAgICA4NixcbiAgICAgICAgNDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA2LFxuICAgICAgICA0NixcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDQwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDg0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTk3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDg1LFxuICAgICAgICAxODUsXG4gICAgICAgIDc2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDgzLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjIsXG4gICAgICAgIDEsXG4gICAgICAgIDUyLFxuICAgICAgICA2NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODksXG4gICAgICAgIDYsXG4gICAgICAgIDYyLFxuICAgICAgICAzNixcbiAgICAgICAgMTE1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDYxLFxuICAgICAgICAyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjksXG4gICAgICAgIDcwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDY2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjgsXG4gICAgICAgIDE5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTU3LFxuICAgICAgICA1NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1LFxuICAgICAgICA0NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY5LFxuICAgICAgICA1MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDgsXG4gICAgICAgIDY0LFxuICAgICAgICAxODIsXG4gICAgICAgIDkzLFxuICAgICAgICA0LFxuICAgICAgICAyMDksXG4gICAgICAgIDkxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODAsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDY5LFxuICAgICAgICAzNixcbiAgICAgICAgNDYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDk2LFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyOCxcbiAgICAgICAgMjQxLFxuICAgICAgICA4MixcbiAgICAgICAgMjA0LFxuICAgICAgICA3OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDI2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODYsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDM0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTE2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTEwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTAxLFxuICAgICAgICA1MixcbiAgICAgICAgNTUsXG4gICAgICAgIDc2LFxuICAgICAgICA2OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDU4LFxuICBcImFkdlNlY3JldEtleVwiOiBcImtTQ2hvdlY0RHVQV1lKYWw2WHM1K3ROcW8vcVVGS21VM211Vm1xRVdKZEE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjkxNDA4NzUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1REQ2OUFGRUMwRDg0NUEzQ0EwNzcxMUIyQ0YwN0FGNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDQxNzE1MTdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyOTE0MDg3NTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjRCNUZCNTQ2MjVDRjc0ODlGODYzRDlCNjVERDEzMzE5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0NDE3MTUxN1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJQdzV6eE1mN1RDLVdSQ2k2SllHUnJRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjk5YmE0Njk3LTEyNjctNGM3Ni1hMmVmLTFlMDk0YzJkMzZjN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTEsXG4gICAgICAxNTcsXG4gICAgICAxODYsXG4gICAgICA5MixcbiAgICAgIDEwNyxcbiAgICAgIDE0MyxcbiAgICAgIDQ1LFxuICAgICAgMTIzLFxuICAgICAgMTUsXG4gICAgICA0MCxcbiAgICAgIDEsXG4gICAgICAxODIsXG4gICAgICAxMTMsXG4gICAgICAyMzMsXG4gICAgICAxMzEsXG4gICAgICAyNTUsXG4gICAgICAzOSxcbiAgICAgIDIwMCxcbiAgICAgIDE5MyxcbiAgICAgIDE2NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjYsXG4gICAgICAzOCxcbiAgICAgIDE4MixcbiAgICAgIDEwOCxcbiAgICAgIDIxOSxcbiAgICAgIDEzNSxcbiAgICAgIDIzOCxcbiAgICAgIDEwMixcbiAgICAgIDQ3LFxuICAgICAgNTQsXG4gICAgICAxMTQsXG4gICAgICA5MixcbiAgICAgIDIwMixcbiAgICAgIDE5MyxcbiAgICAgIDE3MSxcbiAgICAgIDIxNixcbiAgICAgIDU0LFxuICAgICAgMjQxLFxuICAgICAgMjYsXG4gICAgICA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpIUjhYUERDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyOTE0MDg3NTA6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjAzODgyNzAxNTQ1NzAwOjRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiyZXJvMmRzZzNocqRyaPMrCDPu8yIzJDGsvCdkI3Jls2gyozhr60gX/CfjpfvuI/wn6m28J+qvfCfjI7inIjvuI9cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPUDA4TjBCRVBiajE3OEdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk9YQjJJR211c3MzSGNsdGxndkU0LzNyNHpmM01nbllncjV1dzdiQndybjQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiR1FFeEtYYWgzcmp6VHBvS203WnIxOWZMYzFFUmZiMmNmZG8xSm9lOXBCdEN3TEN0V08yWURINWdkRlZpdWxpbUpreWJJTkU0SHJNTHNDRlBCaWdxQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSkh1QXhaQWlieXpZTXNVMk4xTE40MXFIY1Nxai9JQURvSjhqMmkyMnJHeU0vTG1zVE95OXlydGlBeUY3aVpFYjQwMnNWaWFoKzZLcHR5K2U1ZllOQlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjkxNDA4NzUwOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ0MTcxNTEzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT09yXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPT3IuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJhSXJEZjA3SWR4TGphT0dYTWJrV0dFQzB0SHpoSHY5NjQ5RHN4TzRiYXlzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ2NTMyMDU0NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc0NDEzMTQ5NjEyNlwifSIKfQ=="  // PUT your SESSION_ID 


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
