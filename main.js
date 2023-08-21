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

  let changeDue = cash - price;
  console.log(`Change due is $${changeDue}`);

  let totalCid = 0; //find the total cash in drawer

  for (let i = 0; i < cid.length; i++) {
    totalCid += cid[i][1];
  }

  totalCid = totalCid.toFixed(2);
  console.log(`Total cash in drawer is $${totalCid}`);

  // sort cid from highest to lowest unit value
  cid.sort((a, b) => currencyValue[b[0]] - currencyValue[a[0]]);
  console.log(cid);

  return change;
}


checkCashRegister(19.5, 20,
  [
    ["PENNY", 1.01], ["NICKEL", 2.05],
    ["DIME", 3.1], ["QUARTER", 4.25],
    ["ONE", 90], ["FIVE", 55],
    ["TEN", 20], ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ]
);