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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "09079039793";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_20_05_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMixcbiAgICAgICAgMTQxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMixcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI1LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDksXG4gICAgICAgIDQsXG4gICAgICAgIDI5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDUyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTkwLFxuICAgICAgICA5LFxuICAgICAgICA3NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDQ0LFxuICAgICAgICA3MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjM4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDY1LFxuICAgICAgICA4MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNixcbiAgICAgICAgMjIsXG4gICAgICAgIDgxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM3LFxuICAgICAgICA5NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDczLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQ5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAzOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDUyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTg5LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNixcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA5LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjksXG4gICAgICAgIDU1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAwLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTYzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDM4LFxuICAgICAgICA2MixcbiAgICAgICAgMTIzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTIwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDc2LFxuICAgICAgICAyNixcbiAgICAgICAgMTI4LFxuICAgICAgICA5OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjksXG4gICAgICAgIDg1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTUyLFxuICAgICAgICA1MixcbiAgICAgICAgMTgxLFxuICAgICAgICA5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1LFxuICAgICAgICA3OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDcwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODMsXG4gICAgICAgIDYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjEyLFxuICAgICAgICA3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjEsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDcyLFxuICAgICAgICA0NixcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDk1LFxuICAgICAgICA2MSxcbiAgICAgICAgOTksXG4gICAgICAgIDY3LFxuICAgICAgICAzOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDgxLFxuICAgICAgICA3MyxcbiAgICAgICAgNDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjUzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMwLFxuICAgICAgICA5MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDgsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjcsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJRWGw0b1Jja1BzS0NQdmpGbXZURlp1V0FhQnJJaVl5a3dWd0V6WHlYbHQ4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJlSFFFU3lZVlRVeVI0VFRDS0YxUXpBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjc2MmNjMDExLTMzOTEtNGQwMC1hYWQ1LThlZTk1NWVlNzNjOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMixcbiAgICAgIDE5NSxcbiAgICAgIDEwNSxcbiAgICAgIDE4NCxcbiAgICAgIDE1NCxcbiAgICAgIDE5NixcbiAgICAgIDEwNixcbiAgICAgIDE4OSxcbiAgICAgIDEwMSxcbiAgICAgIDEwOCxcbiAgICAgIDEyOCxcbiAgICAgIDEzMCxcbiAgICAgIDY4LFxuICAgICAgMjI2LFxuICAgICAgMjAwLFxuICAgICAgMjI0LFxuICAgICAgMTg3LFxuICAgICAgMTQ0LFxuICAgICAgMTUxLFxuICAgICAgMjAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNSxcbiAgICAgIDE2NixcbiAgICAgIDE4NSxcbiAgICAgIDIzMixcbiAgICAgIDEzMCxcbiAgICAgIDM1LFxuICAgICAgMTk4LFxuICAgICAgNzQsXG4gICAgICAxMzYsXG4gICAgICAxMjEsXG4gICAgICAyMjAsXG4gICAgICAzMixcbiAgICAgIDE4NyxcbiAgICAgIDExLFxuICAgICAgNDgsXG4gICAgICAxMjMsXG4gICAgICAxMDEsXG4gICAgICA5MyxcbiAgICAgIDE4LFxuICAgICAgMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVkcxVDdMRkpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNzkwMzk3OTM6ODBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0NTU0NzkzNTYyNTQxMDo4MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPRzJyNEFIRUxDR3hySUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm54UUVkMDVhb1dtSm9QTDlpZHBqMlhWR0Y1WXN4QTRDK0pXVjQybEJvSEU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNnU2SFBIajlZMTVnZFVZQWR0SUQvT2NsRHZXRGxNK1ZiV2krODBQeS84a2p0TE1PUXJsc2xNZk50VEZkMDNMODFJVzIxbDV3aGRIeTlxWlBMWVFXQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWENjQThDZ0FHaVNiS1F3TkZlY1hqOGxxUjI1a09qNitzSG5nRHBtL3JGeVNkbENWeHZIU0VybGJHSXgrTjVZd1lxVG1HUitxazBmaEU5aGJ5MEN4QUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA3OTAzOTc5Mzo4MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2NjE4MDM1XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
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
