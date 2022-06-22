const roles = {
  /*
  'Role Name': <Minimal Level To Obtain this Role>
  */
  'Newbie': 0,
  'No0B': 5,
  'Warrior': 10,
  'Master': 30,
  'Grandmaster': 40,
  'Epic': 50,
  'Legend': 60,
  'Mythic': 80,
  'Mythical Glory': 100,
  'Dewa Bot': 600
}

module.exports = {
  before(m) {
    let user = global.db.data.users[m.sender]
    let level = user.level
    let role = (Object.entries(roles).sort((a, b) => b[1] - a[1]).find(([,minLevel]) => level >= minLevel) || Object.entries(roles)[0])[0]
    user.role = role
    return true
  }
}
