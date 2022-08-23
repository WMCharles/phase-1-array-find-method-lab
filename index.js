const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

function superbowlWin(array){
    let y = array.find(x => x.result === "W")
    if (y){
        return y.year
    }
    else {
        return undefined
    }
}
