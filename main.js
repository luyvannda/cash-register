function checkCashRegister(price, cash, cid) {

  let currencyValue = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  };
  let change = [];

  let changeDue = cash - price;
  console.log(`Change due is $${changeDue}`);

  let totalCid = 0; //find the total cash in drawer

  for (let i = 0; i < cid.length; i++) {
    totalCid += cid[i][1];
  }

  totalCid = totalCid.toFixed(2);
  console.log(`Total cash in drawer is $${totalCid}`);

  // sort cid from highest to lowest unit value
  let cidCopy = cid.slice();

  let highestFirst = cidCopy.sort((a, b) => currencyValue[b[0]] - currencyValue[a[0]]);

  for (let i = 0; i < highestFirst.length; i++) {
    let unit = highestFirst[i][0];
    let amount = highestFirst[i][1];


    //check if the unit can be used for change
    if (changeDue >= currencyValue[unit]) {
      console.log(`Unit can be used for change ${currencyValue[unit]}`);
      // calculate how many units of same type we can use 
      let unitCount = Math.floor(changeDue / currencyValue[unit]);
      console.log(`Unit count = ${unitCount}`);

      // check if the drawer have enough amount of such unit
      if (amount / currencyValue[unit] < unitCount) {
        // Use all available amount of that unit 
        unitCount = Math.floor(amount / currencyValue[unit]);
      }

      //update change due and cash in drawer after change
      let totalChange = unitCount * currencyValue[unit];

      changeDue -= totalChange;
      changeDue = changeDue.toFixed(2)
      console.log(`Change due after change $${changeDue}`)

      totalCid -= totalChange;
      console.log(`Total cash in drawer after change is $${totalCid}`);

      change.push([unit, totalChange])
    }
  }
  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (totalCid == 0) {
    return { status: "CLOSED", change: cid }
  } else {
    return { status: "OPEN", change: change };
  }
}

let result = checkCashRegister(19.5, 20,
  [
    ["PENNY", 0.5], ["NICKEL", 0],
    ["DIME", 0], ["QUARTER", 0],
    ["ONE", 0], ["FIVE", 0],
    ["TEN", 0], ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ]
);
console.log(result);