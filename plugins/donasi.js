let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Im3 Ooredoo [085877558497]
│ • 3 [089513753428]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Gopay [6289513753428]
│ • Dana [085877558497]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler