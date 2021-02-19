//Bismillah
//mau apa kak 
//mau numpang nama doang
//atau mau nyolong case
//kalo numpang atau nyolong izin admin
//jangan di ubah nama creator nya
//Iqbal Rizki Maulana
const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange,
    MessageOptions,
    WALocationMessage,
    WA_MESSAGE_STUB_TYPES,
    ReconnectMode,
    ProxyAgent,
    waChatKey,
    mentionedJid,
    processTime,
} = require('@adiwajshing/baileys')
/*********** LOAD FILE MENU ***********/
const moment = require('moment-timezone')
const { exec } = require('child_process')
const kagApi = require('@kagchi/kag-api')
const fetch = require('node-fetch')
const tiktod = require('tiktok-scraper')
const lolcatjs = require('lolcatjs')
const figlet = require('figlet')
const ffmpeg = require('fluent-ffmpeg')
const fs = require('fs')
const { removeBackgroundFromImageFile } = require('remove.bg')
const imgbb = require('imgbb-uploader')
const lolis = require('lolis.life')
const loli = new lolis()
const speed = require('performance-now')
const cd = 4.32e+7
const crypto = require('crypto')
const qrcode = require("qrcode-terminal")
const axios = require('axios')
/*********** SETTINGS ***********/
const option = JSON.parse(fs.readFileSync('./options/option.json'))
const { ind } = require('./options/language')
const { eng } = require('./options/language')
const {
    botName,
    ownerName,
    VhtearKey,
    ownerNumbers,
    languages,
    botPrefix,
    memberLimitss,
    userDefaultLimit
} = option

/*********** FILE JSON ***********/
const welkom = JSON.parse(fs.readFileSync('./database/json/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/json/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/json/simi.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/json/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/json/level.json'))
const event = JSON.parse(fs.readFileSync('./database/json/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/json/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/json/uang.json'))
const _registered = JSON.parse(fs.readFileSync('./database/json/registered.json'))
const antilink = JSON.parse(fs.readFileSync('./database/json/antilink.json'))
/*********** FILE MENU ***********/
const { help } = require('./database/menu/help')
const { logomaker } = require('./database/menu/logomaker')
const { adult } = require('./database/menu/adult')
const { downloader } = require('./database/menu/downloader')
const { education } = require('./database/menu/education')
const { fun } = require('./database/menu/fun')
const { group } = require('./database/menu/group')
const { imagemaker } = require('./database/menu/imagemaker')
const { information } = require('./database/menu/information')
const { islam } = require('./database/menu/islam')
const { kerang } = require('./database/menu/kerang')
const { meme } = require('./database/menu/meme')
const { music } = require('./database/menu/music')
const { other } = require('./database/menu/other')
const { owner } = require('./database/menu/owner')
const { search } = require('./database/menu/search')
const { sound } = require('./database/menu/sound')
const { stalk } = require('./database/menu/stalk')
const { stayonscreen } = require('./database/menu/stayonscreen')
const { stickermaker } = require('./database/menu/stickermaker')
const { tod } = require('./database/menu/tod')
const { wibu } = require('./database/menu/wibu')
const { xp } = require('./database/menu/xp')
const { limit } = require('./database/menu/limit')
/*********** VCARD ***********/
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:NazwaðŸ–¤\n' // full name
            + 'ORG:Owner Bot;\n' // the organization of the contact
            + 'TEL;type=CELL;type=VOICE;waid=12542123926:+1 (254) 212-3926\n' // WhatsApp ID + phone number
            + 'END:VCARD'
prefix = botPrefix
blocked = []
limitawal = userDefaultLimit
memberlimit = memberLimitss
cr = '*Verified*'

/*********** FUNCTION ***********/
const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
            }
        }

        const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
        }
        const getLimit = (sender) => {
                let position = false
              Object.keys(limit).forEach ((i) => {
                if (limit[position].id === sender) {
                   position = i
                  }
              })
             if (position !== false) {
                return limit[position].limit
            }
        }

        const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/json/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }

        const addATM = (sender) => {
                const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/json/uang.json', JSON.stringify(uang))
        }

        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/json/uang.json', JSON.stringify(uang))
            }
        }

        const checkATMuser = (sender) => {
                let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }

        const bayarLimit = (sender, amount) => {
                let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
            }
        }

        const confirmATM = (sender, amount) => {
                let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/json/uang.json', JSON.stringify(uang))
            }
        }

        const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
            }
        }

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
/*********** SCAN ***********/
async function starts() {
	const iqbl = new WAConnection()
	iqbl.logger.level = 'warn'
	iqbl.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})

	fs.existsSync('./Iqbal.json') && iqbl.loadAuthInfo('./Iqbal.json')
	iqbl.on('connecting', () => {
		start('2', 'Connecting...')
	})
	iqbl.on('open', () => {
		success('2', '[BOT] BOT is now online!')
	})
	await iqbl.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Iqbal.json', JSON.stringify(iqbl.base64EncodedAuthInfo(), null, '\t'))

        console.log('=> Bot succsessfully loaded!')
        lolcatjs.fromString('[DEV] Welcome back Owner! Hope you are doing well-')

	iqbl.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await iqbl.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await iqbl.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Halo @${num.split('@')[0]}\nSelamat datang di group *${mdata.subject}*`
				let buff = await getBuffer(ppimg)
				iqbl.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await iqbl.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Sayonara @${num.split('@')[0]}ðŸ‘‹`
				let buff = await getBuffer(ppimg)
				iqbl.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

		iqbl.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

iqbl.on('chat-update', async (mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = JSON.parse(JSON.stringify(mek)).messages[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
                        const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
                        const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
			const date = moment.tz('Asia/Jakarta').format('DD,MM,YY')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
                        var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
                        const tescuk = ["0@s.whatsapp.net"]
                        const q = args.join(' ')
                        
                        mess = {
                                wait: '[ WAIT ] Sedang di proses⏳ silahkan tunggu ± 1 min!',
                                succsess: 'Berhasil ✔️',
                                levelon: 'leveling telah aktif',
                                levelnoton: `leveling telah mati`,
                                levelnol: '*LEVEL KAKAK MASIH* 0 °-°',
                                error: {
                                	    stick: '[❗] Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker ❌',
                                        Iv: '❌ Link tidak valid ❌',
                                },
                        	only: {
                        	        group: '[❗] Perintah ini hanya bisa di gunakan dalam group! ❌',
                                        ownerG: `[❗] Perintah ini hanya bisa di gunakan oleh owner group! ❌`,
                        	        admin: `[❗] Perintah ini hanya bisa di gunakan oleh admin group! ❌`,
                                        Badmin: `[❗] Perintah ini hanya bisa di gunakan ketika bot menjadi admin! ❌`,
                                        daftarB: `──「 BELUM REGISTER 」──\nHalo kak !\nKamu belum Register nih, register dulu yuk... \n\nCommand : ${prefix}register nama|umur\nContoh : ${prefix}register Iqbal|17`,
                                }
                        }
                        const botNumber = iqbl.user.jid
			const ownerNumber = [ownerNumbers]
			const nomorOwner = [ownerNumbers]
			const isGroup = from.endsWith('@g.us')
			const totalchat = await nzwa.chats.all()
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await iqbl.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
                        const isLevelingOn = isGroup ? _leveling.includes(groupId) : false
                        const NomerOwner = '6281315995628@s.whatsapp.net'
                        const botLangs = languages
                        const isEventon = isGroup ? event.includes(from) : false
                        const isRegister = checkRegisteredUser(sender)
                        const isAntiLink = isGroup ? antilink.includes(from) : false
                        pushname = iqbl.contacts[sender] != undefined ? iqbl.contacts[sender].vname || iqbl.contacts[sender].notify : undefined

			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				iqbl.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				iqbl.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? iqbl.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : nzwa.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
                        const sendImage = (teks) => {
		                iqbl.sendMessage(from, teks, image, {quoted:mek})
		        }
		        const costum = (pesan, tipe, target, target2) => {
			        iqbl.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		        const sendPtt = (teks) => {
		                iqbl.sendMessage(from, audio, mp3, {quoted:mek})
		        }
		  //function leveling
                        if (isGroup && isLevelingOn) {
                                const currentLevel = getLevelingLevel(sender)
                                const checkId = getLevelingId(sender)
                                try {
                                        if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                                        const amountXp = Math.floor(Math.random() * 10) + 500
                                        const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                                        const getLevel = getLevelingLevel(sender)
                                        addLevelingXp(sender, amountXp)
                                        if (requiredXp <= getLevelingXp(sender)) {
                                        addLevelingLevel(sender, 1)
                                        await reply(`*「 LEVEL UP 」*\n\n❑ *Name*: ${sender}\n❑ *XP*: ${getLevelingXp(sender)}\n❑ *Level*: ${getLevel} -> ${getLevelingLevel(sender)}\n\nCongrats!! 🥳🎉`)
                                }
                        } catch (err) {
                                console.error(err)
                        }
                }
                //function check limit
                const checkLimit = (sender) => {
                        let found = false
                        for (let lmt of _limit) {
                                if (lmt.id === sender) {
                                        limitCounts = limitawal - lmt.limit
                                        if (limitCounts <= 0) return nzwa.sendMessage(from,`Limit request anda sudah habis\n\n_Note : Limit akan direset setiap jam 21:00!_`, text,{ quoted: mek})
                                        iqbl.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                                        found = true
                                }
                        }
                        if (found === false) {
                                let obj = { id: sender, limit: 1 }
                                _limit.push(obj)
                                fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
                                iqbl.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                        }
                }

                //funtion limited
                const isLimit = (sender) =>{
                        let position = false
                        for (let i of _limit) {
                                if (i.id === sender) {
                                        let limits = i.limit
                                        if (limits >= limitawal ) {
                                                position = true
                                                iqbl.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                                                return true
                                        } else {
                                                _limit
                                                position = true
                                                return false
                                        }
                                }
                        }
                        if (position === false) {
                                const obj = { id: sender, limit: 1 }
                                _limit.push(obj)
                                fs.writeFileSync('./database/json/limit.json',JSON.stringify(_limit))
                                return false
                        }
                }

                if (isGroup) {
                        try {
                                const getmemex = groupMembers.length
                                if (getmemex <= memberlimit) {
                                        iqbl.groupLeave(from)
                                }
                        } catch {
                                console.error(err)
                        }
                }

                //function balance
                if (isRegister && isGroup ) {
                        const checkATM = checkATMuser(sender)
                        try {
                                if (checkATM === undefined) addATM(sender)
                                const uangsaku = Math.floor(Math.random() * 10) + 90
                                addKoinUser(sender, uangsaku)
                        } catch (err) {
                                console.error(err)
                        }
                }
                if (messagesC.includes("://chat.whatsapp.com/")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		        iqbl.updatePresence(from, Presence.composing)
		        if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Link Group Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
		        setTimeout( () => {
			        iqbl.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		        }, 5000)
		        setTimeout( () => {
			        iqbl.updatePresence(from, Presence.composing)
			        reply("1detik")
		        }, 4000)
		        setTimeout( () => {
			        iqbl.updatePresence(from, Presence.composing)
		                reply("2detik")
		        }, 3000)
		        setTimeout( () => {
			        iqbl.updatePresence(from, Presence.composing)
			        reply("3detik")
		        }, 2000)
		        setTimeout( () => {
			        iqbl.updatePresence(from, Presence.composing)
			        reply("4detik")
		        }, 1000)
		        setTimeout( () => {
			        iqbl.updatePresence(from, Presence.composing)
			        reply("5detik")
		        }, 0)
	        }

			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mCLIENT EXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mCLIENT RECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mCLIENT EXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mCLIENT RECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
                     // Load Commands
			switch(command) {
                                case 'help':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
			                const uangku = checkATMuser(sender)
                                        await costum(help(pushname, prefix, botName, ownerName, reqXp, uangku), text, tescuk, cr)
                                        break
                                case '18+menu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(adult(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'downloadermenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(downloader(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'educationmenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await cost(education(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'funmenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(fun(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'groupmenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(group(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'imagemakermenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(imagemaker(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'informationmenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(information(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'islammenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(islam(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'kerangmenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(kerang(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'logomakermenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(logomaker(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'mememenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(meme(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'musicmenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(music(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'othermenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(other(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'ownermenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(owner(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'searchmenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(search(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'soundmenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(sound(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'stalkmenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(stalk(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'stayonscreenmenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(stayonscreen(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'stickermakermenu':
                                case 'stikermakermenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(stickermaker(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'todmenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(tod(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'wibumenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(wibu(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'xpmenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(xp(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'limitmenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(limit(prefix, botName, ownerName), text, tescuk, cr)
                                        break 
                                        case 'register':
                                        if (isRegister) return  reply(ind.rediregis())
                                        if (!q.includes('|')) return  reply(ind.wrongf())
                                        const namaUser = q.substring(0, q.indexOf('|') - 0)
                                        const umurUser = q.substring(q.lastIndexOf('|') + 1)
                                        const serialUser = createSerial(20)
                                        if(isNaN(umurUser)) return await reply('Umur harus berupa angka!!')
                                        if (namaUser.length >= 30) return reply(`why is your name so long it's a name or a train`)
                                        if (umurUser > 40) return reply(`your age is too  old maximum 40 years`)
                                        if (umurUser < 12) return reply(`your age is too young minimum 12 years`)
                                        veri = sender
                                        if (isGroup) {
                                                addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                                                await reply(ind.registered(namaUser, umurUser, serialUser, time, sender))
                                                addATM(sender)
                                                addLevelingId(sender)
                                                console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                                        } else {
                                                addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                                                await reply(ind.registered(namaUser, umurUser, serialUser, time, sender))
                                                addATM(sender)
                                                addLevelingId(sender)
                                                console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                                        }
				        break
                                        default:
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
