'reach 0.1';

export const main = Reach.App(() => {
  const A = Participant('Alice', {
    // Specify Alice's interact interface here
    getDecision: Fun([], UInt),
    fortunePrice: UInt,
    showFortune: Fun([UInt], Null),
    seeOutcome: Fun([], Null),
  });
  const B = Participant('Bob', {
    // Specify Bob's interact interface here
    readFortune: Fun([], UInt),
    acceptFortunePrice: Fun([UInt], Null),
    showDecision: Fun([UInt], Null),
    seeOutcome: Fun([], Null),
  });
  init();

  // The first one to publish deploys the contract
  A.only(() => {
    const fortunePrice = declassify(interact.fortunePrice);
  }) 
  A.publish(fortunePrice)
    .pay(fortunePrice);
  commit();

  B.only(() => {
    interact.acceptFortunePrice(fortunePrice);
  })
  B.publish()
    .pay(fortunePrice);
  
  // The second one to publish always attaches
  
  var aliceDecision = 0;
  invariant(balance() == 2 * fortunePrice)
  while( aliceDecision == 0) {
    commit()

    B.only(() => {
      const fortune = declassify(interact.readFortune());
    });
    B.publish(fortune);
    commit();
    A.interact.showFortune(fortune);
    A.publish();
    commit();

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

  transfer(2 * fortunePrice).to(B);

  each([A, B], () => {
    interact.seeOutcome();
  })

  commit();

  // write your program here
  exit();
});
