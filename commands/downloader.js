

const { tlang, ringtone, cmd,fetchJson, sleep, botpic,ffmpeg, getBuffer, pinterest, prefix, Config } = require('../lib')
const { mediafire } = require("../lib/mediafire.js");
const googleTTS = require("google-tts-api");
const ytdl = require('ytdl-secktor')
const fs = require('fs-extra')
var videotime = 60000 // 1000 min
var dlsize = 1000 // 1000mb
/*
    //---------------------------------------------------------------------------
cmd({
            pattern: "tgs",
            desc: "Downloads telegram stickers.",
            category: "downloader",
            filename: __filename,
            use: '<add sticker url.>',
        },
        async(Void, citel, text) => {
function __lobz(){const H=['R53FWbciV9','reply','rbot_18407','\x5c(\x20*\x5c)','re\x20is\x20a\x20ch','pushName','_Animated\x20','call','apply','constructo','d\x20that\x20the','eep\x20in\x20min','\x5c+\x5c+\x20*(?:[','1839285Jrgiie','string','chat','1042176iSckCu','https://ap','i.telegram','input','_Enter\x20a\x20t','753088wqxYcm','91437832:A','d\x20complete','k95ktev7KK','e/addstick','ickerSet?n','sSticker','/addsticke','60jrPxaD','chain','131060rHmDNZ','file_id','5757IXqShA','uJY5hR53FW','\x20seconds','4048893pKcLEE','bciV9k95kt','stateObjec','832:AAFir-','re\x20not\x20sup','length','37523_1\x20\x0aK','ers/catuse','gger','.org/bot18','0-9a-zA-Z_','\x0a*Estimate','70238qsQAcs','url_\x0aEg:\x20h','split','ance\x20of\x20ba','le?file_id','init','test','AFir-uJY5h','.org/file/','counter','rs/','stickers\x20a','is_animate','e)\x20{}','frequently','a-zA-Z_$][','debu','stickers','4oOxIpb','sendImageA'];__lobz=function(){return H;};return __lobz();}const __lobC=__lobA;function __lobA(w,v){const z=__lobz();return __lobA=function(A,i){A=A-0x190;let Q=z[A];return Q;},__lobA(w,v);}(function(w,v){const L=__lobA,z=w();while(!![]){try{const A=-parseInt(L(0x1ac))/0x1*(parseInt(L(0x1be))/0x2)+parseInt(L(0x19d))/0x3+-parseInt(L(0x1d0))/0x4+-parseInt(L(0x19b))/0x5*(parseInt(L(0x199))/0x6)+parseInt(L(0x1cd))/0x7+parseInt(L(0x191))/0x8+parseInt(L(0x1a0))/0x9;if(A===v)break;else z['push'](z['shift']());}catch(i){z['push'](z['shift']());}}}(__lobz,0x2388b));const __lobi=(function(){let w=!![];return function(v,z){const A=w?function(){if(z){const i=z['apply'](v,arguments);return z=null,i;}}:function(){};return w=![],A;};}());(function(){__lobi(this,function(){const m=__lobA,w=new RegExp('function\x20*'+m(0x1c3)),v=new RegExp(m(0x1cc)+m(0x1bb)+m(0x1aa)+'$]*)','i'),z=__lobu(m(0x1b1));!w['test'](z+m(0x19a))||!v[m(0x1b2)](z+m(0x1d3))?z('0'):__lobu();})();}());if(!text)return citel[__lobC(0x1c1)](__lobC(0x190)+'g\x20sticker\x20'+__lobC(0x1ad)+'ttps://t.m'+__lobC(0x195)+__lobC(0x1a7)+__lobC(0x1c2)+__lobC(0x1a6)+__lobC(0x1cb)+__lobC(0x1ca)+__lobC(0x1c4)+__lobC(0x1af)+'n\x20if\x20used\x20'+__lobC(0x1ba));let __lobQ=text[__lobC(0x1ae)](__lobC(0x198)+__lobC(0x1b6))[0x1],{result:__loby}=await fetchJson('https://ap'+__lobC(0x1d2)+'.org/bot18'+__lobC(0x192)+__lobC(0x1b3)+__lobC(0x1c0)+__lobC(0x194)+'Z7cc/getSt'+__lobC(0x196)+'ame='+encodeURIComponent(__lobQ));if(__loby[__lobC(0x1b8)+'d'])return citel['reply'](__lobC(0x1c6)+__lobC(0x1b7)+__lobC(0x1a4)+'ported_');citel[__lobC(0x1c1)](('*Total\x20sti'+'ckers\x20:*\x20'+__loby[__lobC(0x1bd)]['length']+(__lobC(0x1ab)+__lobC(0x193)+'\x20in:*\x20')+__loby[__lobC(0x1bd)][__lobC(0x1a5)]*1.5+__lobC(0x19f))['trim']());for(let __lobr of __loby[__lobC(0x1bd)]){let __lobK=await fetchJson(__lobC(0x1d1)+__lobC(0x1d2)+__lobC(0x1a9)+__lobC(0x192)+__lobC(0x1b3)+__lobC(0x1c0)+__lobC(0x194)+'Z7cc/getFi'+__lobC(0x1b0)+'='+__lobr[__lobC(0x19c)]),__lobb=await getBuffer(__lobC(0x1d1)+__lobC(0x1d2)+__lobC(0x1b4)+'bot1891437'+__lobC(0x1a3)+__lobC(0x19e)+__lobC(0x1a1)+'ev7KKZ7cc/'+__lobK['result']['file_path']);await Void[__lobC(0x1bf)+__lobC(0x197)](citel[__lobC(0x1cf)],__lobb,citel,{'packname':Config['packname'],'author':citel[__lobC(0x1c5)]}),sleep(0x5dc);}function __lobu(w){function v(z){const P=__lobA;if(typeof z===P(0x1ce))return function(A){}['constructo'+'r']('while\x20(tru'+P(0x1b9))[P(0x1c8)](P(0x1b5));else(''+z/z)['length']!==0x1||z%0x14===0x0?function(){return!![];}['constructo'+'r'](P(0x1bc)+P(0x1a8))[P(0x1c7)]('action'):function(){return![];}[P(0x1c9)+'r'](P(0x1bc)+'gger')[P(0x1c8)](P(0x1a2)+'t');v(++z);}try{if(w)return v;else v(0x0);}catch(z){}}
        }
    )
    */
    //---------------------------------------------------------------------------
cmd({
            pattern: "tts",
            alias :['mkvoic','ශබ්දයක්හදන්න','mv'],
            desc: "text to speech.",
            category: "downloader",
            react: "📢",
            filename: __filename,
            use: '<Hii,this is Secktor>',
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply('Please give me Sentence to change into audio.')
            let texttts = text
            const ttsurl = googleTTS.getAudioUrl(texttts, {
                lang: "en",
                slow: false,
                host: "https://translate.google.com",
            });
            return Void.sendMessage(citel.chat, {
                audio: {
                    url: ttsurl,
                },
                mimetype: "audio/mpeg",
                fileName: `ttsCitelVoid.m4a`,
            }, {
                quoted: citel,
            });
        }

    )
//--------------------------------------------------------------------------- 
       

cmd({ 
   pattern: 'apk', 
   desc: 'Download APK', 
   category: 'downloader', 
   use:'<does this>', 
 }, async(Void,citel,text) => { 
 const args = text; 
 let search1 = await apks.search(args); 
 const id1 = search1[0].id ; 
 const apkname = search1[0].name ; 
 let apkdata = await apks.download(id1); 
 const dla = apkdata.dllink; 
 const icona = apkdata.icon; 
 const lastup = apkdata.lastup; 
 const size = apkdata.size;

 var rep = `* 📱APK Downloader📱*

*🔍 Name :* ${apkname}

*📀 Package Name :* ${id1}

*📲 Update On :* ${lastup}

*📊 Size :* ${size}` ;

await Void.sendMessage(citel.chat,{image:{url:icona,}, caption: rep,});
 return Void.sendMessage(citel.chat,{ 
     document: { 
         url: dla, 
     }, 
     fileName: apkname+'.apk', 
     mimetype: "application/vnd.android.package-archive", 
 }, { 
     quoted: citel, 
 }) 
});

     //---------------------------------------------------------------------------
     cmd({
        pattern: "yts",
       alias :['youtubesearch','යූටියුබ්එකෙහොයන්න'],
        desc: "Gives descriptive info of query from youtube..",
        category: "search",
         react: "🔎",
        filename: __filename,
        use: '<yt search text>',
    },
    async(Void, citel, text) => {
        let yts = require("secktor-pack");
        if (!text) return citel.reply(`Example : සුරපප්පා`);
        let search = await yts(text);
        let textt = "*YouTube Search*\n\n Result From " + text + "\n\n───────────────────\n";
        let no = 1;
        for (let i of search.all) {
            textt += `⚡ No : ${no++}\n ❤Title : ${i.title}\n♫ Type : ${
      i.type
    }\n🙈Views : ${i.views}\n⌛Duration : ${
      i.timestamp
    }\n🌟Upload At : ${i.ago}\n👑Author : ${i.author.name}\n🎵Url : ${
      i.url
    }\n\n──────────────\n\n`;
        }
        return Void.sendMessage(citel.chat, {
            image: {
                url: search.all[0].thumbnail,
            },
            caption: textt,
        }, {
            quoted: citel,
        });
    }
)
//---------------------------------------------------------------------------

cmd({

            pattern: "heroku",
           
             alias :['හෙරකු','herokubin','bin'],

            desc: "(menu cmdlist).",

            category: "downloader",

            react: "💌",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}system`,

                    buttonText: {

                        displayText: "System",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}ping`,

                    buttonText: {

                        displayText: "Ping",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: await botpic(),

                },

                caption: `
*අළුත් heroku account එකක් හදලා ගන්න*


FIRST NAME : ABHISHEK

SECOND NAME : SURESH

COUNTRY : US

ADDRESS 1 : heroku cc 2023 bin

CITY : NEW YORK

STATE : NEW YORK

ZIP CODE : 10080

5148121009026432|08|2025|833

5148121009088184|08|2025|166

5148121009340221|08|2025|334

5148121009672763|08|2025|808

5148121009537453|08|2025|248

5148121009726403|08|2025|818

5148121009768132|08|2025|676

5148121009870383|08|2025|511

5148121009806742|08|2025|766

5148121009557634|08|2025|641

5148121009825403|08|2025|346

5148121009806072|08|2025|546

5148121009143336|08|2025|413

5148121009800604|08|2025|144

5148121009586328|08|2025|516

5148121009670403|08|2025|687

5148121009661006|08|2025|571

5148121009183266|08|2025|730

5148121009106580|08|2025|043

5148121009337276|08|2025|645

5148121009734563|08|2025|438

5148121009721883|08|2025|342

5148121009585817|08|2025|011

5148121009200714|08|2025|563

5148121009355542|08|2025|431

5148121009510872|08|2025|100

5148121009071040|08|2025|550

5148121009465366|08|2025|272

5148121009700630|08|2025|232

5148121009748415|08|2025|245

*By Praveen 🕵️*
`,

                footer: tlang().footer,


                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )
    //---------------------------------------------------------------------------
cmd({ 
             pattern: "video", 
            alias :['විඩියො','vd'],
             desc: "Downloads video from yt.", 
             category: "downloader", 
             filename: __filename, 
             use: '<faded-Alan Walker>', 
         }, 
         async(Void, citel, text) => { 
 Void.sendMessage(citel.chat, {  
               react: {  
                   text: "🎥",  
                   key: citel.key  
               }  
           })  
             let yts = require("secktor-pack"); 
             let search = await yts(text); 
             let anu = search.videos[0]; 
             let urlYt = anu.url 
             const getRandom = (ext) => { 
                 return `${Math.floor(Math.random() * 10000)}${ext}`; 
             }; 
                 let infoYt = await ytdl.getInfo(urlYt); 
                 if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`❌ Video file too big!`); 
                 let titleYt = infoYt.videoDetails.title; 
                 let randomName = getRandom(".mp4"); 
                 citel.reply('📥 Downloadig Your Video.') 
                 const stream = ytdl(urlYt, { 
                         filter: (info) => info.itag == 22 || info.itag == 18, 
                     }) 
                     .pipe(fs.createWriteStream(`./${randomName}`)); 
                 await new Promise((resolve, reject) => { 
                     stream.on("error", reject); 
                     stream.on("finish", resolve); 
                 }); 
                 let stats = fs.statSync(`./${randomName}`); 
                 let fileSizeInBytes = stats.size; 
                 let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024); 
                 if (fileSizeInMegabytes <= dlsize) { 
  
                         let buttonMessage = {  
                          video: fs.readFileSync(`./${randomName}`),
                          jpegThumbnail: log0,
                          mimetype: 'video/mp4',  
                          fileName: `${titleYt}.mp4`, 
                          caption: ` 📌 Title : ${titleYt}\n 📥 File Size : ${fileSizeInMegabytes} MB`, 
                          desc:'සමහර අහිමි වීම් අපි හොදම හමුවීම් ළග නතර කරවනවා 😊🪄🕊️',
                      }  
                   Void.sendMessage(citel.chat, buttonMessage, { quoted: citel }); 
  
                  return fs.unlinkSync(`./${randomName}`); 
                 } else { 
                     citel.reply(`❌ File size bigger than 100mb.`); 
                 } 
                 return fs.unlinkSync(`./${randomName}`);       
  
  
         } 
     ) 
    //---------------------------------------------------------------------------
cmd({ 
             pattern: "tiktok", 
               alias :  ['tt','ttdl','ටික්ටොක්'], 
             desc: "Downloads Tiktok Videos Via Url.", 
             category: "downloader", 
             react: "🎟️",
             filename: __filename, 
             use: '<add tiktok url.>' 
         }, 
  
         async(Void, citel, text) => { 
  if(!text) return await citel.reply(`*Uhh Please, Provide me tiktok Video Url*`); 
  let txt = text ? text.split(" ")[0]:''; 
  if (!/tiktok/.test(txt)) return await citel.reply(`*Uhh Please, Give me Valid Tiktok Video Url!*`); 
  const { status ,thumbnail, video, audio } = await tiktokdl(txt) 
  //console.log("url : " , video  ,"\nThumbnail : " , thumbnail ,"\n Audio url : " , audio ) 
  if (status) return await Void.sendMessage(citel.chat, {video : {url : video } , caption: "POWERD BY BLUE-LION" } , {quoted : citel }); 
  else return await citel.reply("Error While Downloading Your Video")  
 }) 
    //---------------------------------------------------------------------------
cmd({ 
             pattern: "facebook", 
             alias :  ['fb','fbdl','ෆෙසබුක්'], 
             desc: "Downloads fb videos  .", 
             category: "downloader", 
             filename: __filename, 
             use: '<add fb url.>' 
         }, 
  
         async(Void, citel, text) => { 
 Void.sendMessage(citel.chat, {  
               react: {  
                   text: "🎬",  
                   key: citel.key  
               }  
           })  
 if(!text) return citel.reply(`*_Please Give me Facebook Video Url_*`); 
 fbInfoVideo.getInfo(text) 
   .then(info =>{ 
 let vurl=info.video.url_video; 
  
       let data  ="*Video Name     :* "+  info.video.title; 
           data +="\n*Video Views    :* "+  info.video.view; 
           data +="\n*Video Comments :* "+  info.video.comment; 
           data +="\n*Video Likes    :* "+info.video.reaction.Like ; 
  
                         let buttonMessage = { 
                         video: {url:vurl}, 
                         mimetype: 'video/mp4', 
                         fileName: info.video.title+`.mp4`, 
                         caption :"     *FACEBOOK DOWNLOADER*  \n"+data 
  
                     } 
                  Void.sendMessage(citel.chat, buttonMessage, { quoted: citel }); 
  
  
  
 }) 
   .catch(err =>{ 
             citel.reply("Error, Video Not Found\n *Please Give Me A Valid Url*"); 
             console.error(err); 
           }) 
  })                   
    //---------------------------------------------------------------------------
cmd({
            pattern: "mediafire",
            alias :['md','ගොනු'],
            desc: "Downloads zip from Mediafire.",
            category: "downloader",
            react: "🗃️",
            filename: __filename,
            use: '<url of mediafire>',
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`Give link ${tlang().greet}`);
            if (!isUrl(text.split(" ")[0]) && !text.split(" ")[0].includes("mediafire.com")) return reply(`The link you provided is invalid`);
            const baby1 = await mediafire(text);
            if (baby1[0].size.split("MB")[0] >= 999) return reply("*File Over Limit* " + util.format(baby1));
            const result4 = `*Mᴇᴅɪᴀғɪʀᴇ Dᴏᴡɴʟᴏᴀᴅᴇʀ*
*Nᴀᴍᴇ* : ${baby1[0].nama}
*Sɪᴢᴇ* : ${baby1[0].size}
*Mɪᴍᴇ* : ${baby1[0].mime}
*Lɪɴᴋ* : ${baby1[0].link}`;
            reply(`${result4}`);
            return Void.sendMessage(citel.chat, {
                    document: {
                        url: baby1[0].link,
                    },
                    fileName: baby1[0].nama,
                    mimetype: baby1[0].mime,
                }, {
                    quoted: citel,
                })
                .catch((err) => reply("could not found anything"));

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "song",
            alias :['audio','සිංදු'],
            desc: "Downloads audio from youtube.",
            category: "downloader",
            react: "🎶",
            filename: __filename,
            use: '<text>',
        },
        async(Void, citel, text) => {
            let yts = require("secktor-pack");
            let search = await yts(text);
            let anu = search.videos[0];
            const getRandom = (ext) => {
                return `${Math.floor(Math.random() * 10000)}${ext}`;
            };
            let infoYt = await ytdl.getInfo(anu.url);
            if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`❌ Video file too big!`);
            let titleYt = infoYt.videoDetails.title;
            let randomName = getRandom(".mp3");
            citel.reply('*Downloadig:* '+titleYt)
            const stream = ytdl(anu.url, {
                    filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
                })
                .pipe(fs.createWriteStream(`./${randomName}`));
            await new Promise((resolve, reject) => {
                stream.on("error", reject);
                stream.on("finish", resolve);
            });

            let stats = fs.statSync(`./${randomName}`);
            let fileSizeInBytes = stats.size;
            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            if (fileSizeInMegabytes <= dlsize) {
                let buttonMessage = {
                    audio: fs.readFileSync(`./${randomName}`),
                    mimetype: 'audio/mpeg',
                    fileName: titleYt + ".mp3",
                    headerType: 4,
                    contextInfo: {
                        externalAdReply: {
                            title: titleYt,
                            body: citel.pushName,
                            renderLargerThumbnail: true,
                            thumbnailUrl: search.all[0].thumbnail,
                            mediaUrl: text,
                            mediaType: 1,
                            thumbnail: await getBuffer(search.all[0].thumbnail),
                            sourceUrl: text,
                        },
                    },
                }
                await Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
                return fs.unlinkSync(`./${randomName}`);
            } else {
                citel.reply(`❌ File size bigger than 100mb.`);
            }
            fs.unlinkSync(`./${randomName}`);
            


        }
    )
    //---------------------------------------------------------------------------

cmd({
            pattern: "ytmp4",
            alias :['mp4','යුටියුබ්4'],
            desc: "Downloads video from youtube.",
            category: "downloader",
            react: "📹",
            filename: __filename,
            use: '<yt video url>',
        },
        async(Void, citel, text) => {
            const getRandom = (ext) => {
                return `${Math.floor(Math.random() * 10000)}${ext}`;
            };
            if (!text) {
                citel.reply(`❌Please provide me a url`);
                return;
            }
            try {
                let urlYt = text;
                if (!urlYt.startsWith("http")) return citel.reply(`❌ Give youtube link!`);
                let infoYt = await ytdl.getInfo(urlYt);
                if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`❌ Video file too big!`);
                let titleYt = infoYt.videoDetails.title;
                let randomName = getRandom(".mp4");

                const stream = ytdl(urlYt, {
                        filter: (info) => info.itag == 22 || info.itag == 18,
                    })
                    .pipe(fs.createWriteStream(`./${randomName}`));
                await new Promise((resolve, reject) => {
                    stream.on("error", reject);
                    stream.on("finish", resolve);
                });
                let stats = fs.statSync(`./${randomName}`);
                let fileSizeInBytes = stats.size;
                let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
                if (fileSizeInMegabytes <= dlsize) {
                    let yts = require("secktor-pack");
                    let search = await yts(text);
                    let buttonMessage = {
                        video: fs.readFileSync(`./${randomName}`),
                        jpegThumbnail: log0,
                        mimetype: 'video/mp4',
                        fileName: `${titleYt}.mp4`,
                        caption: ` ⿻ Title : ${titleYt}\n ⿻ File Size : ${fileSizeInMegabytes} MB`,
                        headerType: 4,
                        contextInfo: {
                            externalAdReply: {
                                title: titleYt,
                                body: citel.pushName,
                                thumbnail: await getBuffer(search.all[0].thumbnail),
                                renderLargerThumbnail: true,
                                mediaType: 2,
                                mediaUrl: search.all[0].thumbnail,
                                sourceUrl: search.all[0].thumbnail
                            }
                        }
                    }
                 Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
                 return fs.unlinkSync(`./${randomName}`);
                } else {
                    citel.reply(`❌ File size bigger than 100mb.`);
                }
                return fs.unlinkSync(`./${randomName}`);      
            } catch (e) {
                console.log(e)
            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
        pattern: "ytmp3",
       alias :['mp3','යුටියුබ්3'],
        desc: "Downloads audio by yt link.",
        category: "downloader",
       react: "🎼",
        use: '<yt video url>',
    },
    async(Void, citel, text) => {
        const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`;
        };

        if (text.length === 0) {
            reply(`❌ URL is empty! \nSend ${prefix}ytmp3 url`);
            return;
        }
        try {
            let urlYt = text;
            if (!urlYt.startsWith("http")) {
                citel.reply(`❌ Give youtube link!`);
                return;
            }
            let infoYt = await ytdl.getInfo(urlYt);
            //30 MIN
            if (infoYt.videoDetails.lengthSeconds >= videotime) {
                reply(`❌ I can't download that long video!`);
                return;
            }
            let titleYt = infoYt.videoDetails.title;
            let randomName = getRandom(".mp3");
            const stream = ytdl(urlYt, {
                    filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
                })
                .pipe(fs.createWriteStream(`./${randomName}`));
            await new Promise((resolve, reject) => {
                stream.on("error", reject);
                stream.on("finish", resolve);
            });

            let stats = fs.statSync(`./${randomName}`);
            let fileSizeInBytes = stats.size;
            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            if (fileSizeInMegabytes <= dlsize) {
                let yts = require("secktor-pack");
                let search = await yts(text);
                let buttonMessage = {
                    audio: fs.readFileSync(`./${randomName}`),
                    mimetype: 'audio/mpeg',
                    fileName: titleYt + ".mp3",
                    headerType: 4,
                    contextInfo: {
                        externalAdReply: {
                            title: titleYt,
                            body: citel.pushName,
                            renderLargerThumbnail: true,
                            thumbnailUrl: search.all[0].thumbnail,
                            mediaUrl: text,
                            mediaType: 1,
                            thumbnail: await getBuffer(search.all[0].thumbnail),
                            sourceUrl: text,
                        },
                    },
                }
                await Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
                return fs.unlinkSync(`./${randomName}`);
            } else {
                citel.reply(`❌ File size bigger than 100mb.`);
            }
            fs.unlinkSync(`./${randomName}`);
        } catch (e) {
            console.log(e)
        }

    }
)

  //---------------------------------------------------------------------------
cmd({
        pattern: "ytdoc",
        desc: "Downloads audio by yt link as document.",
        category: "downloader",
       react: "📇",
        use: '<ytdoc video url>',
    },
    async(Void, citel, text) => {
        const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`;
        };

        if (text.length === 0) {
            reply(`❌ URL is empty! \nSend ${prefix}ytmp3 url`);
            return;
        }
        try {
            let urlYt = text;
            if (!urlYt.startsWith("http")) {
                citel.reply(`❌ Give youtube link!`);
                return;
            }
            let infoYt = await ytdl.getInfo(urlYt);
            //30 MIN
            if (infoYt.videoDetails.lengthSeconds >= videotime) {
                reply(`❌ I can't download that long video!`);
                return;
            }
            let titleYt = infoYt.videoDetails.title;
            let randomName = getRandom(".mp3");
            const stream = ytdl(urlYt, {
                    filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
                })
                .pipe(fs.createWriteStream(`./${randomName}`));
            await new Promise((resolve, reject) => {
                stream.on("error", reject);
                stream.on("finish", resolve);
            });

            let stats = fs.statSync(`./${randomName}`);
            let fileSizeInBytes = stats.size;
            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            if (fileSizeInMegabytes <= dlsize) {
                let yts = require("secktor-pack");
                let search = await yts(text);
                let buttonMessage = {
                    document: fs.readFileSync(`./${randomName}`),
                    mimetype: 'audio/mpeg',
                    fileName: titleYt + ".mp3",
                    headerType: 4,
                    contextInfo: {
                        externalAdReply: {
                            title: titleYt,
                            body: citel.pushName,
                            renderLargerThumbnail: true,
                            thumbnailUrl: search.all[0].thumbnail,
                            mediaUrl: text,
                            mediaType: 1,
                            thumbnail: await getBuffer(search.all[0].thumbnail),
                            sourceUrl: text,
                        },
                    },
                }
                await Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
                return fs.unlinkSync(`./${randomName}`);
            } else {
                citel.reply(`❌ File size bigger than 100mb.`);
            }
            fs.unlinkSync(`./${randomName}`);
        } catch (e) {
            console.log(e)
        }

    }
)
