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
  const ctc2 = stdlib.T_Bool;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      4: [ctc0, ctc1, ctc0],
      5: [ctc0, ctc1, ctc0],
      6: [ctc0, ctc1, ctc0, ctc2]
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
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Address;
  
  
  const v105 = stdlib.protect(ctc0, await interact.fortunePrice(), {
    at: './index.rsh:20:58:application',
    fs: ['at ./index.rsh:19:9:application call to [unknown function] (defined at: ./index.rsh:19:13:function exp)'],
    msg: 'fortunePrice',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v105],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:22:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v105, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v107], secs: v109, time: v108, didSend: v29, from: v106 } = txn1;
      
      sim_r.txns.push({
        amt: v107,
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
  const {data: [v107], secs: v109, time: v108, didSend: v29, from: v106 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v116, time: v115, didSend: v36, from: v114 } = txn2;
  ;
  let v117 = false;
  let v118 = v115;
  
  while (await (async () => {
    const v128 = v117 ? false : true;
    
    return v128;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc1],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v133], secs: v135, time: v134, didSend: v52, from: v132 } = txn3;
    ;
    const v136 = stdlib.addressEq(v114, v132);
    stdlib.assert(v136, {
      at: './index.rsh:41:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    stdlib.protect(ctc2, await interact.showFortune(v133), {
      at: './index.rsh:43:27:application',
      fs: ['at ./index.rsh:43:27:application call to [unknown function] (defined at: ./index.rsh:43:27:function exp)', 'at ./index.rsh:43:27:application call to "liftedInteract" (defined at: ./index.rsh:43:27:application)'],
      msg: 'showFortune',
      who: 'Alice'
      });
    
    const v140 = stdlib.protect(ctc3, await interact.getDecision(), {
      at: './index.rsh:46:55:application',
      fs: ['at ./index.rsh:45:11:application call to [unknown function] (defined at: ./index.rsh:45:15:function exp)'],
      msg: 'getDecision',
      who: 'Alice'
      });
    
    const txn4 = await (ctc.sendrecv({
      args: [v106, v107, v114, v140],
      evt_cnt: 1,
      funcNum: 4,
      lct: v134,
      onlyIf: true,
      out_tys: [ctc3],
      pay: [stdlib.checkedBigNumberify('./index.rsh:48:7:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v142], secs: v144, time: v143, didSend: v66, from: v141 } = txn4;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc4, ctc3],
      waitIfNotPresent: false
      }));
    const {data: [v142], secs: v144, time: v143, didSend: v66, from: v141 } = txn4;
    ;
    const v145 = stdlib.addressEq(v106, v141);
    stdlib.assert(v145, {
      at: './index.rsh:48:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 5,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v149, time: v148, didSend: v75, from: v147 } = txn5;
    ;
    const v150 = stdlib.addressEq(v114, v147);
    stdlib.assert(v150, {
      at: './index.rsh:51:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const cv117 = v142;
    const cv118 = v148;
    
    v117 = cv117;
    v118 = cv118;
    
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
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v107], secs: v109, time: v108, didSend: v29, from: v106 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v106, v107],
    evt_cnt: 0,
    funcNum: 1,
    lct: v108,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:29:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v116, time: v115, didSend: v36, from: v114 } = txn2;
      
      ;
      const v117 = false;
      const v118 = v115;
      
      if (await (async () => {
        const v128 = v117 ? false : true;
        
        return v128;})()) {
        sim_r.isHalt = false;
        }
      else {
        
        sim_r.txns.push({
          kind: 'from',
          to: v114,
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
    tys: [ctc4, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v116, time: v115, didSend: v36, from: v114 } = txn2;
  ;
  let v117 = false;
  let v118 = v115;
  
  while (await (async () => {
    const v128 = v117 ? false : true;
    
    return v128;})()) {
    const v131 = stdlib.protect(ctc1, await interact.readFortune(), {
      at: './index.rsh:39:54:application',
      fs: ['at ./index.rsh:38:11:application call to [unknown function] (defined at: ./index.rsh:38:15:function exp)'],
      msg: 'readFortune',
      who: 'Bob'
      });
    
    const txn3 = await (ctc.sendrecv({
      args: [v106, v107, v114, v131],
      evt_cnt: 1,
      funcNum: 3,
      lct: v118,
      onlyIf: true,
      out_tys: [ctc1],
      pay: [stdlib.checkedBigNumberify('./index.rsh:41:7:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v133], secs: v135, time: v134, didSend: v52, from: v132 } = txn3;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc4, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [v133], secs: v135, time: v134, didSend: v52, from: v132 } = txn3;
    ;
    const v136 = stdlib.addressEq(v114, v132);
    stdlib.assert(v136, {
      at: './index.rsh:41:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc2],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v142], secs: v144, time: v143, didSend: v66, from: v141 } = txn4;
    ;
    const v145 = stdlib.addressEq(v106, v141);
    stdlib.assert(v145, {
      at: './index.rsh:48:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    stdlib.protect(ctc3, await interact.showDecision(v142), {
      at: './index.rsh:50:28:application',
      fs: ['at ./index.rsh:50:28:application call to [unknown function] (defined at: ./index.rsh:50:28:function exp)', 'at ./index.rsh:50:28:application call to "liftedInteract" (defined at: ./index.rsh:50:28:application)'],
      msg: 'showDecision',
      who: 'Bob'
      });
    
    const txn5 = await (ctc.sendrecv({
      args: [v106, v107, v114, v142],
      evt_cnt: 0,
      funcNum: 5,
      lct: v143,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:51:7:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v149, time: v148, didSend: v75, from: v147 } = txn5;
        
        ;
        const cv117 = v142;
        const cv118 = v148;
        
        await (async () => {
          const v117 = cv117;
          const v118 = cv118;
          
          if (await (async () => {
            const v128 = v117 ? false : true;
            
            return v128;})()) {
            sim_r.isHalt = false;
            }
          else {
            
            sim_r.txns.push({
              kind: 'from',
              to: v114,
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
      tys: [ctc4, ctc0, ctc4, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v149, time: v148, didSend: v75, from: v147 } = txn5;
    ;
    const v150 = stdlib.addressEq(v114, v147);
    stdlib.assert(v150, {
      at: './index.rsh:51:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const cv117 = v142;
    const cv118 = v148;
    
    v117 = cv117;
    v118 = cv118;
    
    continue;
    
    
    
    
    
    }
  stdlib.protect(ctc3, await interact.acceptPayment(v107), {
    at: './index.rsh:56:27:application',
    fs: ['at ./index.rsh:56:27:application call to [unknown function] (defined at: ./index.rsh:56:27:function exp)', 'at ./index.rsh:56:27:application call to "liftedInteract" (defined at: ./index.rsh:56:27:application)'],
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
  appApproval: `BiAGAAEFIAQGJgIBAAAiNQAxGEECPylkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJgQMMQAEISSEEDEAAqkkkDEAAQSQSRCEFNAESRDQESSISTDQCEhFEKGRJNQNXKCA1/4AEzJmSXLA0/zEAEkQ0A1cAIDQDJVs0/zQDV0gBFzIGQgE1SCQ0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8lWzX+VyggNf1JNQUXNfyABO7n6CI0/BZRBwhQsDT/MQASRDT/NP4WUDT9UDT8FlEHCFAoSwFXAElnSCEFNQEyBjUCQgErSCEENAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/JVs1/lcoIDX9STUFNfyABHAyLiM0/FCwNP0xABJENP80/hZQNP1QKEsBVwBIZ0gkNQEyBjUCQgDUSSMMQAAvIxJEIzQBEkQ0BEkiEkw0AhIRRChkNQOABJqLkXSwNANXACA0AyVbMQAiMgZCAEZIgaCNBogA6SI0ARJENARJIhJMNAISEURJNQUXNf+ABILEYf40/xZQsDT/iADDMQA0/xZQKEsBVwAoZ0gjNQEyBjUCQgBZNf81/jX9Nfw1+zT+QQATsSKyATT8sggjshA0/bIHs0IAHDT7NPwWUDT9UChLAVcASGdIIQQ1ATIGNQJCABsxGSQSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAjE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 73,
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
                "name": "v107",
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
                "name": "v107",
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
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T8",
                "name": "v133",
                "type": "tuple"
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
                "internalType": "bool",
                "name": "v142",
                "type": "bool"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
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
    "name": "_reach_e5",
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
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T8",
                "name": "v133",
                "type": "tuple"
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
                "internalType": "bool",
                "name": "v142",
                "type": "bool"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
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
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200101e3803806200101e8339810160408190526200002691620001bf565b6000805543600355604080513381528251602080830191909152830151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a1602081015151620000899034146007620000ef565b604080518082018252600060208083018281523380855286830151518252600193849055439093558451808301939093525182850152835180830385018152606090920190935280519192620000e6926002929091019062000119565b5050506200029e565b81620001155760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001279062000261565b90600052602060002090601f0160209004810192826200014b576000855562000196565b82601f106200016657805160ff191683800117855562000196565b8280016001018555821562000196579182015b828111156200019657825182559160200191906001019062000179565b50620001a4929150620001a8565b5090565b5b80821115620001a45760008155600101620001a9565b6000818303604080821215620001d457600080fd5b80518082016001600160401b0380821183831017156200020457634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200021e57600080fd5b8351945060208501915084821081831117156200024b57634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c908216806200027657607f821691505b602082108114156200029857634e487b7160e01b600052602260045260246000fd5b50919050565b610d7080620002ae6000396000f3fe60806040526004361061006e5760003560e01c8063832307571161004b57806383230757146100c15780638e314769146100d6578063a98bf223146100e9578063ab53f2c6146100fc57005b80631e93b0f1146100775780632c10a1591461009b57806335bd162b146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a9366004610a96565b61011f565b6100756100bc366004610ab9565b6102ac565b3480156100cd57600080fd5b50600154610088565b6100756100e4366004610a96565b61047f565b6100756100f7366004610a96565b61062f565b34801561010857600080fd5b50610111610802565b604051610092929190610acb565b61012f600160005414600961089f565b6101498135158061014257506001548235145b600a61089f565b60008080556002805461015b90610b28565b80601f016020809104026020016040519081016040528092919081815260200182805461018790610b28565b80156101d45780601f106101a9576101008083540402835291602001916101d4565b820191906000526020600020905b8154815290600101906020018083116101b757829003601f168201915b50505050508060200190518101906101ec9190610b79565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161021f929190610bec565b60405180910390a16102333415600861089f565b6040805160a081018252600081830181815260608301829052608083018290528252825180840184528181526020808201839052808401918252855184516001600160a01b03909116905285810151845182015283513395019490945280519190915251439201919091526102a7816108c8565b505050565b6102bc600460005414600d61089f565b6102d6813515806102cf57506001548235145b600e61089f565b6000808055600280546102e890610b28565b80601f016020809104026020016040519081016040528092919081815260200182805461031490610b28565b80156103615780601f1061033657610100808354040283529160200191610361565b820191906000526020600020905b81548152906001019060200180831161034457829003601f168201915b50505050508060200190518101906103799190610c24565b604080513381528435602080830191909152850135818301529084013560608201529091507fb393cb3468dcabbebd66dda1bc4096c971cc7e9b91be8f1f3e6dab1ae3cd11799060800160405180910390a16103d73415600b61089f565b60408101516103f2906001600160a01b03163314600c61089f565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b03908116808852898501518452898901518216835260059095554360015587519384019490945290519582019590955293511690830152906080015b604051602081830303815290604052600290805190602001906104799291906109af565b50505050565b61048f600660005414601561089f565b6104a9813515806104a257506001548235145b601661089f565b6000808055600280546104bb90610b28565b80601f01602080910402602001604051908101604052809291908181526020018280546104e790610b28565b80156105345780601f1061050957610100808354040283529160200191610534565b820191906000526020600020905b81548152906001019060200180831161051757829003601f168201915b505050505080602001905181019061054c9190610c97565b90507fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d338360405161057f929190610bec565b60405180910390a16105933415601361089f565b60408101516105ae906001600160a01b03163314601461089f565b6040805160a081018252600081830181815260608084018390526080840183905290835283518085018552828152602080820193909352828401908152855184516001600160a01b0391821690528684015185518501528686015185519116950194909452840151835190151590529151439201919091526102a7816108c8565b61063f600560005414601161089f565b6106598135158061065257506001548235145b601261089f565b60008080556002805461066b90610b28565b80601f016020809104026020016040519081016040528092919081815260200182805461069790610b28565b80156106e45780601f106106b9576101008083540402835291602001916106e4565b820191906000526020600020905b8154815290600101906020018083116106c757829003601f168201915b50505050508060200190518101906106fc9190610c24565b90507f8d528f5e4eb7cb4d65f9857aba0fd34b00701475a124b40508c8832153576b94338360405161072f929190610bec565b60405180910390a16107433415600f61089f565b805161075b906001600160a01b03163314601061089f565b6040805160808101825260008082526020808301828152838501838152606085019390935285516001600160a01b03908116855286830151909152858501511690915290916107af91908501908501610d1d565b151560608281019182526006600055436001556040805184516001600160a01b0390811660208084019190915286015182840152918501519091169181019190915290511515608082015260a001610455565b60006060600054600280805461081790610b28565b80601f016020809104026020016040519081016040528092919081815260200182805461084390610b28565b80156108905780601f1061086557610100808354040283529160200191610890565b820191906000526020600020905b81548152906001019060200180831161087357829003601f168201915b50505050509050915091509091565b816108c45760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6020810151511561093057805160408082015160209092015190516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610916573d6000803e3d6000fd5b506000808055600181905561092d90600290610a33565b50565b6040805160608082018352600080835260208084018281528486018381528751516001600160a01b0390811680885289518501518452895189015182168352600490955543600155875180850195909552915184880152511682840152845180830390930183526080909101909352805191926102a792600292909101905b8280546109bb90610b28565b90600052602060002090601f0160209004810192826109dd5760008555610a23565b82601f106109f657805160ff1916838001178555610a23565b82800160010185558215610a23579182015b82811115610a23578251825591602001919060010190610a08565b50610a2f929150610a69565b5090565b508054610a3f90610b28565b6000825580601f10610a4f575050565b601f01602090049060005260206000209081019061092d91905b5b80821115610a2f5760008155600101610a6a565b600060408284031215610a9057600080fd5b50919050565b600060408284031215610aa857600080fd5b610ab28383610a7e565b9392505050565b600060608284031215610a9057600080fd5b82815260006020604081840152835180604085015260005b81811015610aff57858101830151858201606001528201610ae3565b81811115610b11576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680610b3c57607f821691505b60208210811415610a9057634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610b7457600080fd5b919050565b600060408284031215610b8b57600080fd5b6040516040810181811067ffffffffffffffff82111715610bbc57634e487b7160e01b600052604160045260246000fd5b604052610bc883610b5d565b8152602083015160208201528091505092915050565b801515811461092d57600080fd5b6001600160a01b038316815281356020808301919091526060820190830135610c1481610bde565b8015156040840152509392505050565b600060608284031215610c3657600080fd5b6040516060810181811067ffffffffffffffff82111715610c6757634e487b7160e01b600052604160045260246000fd5b604052610c7383610b5d565b815260208301516020820152610c8b60408401610b5d565b60408201529392505050565b600060808284031215610ca957600080fd5b6040516080810181811067ffffffffffffffff82111715610cda57634e487b7160e01b600052604160045260246000fd5b604052610ce683610b5d565b815260208301516020820152610cfe60408401610b5d565b60408201526060830151610d1181610bde565b60608201529392505050565b600060208284031215610d2f57600080fd5b8135610ab281610bde56fea2646970667358221220bffb4a1b2e2955fb8a9dcae13879eb7675208f9607e0e1e8b1147f2bcb72d6b364736f6c634300080c0033`,
  BytecodeLen: 4126,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:24:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:60:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:36:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:42:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:49:13:after expr stmt semicolon',
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
