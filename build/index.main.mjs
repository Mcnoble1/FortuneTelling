// Automatically generated with Reach 0.1.11 (6e495417)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (6e495417)';
export const _backendVersion = 18;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      4: [ctc0, ctc0, ctc1],
      5: [ctc0, ctc0, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  
  
  const v92 = stdlib.protect(ctc0, await interact.fortunePrice(), {
    at: './index.rsh:17:58:application',
    fs: ['at ./index.rsh:16:9:application call to [unknown function] (defined at: ./index.rsh:16:13:function exp)'],
    msg: 'fortunePrice',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v92],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:19:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v92, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v94], secs: v96, time: v95, didSend: v29, from: v93 } = txn1;
      
      sim_r.txns.push({
        amt: v94,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v94], secs: v96, time: v95, didSend: v29, from: v93 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v103, time: v102, didSend: v36, from: v101 } = txn2;
  ;
  let v104 = stdlib.checkedBigNumberify('./index.rsh:31:23:decimal', stdlib.UInt_max, '0');
  let v105 = v102;
  let v112 = v94;
  
  while (await (async () => {
    const v115 = stdlib.eq(v104, stdlib.checkedBigNumberify('./index.rsh:33:27:decimal', stdlib.UInt_max, '0'));
    
    return v115;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 3,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v119, time: v118, didSend: v51, from: v117 } = txn3;
    ;
    const v120 = stdlib.addressEq(v101, v117);
    stdlib.assert(v120, {
      at: './index.rsh:36:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const v123 = stdlib.protect(ctc0, await interact.getDecision(), {
      at: './index.rsh:40:58:application',
      fs: ['at ./index.rsh:39:11:application call to [unknown function] (defined at: ./index.rsh:39:15:function exp)'],
      msg: 'getDecision',
      who: 'Alice'
      });
    
    const txn4 = await (ctc.sendrecv({
      args: [v93, v101, v112, v123],
      evt_cnt: 1,
      funcNum: 4,
      lct: v118,
      onlyIf: true,
      out_tys: [ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:42:7:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v125], secs: v127, time: v126, didSend: v61, from: v124 } = txn4;
        
        ;
        const cv104 = v125;
        const cv105 = v126;
        const cv112 = v112;
        
        await (async () => {
          const v104 = cv104;
          const v105 = cv105;
          const v112 = cv112;
          
          if (await (async () => {
            const v115 = stdlib.eq(v104, stdlib.checkedBigNumberify('./index.rsh:33:27:decimal', stdlib.UInt_max, '0'));
            
            return v115;})()) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v93,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }})();
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc1, ctc1, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v125], secs: v127, time: v126, didSend: v61, from: v124 } = txn4;
    ;
    const v128 = stdlib.addressEq(v93, v124);
    stdlib.assert(v128, {
      at: './index.rsh:42:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const cv104 = v125;
    const cv105 = v126;
    const cv112 = v112;
    
    v104 = cv104;
    v105 = cv105;
    v112 = cv112;
    
    continue;
    
    
    
    }
  ;
  return;
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v94], secs: v96, time: v95, didSend: v29, from: v93 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v93, v94],
    evt_cnt: 0,
    funcNum: 1,
    lct: v95,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:26:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v103, time: v102, didSend: v36, from: v101 } = txn2;
      
      ;
      const v104 = stdlib.checkedBigNumberify('./index.rsh:31:23:decimal', stdlib.UInt_max, '0');
      const v105 = v102;
      const v112 = v94;
      
      if (await (async () => {
        const v115 = stdlib.eq(v104, stdlib.checkedBigNumberify('./index.rsh:33:27:decimal', stdlib.UInt_max, '0'));
        
        return v115;})()) {
        sim_r.isHalt = false;
        }
      else {
        
        sim_r.txns.push({
          kind: 'from',
          to: v93,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v103, time: v102, didSend: v36, from: v101 } = txn2;
  ;
  let v104 = stdlib.checkedBigNumberify('./index.rsh:31:23:decimal', stdlib.UInt_max, '0');
  let v105 = v102;
  let v112 = v94;
  
  while (await (async () => {
    const v115 = stdlib.eq(v104, stdlib.checkedBigNumberify('./index.rsh:33:27:decimal', stdlib.UInt_max, '0'));
    
    return v115;})()) {
    stdlib.protect(ctc1, await interact.readFortune(), {
      at: './index.rsh:35:27:application',
      fs: ['at ./index.rsh:35:27:application call to [unknown function] (defined at: ./index.rsh:35:27:function exp)', 'at ./index.rsh:35:27:application call to "liftedInteract" (defined at: ./index.rsh:35:27:application)'],
      msg: 'readFortune',
      who: 'Bob'
      });
    
    const txn3 = await (ctc.sendrecv({
      args: [v93, v101, v112],
      evt_cnt: 0,
      funcNum: 3,
      lct: v105,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:36:7:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v119, time: v118, didSend: v51, from: v117 } = txn3;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc2, ctc2, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v119, time: v118, didSend: v51, from: v117 } = txn3;
    ;
    const v120 = stdlib.addressEq(v101, v117);
    stdlib.assert(v120, {
      at: './index.rsh:36:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v125], secs: v127, time: v126, didSend: v61, from: v124 } = txn4;
    ;
    const v128 = stdlib.addressEq(v93, v124);
    stdlib.assert(v128, {
      at: './index.rsh:42:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const cv104 = v125;
    const cv105 = v126;
    const cv112 = v112;
    
    v104 = cv104;
    v105 = cv105;
    v112 = cv112;
    
    continue;
    
    
    
    }
  stdlib.protect(ctc1, await interact.acceptPayment(v94), {
    at: './index.rsh:47:27:application',
    fs: ['at ./index.rsh:47:27:application call to [unknown function] (defined at: ./index.rsh:47:27:function exp)', 'at ./index.rsh:47:27:application call to "liftedInteract" (defined at: ./index.rsh:47:27:application)'],
    msg: 'acceptPayment',
    who: 'Bob'
    });
  
  ;
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAFAAEEBUAmAgEAACI1ADEYQQHVKWRJIls1AYEIWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0mBAwxAAJxJJAxAAEckEkQlNAESRDQESSISTDQCEhFEKGRJNQNXACA1/0k1BRc1/oAE+YuveDT+FlCwNP8xABJENP80A1cgIDT+MgY0AyEEW0IAy0gkNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/VyAgNf4hBFs1/YAEp2XEtLA0/jEAEkQ0/zT+UDT9FlAoSwFXAEhnSCU1ATIGNQJCANZJIwxAADAjEkQjNAESRDQESSISTDQCEhFEKGQ1A4AEmouRdLA0A1cAIDEAIjIGNAOBIFtCAEZIgaCNBogA6iI0ARJENARJIhJMNAISEURJNQUXNf+ABILEYf40/xZQsDT/iADEMQA0/xZQKEsBVwAoZ0gjNQEyBjUCQgBaNf81/jX9Nfw1+zT9IhJBABs0+zT8UDT/FlAoSwFXAEhnSCQ1ATIGNQJCAC6xIrIBNP+yCCOyEDT7sgezQgAAMRklEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQIxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 72,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v94",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v94",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v125",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v125",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000d4738038062000d478339810160408190526200002691620001bf565b6000805543600355604080513381528251602080830191909152830151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a1602081015151620000899034146007620000ef565b604080518082018252600060208083018281523380855286830151518252600193849055439093558451808301939093525182850152835180830385018152606090920190935280519192620000e6926002929091019062000119565b5050506200029e565b81620001155760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001279062000261565b90600052602060002090601f0160209004810192826200014b576000855562000196565b82601f106200016657805160ff191683800117855562000196565b8280016001018555821562000196579182015b828111156200019657825182559160200191906001019062000179565b50620001a4929150620001a8565b5090565b5b80821115620001a45760008155600101620001a9565b6000818303604080821215620001d457600080fd5b80518082016001600160401b0380821183831017156200020457634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200021e57600080fd5b8351945060208501915084821081831117156200024b57634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c908216806200027657607f821691505b602082108114156200029857634e487b7160e01b600052602260045260246000fd5b50919050565b610a9980620002ae6000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f5780632c10a1591461008357806373b4522c1461009657806383230757146100a9578063a209ad4e146100be578063ab53f2c6146100d157005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d61009136600461087a565b6100f4565b61005d6100a436600461087a565b610252565b3480156100b557600080fd5b50600154610070565b61005d6100cc36600461087a565b610409565b3480156100dd57600080fd5b506100e6610594565b60405161007a92919061089d565b6101046001600054146009610631565b61011e8135158061011757506001548235145b600a610631565b600080805560028054610130906108fa565b80601f016020809104026020016040519081016040528092919081815260200182805461015c906108fa565b80156101a95780601f1061017e576101008083540402835291602001916101a9565b820191906000526020600020905b81548152906001019060200180831161018c57829003601f168201915b50505050508060200190518101906101c1919061094b565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516101f49291906109b0565b60405180910390a161020834156008610631565b610210610748565b815181516001600160a01b039091169052805133602091820152808201805160009052805143908301529083015190516040015261024d8161065a565b505050565b610262600460005414600d610631565b61027c8135158061027557506001548235145b600e610631565b60008080556002805461028e906108fa565b80601f01602080910402602001604051908101604052809291908181526020018280546102ba906108fa565b80156103075780601f106102dc57610100808354040283529160200191610307565b820191906000526020600020905b8154815290600101906020018083116102ea57829003601f168201915b505050505080602001905181019061031f91906109ed565b90507f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c633836040516103529291906109b0565b60405180910390a16103663415600b610631565b6020810151610381906001600160a01b03163314600c610631565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b0390811680885289850151821684528989015183526005909555436001558751808501959095529151909116838701525182840152845180830390930183526080909101909352805191926104039260029290910190610793565b50505050565b6104196005600054146011610631565b6104338135158061042c57506001548235145b6012610631565b600080805560028054610445906108fa565b80601f0160208091040260200160405190810160405280929190818152602001828054610471906108fa565b80156104be5780601f10610493576101008083540402835291602001916104be565b820191906000526020600020905b8154815290600101906020018083116104a157829003601f168201915b50505050508060200190518101906104d691906109ed565b6040805133815284356020808301919091528501358183015290519192507f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc0919081900360600190a161052b3415600f610631565b8051610543906001600160a01b031633146010610631565b61054b610748565b815181516001600160a01b039182169052602080840151835192169181019190915280820180518583013590528051439201919091526040808401519151015261024d8161065a565b6000606060005460028080546105a9906108fa565b80601f01602080910402602001604051908101604052809291908181526020018280546105d5906108fa565b80156106225780601f106105f757610100808354040283529160200191610622565b820191906000526020600020905b81548152906001019060200180831161060557829003601f168201915b50505050509050915091509091565b816106565760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6020810151516106eb576040805160608082018352600080835260208084018281528486018381528751516001600160a01b0390811680885289518501518216845289850151890151835260049095554360015587518085019590955291519091168387015251828401528451808303909301835260809091019093528051919261024d9260029290910190610793565b805151602082015160409081015190516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561072e573d6000803e3d6000fd5b506000808055600181905561074590600290610817565b50565b6040805160808101825260009181018281526060820192909252908190815260200161078e60405180606001604052806000815260200160008152602001600081525090565b905290565b82805461079f906108fa565b90600052602060002090601f0160209004810192826107c15760008555610807565b82601f106107da57805160ff1916838001178555610807565b82800160010185558215610807579182015b828111156108075782518255916020019190600101906107ec565b5061081392915061084d565b5090565b508054610823906108fa565b6000825580601f10610833575050565b601f01602090049060005260206000209081019061074591905b5b80821115610813576000815560010161084e565b60006040828403121561087457600080fd5b50919050565b60006040828403121561088c57600080fd5b6108968383610862565b9392505050565b82815260006020604081840152835180604085015260005b818110156108d1578581018301518582016060015282016108b5565b818111156108e3576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061090e57607f821691505b6020821081141561087457634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461094657600080fd5b919050565b60006040828403121561095d57600080fd5b6040516040810181811067ffffffffffffffff8211171561098e57634e487b7160e01b600052604160045260246000fd5b60405261099a8361092f565b8152602083015160208201528091505092915050565b6001600160a01b0383168152813560208083019190915260608201908301358015158082146109de57600080fd5b80604085015250509392505050565b6000606082840312156109ff57600080fd5b6040516060810181811067ffffffffffffffff82111715610a3057634e487b7160e01b600052604160045260246000fd5b604052610a3c8361092f565b8152610a4a6020840161092f565b602082015260408301516040820152809150509291505056fea26469706673582212203beec82ac1768ab5b040986e82e8638baaa38eda8620085c58cefbfd374f066664736f6c634300080c0033`,
  BytecodeLen: 3399,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:21:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:52:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:34:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:37:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
