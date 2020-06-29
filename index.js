const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  const winningYear = array.find(function(year) {
    {return year.result === "W"}
  })
  if (typeof winningYear !== 'undefined') {
    return winningYear.year
  } else {
  return winningYear
  }
}
