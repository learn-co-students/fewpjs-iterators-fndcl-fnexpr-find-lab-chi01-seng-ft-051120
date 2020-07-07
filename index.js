const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(obj){
  const found = obj.find(game => game.result === "W")
  if (found !== undefined) {
    return found["year"]
  } else {
    return undefined
  }
}