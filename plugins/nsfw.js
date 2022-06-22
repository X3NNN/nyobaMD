let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/nsfw/waifu')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'Mesum !!!', m)
}
handler.help = ['asupan2']
handler.tags = ['premium']
handler.command = /^asupan2$/i
handler.premium = true


module.exports = handler

