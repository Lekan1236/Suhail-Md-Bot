const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348129856050";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_21_30_09_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5LFxuICAgICAgICA2MixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTAwLFxuICAgICAgICA2MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NixcbiAgICAgICAgMTkzLFxuICAgICAgICA1NixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjksXG4gICAgICAgIDExNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTksXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjEsXG4gICAgICAgIDk0LFxuICAgICAgICAxNSxcbiAgICAgICAgMixcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTU5LFxuICAgICAgICA2NyxcbiAgICAgICAgNixcbiAgICAgICAgMTk1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTksXG4gICAgICAgIDk5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0LFxuICAgICAgICAxODEsXG4gICAgICAgIDQwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAzOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwLFxuICAgICAgICA4NixcbiAgICAgICAgMjYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDk5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2OCxcbiAgICAgICAgODYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTMxLFxuICAgICAgICA4MixcbiAgICAgICAgMjE1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDkyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAzOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDksXG4gICAgICAgIDE4NixcbiAgICAgICAgMzQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjI3LFxuICAgICAgICA4MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTg1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxODEsXG4gICAgICAgIDg1LFxuICAgICAgICA5OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTYzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTc5LFxuICAgICAgICA3MixcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE3LFxuICAgICAgICAxMixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMzYsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTksXG4gICAgICAgIDU0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM0LFxuICAgICAgICA0MSxcbiAgICAgICAgNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTM4LFxuICAgICAgICA4MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDczLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDExNixcbiAgICAgICAgNDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDcsXG4gICAgICAgIDcyLFxuICAgICAgICA4NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTM5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDgwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImNxWEpjNktIbzZqYkd0WTFuM2tIVjNudWJiNGNZQitLcFNUVTdVY0dKMDg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImR6NXYxZTk5UjJhTF9kZUxSUXdwR3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiYmU3NDE5ZmYtYmMzNy00NGY5LThmMzgtZjA2Mzc2NzZlYWFiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYxLFxuICAgICAgMjI4LFxuICAgICAgMTUsXG4gICAgICAyNyxcbiAgICAgIDEyNyxcbiAgICAgIDEyMCxcbiAgICAgIDEyLFxuICAgICAgMTIyLFxuICAgICAgMTAxLFxuICAgICAgMzAsXG4gICAgICAxOTMsXG4gICAgICAyNyxcbiAgICAgIDE3NyxcbiAgICAgIDEyMyxcbiAgICAgIDIzNSxcbiAgICAgIDIyNCxcbiAgICAgIDIwNyxcbiAgICAgIDE3MSxcbiAgICAgIDcsXG4gICAgICAzMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAxLFxuICAgICAgMTA5LFxuICAgICAgMjEzLFxuICAgICAgODEsXG4gICAgICAxNjIsXG4gICAgICAxMDUsXG4gICAgICA1OSxcbiAgICAgIDEwLFxuICAgICAgMTk0LFxuICAgICAgMTIxLFxuICAgICAgNTcsXG4gICAgICAzNCxcbiAgICAgIDUwLFxuICAgICAgNzUsXG4gICAgICA1NCxcbiAgICAgIDE0NCxcbiAgICAgIDE0LFxuICAgICAgNTYsXG4gICAgICAxOTksXG4gICAgICAxNjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQMm81c1lCRU03bzdiWUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjZqbXF4NWVCSjkrVzNlN2lRenlxZ0JiYUp4bWo2dGpSSUR1bk9BZjlXbUk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidkh5NE9CaHQybkFoZnhpRlFEWUhUQTlwZXBGalpzdERrQnMzRUJJYjZTTG53bDJqUG1lSmhueDVrVVVVUlliR0c0aHlxQjFMWWZ6Vld1VVBHdkNwQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRjR2KytPcEJYTitMOW1OTGUvakdOV2ZWRVdKbnpqcDd2aXBIcEo3ZHF5eUUxNUJ4MFpqRzJPdmo2SnU1UEI3VVJpODBYNWdDdElheU1ZYWU2azRvRHc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTI5ODU2MDUwOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJKdXN0IEZvciBBZHZlcnQgMVwiLFxuICAgIFwibGlkXCI6IFwiMjA5OTk0MzIyNTc5NTg5OjNAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTI5ODU2MDUwOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI1NjU4MTk0XG59Igp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























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
 
