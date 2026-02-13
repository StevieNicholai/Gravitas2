// priority 10

let runsDeathPenalty = (/** @type {Internal.PlayerEvent$Clone} */ event) => {
  if (event.isWasDeath()) {
    /*
    let [server, player] = [event.entity.server, event.entity]
    let message = Text.red("You've been dying too often recently and now you feel weak...")
    var check = false
    server.scheduleInTicks(10, () => {
      if (
        player.persistentData.getInt("timeWhenOldestDeath") != 0 &&
        player.persistentData.getInt("timeWhenLatestDeath") - player.persistentData.getInt("timeWhenOldestDeath") <
          3 * 60 * 60 * 20 // 3 hours
      ) {
        server.runCommandSilent(`/tfc player ${player.username} set saturation 0`)
       check = true
      }
    })
    server.scheduleInTicks(15, () => {
      if (check){
        server.runCommandSilent(`/tfc player ${player.username} set hunger 4`)
    }
    })
    server.scheduleInTicks(25, () => {
      if (check){
        server.runCommandSilent(`/tfc player ${player.username} set water 20`)
      }
    })
    server.scheduleInTicks(35, () => {
    
      if (check){
        server.runCommandSilent(`/effect give ${player.username} minecraft:weakness 2400`)
        player.tell(message)
      }
    }) */
  }
}
