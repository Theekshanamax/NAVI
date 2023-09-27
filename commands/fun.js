/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

const { dare, truth, random_question } = require('../lib/truth-dare.js')
const axios = require('axios')
const { cmd } = require('../lib')
//--------------------------------------------------------------------------
cmd({ 
     pattern: "hirunews", 
     alias: ["hiru","news/hiru"], 
     react: "📜", 
     desc: "", 
     category: "news", 
     use: '.hirunews', 
     filename: __filename 
      },  
  async(Void, citel) => {  
  try{  
 {
  "status": true,
  "creator": {
    "name": "DarkWinzo",
    "github": "@DarkWinzo"
  },
  "result": {
    "title": "හිටපු ජනපති මහින්ද රාජපක්ෂ සුවෙන්",
    "date_time": "Wednesday, 27 September 2023 - 18:50",
    "news_url": "https://www.hirunews.lk/349576/හිටපු-ජනපති-මහින්ද-රාජපක්ෂ-සුවෙන්",
    "image": "https://cdn.hirunews.lk/Data/News_Images/202309/1695820746_8046318_hirunews.jpg",
    "description": " හිටපු ජනපති මහින්ද රාජපක්ෂ අසනීප තත්ත්වයෙන් පසුවන බව මේ වන විට බොහෝ සමාජ මාධ්‍ය ජාලා තුල පැතිර යනවා.මෙම පුවත බොහෝ විට ප්‍රචාරණය වන්නේ රාජපක්ෂ පවුලේ සමීපතමයෙකු ලෙසින් සැලකෙන ඩී.වි චානක අමාත්‍යවරයාගේ මාමණ්ඩියගේ අවමංගල්‍ය උත්සවයට හිටපු ජනපති මහින්ද රාජපක්ෂ සහභාගී නොවීම හේතුවෙන්.මුහුණු පොතේ හුවමාරු වන්නේ හිටපු ජනපතිවරයා අසනීප තත්ත්වයෙන් පසුවන නිසා එම අවස්ථාවට සහභාගී නොවූ බවයි.නමුත් පැතිර යන කටකතා අසත්‍ය කරමින් හිටපු ජනපති මහින්ද රාජපක්ෂ අද (27) පාමංකඩ ශ්‍රී මහා විහාරයේ අභිනවයෙන් ඉදිකරන ලද දාන ශාලාව විවෘත කිරීමේ අවස්ථාවට සහභාගී වූවා.පාමංකඩ ශ්‍රී මහා විහාරයෙන් විහාරාධිපති ඇමරිකාවේ ප්‍රධාන සංඝනායක පුජ්‍ය වල්පොල පියනන්ද හිමියන්ගේ ඉල්ලිම පරිදි ශ්‍රී ලංකා නාවික හමුදාවේ සිවිල් හා ඉංජිනේරු අංශය විසින් මෙම දාන ශාලාව ඉදිකර ඇති අතර එම දාන ශාලාවේ පලකය විවෘත කිරිම හිටපු ජනාධිපති මහින්ද රාජපක්ෂගේ සුරතින් සිදු වූ බවයි අප වාර්තාකරි සඳහන් කර සිටියේ.                    "
  },
  "warning": "📌 𝙸𝚃 𝙸𝚂 𝚂𝚃𝚁𝙸𝙲𝚃𝙻𝚈 𝙵𝙾𝚁𝙱𝙸𝙳𝙳𝙴𝙽 𝚃𝙾 𝚄𝙽𝙰𝚄𝚃𝙷𝙾𝚁𝙸𝚉𝙴𝙳 𝚄𝚂𝙰𝙶𝙴 𝙾𝚁 𝚁𝙴𝙿𝙰𝙲𝙺𝙰𝙶𝙴 𝚃𝙷𝙸𝚂 𝚆𝙴𝙱 𝙰𝙿𝙸 𝙸𝙽𝚃𝙾 𝙰𝙽𝙾𝚃𝙷𝙴𝚁 𝚆𝙴𝙱 𝙰𝙿𝙸,𝚂𝙲𝚁𝙰𝙿𝙴𝚁 copyright © 2023 By DarkWinzo"
   }

//---------------------------------------------------------------------------
 
 cmd({  
      pattern: "sirasa",  
      alias: ["news"],  
      react: "🀄",  
      desc: "",  
      category: "news",  
      use: '.hirunews',  
      filename: __filename  
  },  
  async(Void, citel) => {  
  try{  
  const nasa = await fetchJson(`https://kaveesha-sithum.onrender.com/sirasa-news`);  
  
            const images = `${nasa.result.image}`  
             const title = `${nasa.result.title}` 
             const news = `${nasa.result.desc}`  
  
  await Void.sendMessage(citel.chat,  { image: { url: images }, caption: `\n*${ title }*\n\n _${news}._\n\n*`}, { quoted: citel })  
  }  
  catch(e){  
  console.log(e)  
  }})
    //---------------------------------------------------------------------------
    cmd({
     
    
        category: "fun",
        filename: __filename,
    },
    async(Void, citel, text) => {
        try{
            let { data } = await axios.get(`http://api.urbandictionary.com/v0/define?term=${text}`)
            var textt = `
            Word: ${text}
            Definition: ${data.list[0].definition.replace(/\[/g, "").replace(/\]/g, "")}
            Example: ${data.list[0].example.replace(/\[/g, "").replace(/\]/g, "")}`
            return citel.reply(textt)
                    } catch {
                        return citel.reply(`No result for ${text}`)
                    }
    }
)
