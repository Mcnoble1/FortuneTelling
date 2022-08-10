'reach 0.1';

export const main = Reach.App(() => {
  const A = Participant('Alice', {
    // Specify Alice's interact interface here
    getDecision: Fun([], UInt),
    fortunePrice: Fun([], UInt),
  });
  const B = Participant('Bob', {
    // Specify Bob's interact interface here
    readFortune: Fun([], Null),
    acceptPayment: Fun([UInt], Null),
  });
  init();
  // The first one to publish deploys the contract
  A.only(() => {
    const fortunePrice = declassify(interact.fortunePrice());
  }) 
  A.publish(fortunePrice)
    .pay(fortunePrice);
  commit();

  B.only(() => {
    // const readFortune = declassify(interact.readFortune());
  });
  B.publish();
  

  // The second one to publish always attaches
  
  var aliceDecision = 0;
  invariant(balance() == fortunePrice)
  while( aliceDecision == 0) {
    commit()
    B.interact.readFortune();
    B.publish();
    commit();

    A.only(() => {
      const getDecision = declassify(interact.getDecision());
    });
    A.publish(getDecision);
    
    aliceDecision = getDecision;
    continue;  
  }
  B.interact.acceptPayment(fortunePrice);

 
  transfer(balance()).to(A);

  commit();

  // write your program here
  exit();
});
