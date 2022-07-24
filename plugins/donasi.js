let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [085646606905]
│ • XL [081946945315]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Dana [085646606905]
│ • Gopay [081946945315]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
