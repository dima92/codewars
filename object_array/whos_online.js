const whosOnline = (friends) => {
  let obj = {}
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].status === 'online' && friends[i].lastActivity <= 10) {
      if (!obj.online) {
        obj.online = []
      }
      obj.online.push(friends[i].username)
    }
    if (friends[i].status === 'offline') {
      if (!obj.offline) {
        obj.offline = []
      }
      obj.offline.push(friends[i].username)
    }
    if (friends[i].status === 'online' && friends[i].lastActivity > 10) {
      if (!obj.away) {
        obj.away = []
      }
      obj.away.push(friends[i].username)
    }
  }
  return obj
}

console.log(whosOnline([
  {
    username: 'David',
    status: 'online',
    lastActivity: 10
  }, {
    username: 'Lucy',
    status: 'offline',
    lastActivity: 22
  }, {
    username: 'Bob',
    status: 'online',
    lastActivity: 104
  }
]));