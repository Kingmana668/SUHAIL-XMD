const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "201129529078";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_57_10_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODIsXG4gICAgICAgIDU5LFxuICAgICAgICA4OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNixcbiAgICAgICAgMTI1LFxuICAgICAgICAzNixcbiAgICAgICAgOTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDYsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTEsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNCxcbiAgICAgICAgODUsXG4gICAgICAgIDQ0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDg5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDUxLFxuICAgICAgICA2MixcbiAgICAgICAgMzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDM0LFxuICAgICAgICA4NixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTE1LFxuICAgICAgICA2NCxcbiAgICAgICAgMixcbiAgICAgICAgMTc5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjEwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTAsXG4gICAgICAgIDk3LFxuICAgICAgICAzOCxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAzMixcbiAgICAgICAgMTM2LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzksXG4gICAgICAgIDUyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDQxLFxuICAgICAgICA0MCxcbiAgICAgICAgMjMwLFxuICAgICAgICA3MyxcbiAgICAgICAgODUsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjksXG4gICAgICAgIDg5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDc2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTg4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDM4LFxuICAgICAgICAzLFxuICAgICAgICAxMDksXG4gICAgICAgIDU4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjEwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTExLFxuICAgICAgICA4OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjExLFxuICAgICAgICA0NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDUyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTkxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzksXG4gICAgICAgIDgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxODAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNixcbiAgICAgICAgODUsXG4gICAgICAgIDM3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTczLFxuICAgICAgICAzMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzksXG4gICAgICAgIDk5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJDU3RMZ3A1SXRqNjh0QWsyODNXL2JON3YrN2RBL1FyM2I5VVhJZ3U2alY0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIzN3c4ck9tLVNuV1dzU3FLUE8wOVl3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjc4MzAxZjdkLTYwMzgtNGJmNS1iMDU3LWVkODJlMWQ3MzZkZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDEsXG4gICAgICAyOCxcbiAgICAgIDE0OCxcbiAgICAgIDEyLFxuICAgICAgMTczLFxuICAgICAgMjEyLFxuICAgICAgMTk5LFxuICAgICAgMjE5LFxuICAgICAgMTQ2LFxuICAgICAgMjIxLFxuICAgICAgODMsXG4gICAgICA2MyxcbiAgICAgIDY4LFxuICAgICAgMjU1LFxuICAgICAgMjQ5LFxuICAgICAgMTExLFxuICAgICAgMzIsXG4gICAgICA3NixcbiAgICAgIDYxLFxuICAgICAgMjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEsXG4gICAgICAxMTksXG4gICAgICA2NCxcbiAgICAgIDUzLFxuICAgICAgMTYxLFxuICAgICAgMTg4LFxuICAgICAgMTgyLFxuICAgICAgODAsXG4gICAgICAxOCxcbiAgICAgIDEyOCxcbiAgICAgIDc0LFxuICAgICAgNjEsXG4gICAgICAyMzAsXG4gICAgICA0MCxcbiAgICAgIDIyNCxcbiAgICAgIDIwOSxcbiAgICAgIDE5NCxcbiAgICAgIDE2OSxcbiAgICAgIDE0NCxcbiAgICAgIDEyOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzTkM0NFBGRFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjAxMTI5NTI5MDc4OjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwieSBtbzNnemFhOTlcIixcbiAgICBcImxpZFwiOiBcIjk5MTAyNjEyMzAzOTY2OjE2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01QcXZkQUVFT3VuaGJnR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibzlqUGNsY2Jyd1l0RDJsdUVlbzBMdXY1MXdxMHRZdzd2WWM2a3ZkR3IwMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJPSGJmTTlTM1pBUmpxaVFkR3U2MGJERGx0V3c4dmhBL3VEZmZwNHFrTWlNMHZ2ais1WktJQW02NnNucjF1TlloaE5YcnBVNGdVRlU0VGJvZzVZVGFCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJsbnFwWkFxSFJ3M05FcWJxUUkzUy9zT050TTFxVHRDY3crQU1mWm84RUQ3VUZCMUVCMWZXem0xQ0tnS3ZUcm0vKzd0Ym1oVk9vVnZFN2xpcUxXbjREUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMDExMjk1MjkwNzg6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4MTQwMjcxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQXJDXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBckMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIvbTZQUVoxNjdiNVR5NVQ5NXEyeitWUjVVSDU2cUc5dUh3bjNpSTVKY24wPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyNDI1MjcwNDAsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mjc3MjU0MjQ3NThcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
