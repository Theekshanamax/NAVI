const {cmd } = require('../lib')
cmd({
        pattern: "insta",
        alias :['in','ඉන්ස්ටගැම්'],
        desc: "download instagram post.",
        category: "downloader",
        react: "🎙️",
        filename: __filename
    },
    async(Void, citel,text,{isCreator}) => {
        const { Insta } = require('../lib')
if(!text) return citel.reply('Need post url.')
let response = await Insta(text)
for (let i=0;i<response.length;i++) {
await Void.sendFileUrl(citel.chat, response[i], `*Downloaded Media from instagram.*`, citel)
}
    });
