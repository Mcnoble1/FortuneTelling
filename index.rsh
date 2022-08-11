'reach 0.1';

export const main = Reach.App(() => {
  const A = Participant('Alice', {
    // Specify Alice's interact interface here
    getDecision: Fun([], Bool),
    fortunePrice: Fun([], UInt),
    showFortune: Fun([Bytes(64)], Null),
  });
  const B = Participant('Bob', {
    // Specify Bob's interact interface here
    readFortune: Fun([], Bytes(64)),
    acceptPayment: Fun([UInt], Null),
    showDecision: Fun([Bool], Null),
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

  });
  B.publish();
  
  // The second one to publish always attaches
  
  var aliceDecision = false;
  invariant(balance() == fortunePrice)
  while( aliceDecision == false) {
    commit()

    B.only(() => {
      const fortune = declassify(interact.readFortune());
    });
    B.publish(fortune);
    commit();
    A.interact.showFortune(fortune);

    A.only(() => {
      const decision = declassify(interact.getDecision());
    });
    A.publish(decision);
    commit();
    B.interact.showDecision(decision);
    B.publish();
    
    aliceDecision = decision;
    continue;  
  }
  B.interact.acceptPayment(fortunePrice);

  transfer(fortunePrice).to(B);

  commit();

  // write your program here
  exit();
});
