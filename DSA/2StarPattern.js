function starPattern4way() {
    for (i = 0; i < 5; i++) {
        let row = "";
        for (j = 0; j < i + 1; j++) {
            row = row + (i + 1);
        }
        console.log(row);
    }
}
// starPattern4way()
function reverseStarPattern(n) {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n; j++) {
            row += j < n - (i + 1) ? " " : "*";
        }
        console.log(row);
    }
}
// reverseStarPattern(4);
function alternateZeroOnePattern(n) {
    let toggle = 0;
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < i + 1; j++) {
            if(toggle % 2 == 0){
                 toggle = 1;
                 row=row+ 1;
            }else{
                toggle=0
                row=row+0;
            };
        }
        console.log(row);
    }
}
// alternateZeroOnePattern(55);

function alternateZeroOnePatterncopilot(n) {
  let toggle = false; // false -> 0, true -> 1 (will flip before write to match your initial 1)

  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      toggle = !toggle;                 // flip each time
      row = row + (toggle ? '1' : '0'); // write '1' then '0' alternating
    }
    console.log(row);
  }
}

alternateZeroOnePatterncopilot(5);
