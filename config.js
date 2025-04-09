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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_56_04_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0LFxuICAgICAgICA4MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTczLFxuICAgICAgICA0NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTgyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE0LFxuICAgICAgICA3NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjUwLFxuICAgICAgICA1LFxuICAgICAgICA2MSxcbiAgICAgICAgNSxcbiAgICAgICAgODYsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTUzLFxuICAgICAgICA3MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDk1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzUsXG4gICAgICAgIDg5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjA1LFxuICAgICAgICA5NixcbiAgICAgICAgNDMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjksXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICA5MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM1LFxuICAgICAgICA4MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDgxLFxuICAgICAgICA0MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTU4LFxuICAgICAgICA0OCxcbiAgICAgICAgMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODQsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDcyLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExOSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgODQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDgxLFxuICAgICAgICA0NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAzNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjExLFxuICAgICAgICAyOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTgxLFxuICAgICAgICA3MSxcbiAgICAgICAgNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTcxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWW53R0NFUzd5QmEzN29kMGR4ZEdnanRBYVFmQWxobC9sNWNFK3E3SThRaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieVBMVkFsTC1Sb0tvcUhhcF9Xbk5nQVwiLFxuICBcInBob25lSWRcIjogXCIzMjk1MmFlMC03NWI0LTQ5OGYtYTI2NC0zZDRjMWRlZjJhYmJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUyLFxuICAgICAgNzksXG4gICAgICAyNTQsXG4gICAgICA1OCxcbiAgICAgIDg3LFxuICAgICAgMjAzLFxuICAgICAgMjUsXG4gICAgICA0OCxcbiAgICAgIDI0NyxcbiAgICAgIDY5LFxuICAgICAgMTU1LFxuICAgICAgMTUyLFxuICAgICAgODMsXG4gICAgICAyNDgsXG4gICAgICAzNyxcbiAgICAgIDI0NixcbiAgICAgIDE1MSxcbiAgICAgIDE4MixcbiAgICAgIDEyMCxcbiAgICAgIDEyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTAsXG4gICAgICAxMzgsXG4gICAgICAxODksXG4gICAgICA4LFxuICAgICAgMTQzLFxuICAgICAgMjAsXG4gICAgICAyNTUsXG4gICAgICA2LFxuICAgICAgMTAzLFxuICAgICAgNyxcbiAgICAgIDM4LFxuICAgICAgMTM2LFxuICAgICAgMTgxLFxuICAgICAgMSxcbiAgICAgIDczLFxuICAgICAgMTMzLFxuICAgICAgMjE4LFxuICAgICAgMTQ2LFxuICAgICAgMTMzLFxuICAgICAgNTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWloxSkw3N0dcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4Mzo5NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqeKBsMK5wrJcXG5cXG7igbBcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxuXFxu8J2QhfCdkIDwnZCM8J2QjvCdkJTwnZCSIFxcbvCdkJnwnZCi8J2Qg/CdkKIg8J2QjPCdkJrwnZCl8J2QovCdkKRcXG5cXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6OTZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTC82K2RVQ0VMWE4ycjhHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIldCSElPTExjZDRxWHdzSlB2U0FIV0RIRWpJUXlLcS9DbFlsVXViQkljdDc3emwrU1owS1pQanJhVnVIOHpxUzAyWnhPdGdWUDloUEwzTHNuQW5JT0FnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlBVSGk2cU5lVENkdms4aHptYkhjZVB6T1FYSG5SL2RRM2NEOGk4UE5jNWJGL0MyaXFZeURUaWZBMldUSkw3ZklEYTdtL3J3L09qc240eU9rbk5mSEFBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4Mzo5NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDQyMTc3ODQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKTkxcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpOTC5qc29uIjogIntcImtleURhdGFcIjpcIlJBdUJPeURYMjgyM2d0Z1UzMWlIWmJRQzFkRWRTdGVpcWo5dThUS3labzA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI2OTYwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
