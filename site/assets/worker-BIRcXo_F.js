var B=`{
 "cards": [
  {
   "boostMult": 0,
   "boostRadius": 0,
   "coastal": false,
   "cost": 6,
   "costPerOwned": 0,
   "excludes": [],
   "from": null,
   "key": "granary",
   "lifetime": false,
   "mod": {
    "buildCostMul": 1,
    "combat": 0,
    "fleetCombat": 0,
    "fleetSlot": 0,
    "income": 0,
    "incomeMul": 1,
    "plainsMoney": 2,
    "popExpMul": 1,
    "station": 0,
    "techDiscountMul": 0,
    "techExp": 0
   },
   "onBuild": null,
   "onLv": null,
   "popVp": {
    "at": [3,6,9],
    "vp": 2
   },
   "projectionHalf": false,
   "req": "pottery",
   "slotUnlimited": false,
   "turnExp": 0,
   "uid": "granary",
   "unique": false
  },
  {
   "boostMult": 0,
   "boostRadius": 0,
   "coastal": false,
   "cost": 6,
   "costPerOwned": 0,
   "excludes": [],
   "from": null,
   "key": "market",
   "lifetime": false,
   "mod": {
    "buildCostMul": 1,
    "combat": 0,
    "fleetCombat": 0,
    "fleetSlot": 0,
    "income": 1,
    "incomeMul": 1,
    "plainsMoney": 0,
    "popExpMul": 1,
    "station": 0,
    "techDiscountMul": 0,
    "techExp": 0
   },
   "onBuild": null,
   "onLv": {
    "exp": 3,
    "lv": 3,
    "vp": 0
   },
   "popVp": null,
   "projectionHalf": false,
   "req": "wheel",
   "slotUnlimited": false,
   "turnExp": 0,
   "uid": "market",
   "unique": false
  },
  {
   "boostMult": 0,
   "boostRadius": 0,
   "coastal": false,
   "cost": 8,
   "costPerOwned": 0,
   "excludes": [],
   "from": null,
   "key": "library",
   "lifetime": false,
   "mod": {
    "buildCostMul": 1,
    "combat": 0,
    "fleetCombat": 0,
    "fleetSlot": 0,
    "income": 0,
    "incomeMul": 1,
    "plainsMoney": 0,
    "popExpMul": 1,
    "station": 0,
    "techDiscountMul": 1.5,
    "techExp": 2
   },
   "onBuild": null,
   "onLv": null,
   "popVp": null,
   "projectionHalf": false,
   "req": "writing",
   "slotUnlimited": false,
   "turnExp": 0,
   "uid": "library",
   "unique": false
  },
  {
   "boostMult": 0,
   "boostRadius": 0,
   "coastal": false,
   "cost": 12,
   "costPerOwned": 0,
   "excludes": [],
   "from": null,
   "key": "aqueduct",
   "lifetime": false,
   "mod": {
    "buildCostMul": 1,
    "combat": 0,
    "fleetCombat": 0,
    "fleetSlot": 0,
    "income": 0,
    "incomeMul": 1,
    "plainsMoney": 0,
    "popExpMul": 1,
    "station": 0,
    "techDiscountMul": 0,
    "techExp": 0
   },
   "onBuild": {
    "count": "claimedPlains",
    "exp": 0,
    "per": 1,
    "vp": 0
   },
   "onLv": {
    "exp": 0,
    "lv": 4,
    "vp": 3
   },
   "popVp": null,
   "projectionHalf": false,
   "req": "law",
   "slotUnlimited": false,
   "turnExp": 0,
   "uid": "aqueduct",
   "unique": false
  },
  {
   "boostMult": 0,
   "boostRadius": 0,
   "coastal": false,
   "cost": 18,
   "costPerOwned": 0,
   "excludes": [],
   "from": null,
   "key": "hospital",
   "lifetime": false,
   "mod": {
    "buildCostMul": 1,
    "combat": 0,
    "fleetCombat": 0,
    "fleetSlot": 0,
    "income": 0,
    "incomeMul": 1,
    "plainsMoney": 0,
    "popExpMul": 2,
    "station": 0,
    "techDiscountMul": 0,
    "techExp": 0
   },
   "onBuild": null,
   "onLv": {
    "exp": 0,
    "lv": 6,
    "vp": 3
   },
   "popVp": null,
   "projectionHalf": false,
   "req": "biology",
   "slotUnlimited": false,
   "turnExp": 0,
   "uid": "hospital",
   "unique": false
  },
  {
   "boostMult": 0,
   "boostRadius": 0,
   "coastal": false,
   "cost": 4,
   "costPerOwned": 0,
   "excludes": ["stable"],
   "from": null,
   "key": "barracks",
   "lifetime": false,
   "mod": {
    "buildCostMul": 1,
    "combat": 0,
    "fleetCombat": 0,
    "fleetSlot": 0,
    "income": 0,
    "incomeMul": 1,
    "plainsMoney": 0,
    "popExpMul": 1,
    "station": 2,
    "techDiscountMul": 0,
    "techExp": 0
   },
   "onBuild": null,
   "onLv": null,
   "popVp": null,
   "projectionHalf": false,
   "req": "bronze",
   "slotUnlimited": false,
   "turnExp": 0,
   "uid": "barracks",
   "unique": false
  },
  {
   "boostMult": 0,
   "boostRadius": 0,
   "coastal": false,
   "cost": 8,
   "costPerOwned": 0,
   "excludes": ["barracks","arsenal"],
   "from": null,
   "key": "stable",
   "lifetime": false,
   "mod": {
    "buildCostMul": 1,
    "combat": 0,
    "fleetCombat": 0,
    "fleetSlot": 0,
    "income": 0,
    "incomeMul": 1,
    "plainsMoney": 0,
    "popExpMul": 1,
    "station": 0,
    "techDiscountMul": 0,
    "techExp": 0
   },
   "onBuild": null,
   "onLv": null,
   "popVp": null,
   "projectionHalf": true,
   "req": "riding",
   "slotUnlimited": false,
   "turnExp": 0,
   "uid": "stable",
   "unique": false
  },
  {
   "boostMult": 0,
   "boostRadius": 0,
   "coastal": true,
   "cost": 10,
   "costPerOwned": 0,
   "excludes": [],
   "from": null,
   "key": "harbor",
   "lifetime": false,
   "mod": {
    "buildCostMul": 1,
    "combat": 0,
    "fleetCombat": 1,
    "fleetSlot": 2,
    "income": 0,
    "incomeMul": 1,
    "plainsMoney": 0,
    "popExpMul": 1,
    "station": 0,
    "techDiscountMul": 0,
    "techExp": 0
   },
   "onBuild": null,
   "onLv": null,
   "popVp": null,
   "projectionHalf": false,
   "req": "compass",
   "slotUnlimited": false,
   "turnExp": 0,
   "uid": "harbor",
   "unique": false
  },
  {
   "boostMult": 0,
   "boostRadius": 0,
   "coastal": false,
   "cost": 10,
   "costPerOwned": 0,
   "excludes": [],
   "from": null,
   "key": "cathedral",
   "lifetime": false,
   "mod": {
    "buildCostMul": 1,
    "combat": 0,
    "fleetCombat": 0,
    "fleetSlot": 0,
    "income": 0,
    "incomeMul": 1,
    "plainsMoney": 0,
    "popExpMul": 1,
    "station": 0,
    "techDiscountMul": 0,
    "techExp": 0
   },
   "onBuild": {
    "count": "buildings",
    "exp": 0,
    "per": 2,
    "vp": 0
   },
   "onLv": null,
   "popVp": null,
   "projectionHalf": false,
   "req": "construction",
   "slotUnlimited": false,
   "turnExp": 0,
   "uid": "cathedral",
   "unique": false
  },
  {
   "boostMult": 0,
   "boostRadius": 0,
   "coastal": false,
   "cost": 16,
   "costPerOwned": 0,
   "excludes": [],
   "from": null,
   "key": "mine",
   "lifetime": false,
   "mod": {
    "buildCostMul": 1,
    "combat": 0,
    "fleetCombat": 0,
    "fleetSlot": 0,
    "income": 0,
    "incomeMul": 1,
    "plainsMoney": 0,
    "popExpMul": 1,
    "station": 0,
    "techDiscountMul": 0,
    "techExp": 0
   },
   "onBuild": {
    "count": "claimedHills",
    "exp": 0,
    "per": 4,
    "vp": 0
   },
   "onLv": null,
   "popVp": null,
   "projectionHalf": false,
   "req": "steam",
   "slotUnlimited": false,
   "turnExp": 0,
   "uid": "mine",
   "unique": false
  },
  {
   "boostMult": 0,
   "boostRadius": 0,
   "coastal": false,
   "cost": 16,
   "costPerOwned": 0,
   "excludes": [],
   "from": "market",
   "key": "bank",
   "lifetime": false,
   "mod": {
    "buildCostMul": 1,
    "combat": 0,
    "fleetCombat": 0,
    "fleetSlot": 0,
    "income": 3,
    "incomeMul": 1,
    "plainsMoney": 0,
    "popExpMul": 1,
    "station": 0,
    "techDiscountMul": 0,
    "techExp": 0
   },
   "onBuild": null,
   "onLv": {
    "exp": 3,
    "lv": 5,
    "vp": 0
   },
   "popVp": null,
   "projectionHalf": false,
   "req": "accounting",
   "slotUnlimited": false,
   "turnExp": 0,
   "uid": "bank",
   "unique": false
  },
  {
   "boostMult": 0,
   "boostRadius": 0,
   "coastal": false,
   "cost": 14,
   "costPerOwned": 0,
   "excludes": [],
   "from": "library",
   "key": "university",
   "lifetime": false,
   "mod": {
    "buildCostMul": 1,
    "combat": 0,
    "fleetCombat": 0,
    "fleetSlot": 0,
    "income": 0,
    "incomeMul": 1,
    "plainsMoney": 0,
    "popExpMul": 1,
    "station": 0,
    "techDiscountMul": 2,
    "techExp": 3
   },
   "onBuild": null,
   "onLv": null,
   "popVp": null,
   "projectionHalf": false,
   "req": "education",
   "slotUnlimited": false,
   "turnExp": 0,
   "uid": "university",
   "unique": false
  },
  {
   "boostMult": 0,
   "boostRadius": 0,
   "coastal": false,
   "cost": 16,
   "costPerOwned": 0,
   "excludes": ["stable"],
   "from": "barracks",
   "key": "arsenal",
   "lifetime": false,
   "mod": {
    "buildCostMul": 1,
    "combat": 2,
    "fleetCombat": 0,
    "fleetSlot": 0,
    "income": 0,
    "incomeMul": 1,
    "plainsMoney": 0,
    "popExpMul": 1,
    "station": 4,
    "techDiscountMul": 0,
    "techExp": 0
   },
   "onBuild": null,
   "onLv": null,
   "popVp": null,
   "projectionHalf": false,
   "req": "steel",
   "slotUnlimited": false,
   "turnExp": 0,
   "uid": "arsenal",
   "unique": false
  },
  {
   "boostMult": 0,
   "boostRadius": 0,
   "coastal": false,
   "cost": 20,
   "costPerOwned": 0,
   "excludes": [],
   "from": null,
   "key": "factory",
   "lifetime": false,
   "mod": {
    "buildCostMul": 0.5,
    "combat": 0,
    "fleetCombat": 0,
    "fleetSlot": 0,
    "income": 0,
    "incomeMul": 1,
    "plainsMoney": 0,
    "popExpMul": 1,
    "station": 0,
    "techDiscountMul": 0,
    "techExp": 0
   },
   "onBuild": {
    "count": "pop",
    "exp": 0,
    "per": 2,
    "vp": 0
   },
   "onLv": null,
   "popVp": null,
   "projectionHalf": false,
   "req": "industry",
   "slotUnlimited": false,
   "turnExp": 0,
   "uid": "factory",
   "unique": false
  },
  {
   "boostMult": 0.5,
   "boostRadius": 6,
   "coastal": false,
   "cost": 24,
   "costPerOwned": 0,
   "excludes": [],
   "from": null,
   "key": "airfield",
   "lifetime": false,
   "mod": {
    "buildCostMul": 1,
    "combat": 0,
    "fleetCombat": 0,
    "fleetSlot": 0,
    "income": 0,
    "incomeMul": 1,
    "plainsMoney": 0,
    "popExpMul": 1,
    "station": 0,
    "techDiscountMul": 0,
    "techExp": 0
   },
   "onBuild": null,
   "onLv": null,
   "popVp": null,
   "projectionHalf": false,
   "req": "aviation",
   "slotUnlimited": false,
   "turnExp": 0,
   "uid": "airfield",
   "unique": false
  },
  {
   "boostMult": 0,
   "boostRadius": 0,
   "coastal": false,
   "cost": 12,
   "costPerOwned": 0,
   "excludes": [],
   "from": null,
   "key": "broadcast",
   "lifetime": false,
   "mod": {
    "buildCostMul": 1,
    "combat": 0,
    "fleetCombat": 0,
    "fleetSlot": 0,
    "income": 0,
    "incomeMul": 1,
    "plainsMoney": 0,
    "popExpMul": 1,
    "station": 0,
    "techDiscountMul": 0,
    "techExp": 0
   },
   "onBuild": null,
   "onLv": null,
   "popVp": null,
   "projectionHalf": false,
   "req": "telegraph",
   "slotUnlimited": false,
   "turnExp": 2,
   "uid": "broadcast",
   "unique": false
  }
 ],
 "mapIds": ["classic","expansion","archipelago","grand","duel","nile","twins","ring","amazon","silkroad","shatter","heartland"],
 "mapgen": {
  "defaultKnobs": {
   "alluvial": 0.25,
   "aspect": 1.2,
   "bDesert": 0.24,
   "bJungleM": 0.7,
   "bJungleT": 0.8,
   "bSteppe": 0.46,
   "bSwamp": 0.7,
   "bTundra": 0.1,
   "capTop": 1,
   "cluster": 0.18,
   "edge": 0.5,
   "edgeSpan": 0.35,
   "fertileShare": 0.5,
   "freq": 0.11,
   "freqAuto": 1,
   "hillFrac": 0.18,
   "improveIters": 10,
   "lakeFrac": 0.02,
   "landFrac": 0.78,
   "landPerSeat": 82,
   "latMid": 0.5,
   "latSpan": 0.78,
   "layerAim": 0,
   "localBalance": 0.7,
   "minIsland": 4,
   "moistAxis": -1,
   "moistSign": 0,
   "moistZonal": 1,
   "mtnFrac": 0.04,
   "plainsFrac": 0.19,
   "plainsMoveIters": 8,
   "richLand": 1,
   "riverDens": 0.055,
   "settleDry": 2,
   "settleSeed": 0,
   "sitesPerSeat": 3.75,
   "smoothIters": 3,
   "surgeryIters": 12,
   "warp": 0.3
  },
  "kinds": [
   {
    "checks": [],
    "id": "fractal",
    "knobs": [],
    "ranges": [["landFrac",0.4,0.62],["edge",0.1,0.7],["edgeSpan",0.25,0.65],["freq",0.07,0.24],["warp",0,1],["plainsFrac",0.16,0.24],["hillFrac",0.08,0.3],["mtnFrac",0.01,0.12],["riverDens",0.03,0.1],["cluster",0,0.3],["localBalance",0.4,1],["latSpan",0.2,1],["alluvial",0,0.5],["sitesPerSeat",4,5.5],["landPerSeat",70,115],["freqAuto",1,1]],
    "shape": {
     "amp": 0,
     "features": [],
     "jitter": 0
    }
   },
   {
    "checks": [
     {
      "label": "新大陸(西)",
      "max": 0.9,
      "min": 0.38,
      "t": "land",
      "u0": 0.1,
      "u1": 0.28,
      "v0": 0.12,
      "v1": 0.85
     },
     {
      "label": "旧大陸(東)",
      "max": 0.9,
      "min": 0.45,
      "t": "land",
      "u0": 0.48,
      "u1": 0.88,
      "v0": 0.1,
      "v1": 0.6
     },
     {
      "label": "新旧を隔てる大洋",
      "max": 1,
      "min": 0.8,
      "t": "water",
      "u0": 0.31,
      "u1": 0.44,
      "v0": 0.3,
      "v1": 0.9
     },
     {
      "label": "北極海",
      "max": 1,
      "min": 0.7,
      "t": "water",
      "u0": 0.1,
      "u1": 0.9,
      "v0": 0,
      "v1": 0.08
     },
     {
      "label": "南極海",
      "max": 1,
      "min": 0.85,
      "t": "water",
      "u0": 0.1,
      "u1": 0.9,
      "v0": 0.9,
      "v1": 1
     },
     {
      "label": "北岸の湾(北岸が一直線でない)",
      "max": 0.9,
      "min": 0.07,
      "t": "water",
      "u0": 0.63,
      "u1": 0.78,
      "v0": 0.13,
      "v1": 0.19
     }
    ],
    "id": "earth",
    "knobs": [["aspect",2],["landFrac",0.32],["latSpan",1],["latMid",0.5],["moistAxis",1],["moistSign",1],["edge",0.3],["edgeSpan",0.14],["freqAuto",1],["warp",0.45],["riverDens",0.06],["moistZonal",0.75],["minIsland",8]],
    "ranges": [["plainsFrac",0.19,0.24],["hillFrac",0.12,0.24],["mtnFrac",0.03,0.09],["cluster",0,0.12],["localBalance",0.75,1],["alluvial",0.15,0.45],["sitesPerSeat",4.4,5.6],["landPerSeat",72,108],["freq",0.1,0.17]],
    "shape": {
     "amp": 1,
     "features": [
      {
       "amp": 1,
       "f": "ridge",
       "p": 2,
       "ru": 0.115,
       "rv": 0.1,
       "u0": 0.17,
       "u1": 0.16,
       "v0": 0.12,
       "v1": 0.32
      },
      {
       "amp": 0.85,
       "f": "ridge",
       "p": 2,
       "ru": 0.05,
       "rv": 0.1,
       "u0": 0.11,
       "u1": 0.25,
       "v0": 0.14,
       "v1": 0.13
      },
      {
       "amp": 0.75,
       "f": "ridge",
       "p": 2,
       "ru": 0.042,
       "rv": 0.05,
       "u0": 0.19,
       "u1": 0.25,
       "v0": 0.35,
       "v1": 0.5
      },
      {
       "amp": 1,
       "f": "ridge",
       "p": 2,
       "ru": 0.1,
       "rv": 0.1,
       "u0": 0.28,
       "u1": 0.23,
       "v0": 0.55,
       "v1": 0.84
      },
      {
       "amp": 1,
       "f": "ridge",
       "p": 2,
       "ru": 0.125,
       "rv": 0.125,
       "u0": 0.53,
       "u1": 0.82,
       "v0": 0.23,
       "v1": 0.2
      },
      {
       "amp": 0.42,
       "f": "ridge",
       "p": 2,
       "ru": 0.032,
       "rv": 0.06,
       "u0": 0.497,
       "u1": 0.489,
       "v0": 0.23,
       "v1": 0.145
      },
      {
       "amp": 0.42,
       "f": "ridge",
       "p": 2,
       "ru": 0.03,
       "rv": 0.062,
       "u0": 0.612,
       "u1": 0.616,
       "v0": 0.215,
       "v1": 0.128
      },
      {
       "amp": 0.42,
       "f": "ridge",
       "p": 2,
       "ru": 0.03,
       "rv": 0.066,
       "u0": 0.703,
       "u1": 0.708,
       "v0": 0.205,
       "v1": 0.108
      },
      {
       "amp": 0.42,
       "f": "ridge",
       "p": 2,
       "ru": 0.03,
       "rv": 0.06,
       "u0": 0.8,
       "u1": 0.806,
       "v0": 0.21,
       "v1": 0.132
      },
      {
       "amp": 0.42,
       "f": "ridge",
       "p": 2,
       "ru": 0.032,
       "rv": 0.056,
       "u0": 0.878,
       "u1": 0.9,
       "v0": 0.23,
       "v1": 0.15
      },
      {
       "amp": -0.9,
       "f": "blob",
       "p": 2,
       "ru": 0.038,
       "rv": 0.115,
       "u0": 0.552,
       "u1": 0,
       "v0": 0.162,
       "v1": 0
      },
      {
       "amp": -0.9,
       "f": "blob",
       "p": 2,
       "ru": 0.048,
       "rv": 0.12,
       "u0": 0.657,
       "u1": 0,
       "v0": 0.14,
       "v1": 0
      },
      {
       "amp": -0.9,
       "f": "blob",
       "p": 2,
       "ru": 0.046,
       "rv": 0.12,
       "u0": 0.752,
       "u1": 0,
       "v0": 0.14,
       "v1": 0
      },
      {
       "amp": -0.9,
       "f": "blob",
       "p": 2,
       "ru": 0.04,
       "rv": 0.112,
       "u0": 0.84,
       "u1": 0,
       "v0": 0.152,
       "v1": 0
      },
      {
       "amp": 0.8,
       "f": "ridge",
       "p": 2,
       "ru": 0.045,
       "rv": 0.08,
       "u0": 0.55,
       "u1": 0.57,
       "v0": 0.27,
       "v1": 0.41
      },
      {
       "amp": 1.05,
       "f": "blob",
       "p": 2,
       "ru": 0.15,
       "rv": 0.3,
       "u0": 0.57,
       "u1": 0,
       "v0": 0.6,
       "v1": 0
      },
      {
       "amp": 0.95,
       "f": "blob",
       "p": 2,
       "ru": 0.11,
       "rv": 0.14,
       "u0": 0.72,
       "u1": 0,
       "v0": 0.4,
       "v1": 0
      },
      {
       "amp": 1,
       "f": "blob",
       "p": 2,
       "ru": 0.1,
       "rv": 0.105,
       "u0": 0.81,
       "u1": 0,
       "v0": 0.73,
       "v1": 0
      },
      {
       "amp": 0.8,
       "f": "blob",
       "p": 2,
       "ru": 0.048,
       "rv": 0.042,
       "u0": 0.78,
       "u1": 0,
       "v0": 0.56,
       "v1": 0
      },
      {
       "amp": -0.85,
       "f": "blob",
       "p": 1,
       "ru": 0.095,
       "rv": 0.52,
       "u0": 0.37,
       "u1": 0,
       "v0": 0.55,
       "v1": 0
      },
      {
       "amp": -0.55,
       "f": "blob",
       "p": 1,
       "ru": 0.62,
       "rv": 0.1,
       "u0": 0.5,
       "u1": 0,
       "v0": 0.02,
       "v1": 0
      },
      {
       "amp": -0.55,
       "f": "blob",
       "p": 1,
       "ru": 0.62,
       "rv": 0.12,
       "u0": 0.5,
       "u1": 0,
       "v0": 0.98,
       "v1": 0
      },
      {
       "amp": -0.7,
       "f": "ridge",
       "p": 1,
       "ru": 0.085,
       "rv": 0.12,
       "u0": 0.02,
       "u1": 0.1,
       "v0": 0.12,
       "v1": 0.92
      },
      {
       "amp": -0.75,
       "f": "ridge",
       "p": 1,
       "ru": 0.15,
       "rv": 0.13,
       "u0": 1,
       "u1": 0.98,
       "v0": 0.08,
       "v1": 0.94
      },
      {
       "amp": -0.65,
       "f": "blob",
       "p": 1,
       "ru": 0.145,
       "rv": 0.17,
       "u0": 0.68,
       "u1": 0,
       "v0": 0.78,
       "v1": 0
      },
      {
       "amp": -0.55,
       "f": "blob",
       "p": 1,
       "ru": 0.12,
       "rv": 0.22,
       "u0": 0.89,
       "u1": 0,
       "v0": 0.52,
       "v1": 0
      },
      {
       "amp": 1.1,
       "f": "blob",
       "p": 2,
       "ru": 0.07,
       "rv": 0.065,
       "u0": 0.31,
       "u1": 0,
       "v0": 0.11,
       "v1": 0
      },
      {
       "amp": 1.15,
       "f": "blob",
       "p": 2,
       "ru": 0.065,
       "rv": 0.055,
       "u0": 0.395,
       "u1": 0,
       "v0": 0.14,
       "v1": 0
      },
      {
       "amp": 0.95,
       "f": "blob",
       "p": 2,
       "ru": 0.05,
       "rv": 0.045,
       "u0": 0.45,
       "u1": 0,
       "v0": 0.195,
       "v1": 0
      }
     ],
     "jitter": 0.03
    }
   },
   {
    "checks": [
     {
      "label": "西の大洋",
      "max": 1,
      "min": 0.9,
      "t": "water",
      "u0": 0,
      "u1": 0.1,
      "v0": 0.3,
      "v1": 1
     },
     {
      "label": "北海(ブリテンを島にする)",
      "max": 1,
      "min": 0.48,
      "t": "water",
      "u0": 0.26,
      "u1": 0.36,
      "v0": 0.3,
      "v1": 0.46
     },
     {
      "label": "バルト海(スカンジナビアを半島にする)",
      "max": 1,
      "min": 0.4,
      "t": "water",
      "u0": 0.52,
      "u1": 0.62,
      "v0": 0.24,
      "v1": 0.36
     },
     {
      "label": "地中海(東西に長い)",
      "max": 1,
      "min": 0.6,
      "t": "water",
      "u0": 0.34,
      "u1": 0.78,
      "v0": 0.84,
      "v1": 0.9
     },
     {
      "label": "黒海",
      "max": 1,
      "min": 0.3,
      "t": "water",
      "u0": 0.76,
      "u1": 0.88,
      "v0": 0.62,
      "v1": 0.72
     },
     {
      "label": "東の大平原",
      "max": 1,
      "min": 0.74,
      "t": "land",
      "u0": 0.78,
      "u1": 1,
      "v0": 0.3,
      "v1": 0.6
     },
     {
      "label": "中央の大陸(内海の北岸の背後)",
      "max": 1,
      "min": 0.73,
      "t": "land",
      "u0": 0.42,
      "u1": 0.7,
      "v0": 0.45,
      "v1": 0.62
     },
     {
      "label": "北アフリカの帯",
      "max": 1,
      "min": 0.48,
      "t": "land",
      "u0": 0.18,
      "u1": 0.6,
      "v0": 0.93,
      "v1": 1
     }
    ],
    "id": "europe",
    "knobs": [["aspect",1.05],["landFrac",0.55],["latSpan",0.72],["latMid",1],["edge",0.05],["edgeSpan",0.08],["freqAuto",0.7],["warp",0.35],["riverDens",0.075],["moistAxis",2],["moistSign",-1],["moistZonal",0.7],["bTundra",0.12],["bDesert",0.2],["bSteppe",0.42],["bSwamp",0.86],["bJungleT",0.95],["bJungleM",0.95],["minIsland",5]],
    "ranges": [["plainsFrac",0.17,0.23],["hillFrac",0.14,0.24],["mtnFrac",0.05,0.1],["cluster",0.04,0.2],["localBalance",0.65,1],["alluvial",0.25,0.45],["sitesPerSeat",4.2,5.4],["landPerSeat",72,108],["freq",0.11,0.17]],
    "shape": {
     "amp": 1,
     "features": [
      {
       "amp": 0.58,
       "f": "ridge",
       "p": 1,
       "ru": 0.092,
       "rv": 0.095,
       "u0": 0.235,
       "u1": 0.4,
       "v0": 0.64,
       "v1": 0.58
      },
      {
       "amp": 0.58,
       "f": "ridge",
       "p": 1,
       "ru": 0.092,
       "rv": 0.11,
       "u0": 0.4,
       "u1": 0.66,
       "v0": 0.58,
       "v1": 0.51
      },
      {
       "amp": 0.58,
       "f": "ridge",
       "p": 1,
       "ru": 0.082,
       "rv": 0.095,
       "u0": 0.61,
       "u1": 0.86,
       "v0": 0.43,
       "v1": 0.38
      },
      {
       "amp": 0.58,
       "f": "ridge",
       "p": 1,
       "ru": 0.1,
       "rv": 0.095,
       "u0": 0.64,
       "u1": 1.04,
       "v0": 0.61,
       "v1": 0.6
      },
      {
       "amp": 0.58,
       "f": "ridge",
       "p": 1,
       "ru": 0.1,
       "rv": 0.11,
       "u0": 0.74,
       "u1": 1.04,
       "v0": 0.17,
       "v1": 0.13
      },
      {
       "amp": 0.6,
       "f": "blob",
       "p": 1,
       "ru": 0.175,
       "rv": 0.255,
       "u0": 0.915,
       "u1": 0,
       "v0": 0.4,
       "v1": 0
      },
      {
       "amp": 0.72,
       "f": "blob",
       "p": 1,
       "ru": 0.108,
       "rv": 0.098,
       "u0": 0.237,
       "u1": 0,
       "v0": 0.775,
       "v1": 0
      },
      {
       "amp": 1.05,
       "f": "ridge",
       "p": 1,
       "ru": 0.04,
       "rv": 0.052,
       "u0": 0.445,
       "u1": 0.548,
       "v0": 0.63,
       "v1": 0.79
      },
      {
       "amp": 0.85,
       "f": "blob",
       "p": 1,
       "ru": 0.036,
       "rv": 0.03,
       "u0": 0.5,
       "u1": 0,
       "v0": 0.828,
       "v1": 0
      },
      {
       "amp": 0.65,
       "f": "blob",
       "p": 1,
       "ru": 0.132,
       "rv": 0.1,
       "u0": 0.63,
       "u1": 0,
       "v0": 0.7,
       "v1": 0
      },
      {
       "amp": 0.95,
       "f": "ridge",
       "p": 1,
       "ru": 0.036,
       "rv": 0.05,
       "u0": 0.62,
       "u1": 0.636,
       "v0": 0.752,
       "v1": 0.845
      },
      {
       "amp": 0.68,
       "f": "ridge",
       "p": 1,
       "ru": 0.062,
       "rv": 0.055,
       "u0": 0.69,
       "u1": 1.02,
       "v0": 0.778,
       "v1": 0.766
      },
      {
       "amp": 0.85,
       "f": "ridge",
       "p": 1,
       "ru": 0.044,
       "rv": 0.058,
       "u0": 0.86,
       "u1": 0.876,
       "v0": 0.83,
       "v1": 1.02
      },
      {
       "amp": 0.62,
       "f": "blob",
       "p": 1,
       "ru": 0.16,
       "rv": 0.13,
       "u0": 0.985,
       "u1": 0,
       "v0": 0.905,
       "v1": 0
      },
      {
       "amp": 0.78,
       "f": "ridge",
       "p": 1,
       "ru": 0.07,
       "rv": 0.086,
       "u0": 0.13,
       "u1": 0.45,
       "v0": 0.958,
       "v1": 0.916
      },
      {
       "amp": 0.72,
       "f": "ridge",
       "p": 1,
       "ru": 0.062,
       "rv": 0.072,
       "u0": 0.47,
       "u1": 0.845,
       "v0": 0.972,
       "v1": 1
      },
      {
       "amp": 0.8,
       "f": "ridge",
       "p": 1,
       "ru": 0.09,
       "rv": 0.092,
       "u0": 0.43,
       "u1": 0.49,
       "v0": 0.35,
       "v1": 0.18
      },
      {
       "amp": 0.8,
       "f": "ridge",
       "p": 1,
       "ru": 0.092,
       "rv": 0.076,
       "u0": 0.52,
       "u1": 0.66,
       "v0": 0.16,
       "v1": 0.048
      },
      {
       "amp": 0.62,
       "f": "blob",
       "p": 1,
       "ru": 0.086,
       "rv": 0.12,
       "u0": 0.678,
       "u1": 0,
       "v0": 0.186,
       "v1": 0
      },
      {
       "amp": 1.05,
       "f": "ridge",
       "p": 1,
       "ru": 0.062,
       "rv": 0.075,
       "u0": 0.205,
       "u1": 0.242,
       "v0": 0.488,
       "v1": 0.34
      },
      {
       "amp": 1,
       "f": "blob",
       "p": 1,
       "ru": 0.055,
       "rv": 0.065,
       "u0": 0.148,
       "u1": 0,
       "v0": 0.437,
       "v1": 0
      },
      {
       "amp": -1,
       "f": "ridge",
       "p": 1,
       "ru": 0.105,
       "rv": 0.47,
       "u0": 0.01,
       "u1": 0.04,
       "v0": 0.23,
       "v1": 1.06
      },
      {
       "amp": -0.75,
       "f": "ridge",
       "p": 1,
       "ru": 0.058,
       "rv": 0.23,
       "u0": 0.075,
       "u1": 0.1,
       "v0": 0.56,
       "v1": 0.9
      },
      {
       "amp": -0.85,
       "f": "blob",
       "p": 1,
       "ru": 0.086,
       "rv": 0.088,
       "u0": 0.172,
       "u1": 0,
       "v0": 0.598,
       "v1": 0
      },
      {
       "amp": -0.85,
       "f": "blob",
       "p": 1,
       "ru": 0.085,
       "rv": 0.075,
       "u0": 0.135,
       "u1": 0,
       "v0": 0.3,
       "v1": 0
      },
      {
       "amp": -0.95,
       "f": "blob",
       "p": 1,
       "ru": 0.235,
       "rv": 0.165,
       "u0": 0.175,
       "u1": 0,
       "v0": 0.1,
       "v1": 0
      },
      {
       "amp": -0.8,
       "f": "blob",
       "p": 1,
       "ru": 0.13,
       "rv": 0.105,
       "u0": 0.29,
       "u1": 0,
       "v0": 0.185,
       "v1": 0
      },
      {
       "amp": -0.95,
       "f": "ridge",
       "p": 1,
       "ru": 0.25,
       "rv": 0.11,
       "u0": 0.4,
       "u1": 1.04,
       "v0": -0.03,
       "v1": -0.03
      },
      {
       "amp": -0.95,
       "f": "blob",
       "p": 1,
       "ru": 0.096,
       "rv": 0.125,
       "u0": 0.322,
       "u1": 0,
       "v0": 0.375,
       "v1": 0
      },
      {
       "amp": -0.92,
       "f": "ridge",
       "p": 1,
       "ru": 0.038,
       "rv": 0.048,
       "u0": 0.185,
       "u1": 0.3,
       "v0": 0.52,
       "v1": 0.5
      },
      {
       "amp": -1.05,
       "f": "ridge",
       "p": 1,
       "ru": 0.052,
       "rv": 0.06,
       "u0": 0.455,
       "u1": 0.725,
       "v0": 0.398,
       "v1": 0.29
      },
      {
       "amp": -0.92,
       "f": "ridge",
       "p": 1,
       "ru": 0.044,
       "rv": 0.054,
       "u0": 0.555,
       "u1": 0.585,
       "v0": 0.31,
       "v1": 0.145
      },
      {
       "amp": -1,
       "f": "ridge",
       "p": 1,
       "ru": 0.052,
       "rv": 0.055,
       "u0": 0.115,
       "u1": 0.33,
       "v0": 0.888,
       "v1": 0.822
      },
      {
       "amp": -1,
       "f": "ridge",
       "p": 1,
       "ru": 0.052,
       "rv": 0.058,
       "u0": 0.33,
       "u1": 0.5,
       "v0": 0.822,
       "v1": 0.868
      },
      {
       "amp": -1,
       "f": "ridge",
       "p": 1,
       "ru": 0.052,
       "rv": 0.06,
       "u0": 0.5,
       "u1": 0.66,
       "v0": 0.868,
       "v1": 0.888
      },
      {
       "amp": -1,
       "f": "ridge",
       "p": 1,
       "ru": 0.052,
       "rv": 0.062,
       "u0": 0.66,
       "u1": 0.8,
       "v0": 0.888,
       "v1": 0.912
      },
      {
       "amp": -0.95,
       "f": "blob",
       "p": 1,
       "ru": 0.078,
       "rv": 0.062,
       "u0": 0.372,
       "u1": 0,
       "v0": 0.752,
       "v1": 0
      },
      {
       "amp": -0.9,
       "f": "ridge",
       "p": 1,
       "ru": 0.032,
       "rv": 0.046,
       "u0": 0.5,
       "u1": 0.56,
       "v0": 0.64,
       "v1": 0.775
      },
      {
       "amp": -0.9,
       "f": "ridge",
       "p": 1,
       "ru": 0.038,
       "rv": 0.052,
       "u0": 0.658,
       "u1": 0.672,
       "v0": 0.76,
       "v1": 0.862
      },
      {
       "amp": -1,
       "f": "blob",
       "p": 1,
       "ru": 0.105,
       "rv": 0.064,
       "u0": 0.822,
       "u1": 0,
       "v0": 0.674,
       "v1": 0
      },
      {
       "amp": -0.8,
       "f": "ridge",
       "p": 1,
       "ru": 0.028,
       "rv": 0.03,
       "u0": 0.762,
       "u1": 0.686,
       "v0": 0.702,
       "v1": 0.792
      },
      {
       "amp": 0.45,
       "f": "ridge",
       "p": 1,
       "ru": 0.026,
       "rv": 0.02,
       "u0": 0.38,
       "u1": 0.49,
       "v0": 0.63,
       "v1": 0.6
      },
      {
       "amp": 0.42,
       "f": "ridge",
       "p": 1,
       "ru": 0.02,
       "rv": 0.015,
       "u0": 0.268,
       "u1": 0.335,
       "v0": 0.7,
       "v1": 0.692
      },
      {
       "amp": 0.42,
       "f": "ridge",
       "p": 1,
       "ru": 0.024,
       "rv": 0.018,
       "u0": 0.585,
       "u1": 0.68,
       "v0": 0.645,
       "v1": 0.56
      },
      {
       "amp": 0.38,
       "f": "ridge",
       "p": 1,
       "ru": 0.02,
       "rv": 0.018,
       "u0": 0.525,
       "u1": 0.62,
       "v0": 0.68,
       "v1": 0.762
      },
      {
       "amp": 0.42,
       "f": "ridge",
       "p": 1,
       "ru": 0.028,
       "rv": 0.028,
       "u0": 0.395,
       "u1": 0.56,
       "v0": 0.33,
       "v1": 0.09
      },
      {
       "amp": 0.5,
       "f": "ridge",
       "p": 1,
       "ru": 0.026,
       "rv": 0.018,
       "u0": 0.895,
       "u1": 1.01,
       "v0": 0.7,
       "v1": 0.688
      },
      {
       "amp": 0.42,
       "f": "ridge",
       "p": 1,
       "ru": 0.024,
       "rv": 0.016,
       "u0": 0.735,
       "u1": 0.92,
       "v0": 0.805,
       "v1": 0.795
      },
      {
       "amp": 0.38,
       "f": "ridge",
       "p": 1,
       "ru": 0.026,
       "rv": 0.016,
       "u0": 0.16,
       "u1": 0.4,
       "v0": 0.96,
       "v1": 0.93
      }
     ],
     "jitter": 0.026
    }
   }
  ],
  "shipRanges": [["landFrac",0.4,0.62],["edge",0.1,0.7],["edgeSpan",0.25,0.65],["freq",0.07,0.24],["warp",0,1],["plainsFrac",0.16,0.24],["hillFrac",0.08,0.3],["mtnFrac",0.01,0.12],["riverDens",0.03,0.1],["cluster",0,0.3],["localBalance",0.4,1],["latSpan",0.2,1],["alluvial",0,0.5],["sitesPerSeat",4,5.5],["landPerSeat",70,115],["freqAuto",1,1]]
 },
 "maps": {
  "amazon": {
   "capitals": ["1","2","3","4"],
   "hexes": [[0,0,"M","2",9],[0,1,"M","2",9],[0,2,"F","X",8],[0,3,"^","X",7],[0,4,"^","X",6],[0,5,"^","X",5],[0,6,"^","X",5],[0,7,"^","X",5],[0,8,"^","3",5],[0,9,"^","3",4],[0,10,"^","3",3],[0,11,"F","3",2],[0,12,"F","3",2],[0,13,"F","3",2],[0,14,"^","3",3],[0,15,"F","3",4],[0,16,"F","3",5],[0,17,"^","3",6],[0,18,"^","Y",6],[0,19,"F","Y",5],[0,20,"^","Y",4],[0,21,"^","Y",4],[0,22,"F","Y",4],[0,23,"^","Y",4],[0,24,"^","Y",4],[0,25,"F","Y",5],[1,0,"M","2",8],[1,1,"M","2",8],[1,2,"J","X",7],[1,3,"J","X",6],[1,4,"J","X",5],[1,5,"J","X",4],[1,6,"J","X",4],[1,7,"J","X",4],[1,8,"J","3",4],[1,9,"J","3",3],[1,10,"J","3",2],[1,11,".","3",1],[1,12,".","3",1],[1,13,".","3",2],[1,14,"J","3",3],[1,15,"J","3",4],[1,16,"J","3",5],[1,17,"J","3",6],[1,18,"J","Y",5],[1,19,"J","Y",4],[1,20,"J","Y",3],[1,21,"J","Y",3],[1,22,"J","Y",3],[1,23,"J","Y",3],[1,24,"J","Y",4],[1,25,"J","Y",5],[2,0,"M","2",8],[2,1,"M","2",7],[2,2,"J","2",7],[2,3,"J","X",6],[2,4,"J","X",5],[2,5,"J","X",4],[2,6,"J","X",3],[2,7,"J","X",3],[2,8,"J","X",3],[2,9,"J","3",3],[2,10,".","3",2],[2,11,".","3",1],[2,12,"S","3",0],[2,13,".","3",1],[2,14,".","3",2],[2,15,"J","3",3],[2,16,"J","3",4],[2,17,".","3",5],[2,18,"J","Y",5],[2,19,"J","Y",4],[2,20,"J","Y",3],[2,21,"J","Y",2],[2,22,"J","Y",2],[2,23,"W","Y",2],[2,24,"W","Y",3],[2,25,"W","Y",4],[3,0,"M","2",7],[3,1,"M","2",6],[3,2,"J","2",6],[3,3,"J","X",5],[3,4,"J","X",4],[3,5,"J","X",3],[3,6,"J","X",2],[3,7,"J","X",2],[3,8,"J","X",2],[3,9,"J","3",3],[3,10,"J","3",2],[3,11,"J","3",1],[3,12,".","3",1],[3,13,"J","3",2],[3,14,"~","3",3],[3,15,"J","3",4],[3,16,"J","3",5],[3,17,"J","B",5],[3,18,"J","Y",4],[3,19,"J","Y",3],[3,20,".","Y",2],[3,21,"J","Y",1],[3,22,"J","Y",1],[3,23,"W","Y",2],[3,24,"W","Y",3],[3,25,"W","Y",4],[4,0,"M","2",7],[4,1,"M","2",6],[4,2,"J","2",5],[4,3,"J","2",5],[4,4,"J","X",4],[4,5,"J","X",3],[4,6,"~","X",2],[4,7,"J","X",1],[4,8,"J","X",1],[4,9,"J","X",2],[4,10,"J","3",3],[4,11,"J","3",2],[4,12,"J","3",2],[4,13,"J","3",2],[4,14,"J","3",3],[4,15,"~","3",4],[4,16,"J","B",4],[4,17,"J","B",4],[4,18,"J","Y",4],[4,19,"J","Y",3],[4,20,"J","Y",2],[4,21,"J","Y",1],[4,22,"S","Y",0],[4,23,"W","Y",1],[4,24,"W","Y",2],[4,25,"W","Y",3],[5,0,"M","2",6],[5,1,"M","2",5],[5,2,"J","2",4],[5,3,"J","2",4],[5,4,"~","X",3],[5,5,"J","X",2],[5,6,"J","X",1],[5,7,"S","X",0],[5,8,"J","X",1],[5,9,"J","X",2],[5,10,"J","3",3],[5,11,"J","3",3],[5,12,".","3",3],[5,13,"J","3",3],[5,14,"J","B",3],[5,15,"J","B",3],[5,16,"J","B",3],[5,17,"J","B",4],[5,18,"J","1",4],[5,19,"J","1",3],[5,20,".","Y",2],[5,21,".","Y",1],[5,22,".","Y",1],[5,23,"W","Y",2],[5,24,"W","Y",3],[5,25,"W","Y",4],[6,0,"M","2",6],[6,1,"M","2",5],[6,2,"J","2",4],[6,3,"J","2",3],[6,4,"J","2",3],[6,5,"J","2",3],[6,6,"J","X",2],[6,7,"J","X",1],[6,8,"J","X",1],[6,9,"J","A",2],[6,10,"J","A",2],[6,11,"~","A",2],[6,12,"J","A",3],[6,13,"J","B",3],[6,14,"J","B",2],[6,15,"J","B",2],[6,16,"J","B",2],[6,17,".","B",3],[6,18,"J","1",4],[6,19,"~","1",3],[6,20,"J","1",2],[6,21,"W","1",2],[6,22,"W","1",2],[6,23,"W","Y",2],[6,24,"W","Y",3],[6,25,"W","Y",4],[7,0,"M","2",5],[7,1,"M","2",4],[7,2,"J","2",3],[7,3,".","2",2],[7,4,".","2",2],[7,5,"J","2",2],[7,6,"J","X",2],[7,7,"J","X",2],[7,8,"J","A",2],[7,9,".","A",1],[7,10,"J","A",1],[7,11,"J","A",2],[7,12,".","A",3],[7,13,"~","B",2],[7,14,"~","B",1],[7,15,"J","B",1],[7,16,"J","B",2],[7,17,"J","B",3],[7,18,"J","1",3],[7,19,".","1",2],[7,20,".","1",1],[7,21,".","1",1],[7,22,".","1",2],[7,23,"W","1",3],[7,24,"W","1",4],[7,25,"W","1",5],[8,0,"M","2",5],[8,1,"M","2",4],[8,2,".","2",3],[8,3,".","2",2],[8,4,".","2",1],[8,5,"J","2",1],[8,6,"J","2",2],[8,7,"J","2",3],[8,8,"J","A",2],[8,9,".","A",1],[8,10,"S","A",0],[8,11,"J","A",1],[8,12,"J","A",2],[8,13,".","B",2],[8,14,".","B",1],[8,15,"S","B",0],[8,16,".","B",1],[8,17,"J","B",2],[8,18,"J","1",3],[8,19,"J","1",2],[8,20,".","1",1],[8,21,"S","1",0],[8,22,".","1",1],[8,23,"W","1",2],[8,24,"W","1",3],[8,25,"W","1",4],[9,0,"M","2",4],[9,1,"M","2",3],[9,2,"J","2",2],[9,3,".","2",1],[9,4,"S","2",0],[9,5,".","2",1],[9,6,"J","2",2],[9,7,"~","2",3],[9,8,"J","A",2],[9,9,"J","A",1],[9,10,".","A",1],[9,11,"J","A",2],[9,12,"J","A",3],[9,13,"J","B",2],[9,14,".","B",1],[9,15,".","B",1],[9,16,"J","B",2],[9,17,"J","B",3],[9,18,"J","1",3],[9,19,".","1",2],[9,20,".","1",1],[9,21,".","1",1],[9,22,"J","1",2],[9,23,"W","1",3],[9,24,"W","1",4],[9,25,"W","1",5],[10,0,"M","2",5],[10,1,"M","2",4],[10,2,"J","2",3],[10,3,".","2",2],[10,4,".","2",1],[10,5,"J","2",1],[10,6,"J","2",2],[10,7,"J","2",3],[10,8,"J","A",3],[10,9,"J","A",2],[10,10,".","A",2],[10,11,"J","A",2],[10,12,"J","A",3],[10,13,"J","B",3],[10,14,"J","B",2],[10,15,"J","B",2],[10,16,"J","B",2],[10,17,"J","B",3],[10,18,"J","1",4],[10,19,"J","1",3],[10,20,".","1",2],[10,21,".","1",2],[10,22,"J","1",2],[10,23,"W","1",3],[10,24,"W","1",4],[10,25,"W","1",5],[11,0,"M","2",5],[11,1,"M","2",4],[11,2,"J","2",3],[11,3,"J","2",2],[11,4,"J","2",2],[11,5,"~","2",2],[11,6,"J","2",3],[11,7,"J","2",4],[11,8,"J","A",3],[11,9,"J","A",3],[11,10,"~","4",3],[11,11,".","4",3],[11,12,".","4",3],[11,13,"J","4",3],[11,14,"J","B",3],[11,15,"J","B",3],[11,16,".","B",3],[11,17,"J","B",4],[11,18,"J","1",4],[11,19,"J","1",3],[11,20,"~","1",3],[11,21,"J","1",3],[11,22,"J","1",3],[11,23,"W","1",4],[11,24,"W","1",5],[11,25,"W","1",6],[12,0,"M","2",6],[12,1,"^","2",5],[12,2,"J","2",4],[12,3,"J","2",3],[12,4,"J","2",3],[12,5,"J","2",3],[12,6,"J","2",3],[12,7,"J","2",4],[12,8,"J","A",4],[12,9,"J","4",4],[12,10,"J","4",3],[12,11,"J","4",2],[12,12,"J","4",2],[12,13,"J","4",2],[12,14,"~","4",3],[12,15,"J","4",4],[12,16,"J","B",4],[12,17,"J","B",4],[12,18,"~","1",5],[12,19,"J","1",4],[12,20,".","1",4],[12,21,"J","1",4],[12,22,"J","1",4],[12,23,"W","1",4],[12,24,"W","1",5],[12,25,"W","1",6],[13,0,"M","2",6],[13,1,"M","2",5],[13,2,"J","2",4],[13,3,"J","2",4],[13,4,"J","2",4],[13,5,"J","2",4],[13,6,"~","2",4],[13,7,"J","2",5],[13,8,"J","4",4],[13,9,"J","4",3],[13,10,"J","4",2],[13,11,"J","4",1],[13,12,".","4",1],[13,13,"J","4",2],[13,14,"J","4",3],[13,15,"~","4",4],[13,16,"J","4",5],[13,17,"J","B",5],[13,18,"J","1",5],[13,19,"J","1",5],[13,20,"J","1",5],[13,21,"J","1",5],[13,22,"J","1",5],[13,23,"W","1",5],[13,24,"W","1",6],[13,25,"W","1",7],[14,0,"M","2",7],[14,1,"^","2",6],[14,2,"J","2",5],[14,3,"J","2",5],[14,4,"J","2",5],[14,5,"J","2",5],[14,6,"J","2",5],[14,7,"~","2",5],[14,8,"J","4",4],[14,9,"J","4",3],[14,10,".","4",2],[14,11,".","4",1],[14,12,"S","4",0],[14,13,".","4",1],[14,14,".","4",2],[14,15,"J","4",3],[14,16,"~","4",4],[14,17,".","4",5],[14,18,"J","1",6],[14,19,"J","1",6],[14,20,"J","1",6],[14,21,"J","1",6],[14,22,"J","1",6],[14,23,"J","1",6],[14,24,"J","1",6],[14,25,"J","1",7],[15,0,"M","2",7],[15,1,"M","2",6],[15,2,"J","2",6],[15,3,"J","2",6],[15,4,"J","2",6],[15,5,"J","2",6],[15,6,"J","2",6],[15,7,"J","4",5],[15,8,"J","4",4],[15,9,"J","4",3],[15,10,"J","4",2],[15,11,".","4",1],[15,12,".","4",1],[15,13,".","4",2],[15,14,"J","4",3],[15,15,"J","4",4],[15,16,"J","4",5],[15,17,"J","4",6],[15,18,"J","1",7],[15,19,"J","1",7],[15,20,"J","1",7],[15,21,"J","1",7],[15,22,"J","1",7],[15,23,"J","1",7],[15,24,"J","1",7],[15,25,"J","1",8],[16,0,"M","2",8],[16,1,"M","2",7],[16,2,"F","2",7],[16,3,"F","2",7],[16,4,"F","2",7],[16,5,"^","2",7],[16,6,"F","2",7],[16,7,"^","4",6],[16,8,"F","4",5],[16,9,"^","4",4],[16,10,"^","4",3],[16,11,"F","4",2],[16,12,"^","4",2],[16,13,"^","4",2],[16,14,"^","4",3],[16,15,"F","4",4],[16,16,"^","4",5],[16,17,"F","4",6],[16,18,"^","4",7],[16,19,"F","1",8],[16,20,"F","1",8],[16,21,"F","1",8],[16,22,"^","1",8],[16,23,"^","1",8],[16,24,"F","1",8],[16,25,"F","1",8]],
   "minors": [
    {
     "exp": 0,
     "id": "A",
     "lv": 1,
     "persona": "develop",
     "pop": 1,
     "units": 0
    },
    {
     "exp": 0,
     "id": "B",
     "lv": 1,
     "persona": "defend",
     "pop": 1,
     "units": 0
    }
   ],
   "rivers": [[3,3],[4,4],[5,4],[6,5],[6,6],[7,7],[7,8],[8,8],[8,9],[8,11],[8,12],[8,13],[8,14],[8,16],[7,16],[7,17],[7,18],[7,19],[6,19],[2,8],[3,8],[4,9],[5,9],[6,9],[7,10],[13,5],[12,5],[11,6],[10,6],[9,7],[12,15],[11,15],[10,15],[9,16]],
   "sitePos": {
    "1": [8,21],
    "2": [9,4],
    "3": [2,12],
    "4": [14,12],
    "A": [8,10],
    "B": [8,15],
    "X": [5,7],
    "Y": [4,22]
   },
   "sites": [
    {
     "id": "X"
    },
    {
     "id": "Y"
    }
   ]
  },
  "archipelago": {
   "capitals": ["C"],
   "hexes": [[0,0,"W","C",6],[0,1,"W","C",5],[0,2,"W","C",4],[0,3,"W","C",4],[0,4,"W","C",4],[0,5,"W","C",4],[0,6,"W","R",4],[0,7,"W","R",3],[0,8,"~","R",2],[0,9,"F","R",1],[0,10,"F","R",1],[0,11,"W","R",2],[0,12,"W","R",3],[0,13,"W","R",4],[0,14,"W","R",5],[0,15,"W","W",5],[0,16,"W","W",5],[0,17,"W","W",5],[1,0,"W","C",5],[1,1,"W","C",4],[1,2,"W","C",3],[1,3,"W","C",3],[1,4,"W","C",3],[1,5,"W","C",3],[1,6,"W","R",3],[1,7,"F","R",2],[1,8,".","R",1],[1,9,"S","R",0],[1,10,".","R",1],[1,11,"~","R",2],[1,12,"W","R",3],[1,13,"W","R",4],[1,14,"W","W",4],[1,15,"W","W",4],[1,16,"W","W",4],[1,17,"W","W",5],[2,0,"W","C",5],[2,1,"W","C",4],[2,2,"^","C",3],[2,3,"F","C",2],[2,4,"W","C",2],[2,5,"W","C",2],[2,6,"W","C",3],[2,7,"~","R",3],[2,8,".","R",2],[2,9,".","R",1],[2,10,"W","R",1],[2,11,"W","R",2],[2,12,"W","R",3],[2,13,"W","W",3],[2,14,"W","W",3],[2,15,"W","W",3],[2,16,"W","W",3],[2,17,"W","W",4],[3,0,"W","C",4],[3,1,"F","C",3],[3,2,".","C",2],[3,3,"F","C",1],[3,4,"^","C",1],[3,5,"W","C",2],[3,6,"W","C",3],[3,7,"W","A",2],[3,8,"W","R",2],[3,9,"W","R",2],[3,10,"W","R",2],[3,11,"W","R",3],[3,12,"W","W",3],[3,13,"F","W",2],[3,14,"F","W",2],[3,15,"W","W",2],[3,16,"W","W",3],[3,17,"W","W",4],[4,0,"W","C",4],[4,1,".","C",3],[4,2,".","C",2],[4,3,".","C",1],[4,4,"S","C",0],[4,5,"W","C",1],[4,6,"W","C",2],[4,7,"W","A",2],[4,8,"~","A",1],[4,9,"W","A",1],[4,10,"W","A",2],[4,11,"W","R",3],[4,12,"W","W",3],[4,13,"F","W",2],[4,14,".","W",1],[4,15,"W","W",1],[4,16,"W","W",2],[4,17,"W","W",3],[5,0,"W","C",4],[5,1,".","C",3],[5,2,"F","C",2],[5,3,".","C",1],[5,4,".","C",1],[5,5,"W","C",2],[5,6,"W","A",2],[5,7,".","A",1],[5,8,"S","A",0],[5,9,".","A",1],[5,10,"W","A",2],[5,11,"W","A",3],[5,12,"F","W",2],[5,13,"F","W",1],[5,14,"S","W",0],[5,15,"F","W",1],[5,16,".","W",2],[5,17,"W","W",3],[6,0,"W","C",5],[6,1,"^","C",4],[6,2,".","C",3],[6,3,".","C",2],[6,4,"W","C",2],[6,5,"W","C",2],[6,6,"W","H",2],[6,7,"W","A",2],[6,8,".","A",1],[6,9,"F","A",1],[6,10,"W","A",2],[6,11,"W","A",3],[6,12,"W","W",3],[6,13,"F","W",2],[6,14,"F","W",1],[6,15,".","W",1],[6,16,"W","W",2],[6,17,"W","W",3],[7,0,"W","C",5],[7,1,"W","C",4],[7,2,"W","C",3],[7,3,"W","C",3],[7,4,"W","C",3],[7,5,"W","H",2],[7,6,"W","H",1],[7,7,".","H",1],[7,8,".","A",2],[7,9,"W","A",2],[7,10,"W","A",3],[7,11,"W","B",3],[7,12,"W","B",2],[7,13,"W","W",2],[7,14,".","W",2],[7,15,"W","W",2],[7,16,"W","W",3],[7,17,"W","W",4],[8,0,"W","C",6],[8,1,"W","C",5],[8,2,"W","C",4],[8,3,"W","C",4],[8,4,"W","H",3],[8,5,"^","H",2],[8,6,"^","H",1],[8,7,"S","H",0],[8,8,".","H",1],[8,9,"^","H",2],[8,10,"W","A",3],[8,11,"W","B",3],[8,12,"W","B",2],[8,13,".","B",1],[8,14,"W","B",1],[8,15,"W","B",2],[8,16,"W","W",3],[8,17,"W","W",4],[9,0,"W","C",6],[9,1,"W","C",5],[9,2,"W","C",5],[9,3,"W","H",4],[9,4,"W","H",3],[9,5,"W","H",2],[9,6,".","H",1],[9,7,"^","H",1],[9,8,"F","H",2],[9,9,"W","H",3],[9,10,"W","B",3],[9,11,"W","B",2],[9,12,"~","B",1],[9,13,"S","B",0],[9,14,"W","B",1],[9,15,"W","B",2],[9,16,"W","B",3],[9,17,"W","B",4],[10,0,"W","C",7],[10,1,"W","C",6],[10,2,"W","C",6],[10,3,"W","H",5],[10,4,"W","H",4],[10,5,"W","H",3],[10,6,"W","H",2],[10,7,"^","H",2],[10,8,"W","H",2],[10,9,"W","H",3],[10,10,"W","H",4],[10,11,"W","B",3],[10,12,"W","B",2],[10,13,".","B",1],[10,14,"^","B",1],[10,15,"W","B",2],[10,16,"W","B",3],[10,17,"W","B",4],[11,0,"W","C",7],[11,1,"W","C",7],[11,2,"W","H",6],[11,3,"W","H",5],[11,4,"W","H",4],[11,5,"W","H",3],[11,6,"W","H",3],[11,7,"W","H",3],[11,8,"W","H",3],[11,9,"W","H",4],[11,10,"W","B",4],[11,11,"W","B",3],[11,12,"W","B",2],[11,13,"~","B",2],[11,14,"W","B",2],[11,15,"W","B",3],[11,16,"W","B",4],[11,17,"W","B",5]],
   "minors": [
    {
     "exp": 0,
     "id": "R",
     "lv": 1,
     "persona": "develop",
     "pop": 1,
     "units": 0
    },
    {
     "exp": 0,
     "id": "H",
     "lv": 1,
     "persona": "defend",
     "pop": 1,
     "units": 0
    },
    {
     "exp": 0,
     "id": "W",
     "lv": 1,
     "persona": "passive",
     "pop": 1,
     "units": 0
    }
   ],
   "rivers": [[1,8],[2,8],[2,9]],
   "sitePos": {
    "A": [5,8],
    "B": [9,13],
    "C": [4,4],
    "H": [8,7],
    "R": [1,9],
    "W": [5,14]
   },
   "sites": [
    {
     "id": "A"
    },
    {
     "id": "B"
    }
   ]
  },
  "classic": {
   "capitals": ["C"],
   "hexes": [[0,0,"o","C",5],[0,1,"M","C",5],[0,2,"~","R",4],[0,3,".","R",3],[0,4,".","R",3],[0,5,"F","R",3],[0,6,"F","R",3],[0,7,"F","B",3],[0,8,"F","B",2],[0,9,"F","B",2],[0,10,"F","B",2],[0,11,"F","B",3],[0,12,"^","B",4],[0,13,"~","B",5],[1,0,"M","C",4],[1,1,"o","C",4],[1,2,".","R",3],[1,3,".","R",2],[1,4,".","R",2],[1,5,".","R",2],[1,6,"F","B",3],[1,7,"F","B",2],[1,8,"F","B",1],[1,9,"F","B",1],[1,10,"F","B",2],[1,11,"F","B",3],[1,12,"~","B",4],[1,13,"^","B",5],[2,0,"~","C",4],[2,1,"F","C",3],[2,2,"^","C",3],[2,3,".","R",2],[2,4,".","R",1],[2,5,".","R",1],[2,6,"~","R",2],[2,7,"~","B",2],[2,8,"~","B",1],[2,9,"S","B",0],[2,10,"F","B",1],[2,11,"~","B",2],[2,12,"^","B",3],[2,13,"~","B",4],[3,0,".","C",3],[3,1,".","C",2],[3,2,".","C",2],[3,3,"~","R",1],[3,4,"S","R",0],[3,5,".","R",1],[3,6,"~","R",2],[3,7,"^","B",2],[3,8,"^","B",1],[3,9,"F","B",1],[3,10,"^","B",2],[3,11,"~","B",3],[3,12,"~","B",4],[3,13,"^","B",5],[4,0,".","C",3],[4,1,".","C",2],[4,2,".","C",1],[4,3,".","C",1],[4,4,"F","R",1],[4,5,".","R",1],[4,6,"~","R",2],[4,7,"o","B",3],[4,8,"o","B",2],[4,9,".","W",1],[4,10,".","W",1],[4,11,".","W",2],[4,12,".","W",3],[4,13,"^","W",4],[5,0,"F","C",2],[5,1,"^","C",1],[5,2,"S","C",0],[5,3,".","C",1],[5,4,"F","C",2],[5,5,"~","R",2],[5,6,"~","R",3],[5,7,"^","W",2],[5,8,"^","W",1],[5,9,"S","W",0],[5,10,"F","W",1],[5,11,".","W",2],[5,12,"F","W",3],[5,13,"~","W",4],[6,0,"^","C",3],[6,1,"^","C",2],[6,2,"~","C",1],[6,3,"F","C",1],[6,4,"~","C",2],[6,5,"~","C",3],[6,6,"^","H",3],[6,7,"^","H",3],[6,8,"~","W",2],[6,9,"F","W",1],[6,10,"F","W",1],[6,11,"F","W",2],[6,12,"F","W",3],[6,13,"^","W",4],[7,0,"F","A",3],[7,1,"F","A",2],[7,2,"F","A",2],[7,3,"F","A",2],[7,4,"~","H",2],[7,5,"^","H",2],[7,6,"^","H",2],[7,7,"^","H",3],[7,8,"F","W",2],[7,9,"F","W",2],[7,10,"F","W",2],[7,11,"F","W",3],[7,12,"^","W",4],[7,13,"~","W",5],[8,0,".","A",3],[8,1,".","A",2],[8,2,".","A",1],[8,3,"F","A",1],[8,4,"F","A",2],[8,5,"^","H",1],[8,6,"^","H",1],[8,7,"F","H",2],[8,8,"^","H",3],[8,9,"~","W",3],[8,10,"^","W",3],[8,11,"~","W",3],[8,12,"~","W",4],[8,13,"^","W",5],[9,0,"^","A",2],[9,1,"^","A",1],[9,2,"S","A",0],[9,3,"F","A",1],[9,4,"^","H",1],[9,5,"S","H",0],[9,6,"^","H",1],[9,7,"^","H",2],[9,8,".","H",3],[9,9,"M","H",4],[9,10,"^","W",4],[9,11,"~","W",4],[9,12,"^","W",5],[9,13,"~","W",6],[10,0,"^","A",3],[10,1,"^","A",2],[10,2,"^","A",1],[10,3,"F","A",1],[10,4,"^","A",2],[10,5,".","H",1],[10,6,".","H",1],[10,7,"^","H",2],[10,8,".","H",3],[10,9,"M","H",4],[10,10,"M","H",5],[10,11,"^","W",5],[10,12,"~","W",5],[10,13,"^","W",6],[11,0,"F","A",3],[11,1,"^","A",2],[11,2,"^","A",2],[11,3,"^","A",2],[11,4,".","H",2],[11,5,".","H",2],[11,6,".","H",2],[11,7,"^","H",3],[11,8,"M","H",4],[11,9,"M","H",5],[11,10,"M","H",6],[11,11,"~","W",6],[11,12,"^","W",6],[11,13,"~","W",7]],
   "minors": [
    {
     "exp": 0,
     "id": "R",
     "lv": 1,
     "persona": "develop",
     "pop": 1,
     "units": 0
    },
    {
     "exp": 0,
     "id": "H",
     "lv": 1,
     "persona": "defend",
     "pop": 1,
     "units": 0
    },
    {
     "exp": 0,
     "id": "W",
     "lv": 1,
     "persona": "passive",
     "pop": 1,
     "units": 0
    }
   ],
   "rivers": [[9,3],[9,4],[8,5],[8,4],[7,3],[6,3],[5,3],[4,4],[3,3],[2,4],[1,3],[1,2],[2,8],[3,8],[4,9]],
   "sitePos": {
    "A": [9,2],
    "B": [2,9],
    "C": [5,2],
    "H": [9,5],
    "R": [3,4],
    "W": [5,9]
   },
   "sites": [
    {
     "id": "A"
    },
    {
     "id": "B"
    }
   ]
  },
  "duel": {
   "capitals": ["C","K"],
   "hexes": [[0,6,"^","C",3],[0,7,"~","C",3],[0,8,"^","C",4],[0,9,"^","C",5],[0,10,"~","R",6],[0,11,"F","R",6],[0,12,"^","R",6],[1,5,"^","C",2],[1,6,"~","C",2],[1,7,"F","C",3],[1,8,"F","C",4],[1,9,"^","R",5],[1,10,"^","R",5],[1,11,"~","R",5],[1,12,"F","R",6],[2,5,"^","C",1],[2,6,".","C",1],[2,7,"F","C",2],[2,8,".","C",3],[2,9,"~","R",4],[2,10,"F","R",4],[2,11,"^","R",4],[2,12,"^","R",5],[2,13,"~","R",6],[3,4,"^","C",1],[3,5,"S","C",0],[3,6,".","C",1],[3,7,".","C",2],[3,8,"^","R",3],[3,9,"^","R",3],[3,10,"~","R",3],[3,11,"F","R",4],[3,12,"^","R",5],[3,13,"^","R",6],[4,4,"^","C",2],[4,5,"F","C",1],[4,6,".","C",1],[4,7,".","C",2],[4,8,"~","R",2],[4,9,"F","R",2],[4,10,"^","R",2],[4,11,"^","R",3],[4,12,"~","R",4],[4,13,"F","R",5],[4,14,"^","K",5],[5,3,"^","C",3],[5,4,"~","C",2],[5,5,"F","C",2],[5,6,".","C",2],[5,7,"^","R",2],[5,8,".","R",1],[5,9,".","R",1],[5,10,"F","R",2],[5,11,"^","R",3],[5,12,"^","R",4],[5,13,"~","K",4],[5,14,"F","K",4],[6,3,"~","C",4],[6,4,"~","C",3],[6,5,".","C",3],[6,6,"^","R",3],[6,7,"~","R",2],[6,8,"F","R",1],[6,9,"S","R",0],[6,10,"F","R",1],[6,11,"~","R",2],[6,12,"^","R",3],[6,13,".","K",3],[6,14,"~","K",3],[6,15,"~","K",4],[7,3,"F","C",4],[7,4,"~","C",4],[7,5,"^","R",4],[7,6,"^","R",3],[7,7,"F","R",2],[7,8,"^","R",1],[7,9,".","R",1],[7,10,"^","R",2],[7,11,".","K",2],[7,12,"F","K",2],[7,13,"~","K",2],[7,14,"^","K",3],[8,4,"^","C",5],[8,5,"F","R",5],[8,6,"~","R",4],[8,7,"^","V",1],[8,8,"S","V",0],[8,9,"F","V",1],[8,10,"~","R",2],[8,11,".","K",2],[8,12,".","K",1],[8,13,"F","K",1],[8,14,"^","K",2],[9,4,"^","R",6],[9,5,"^","R",5],[9,6,"F","R",4],[9,7,"~","V",1],[9,8,"^","V",1],[9,9,"~","R",3],[9,10,".","K",2],[9,11,".","K",1],[9,12,"S","K",0],[9,13,"^","K",1],[10,5,"~","R",6],[10,6,"^","R",5],[10,7,"^","R",4],[10,8,"F","R",4],[10,9,"~","R",4],[10,10,".","K",3],[10,11,"F","K",2],[10,12,".","K",1],[10,13,"^","K",1],[11,5,"F","R",6],[11,6,"~","R",5],[11,7,"^","R",5],[11,8,"^","R",5],[11,9,"F","K",4],[11,10,"F","K",3],[11,11,"~","K",2],[11,12,"^","K",2],[12,6,"^","R",6],[12,7,"F","R",6],[12,8,"~","R",6],[12,9,"^","K",5],[12,10,"^","K",4],[12,11,"~","K",3],[12,12,"^","K",3]],
   "minors": [
    {
     "exp": 0,
     "id": "R",
     "lv": 1,
     "persona": "develop",
     "pop": 1,
     "units": 0
    }
   ],
   "rivers": [],
   "sitePos": {
    "C": [3,5],
    "K": [9,12],
    "R": [6,9],
    "V": [8,8]
   },
   "sites": [
    {
     "id": "V"
    }
   ]
  },
  "expansion": {
   "capitals": ["C"],
   "hexes": [[0,0,"o","C",5],[0,1,"M","C",5],[0,2,"~","R",4],[0,3,".","R",3],[0,4,".","R",3],[0,5,"F","R",3],[0,6,"F","R",3],[0,7,"F","B",3],[0,8,"F","B",2],[0,9,"F","B",2],[0,10,"F","B",2],[0,11,"F","B",3],[0,12,"^","B",4],[0,13,"~","B",5],[1,0,"M","C",4],[1,1,"o","C",4],[1,2,".","R",3],[1,3,".","R",2],[1,4,".","R",2],[1,5,".","R",2],[1,6,"F","B",3],[1,7,"F","B",2],[1,8,"F","B",1],[1,9,"F","B",1],[1,10,"F","B",2],[1,11,"F","B",3],[1,12,"~","B",4],[1,13,"^","B",5],[2,0,"~","C",4],[2,1,"F","C",3],[2,2,"^","C",3],[2,3,".","R",2],[2,4,".","R",1],[2,5,".","R",1],[2,6,"~","R",2],[2,7,"~","B",2],[2,8,"~","B",1],[2,9,"S","B",0],[2,10,"F","B",1],[2,11,"~","B",2],[2,12,"^","B",3],[2,13,"~","B",4],[3,0,".","C",3],[3,1,".","C",2],[3,2,".","C",2],[3,3,"~","R",1],[3,4,"S","R",0],[3,5,".","R",1],[3,6,"~","R",2],[3,7,"^","B",2],[3,8,"^","B",1],[3,9,"F","B",1],[3,10,"^","B",2],[3,11,"~","B",3],[3,12,"~","B",4],[3,13,"^","B",5],[4,0,".","C",3],[4,1,".","C",2],[4,2,".","C",1],[4,3,".","C",1],[4,4,"F","R",1],[4,5,".","R",1],[4,6,"~","R",2],[4,7,"o","B",3],[4,8,"o","B",2],[4,9,".","W",1],[4,10,".","W",1],[4,11,".","W",2],[4,12,".","W",3],[4,13,"^","W",4],[5,0,"F","C",2],[5,1,"^","C",1],[5,2,"S","C",0],[5,3,".","C",1],[5,4,"F","C",2],[5,5,"~","R",2],[5,6,"~","R",3],[5,7,"^","W",2],[5,8,"^","W",1],[5,9,"S","W",0],[5,10,"F","W",1],[5,11,".","W",2],[5,12,"F","W",3],[5,13,"~","W",4],[6,0,"^","C",3],[6,1,"^","C",2],[6,2,"~","C",1],[6,3,"F","C",1],[6,4,"~","C",2],[6,5,"~","C",3],[6,6,"^","H",3],[6,7,"^","H",3],[6,8,"~","W",2],[6,9,"F","W",1],[6,10,"F","W",1],[6,11,"F","W",2],[6,12,"F","W",3],[6,13,"^","W",4],[7,0,"F","A",3],[7,1,"F","A",2],[7,2,"F","A",2],[7,3,"F","A",2],[7,4,"~","H",2],[7,5,"^","H",2],[7,6,"^","H",2],[7,7,"^","H",3],[7,8,"F","W",2],[7,9,"F","W",2],[7,10,"F","W",2],[7,11,"F","W",3],[7,12,"^","W",4],[7,13,"~","W",5],[8,0,".","A",3],[8,1,".","A",2],[8,2,".","A",1],[8,3,"F","A",1],[8,4,"F","A",2],[8,5,"^","H",1],[8,6,"^","H",1],[8,7,"F","H",2],[8,8,"^","H",3],[8,9,"~","W",3],[8,10,"^","W",3],[8,11,"~","W",3],[8,12,"~","W",4],[8,13,"^","W",5],[9,0,"^","A",2],[9,1,"^","A",1],[9,2,"S","A",0],[9,3,"F","A",1],[9,4,"^","H",1],[9,5,"S","H",0],[9,6,"^","H",1],[9,7,"^","H",2],[9,8,".","H",3],[9,9,"M","H",4],[9,10,"^","W",4],[9,11,"~","W",4],[9,12,"^","W",5],[9,13,"~","W",6],[10,0,"^","A",3],[10,1,"^","A",2],[10,2,"^","A",1],[10,3,"F","A",1],[10,4,"^","A",2],[10,5,".","H",1],[10,6,".","H",1],[10,7,"^","H",2],[10,8,".","H",3],[10,9,"M","H",4],[10,10,"M","H",5],[10,11,"^","W",5],[10,12,"~","W",5],[10,13,"^","W",6],[11,0,"F","A",3],[11,1,"^","A",2],[11,2,"^","A",2],[11,3,"^","A",2],[11,4,".","H",2],[11,5,".","H",2],[11,6,".","H",2],[11,7,"^","H",3],[11,8,"M","H",4],[11,9,"M","H",5],[11,10,"M","H",6],[11,11,"~","W",6],[11,12,"^","W",6],[11,13,"~","W",7],[0,14,"F","G",5],[0,15,"F","G",5],[0,16,"\\"","G",5],[0,17,"\\"","G",5],[0,18,"\\"","G",5],[0,19,"\\"","G",6],[1,14,"F","G",4],[1,15,"\\"","G",4],[1,16,"\\"","G",4],[1,17,"\\"","G",4],[1,18,"\\"","G",5],[1,19,"\\"","G",6],[2,14,"\\"","G",3],[2,15,"\\"","G",3],[2,16,"\\"","G",3],[2,17,"\\"","G",3],[2,18,"\\"","G",4],[2,19,"\\"","G",5],[3,14,"\\"","G",2],[3,15,"\\"","G",2],[3,16,"\\"","G",2],[3,17,"\\"","G",3],[3,18,"\\"","G",4],[3,19,"\\"","G",5],[4,14,"\\"","G",2],[4,15,"\\"","G",1],[4,16,"\\"","G",1],[4,17,"\\"","G",2],[4,18,"\\"","G",3],[4,19,"\\"","G",4],[5,14,"\\"","G",1],[5,15,"S","G",0],[5,16,"\\"","G",1],[5,17,"\\"","G",2],[5,18,"\\"","G",3],[5,19,"\\"","G",4],[6,14,"\\"","G",2],[6,15,"\\"","G",1],[6,16,"\\"","G",1],[6,17,"\\"","G",2],[6,18,"\\"","G",3],[6,19,"\\"","G",4],[7,14,"\\"","G",2],[7,15,"\\"","G",2],[7,16,"\\"","G",2],[7,17,"\\"","G",3],[7,18,"^","G",4],[7,19,"\\"","G",5],[8,14,"~","G",3],[8,15,"\\"","G",3],[8,16,"\\"","G",3],[8,17,"\\"","G",3],[8,18,"^","G",4],[8,19,"^","G",5],[9,14,"~","G",4],[9,15,"\\"","G",4],[9,16,"\\"","G",4],[9,17,"^","G",4],[9,18,"W","G",5],[9,19,"W","G",6],[10,14,"^","G",5],[10,15,"~","G",5],[10,16,"^","G",5],[10,17,"W","G",5],[10,18,"W","G",5],[10,19,"W","G",6],[11,14,"~","G",6],[11,15,"^","G",6],[11,16,"W","G",6],[11,17,"W","G",6],[11,18,"W","G",6],[11,19,"W","G",7],[12,0,"^","A",4],[12,1,"^","A",3],[12,2,"d","A",3],[12,3,"d","A",3],[12,4,"d","H",3],[12,5,"d","H",3],[12,6,"d","D",2],[12,7,"d","D",2],[12,8,"d","D",2],[12,9,"d","D",3],[12,10,"d","D",4],[12,11,"^","D",5],[12,12,"~","D",6],[12,13,"^","W",7],[12,14,"~","G",7],[12,15,"W","G",7],[12,16,"W","G",7],[12,17,"F","G",7],[12,18,"W","G",7],[12,19,"W","G",7],[13,0,"W","A",4],[13,1,"d","A",4],[13,2,"d","A",4],[13,3,"d","H",4],[13,4,"d","D",3],[13,5,"d","D",2],[13,6,"d","D",1],[13,7,"d","D",1],[13,8,"d","D",2],[13,9,"d","D",3],[13,10,"d","D",4],[13,11,"~","D",5],[13,12,"W","D",6],[13,13,"W","D",7],[13,14,"W","G",8],[13,15,"W","G",8],[13,16,"F","G",8],[13,17,"F","G",8],[13,18,"W","G",8],[13,19,"W","G",8],[14,0,"W","A",5],[14,1,"W","A",5],[14,2,"W","A",5],[14,3,"W","D",4],[14,4,"W","D",3],[14,5,"d","D",2],[14,6,".","D",1],[14,7,"S","D",0],[14,8,".","D",1],[14,9,"d","D",2],[14,10,"d","D",3],[14,11,"~","D",4],[14,12,"W","D",5],[14,13,"W","D",6],[14,14,"W","D",7],[14,15,"W","D",8],[14,16,"W","G",9],[14,17,"W","G",9],[14,18,"W","G",9],[14,19,"W","G",9],[15,0,"W","A",6],[15,1,"W","A",6],[15,2,"F","D",5],[15,3,"^","D",4],[15,4,"W","D",3],[15,5,"W","D",2],[15,6,"W","D",1],[15,7,"W","D",1],[15,8,"W","D",2],[15,9,"W","D",3],[15,10,"W","D",4],[15,11,"W","D",5],[15,12,"W","D",6],[15,13,"W","D",7],[15,14,"W","D",8],[15,15,"W","D",9],[15,16,"W","G",10],[15,17,"W","G",10],[15,18,"W","G",10],[15,19,"W","G",10]],
   "minors": [
    {
     "exp": 0,
     "id": "R",
     "lv": 1,
     "persona": "develop",
     "pop": 1,
     "units": 0
    },
    {
     "exp": 0,
     "id": "H",
     "lv": 1,
     "persona": "defend",
     "pop": 1,
     "units": 0
    },
    {
     "exp": 0,
     "id": "W",
     "lv": 1,
     "persona": "passive",
     "pop": 1,
     "units": 0
    }
   ],
   "rivers": [[9,3],[9,4],[8,5],[8,4],[7,3],[6,3],[5,3],[4,4],[3,3],[2,4],[1,3],[1,2],[2,8],[3,8],[4,9]],
   "sitePos": {
    "A": [9,2],
    "B": [2,9],
    "C": [5,2],
    "D": [14,7],
    "G": [5,15],
    "H": [9,5],
    "R": [3,4],
    "W": [5,9]
   },
   "sites": [
    {
     "id": "A"
    },
    {
     "id": "B"
    },
    {
     "id": "G"
    },
    {
     "id": "D"
    }
   ]
  },
  "grand": {
   "capitals": ["C","Q","E","Z"],
   "hexes": [[0,0,"o","C",5],[0,1,"M","C",5],[0,2,"~","R",4],[0,3,".","R",3],[0,4,".","R",3],[0,5,"F","R",3],[0,6,"F","R",3],[0,7,"F","B",3],[0,8,"F","B",2],[0,9,"F","B",2],[0,10,"F","B",2],[0,11,"F","B",3],[0,12,"^","B",4],[0,13,"~","B",5],[0,14,"T","N",4],[0,15,"T","N",3],[0,16,"T","N",2],[0,17,"T","N",1],[0,18,"T","N",1],[0,19,"^","N",2],[0,20,"T","N",3],[0,21,"T","Y",3],[1,0,"M","C",4],[1,1,"o","C",4],[1,2,".","R",3],[1,3,".","R",2],[1,4,".","R",2],[1,5,".","R",2],[1,6,"F","B",3],[1,7,"F","B",2],[1,8,"F","B",1],[1,9,"F","B",1],[1,10,"F","B",2],[1,11,"F","B",3],[1,12,"~","B",4],[1,13,"^","B",5],[1,14,"T","N",3],[1,15,"T","N",2],[1,16,".","N",1],[1,17,"S","N",0],[1,18,"T","N",1],[1,19,"T","N",2],[1,20,"T","Y",2],[1,21,"T","Y",2],[2,0,"~","C",4],[2,1,"F","C",3],[2,2,"^","C",3],[2,3,".","R",2],[2,4,".","R",1],[2,5,".","R",1],[2,6,"~","R",2],[2,7,"~","B",2],[2,8,"~","B",1],[2,9,"S","B",0],[2,10,"F","B",1],[2,11,"~","B",2],[2,12,"^","B",3],[2,13,"~","B",4],[2,14,"T","N",4],[2,15,"T","N",3],[2,16,"T","N",2],[2,17,".","N",1],[2,18,"T","N",1],[2,19,"^","N",2],[2,20,"T","Y",1],[2,21,"T","Y",1],[3,0,".","C",3],[3,1,".","C",2],[3,2,".","C",2],[3,3,"~","R",1],[3,4,"S","R",0],[3,5,".","R",1],[3,6,"~","R",2],[3,7,"^","B",2],[3,8,"^","B",1],[3,9,"F","B",1],[3,10,"^","B",2],[3,11,"~","B",3],[3,12,"~","B",4],[3,13,"^","B",5],[3,14,"\\"","E",4],[3,15,"^","E",3],[3,16,"\\"","E",2],[3,17,"\\"","E",2],[3,18,"\\"","E",2],[3,19,"\\"","Y",1],[3,20,"S","Y",0],[3,21,"\\"","Y",1],[4,0,".","C",3],[4,1,".","C",2],[4,2,".","C",1],[4,3,".","C",1],[4,4,"F","R",1],[4,5,".","R",1],[4,6,"~","R",2],[4,7,"o","B",3],[4,8,"o","B",2],[4,9,".","W",1],[4,10,".","W",1],[4,11,".","W",2],[4,12,".","W",3],[4,13,"^","W",4],[4,14,"\\"","E",4],[4,15,"\\"","E",3],[4,16,"\\"","E",2],[4,17,".","E",1],[4,18,"\\"","E",1],[4,19,"\\"","E",2],[4,20,"^","Y",1],[4,21,"\\"","Y",1],[5,0,"F","C",2],[5,1,"^","C",1],[5,2,"S","C",0],[5,3,".","C",1],[5,4,"F","C",2],[5,5,"~","R",2],[5,6,"~","R",3],[5,7,"^","W",2],[5,8,"^","W",1],[5,9,"S","W",0],[5,10,"F","W",1],[5,11,".","W",2],[5,12,"F","W",3],[5,13,"~","W",4],[5,14,"\\"","E",3],[5,15,"\\"","E",2],[5,16,".","E",1],[5,17,"S","E",0],[5,18,"\\"","E",1],[5,19,"\\"","E",2],[5,20,"\\"","Y",2],[5,21,"\\"","Y",2],[6,0,"^","C",3],[6,1,"^","C",2],[6,2,"~","C",1],[6,3,"F","C",1],[6,4,"~","C",2],[6,5,"~","C",3],[6,6,"^","H",3],[6,7,"^","H",3],[6,8,"~","W",2],[6,9,"F","W",1],[6,10,"F","W",1],[6,11,"F","W",2],[6,12,"F","W",3],[6,13,"^","W",4],[6,14,"\\"","E",4],[6,15,"\\"","E",3],[6,16,"\\"","E",2],[6,17,".","E",1],[6,18,"\\"","E",1],[6,19,"\\"","E",2],[6,20,"\\"","E",3],[6,21,"\\"","Y",3],[7,0,"F","A",3],[7,1,"F","A",2],[7,2,"F","A",2],[7,3,"F","A",2],[7,4,"~","H",2],[7,5,"^","H",2],[7,6,"^","H",2],[7,7,"^","H",3],[7,8,"F","W",2],[7,9,"F","W",2],[7,10,"F","W",2],[7,11,"F","W",3],[7,12,"^","W",4],[7,13,"~","W",5],[7,14,"\\"","U",3],[7,15,"^","U",2],[7,16,"\\"","E",2],[7,17,"\\"","E",2],[7,18,"\\"","E",2],[7,19,"\\"","E",3],[7,20,"\\"","E",4],[7,21,"\\"","Y",4],[8,0,".","A",3],[8,1,".","A",2],[8,2,".","A",1],[8,3,"F","A",1],[8,4,"F","A",2],[8,5,"^","H",1],[8,6,"^","H",1],[8,7,"F","H",2],[8,8,"^","H",3],[8,9,"~","W",3],[8,10,"^","W",3],[8,11,"~","W",3],[8,12,"~","W",4],[8,13,"^","W",5],[8,14,"\\"","U",3],[8,15,"\\"","U",2],[8,16,".","U",1],[8,17,"\\"","U",1],[8,18,"\\"","U",2],[8,19,"\\"","E",3],[8,20,"^","E",4],[8,21,"\\"","E",5],[9,0,"^","A",2],[9,1,"^","A",1],[9,2,"S","A",0],[9,3,"F","A",1],[9,4,"^","H",1],[9,5,"S","H",0],[9,6,"^","H",1],[9,7,"^","H",2],[9,8,".","H",3],[9,9,"M","H",4],[9,10,"^","W",4],[9,11,"~","W",4],[9,12,"^","W",5],[9,13,"~","W",6],[9,14,"\\"","U",2],[9,15,".","U",1],[9,16,"S","U",0],[9,17,"\\"","U",1],[9,18,"\\"","U",2],[9,19,"\\"","U",3],[9,20,"\\"","U",4],[9,21,"\\"","U",5],[10,0,"^","A",3],[10,1,"^","A",2],[10,2,"^","A",1],[10,3,"F","A",1],[10,4,"^","A",2],[10,5,".","H",1],[10,6,".","H",1],[10,7,"^","H",2],[10,8,".","H",3],[10,9,"M","H",4],[10,10,"M","H",5],[10,11,"^","W",5],[10,12,"~","W",5],[10,13,"^","W",6],[10,14,"M","X",2],[10,15,"\\"","U",2],[10,16,".","U",1],[10,17,"\\"","U",1],[10,18,"\\"","U",2],[10,19,"\\"","U",3],[10,20,"\\"","U",4],[10,21,"\\"","U",5],[11,0,"F","A",3],[11,1,"^","A",2],[11,2,"^","A",2],[11,3,"^","A",2],[11,4,".","H",2],[11,5,".","H",2],[11,6,".","H",2],[11,7,"^","H",3],[11,8,"M","H",4],[11,9,"M","H",5],[11,10,"M","H",6],[11,11,"~","W",6],[11,12,"^","W",6],[11,13,"~","W",7],[11,14,"M","X",2],[11,15,"M","U",2],[11,16,"d","U",2],[11,17,"d","U",2],[11,18,"d","U",3],[11,19,"d","U",4],[11,20,"d","U",5],[11,21,"d","U",6],[12,0,".","A",4],[12,1,"F","A",3],[12,2,".","A",3],[12,3,"F","A",3],[12,4,"~","H",3],[12,5,"J","H",3],[12,6,"J","H",3],[12,7,".","L",2],[12,8,".","L",1],[12,9,"J","L",1],[12,10,"J","L",2],[12,11,"J","X",2],[12,12,".","X",1],[12,13,"S","X",0],[12,14,"d","X",1],[12,15,"d","X",2],[12,16,"d","Z",3],[12,17,"d","Z",3],[12,18,"^","Z",3],[12,19,"d","Z",4],[12,20,"d","Z",5],[12,21,"d","Z",6],[13,0,"W","Q",3],[13,1,"W","Q",2],[13,2,"W","Q",2],[13,3,"W","Q",2],[13,4,"W","Q",3],[13,5,"J","L",3],[13,6,"J","L",2],[13,7,"J","L",1],[13,8,"S","L",0],[13,9,"J","L",1],[13,10,"J","L",2],[13,11,"J","X",2],[13,12,"J","X",1],[13,13,".","X",1],[13,14,"d","X",2],[13,15,"d","Z",2],[13,16,"d","Z",2],[13,17,"d","Z",2],[13,18,"d","Z",3],[13,19,"^","Z",4],[13,20,"d","Z",5],[13,21,"d","Z",6],[14,0,"W","Q",3],[14,1,"F","Q",2],[14,2,".","Q",1],[14,3,".","Q",1],[14,4,"^","Q",2],[14,5,"W","Q",3],[14,6,"W","L",3],[14,7,"W","L",2],[14,8,"W","L",1],[14,9,"W","L",1],[14,10,"W","L",2],[14,11,"W","L",3],[14,12,"W","X",2],[14,13,"d","X",2],[14,14,"d","X",2],[14,15,"d","Z",2],[14,16,".","Z",1],[14,17,"d","Z",1],[14,18,"d","Z",2],[14,19,"d","Z",3],[14,20,"d","Z",4],[14,21,"d","Z",5],[15,0,"W","Q",2],[15,1,".","Q",1],[15,2,"S","Q",0],[15,3,".","Q",1],[15,4,"F","Q",2],[15,5,"W","Q",3],[15,6,"W","I",2],[15,7,"W","I",1],[15,8,"W","I",1],[15,9,"W","L",2],[15,10,"W","L",3],[15,11,"W","X",3],[15,12,"W","X",3],[15,13,"W","Z",3],[15,14,"d","Z",2],[15,15,".","Z",1],[15,16,"S","Z",0],[15,17,".","Z",1],[15,18,"d","Z",2],[15,19,"d","Z",3],[15,20,"d","Z",4],[15,21,"d","Z",5],[16,0,"W","Q",3],[16,1,"~","Q",2],[16,2,"W","Q",1],[16,3,"^","Q",1],[16,4,"W","Q",2],[16,5,"W","Q",3],[16,6,"W","I",2],[16,7,".","I",1],[16,8,"S","I",0],[16,9,".","I",1],[16,10,"W","I",2],[16,11,"W","I",3],[16,12,"W","X",4],[16,13,"W","Z",4],[16,14,"d","Z",3],[16,15,"d","Z",2],[16,16,"W","Z",1],[16,17,"d","Z",1],[16,18,"d","Z",2],[16,19,"d","Z",3],[16,20,"d","Z",4],[16,21,"d","Z",5],[17,0,"W","Q",3],[17,1,"W","Q",2],[17,2,"W","Q",2],[17,3,"W","Q",2],[17,4,"W","Q",3],[17,5,"W","I",3],[17,6,"W","I",2],[17,7,"W","I",1],[17,8,".","I",1],[17,9,"W","I",2],[17,10,"W","I",3],[17,11,"W","I",4],[17,12,"W","Z",5],[17,13,"W","Z",4],[17,14,"W","Z",3],[17,15,"W","Z",2],[17,16,"W","Z",2],[17,17,"W","Z",2],[17,18,"W","Z",3],[17,19,"W","Z",4],[17,20,"W","Z",5],[17,21,"W","Z",6]],
   "minors": [
    {
     "exp": 0,
     "id": "R",
     "lv": 1,
     "persona": "develop",
     "pop": 1,
     "units": 0
    },
    {
     "exp": 0,
     "id": "H",
     "lv": 1,
     "persona": "defend",
     "pop": 1,
     "units": 0
    },
    {
     "exp": 0,
     "id": "W",
     "lv": 1,
     "persona": "passive",
     "pop": 1,
     "units": 0
    },
    {
     "exp": 0,
     "id": "L",
     "lv": 1,
     "persona": "develop",
     "pop": 1,
     "units": 0
    },
    {
     "exp": 0,
     "id": "U",
     "lv": 1,
     "persona": "defend",
     "pop": 1,
     "units": 0
    },
    {
     "exp": 0,
     "id": "N",
     "lv": 1,
     "persona": "passive",
     "pop": 1,
     "units": 0
    }
   ],
   "rivers": [[9,3],[9,4],[8,5],[8,4],[7,3],[6,3],[5,3],[4,4],[3,3],[2,4],[1,3],[1,2],[2,8],[3,8],[4,9],[12,6],[13,6],[13,7],[12,16],[13,16],[14,16]],
   "sitePos": {
    "A": [9,2],
    "B": [2,9],
    "C": [5,2],
    "E": [5,17],
    "H": [9,5],
    "I": [16,8],
    "L": [13,8],
    "N": [1,17],
    "Q": [15,2],
    "R": [3,4],
    "U": [9,16],
    "W": [5,9],
    "X": [12,13],
    "Y": [3,20],
    "Z": [15,16]
   },
   "sites": [
    {
     "id": "A"
    },
    {
     "id": "B"
    },
    {
     "id": "X"
    },
    {
     "id": "Y"
    },
    {
     "id": "I"
    }
   ]
  },
  "heartland": {
   "capitals": ["1","2","3","4"],
   "hexes": [[0,0,"F","X",6],[0,1,"~","X",5],[0,2,"F","X",4],[0,3,"F","X",3],[0,4,"F","X",3],[0,5,"~","X",3],[0,6,"F","X",3],[0,7,"^","1",4],[0,8,"F","1",3],[0,9,"^","1",2],[0,10,"\\"","1",2],[0,11,"F","1",2],[0,12,"F","1",3],[0,13,"\\"","1",4],[0,14,"F","1",5],[0,15,"~","A",5],[0,16,"~","A",5],[0,17,"~","A",6],[0,18,"F","A",7],[0,19,"^","2",8],[1,0,"^","X",5],[1,1,"F","X",4],[1,2,"F","X",3],[1,3,"F","X",2],[1,4,"F","X",2],[1,5,"F","X",2],[1,6,"F","X",3],[1,7,"\\"","1",3],[1,8,"F","1",2],[1,9,"F","1",1],[1,10,"^","1",1],[1,11,".","1",2],[1,12,"^","1",3],[1,13,"^","1",4],[1,14,"F","A",4],[1,15,"F","A",4],[1,16,"F","A",5],[1,17,"F","A",6],[1,18,"F","2",7],[1,19,"F","2",7],[2,0,"~","X",5],[2,1,"F","X",4],[2,2,"~","X",3],[2,3,"F","X",2],[2,4,"F","X",1],[2,5,".","X",1],[2,6,".","X",2],[2,7,".","1",3],[2,8,".","1",2],[2,9,".","1",1],[2,10,"S","1",0],[2,11,".","1",1],[2,12,"F","1",2],[2,13,"F","1",3],[2,14,"F","A",3],[2,15,"F","A",3],[2,16,"\\"","A",4],[2,17,"F","A",5],[2,18,"F","2",6],[2,19,"\\"","2",6],[3,0,"^","X",4],[3,1,"F","X",3],[3,2,"F","X",2],[3,3,".","X",1],[3,4,"S","X",0],[3,5,"F","X",1],[3,6,"F","X",2],[3,7,"F","1",3],[3,8,"F","1",2],[3,9,"^","1",1],[3,10,".","1",1],[3,11,".","1",2],[3,12,"^","A",2],[3,13,"~","A",2],[3,14,"F","A",2],[3,15,"~","A",3],[3,16,"\\"","A",4],[3,17,"^","2",5],[3,18,"W","2",5],[3,19,"W","2",6],[4,0,"^","4",5],[4,1,"F","4",4],[4,2,"F","X",3],[4,3,".","X",2],[4,4,"F","X",1],[4,5,"F","X",1],[4,6,"F","X",2],[4,7,"F","X",3],[4,8,".","1",3],[4,9,"F","1",2],[4,10,"^","1",2],[4,11,"^","1",2],[4,12,".","A",2],[4,13,".","A",1],[4,14,"^","A",1],[4,15,"F","A",2],[4,16,"\\"","A",3],[4,17,"^","2",4],[4,18,"W","2",4],[4,19,"W","2",5],[5,0,"\\"","4",4],[5,1,"^","4",3],[5,2,"F","4",3],[5,3,".","X",2],[5,4,"F","X",2],[5,5,"F","X",2],[5,6,"^","X",3],[5,7,"^","1",4],[5,8,"F","1",3],[5,9,"^","1",3],[5,10,"^","1",3],[5,11,"^","A",2],[5,12,".","A",1],[5,13,"S","A",0],[5,14,".","A",1],[5,15,"F","A",2],[5,16,".","2",3],[5,17,"F","2",3],[5,18,"W","2",4],[5,19,"W","2",5],[6,0,"F","4",4],[6,1,"F","4",3],[6,2,"~","4",2],[6,3,".","4",2],[6,4,"F","4",2],[6,5,"F","4",3],[6,6,"^","X",3],[6,7,"^","C",4],[6,8,"F","C",3],[6,9,".","C",2],[6,10,"^","C",2],[6,11,".","C",2],[6,12,"F","A",2],[6,13,".","A",1],[6,14,"F","A",1],[6,15,"^","2",2],[6,16,".","2",2],[6,17,"^","2",2],[6,18,"W","2",3],[6,19,"W","2",4],[7,0,"F","4",3],[7,1,"F","4",2],[7,2,"\\"","4",1],[7,3,".","4",1],[7,4,"F","4",2],[7,5,"F","4",3],[7,6,"F","4",4],[7,7,"F","C",3],[7,8,".","C",2],[7,9,".","C",1],[7,10,".","C",1],[7,11,"^","C",2],[7,12,"^","A",2],[7,13,"^","A",2],[7,14,".","2",2],[7,15,".","2",1],[7,16,"^","2",1],[7,17,"F","2",2],[7,18,"W","2",3],[7,19,"W","2",4],[8,0,"^","4",3],[8,1,"~","4",2],[8,2,"F","4",1],[8,3,"S","4",0],[8,4,".","4",1],[8,5,".","4",2],[8,6,"F","4",3],[8,7,"^","C",3],[8,8,"F","C",2],[8,9,".","C",1],[8,10,"S","C",0],[8,11,".","C",1],[8,12,"\\"","C",2],[8,13,"F","2",3],[8,14,"^","2",2],[8,15,".","2",1],[8,16,"S","2",0],[8,17,"W","2",1],[8,18,"W","2",2],[8,19,"W","2",3],[9,0,"^","4",3],[9,1,"~","4",2],[9,2,"\\"","4",1],[9,3,".","4",1],[9,4,"F","4",2],[9,5,"F","4",3],[9,6,"^","B",3],[9,7,"~","C",3],[9,8,"F","C",2],[9,9,".","C",1],[9,10,".","C",1],[9,11,"\\"","C",2],[9,12,"~","C",3],[9,13,"\\"","2",3],[9,14,"F","2",2],[9,15,"\\"","2",1],[9,16,".","2",1],[9,17,"W","2",2],[9,18,"W","2",3],[9,19,"W","2",4],[10,0,"\\"","4",4],[10,1,"~","4",3],[10,2,"^","4",2],[10,3,"~","4",2],[10,4,".","4",2],[10,5,"~","4",3],[10,6,"~","B",2],[10,7,"^","B",2],[10,8,"F","B",2],[10,9,".","C",2],[10,10,"\\"","C",2],[10,11,".","C",2],[10,12,"\\"","C",3],[10,13,"^","2",4],[10,14,".","2",3],[10,15,"F","2",2],[10,16,".","2",2],[10,17,"\\"","2",2],[10,18,"W","2",3],[10,19,"W","2",4],[11,0,"\\"","4",4],[11,1,"F","4",3],[11,2,"^","4",3],[11,3,".","4",3],[11,4,".","4",3],[11,5,"^","B",2],[11,6,"F","B",1],[11,7,".","B",1],[11,8,"^","B",2],[11,9,"^","C",3],[11,10,"F","C",3],[11,11,"F","C",3],[11,12,"\\"","3",4],[11,13,"\\"","Y",3],[11,14,"\\"","Y",2],[11,15,"\\"","Y",2],[11,16,".","Y",2],[11,17,"\\"","2",3],[11,18,"W","2",4],[11,19,"W","2",5],[12,0,"F","4",5],[12,1,"F","4",4],[12,2,"F","Z",3],[12,3,"^","Z",3],[12,4,"F","B",3],[12,5,".","B",2],[12,6,".","B",1],[12,7,"S","B",0],[12,8,"F","B",1],[12,9,".","B",2],[12,10,"\\"","3",3],[12,11,"\\"","3",3],[12,12,"^","3",3],[12,13,"\\"","Y",3],[12,14,"\\"","Y",2],[12,15,"\\"","Y",1],[12,16,".","Y",1],[12,17,"\\"","Y",2],[12,18,"W","Y",3],[12,19,"W","Y",4],[13,0,"~","Z",4],[13,1,"~","Z",3],[13,2,"~","Z",2],[13,3,"~","Z",2],[13,4,".","Z",2],[13,5,"F","B",2],[13,6,"F","B",1],[13,7,".","B",1],[13,8,"F","B",2],[13,9,"~","3",2],[13,10,"^","3",2],[13,11,"^","3",2],[13,12,"~","3",3],[13,13,"\\"","Y",2],[13,14,"\\"","Y",1],[13,15,"S","Y",0],[13,16,"\\"","Y",1],[13,17,"\\"","Y",2],[13,18,"W","Y",3],[13,19,"W","Y",4],[14,0,"~","Z",4],[14,1,"F","Z",3],[14,2,"~","Z",2],[14,3,"~","Z",1],[14,4,".","Z",1],[14,5,"~","Z",2],[14,6,"^","B",2],[14,7,"\\"","B",2],[14,8,"F","B",2],[14,9,".","3",2],[14,10,".","3",1],[14,11,"\\"","3",1],[14,12,"\\"","3",2],[14,13,".","3",3],[14,14,"\\"","Y",2],[14,15,"\\"","Y",1],[14,16,"\\"","Y",1],[14,17,"\\"","Y",2],[14,18,"W","Y",3],[14,19,"W","Y",4],[15,0,"^","Z",3],[15,1,"~","Z",2],[15,2,"~","Z",1],[15,3,"S","Z",0],[15,4,".","Z",1],[15,5,".","Z",2],[15,6,"F","B",3],[15,7,".","3",3],[15,8,".","3",2],[15,9,".","3",1],[15,10,"S","3",0],[15,11,".","3",1],[15,12,"F","3",2],[15,13,"\\"","3",3],[15,14,"\\"","Y",2],[15,15,"\\"","Y",2],[15,16,"\\"","Y",2],[15,17,"\\"","Y",3],[15,18,"\\"","Y",4],[15,19,"F","Y",5],[16,0,"~","Z",4],[16,1,"F","Z",3],[16,2,"~","Z",2],[16,3,"~","Z",1],[16,4,"~","Z",1],[16,5,"~","Z",2],[16,6,"F","Z",3],[16,7,"~","3",4],[16,8,"~","3",3],[16,9,".","3",2],[16,10,"\\"","3",1],[16,11,"\\"","3",1],[16,12,"\\"","3",2],[16,13,"~","3",3],[16,14,"\\"","Y",3],[16,15,"^","Y",3],[16,16,"\\"","Y",3],[16,17,"~","Y",3],[16,18,"\\"","Y",4],[16,19,"\\"","Y",5],[17,0,"F","Z",4],[17,1,"~","Z",3],[17,2,"~","Z",2],[17,3,"~","Z",2],[17,4,"~","Z",2],[17,5,"\\"","Z",3],[17,6,"^","Z",4],[17,7,"~","3",4],[17,8,"F","3",3],[17,9,"~","3",2],[17,10,"\\"","3",2],[17,11,"F","3",2],[17,12,"\\"","3",3],[17,13,"\\"","3",4],[17,14,"^","Y",4],[17,15,"~","Y",4],[17,16,"^","Y",4],[17,17,"\\"","Y",4],[17,18,"\\"","Y",5],[17,19,"F","Y",6]],
   "minors": [
    {
     "exp": 0,
     "id": "C",
     "lv": 1,
     "persona": "develop",
     "pop": 1,
     "units": 0
    },
    {
     "exp": 0,
     "id": "A",
     "lv": 1,
     "persona": "defend",
     "pop": 1,
     "units": 0
    },
    {
     "exp": 0,
     "id": "B",
     "lv": 1,
     "persona": "passive",
     "pop": 1,
     "units": 0
    }
   ],
   "rivers": [[6,5],[5,5],[4,5],[13,12],[12,13],[12,14]],
   "sitePos": {
    "1": [2,10],
    "2": [8,16],
    "3": [15,10],
    "4": [8,3],
    "A": [5,13],
    "B": [12,7],
    "C": [8,10],
    "X": [3,4],
    "Y": [13,15],
    "Z": [15,3]
   },
   "sites": [
    {
     "id": "X"
    },
    {
     "id": "Y"
    },
    {
     "id": "Z"
    }
   ]
  },
  "nile": {
   "capitals": ["1","2"],
   "hexes": [[0,0,"W","1",5],[0,1,"W","1",4],[0,2,"W","1",3],[0,3,"W","1",3],[0,4,"W","1",3],[0,5,"W","1",3],[0,6,"W","1",4],[0,7,"W","1",5],[0,8,"W","1",6],[1,0,"W","1",4],[1,1,"W","1",3],[1,2,"W","1",2],[1,3,"W","1",2],[1,4,"W","1",2],[1,5,"W","1",3],[1,6,"W","1",4],[1,7,"W","1",5],[1,8,"W","1",6],[2,0,"W","1",4],[2,1,"~","1",3],[2,2,".","1",2],[2,3,".","1",1],[2,4,".","1",1],[2,5,".","1",2],[2,6,"~","1",3],[2,7,"d","1",4],[2,8,"W","1",5],[3,0,"d","1",3],[3,1,".","1",2],[3,2,".","1",1],[3,3,"S","1",0],[3,4,".","1",1],[3,5,".","1",2],[3,6,"~","1",3],[3,7,"d","1",4],[3,8,"W","1",5],[4,0,"d","F",2],[4,1,"d","F",2],[4,2,".","1",2],[4,3,".","1",1],[4,4,".","1",1],[4,5,".","1",2],[4,6,".","1",3],[4,7,"d","1",4],[4,8,"W","1",5],[5,0,"d","F",1],[5,1,".","F",1],[5,2,"o","1",2],[5,3,".","1",2],[5,4,".","1",2],[5,5,"d","1",3],[5,6,"d","1",4],[5,7,"d","1",5],[5,8,"W","1",6],[6,0,"d","F",1],[6,1,"S","F",0],[6,2,".","F",1],[6,3,".","M",2],[6,4,".","M",2],[6,5,"d","1",3],[6,6,"d","1",4],[6,7,"d","1",5],[6,8,"W","1",6],[7,0,"d","F",1],[7,1,".","F",1],[7,2,".","M",1],[7,3,".","M",1],[7,4,".","M",2],[7,5,"d","M",3],[7,6,"d","M",4],[7,7,"d","M",5],[7,8,"W","P",5],[8,0,"d","F",2],[8,1,"d","M",2],[8,2,".","M",1],[8,3,"S","M",0],[8,4,".","M",1],[8,5,".","M",2],[8,6,"d","M",3],[8,7,"d","M",4],[8,8,"W","P",4],[9,0,"d","M",3],[9,1,"d","M",2],[9,2,"d","M",1],[9,3,".","M",1],[9,4,".","M",2],[9,5,".","M",3],[9,6,"d","P",3],[9,7,"d","P",3],[9,8,"W","P",4],[10,0,"d","M",4],[10,1,"d","M",3],[10,2,"d","M",2],[10,3,".","M",2],[10,4,".","M",2],[10,5,"d","P",2],[10,6,"d","P",2],[10,7,"d","P",2],[10,8,"W","P",3],[11,0,"d","M",4],[11,1,"d","M",3],[11,2,"d","M",3],[11,3,".","T",2],[11,4,".","T",2],[11,5,"^","P",1],[11,6,"^","P",1],[11,7,"d","P",2],[11,8,"W","P",3],[12,0,"d","M",5],[12,1,"d","M",4],[12,2,"d","T",3],[12,3,".","T",2],[12,4,".","T",1],[12,5,"^","T",1],[12,6,"S","P",0],[12,7,"d","P",1],[12,8,"W","P",2],[13,0,"d","T",4],[13,1,"d","T",3],[13,2,"d","T",2],[13,3,".","T",1],[13,4,"S","T",0],[13,5,".","T",1],[13,6,"^","P",1],[13,7,"d","P",2],[13,8,"W","P",3],[14,0,"d","T",5],[14,1,"d","T",4],[14,2,"d","T",3],[14,3,".","T",2],[14,4,".","T",1],[14,5,".","T",1],[14,6,"d","T",2],[14,7,"d","P",2],[14,8,"W","P",3],[15,0,"d","2",5],[15,1,"d","2",4],[15,2,"d","2",3],[15,3,".","T",2],[15,4,".","T",2],[15,5,"d","T",2],[15,6,"d","T",3],[15,7,"d","P",3],[15,8,"W","P",4],[16,0,"d","2",5],[16,1,"d","2",4],[16,2,"d","2",3],[16,3,".","2",2],[16,4,".","2",2],[16,5,".","2",2],[16,6,"d","2",3],[16,7,"d","2",4],[16,8,"W","P",4],[17,0,"d","2",4],[17,1,"d","2",3],[17,2,".","2",2],[17,3,".","2",1],[17,4,".","2",1],[17,5,".","2",2],[17,6,"d","2",3],[17,7,"d","2",4],[17,8,"W","2",5],[18,0,"d","2",4],[18,1,"d","2",3],[18,2,".","2",2],[18,3,".","2",1],[18,4,"S","2",0],[18,5,".","2",1],[18,6,".","2",2],[18,7,"d","2",3],[18,8,"W","2",4],[19,0,"d","2",4],[19,1,"d","2",3],[19,2,".","2",2],[19,3,".","2",1],[19,4,".","2",1],[19,5,".","2",2],[19,6,".","2",3],[19,7,"d","2",4],[19,8,"W","2",5],[20,0,"d","2",5],[20,1,"~","2",4],[20,2,".","2",3],[20,3,".","2",2],[20,4,"\\"","2",2],[20,5,".","2",2],[20,6,"d","2",3],[20,7,"d","2",4],[20,8,"W","2",5],[21,0,"d","2",5],[21,1,"d","2",4],[21,2,".","2",3],[21,3,".","2",3],[21,4,"\\"","2",3],[21,5,"\\"","2",3],[21,6,"d","2",4],[21,7,"d","2",5],[21,8,"W","2",6]],
   "minors": [
    {
     "exp": 0,
     "id": "M",
     "lv": 1,
     "persona": "develop",
     "pop": 1,
     "units": 0
    },
    {
     "exp": 0,
     "id": "T",
     "lv": 1,
     "persona": "defend",
     "pop": 1,
     "units": 0
    }
   ],
   "rivers": [[20,3],[19,4],[17,3],[16,4],[15,3],[14,4],[12,4],[11,4],[10,4],[9,4],[8,4],[7,3],[6,3],[5,4],[4,4],[3,4],[2,4]],
   "sitePos": {
    "1": [3,3],
    "2": [18,4],
    "F": [6,1],
    "M": [8,3],
    "P": [12,6],
    "T": [13,4]
   },
   "sites": [
    {
     "id": "F"
    },
    {
     "id": "P"
    }
   ]
  },
  "ring": {
   "capitals": ["1","2","3","4"],
   "hexes": [[0,8,"W","1",4],[0,9,"W","1",4],[0,10,"W","1",4],[0,11,"W","1",4],[0,12,"W","1",4],[0,13,"W","1",5],[1,5,"W","D",5],[1,6,"W","1",5],[1,7,"W","1",4],[1,8,"W","1",3],[1,9,"W","1",3],[1,10,"W","1",3],[1,11,"W","1",3],[1,12,"W","1",4],[1,13,"W","P",4],[1,14,"W","P",3],[2,5,"W","D",4],[2,6,"W","D",4],[2,7,"W","1",4],[2,8,"T","1",3],[2,9,"T","1",2],[2,10,".","1",2],[2,11,"T","1",2],[2,12,"F","1",3],[2,13,"W","1",4],[2,14,"W","P",3],[2,15,"W","P",2],[2,16,"^","P",1],[2,17,"S","P",0],[3,3,"W","D",3],[3,4,"W","D",3],[3,5,"W","D",3],[3,6,"F","D",3],[3,7,"T","1",3],[3,8,".","1",2],[3,9,".","1",1],[3,10,".","1",1],[3,11,".","1",2],[3,12,".","1",3],[3,13,"F","A",3],[3,14,"W","A",3],[3,15,"W","P",2],[3,16,"W","P",1],[4,3,"W","D",3],[4,4,"W","D",2],[4,5,"^","D",2],[4,6,"T","D",2],[4,7,".","1",3],[4,8,"T","1",2],[4,9,".","1",1],[4,10,"S","1",0],[4,11,".","1",1],[4,12,".","1",2],[4,13,".","1",3],[4,14,"F","A",2],[4,15,".","A",2],[4,16,"W","A",2],[4,17,"W","P",2],[5,2,"W","D",3],[5,3,"W","D",2],[5,4,".","D",1],[5,5,".","D",1],[5,6,"F","D",2],[5,7,".","1",3],[5,8,".","1",2],[5,9,".","1",1],[5,10,".","1",1],[5,11,"F","1",2],[5,12,"T","1",3],[5,13,".","A",2],[5,14,".","A",1],[5,15,".","A",1],[5,16,"W","A",2],[5,17,"W","A",3],[6,2,"W","D",3],[6,3,"W","D",2],[6,4,".","D",1],[6,5,"S","D",0],[6,6,".","D",1],[6,7,".","D",2],[6,8,".","1",3],[6,9,"T","1",2],[6,10,".","1",2],[6,11,".","1",2],[6,12,".","1",3],[6,13,"T","A",2],[6,14,".","A",1],[6,15,"S","A",0],[6,16,".","A",1],[6,17,"W","A",2],[6,18,"W","A",3],[7,1,"W","4",4],[7,2,"W","4",3],[7,3,".","D",2],[7,4,".","D",1],[7,5,".","D",1],[7,6,"^","D",2],[7,7,".","D",3],[7,8,"M","1",3],[7,9,"M","1",3],[7,10,"M","1",3],[7,11,"M","1",3],[7,12,"T","A",3],[7,13,"~","A",2],[7,14,".","A",1],[7,15,".","A",1],[7,16,".","A",2],[7,17,"W","2",3],[7,18,"W","2",4],[8,2,"W","4",3],[8,3,"W","4",2],[8,4,".","4",2],[8,5,".","4",2],[8,6,".","D",2],[8,7,"\\"","D",3],[8,8,"M","1",4],[8,9,"M","1",4],[8,10,"M","1",4],[8,11,"M","1",4],[8,12,"M","1",4],[8,13,"M","A",3],[8,14,".","A",2],[8,15,"~","2",2],[8,16,"F","2",2],[8,17,".","2",2],[8,18,"W","2",3],[8,19,"W","2",4],[9,1,"W","4",3],[9,2,"W","4",2],[9,3,".","4",1],[9,4,".","4",1],[9,5,".","4",2],[9,6,".","4",3],[9,7,"M","4",4],[9,8,"M","1",5],[9,9,"o","1",5],[9,10,"o","1",5],[9,11,"M","1",5],[9,12,"M","2",4],[9,13,"M","2",3],[9,14,".","2",2],[9,15,".","2",1],[9,16,".","2",1],[9,17,".","2",2],[9,18,"W","2",3],[10,2,"W","4",2],[10,3,".","4",1],[10,4,"S","4",0],[10,5,".","4",1],[10,6,".","4",2],[10,7,"M","4",3],[10,8,"M","4",4],[10,9,"o","4",5],[10,10,"o","1",6],[10,11,"o","2",5],[10,12,"M","2",4],[10,13,"M","2",3],[10,14,"~","2",2],[10,15,".","2",1],[10,16,"S","2",0],[10,17,".","2",1],[10,18,"W","2",2],[10,19,"W","2",3],[11,1,"W","4",3],[11,2,"W","4",2],[11,3,".","4",1],[11,4,".","4",1],[11,5,"\\"","4",2],[11,6,"\\"","4",3],[11,7,"M","4",4],[11,8,"M","3",5],[11,9,"o","3",5],[11,10,"o","3",5],[11,11,"M","2",5],[11,12,"M","2",4],[11,13,"M","2",3],[11,14,"F","2",2],[11,15,".","2",1],[11,16,".","2",1],[11,17,".","2",2],[11,18,"W","2",3],[12,2,"W","4",3],[12,3,"W","4",2],[12,4,"\\"","4",2],[12,5,"\\"","4",2],[12,6,".","4",3],[12,7,".","C",3],[12,8,"M","3",4],[12,9,"M","3",4],[12,10,"M","3",4],[12,11,"M","3",4],[12,12,"M","3",4],[12,13,"M","2",4],[12,14,".","2",3],[12,15,".","2",2],[12,16,".","2",2],[12,17,"F","2",2],[12,18,"W","2",3],[12,19,"W","2",4],[13,1,"W","4",4],[13,2,"W","4",3],[13,3,"\\"","4",3],[13,4,".","C",2],[13,5,"^","C",2],[13,6,"\\"","C",2],[13,7,"\\"","C",3],[13,8,"M","3",3],[13,9,"M","3",3],[13,10,"M","3",3],[13,11,"M","3",3],[13,12,".","3",4],[13,13,"F","B",3],[13,14,".","B",2],[13,15,"F","B",2],[13,16,"F","B",2],[13,17,"W","2",3],[13,18,"W","2",4],[14,2,"W","4",4],[14,3,"W","C",3],[14,4,".","C",2],[14,5,".","C",1],[14,6,".","C",1],[14,7,".","C",2],[14,8,".","3",3],[14,9,".","3",2],[14,10,"d","3",2],[14,11,".","3",2],[14,12,"d","3",3],[14,13,".","B",3],[14,14,".","B",2],[14,15,".","B",1],[14,16,".","B",1],[14,17,"W","B",2],[14,18,"W","B",3],[15,2,"W","C",3],[15,3,"W","C",2],[15,4,".","C",1],[15,5,"S","C",0],[15,6,".","C",1],[15,7,".","C",2],[15,8,".","3",2],[15,9,".","3",1],[15,10,".","3",1],[15,11,".","3",2],[15,12,"^","3",3],[15,13,"d","B",2],[15,14,".","B",1],[15,15,"S","B",0],[15,16,"W","B",1],[15,17,"W","B",2],[16,3,"W","Q",2],[16,4,"W","C",2],[16,5,".","C",1],[16,6,".","C",1],[16,7,"d","C",2],[16,8,"d","3",2],[16,9,".","3",1],[16,10,"S","3",0],[16,11,".","3",1],[16,12,"^","3",2],[16,13,"d","3",3],[16,14,".","B",2],[16,15,".","B",1],[16,16,"W","B",1],[16,17,"W","B",2],[17,3,"W","Q",1],[17,4,"W","C",2],[17,5,"W","C",2],[17,6,"d","C",2],[17,7,"d","3",3],[17,8,"d","3",2],[17,9,".","3",1],[17,10,".","3",1],[17,11,"d","3",2],[17,12,".","3",3],[17,13,".","B",3],[17,14,"W","B",2],[17,15,"W","B",2],[17,16,"W","B",2],[18,2,"^","Q",1],[18,3,"S","Q",0],[18,5,"W","Q",2],[18,6,"W","C",3],[18,7,"W","C",3],[18,8,"d","3",3],[18,9,"d","3",2],[18,10,"d","3",2],[18,11,".","3",2],[18,12,".","3",3],[18,13,"W","3",4],[18,14,"W","B",3],[18,15,"W","B",3],[18,16,"W","B",3],[19,5,"W","Q",3],[19,6,"W","C",4],[19,7,"W","3",4],[19,8,"W","3",3],[19,9,"W","3",3],[19,10,"W","3",3],[19,11,"W","3",3],[19,12,"W","3",4],[19,13,"W","B",4],[19,14,"W","B",4],[20,8,"W","3",4],[20,9,"W","3",4],[20,10,"W","3",4],[20,11,"W","3",4],[20,12,"W","3",4],[20,13,"W","3",5]],
   "minors": [
    {
     "exp": 0,
     "id": "A",
     "lv": 1,
     "persona": "develop",
     "pop": 1,
     "units": 0
    },
    {
     "exp": 0,
     "id": "B",
     "lv": 1,
     "persona": "defend",
     "pop": 1,
     "units": 0
    },
    {
     "exp": 0,
     "id": "C",
     "lv": 1,
     "persona": "passive",
     "pop": 1,
     "units": 0
    },
    {
     "exp": 0,
     "id": "D",
     "lv": 1,
     "persona": "develop",
     "pop": 1,
     "units": 0
    }
   ],
   "rivers": [],
   "sitePos": {
    "1": [4,10],
    "2": [10,16],
    "3": [16,10],
    "4": [10,4],
    "A": [6,15],
    "B": [15,15],
    "C": [15,5],
    "D": [6,5],
    "P": [2,17],
    "Q": [18,3]
   },
   "sites": [
    {
     "id": "P"
    },
    {
     "id": "Q"
    }
   ]
  },
  "shatter": {
   "capitals": ["1","2","3","4","5","6","7","8"],
   "hexes": [[0,0,"W","1",5],[0,1,"W","1",4],[0,2,"W","1",3],[0,3,".","1",2],[0,4,".","1",2],[0,5,"W","1",2],[0,6,"W","1",3],[0,7,"W","1",4],[0,8,"W","1",5],[0,9,"W","1",6],[0,10,"W","2",5],[0,11,"W","2",4],[0,12,"W","2",3],[0,13,".","2",2],[0,14,".","2",2],[0,15,"F","2",2],[0,16,".","2",3],[0,17,"W","2",4],[0,18,"W","2",5],[0,19,"W","2",6],[0,20,"W","3",6],[0,21,"W","3",5],[0,22,"W","3",4],[0,23,"W","3",3],[0,24,"F","3",2],[0,25,"F","3",2],[0,26,"W","3",2],[0,27,"W","3",3],[0,28,"W","3",4],[0,29,"W","3",5],[1,0,"W","1",4],[1,1,"W","1",3],[1,2,".","1",2],[1,3,".","1",1],[1,4,".","1",1],[1,5,"W","1",2],[1,6,"W","1",3],[1,7,"W","1",4],[1,8,"W","1",5],[1,9,"W","2",5],[1,10,"W","2",4],[1,11,"~","2",3],[1,12,"F","2",2],[1,13,".","2",1],[1,14,".","2",1],[1,15,".","2",2],[1,16,".","2",3],[1,17,"W","2",4],[1,18,"W","2",5],[1,19,"W","B",5],[1,20,"W","3",5],[1,21,"W","3",4],[1,22,"W","3",3],[1,23,"F","3",2],[1,24,".","3",1],[1,25,".","3",1],[1,26,"T","3",2],[1,27,"W","3",3],[1,28,"W","3",4],[1,29,"W","3",5],[2,0,"W","1",4],[2,1,"W","1",3],[2,2,"W","1",2],[2,3,".","1",1],[2,4,"S","1",0],[2,5,".","1",1],[2,6,"F","1",2],[2,7,"W","1",3],[2,8,"W","1",4],[2,9,"W","A",4],[2,10,"W","2",4],[2,11,"W","2",3],[2,12,"~","2",2],[2,13,".","2",1],[2,14,"S","2",0],[2,15,".","2",1],[2,16,".","2",2],[2,17,"W","2",3],[2,18,"W","2",4],[2,19,"W","B",4],[2,20,"W","B",4],[2,21,"W","3",4],[2,22,"W","3",3],[2,23,"F","3",2],[2,24,".","3",1],[2,25,"S","3",0],[2,26,".","3",1],[2,27,"W","3",2],[2,28,"W","3",3],[2,29,"W","3",4],[3,0,"W","1",4],[3,1,"W","1",3],[3,2,".","1",2],[3,3,".","1",1],[3,4,".","1",1],[3,5,".","1",2],[3,6,"W","1",3],[3,7,"W","A",3],[3,8,"W","A",3],[3,9,"W","A",3],[3,10,"W","A",3],[3,11,".","2",3],[3,12,".","2",2],[3,13,".","2",1],[3,14,".","2",1],[3,15,".","2",2],[3,16,"W","2",3],[3,17,"W","2",4],[3,18,"W","B",3],[3,19,"W","B",3],[3,20,"W","B",3],[3,21,"W","B",3],[3,22,"W","3",3],[3,23,".","3",2],[3,24,".","3",1],[3,25,".","3",1],[3,26,".","3",2],[3,27,"W","3",3],[3,28,"W","3",4],[3,29,"W","3",5],[4,0,"W","1",5],[4,1,"W","1",4],[4,2,"W","1",3],[4,3,"W","1",2],[4,4,"F","1",2],[4,5,"W","1",2],[4,6,"W","1",3],[4,7,"W","A",3],[4,8,"W","A",2],[4,9,"W","A",2],[4,10,"M","A",2],[4,11,"W","A",3],[4,12,"W","2",3],[4,13,"F","2",2],[4,14,".","2",2],[4,15,"~","2",2],[4,16,".","2",3],[4,17,"W","2",4],[4,18,"W","B",3],[4,19,"F","B",2],[4,20,".","B",2],[4,21,"W","B",2],[4,22,"W","B",3],[4,23,"W","3",3],[4,24,"W","3",2],[4,25,"W","3",2],[4,26,".","3",2],[4,27,"^","3",3],[4,28,"W","3",4],[4,29,"W","3",5],[5,0,"W","1",5],[5,1,"W","1",4],[5,2,"W","1",3],[5,3,"W","1",3],[5,4,"W","1",3],[5,5,"W","1",3],[5,6,"W","A",3],[5,7,"W","A",2],[5,8,"F","A",1],[5,9,"^","A",1],[5,10,".","A",2],[5,11,"W","A",3],[5,12,"W","2",3],[5,13,"^","2",3],[5,14,"^","2",3],[5,15,".","2",3],[5,16,"W","2",4],[5,17,"W","B",3],[5,18,"W","B",2],[5,19,"^","B",1],[5,20,"^","B",1],[5,21,".","B",2],[5,22,"W","B",3],[5,23,"W","3",3],[5,24,"W","3",3],[5,25,"M","3",3],[5,26,"^","3",3],[5,27,"W","3",4],[5,28,"W","3",5],[5,29,"W","4",5],[6,0,"W","8",4],[6,1,"W","8",4],[6,2,"W","1",4],[6,3,"W","1",4],[6,4,"W","1",4],[6,5,"W","1",4],[6,6,"W","A",3],[6,7,"^","A",2],[6,8,"^","A",1],[6,9,"S","A",0],[6,10,"^","A",1],[6,11,"^","A",2],[6,12,"W","A",3],[6,13,"W","2",4],[6,14,"W","2",4],[6,15,"W","2",4],[6,16,"W","2",4],[6,17,"W","B",3],[6,18,"W","B",2],[6,19,"~","B",1],[6,20,"S","B",0],[6,21,"F","B",1],[6,22,"^","B",2],[6,23,"W","B",3],[6,24,"W","3",4],[6,25,"W","3",4],[6,26,"^","3",4],[6,27,"W","3",4],[6,28,"W","4",4],[6,29,"W","4",4],[7,0,"W","8",3],[7,1,"W","8",3],[7,2,"W","8",3],[7,3,"W","8",3],[7,4,"W","8",4],[7,5,"W","A",4],[7,6,"W","A",3],[7,7,"W","A",2],[7,8,"M","A",1],[7,9,"M","A",1],[7,10,"M","A",2],[7,11,"W","A",3],[7,12,"W","X",3],[7,13,"W","X",3],[7,14,"W","X",3],[7,15,"W","X",3],[7,16,"W","B",4],[7,17,"W","B",3],[7,18,".","B",2],[7,19,".","B",1],[7,20,".","B",1],[7,21,"W","B",2],[7,22,"W","B",3],[7,23,"W","B",4],[7,24,"W","4",4],[7,25,"W","4",3],[7,26,"W","4",3],[7,27,"W","4",3],[7,28,"W","4",3],[7,29,"W","4",4],[8,0,"W","8",3],[8,1,"W","8",2],[8,2,".","8",2],[8,3,"W","8",2],[8,4,"W","8",3],[8,5,"W","8",4],[8,6,"W","A",4],[8,7,"W","A",3],[8,8,"W","A",2],[8,9,"M","A",2],[8,10,"W","A",2],[8,11,"W","A",3],[8,12,"W","X",3],[8,13,"W","X",2],[8,14,".","X",2],[8,15,"W","X",2],[8,16,"W","X",3],[8,17,"W","B",4],[8,18,"W","B",3],[8,19,"F","B",2],[8,20,"F","B",2],[8,21,".","B",2],[8,22,"W","B",3],[8,23,"W","R",3],[8,24,"W","4",4],[8,25,"W","4",3],[8,26,".","4",2],[8,27,".","4",2],[8,28,".","4",2],[8,29,"W","4",3],[9,0,".","8",2],[9,1,".","8",1],[9,2,".","8",1],[9,3,".","8",2],[9,4,"W","8",3],[9,5,"W","8",4],[9,6,"F","A",4],[9,7,"W","A",3],[9,8,"W","A",3],[9,9,"W","A",3],[9,10,"W","A",3],[9,11,"W","X",3],[9,12,".","X",2],[9,13,".","X",1],[9,14,".","X",1],[9,15,".","X",2],[9,16,"W","X",3],[9,17,"W","B",4],[9,18,"W","B",3],[9,19,"W","B",3],[9,20,"W","R",2],[9,21,"W","R",2],[9,22,"W","R",2],[9,23,"W","R",3],[9,24,"W","4",3],[9,25,".","4",2],[9,26,".","4",1],[9,27,".","4",1],[9,28,".","4",2],[9,29,"W","4",3],[10,0,".","8",2],[10,1,".","8",1],[10,2,"S","8",0],[10,3,".","8",1],[10,4,".","8",2],[10,5,"W","8",3],[10,6,"F","8",4],[10,7,".","A",4],[10,8,"T","A",4],[10,9,"W","A",4],[10,10,"W","A",4],[10,11,"W","X",3],[10,12,"W","X",2],[10,13,".","X",1],[10,14,"S","X",0],[10,15,"~","X",1],[10,16,"W","X",2],[10,17,"W","X",3],[10,18,"W","B",4],[10,19,"W","R",3],[10,20,"W","R",2],[10,21,"\\"","R",1],[10,22,"d","R",1],[10,23,"W","R",2],[10,24,"W","4",3],[10,25,"W","4",2],[10,26,".","4",1],[10,27,"S","4",0],[10,28,".","4",1],[10,29,"^","4",2],[11,0,"^","8",2],[11,1,".","8",1],[11,2,".","8",1],[11,3,"W","8",2],[11,4,"W","8",3],[11,5,"W","8",4],[11,6,"T","C",4],[11,7,"W","C",4],[11,8,"W","C",4],[11,9,"W","C",4],[11,10,"W","C",4],[11,11,"W","X",3],[11,12,".","X",2],[11,13,".","X",1],[11,14,"^","X",1],[11,15,".","X",2],[11,16,"W","X",3],[11,17,"W","X",4],[11,18,"W","R",3],[11,19,"W","R",2],[11,20,".","R",1],[11,21,"S","R",0],[11,22,"W","R",1],[11,23,"W","R",2],[11,24,"W","4",3],[11,25,"F","4",2],[11,26,".","4",1],[11,27,".","4",1],[11,28,"W","4",2],[11,29,"W","4",3],[12,0,"W","8",3],[12,1,"W","8",2],[12,2,"W","8",2],[12,3,"W","8",2],[12,4,"W","8",3],[12,5,"W","8",4],[12,6,"W","C",4],[12,7,"W","C",3],[12,8,"W","C",3],[12,9,"W","C",3],[12,10,"W","C",3],[12,11,"W","C",4],[12,12,"W","X",3],[12,13,"^","X",2],[12,14,".","X",2],[12,15,"^","X",2],[12,16,"W","X",3],[12,17,"W","X",4],[12,18,"W","R",4],[12,19,"W","R",3],[12,20,"W","R",2],[12,21,"\\"","R",1],[12,22,"W","R",1],[12,23,"W","R",2],[12,24,"W","R",3],[12,25,"W","4",3],[12,26,".","4",2],[12,27,"W","4",2],[12,28,"F","4",2],[12,29,"W","4",3],[13,0,"W","8",3],[13,1,"W","8",3],[13,2,"W","8",3],[13,3,"W","8",3],[13,4,"W","8",4],[13,5,"W","C",4],[13,6,"W","C",3],[13,7,".","C",2],[13,8,".","C",2],[13,9,".","C",2],[13,10,"W","C",3],[13,11,"W","C",4],[13,12,"W","X",3],[13,13,"W","X",3],[13,14,"W","X",3],[13,15,"W","X",3],[13,16,"W","X",4],[13,17,"W","D",5],[13,18,"W","D",4],[13,19,"W","D",3],[13,20,"^","D",2],[13,21,".","D",2],[13,22,"F","D",2],[13,23,"W","D",3],[13,24,"W","4",4],[13,25,"W","4",3],[13,26,"W","4",3],[13,27,"W","4",3],[13,28,"W","4",3],[13,29,"W","4",4],[14,0,"W","Q",3],[14,1,"W","Q",2],[14,2,"W","Q",2],[14,3,"W","Q",2],[14,4,"W","Q",3],[14,5,"W","C",4],[14,6,"W","C",3],[14,7,".","C",2],[14,8,"F","C",1],[14,9,".","C",1],[14,10,".","C",2],[14,11,"W","C",3],[14,12,"W","C",4],[14,13,"W","X",4],[14,14,"W","X",4],[14,15,"W","X",4],[14,16,"W","X",4],[14,17,"W","6",5],[14,18,"W","D",4],[14,19,"W","D",3],[14,20,".","D",2],[14,21,"^","D",1],[14,22,"^","D",1],[14,23,"M","D",2],[14,24,"W","D",3],[14,25,"W","4",4],[14,26,"W","4",4],[14,27,"W","4",4],[14,28,"W","4",4],[14,29,"W","4",4],[15,0,"W","Q",2],[15,1,"W","Q",1],[15,2,"^","Q",1],[15,3,"W","Q",2],[15,4,"W","Q",3],[15,5,"W","C",3],[15,6,"F","C",2],[15,7,".","C",1],[15,8,"S","C",0],[15,9,".","C",1],[15,10,"F","C",2],[15,11,"W","C",3],[15,12,"W","6",4],[15,13,"W","6",4],[15,14,"W","6",4],[15,15,"W","6",4],[15,16,"W","6",4],[15,17,"W","D",4],[15,18,"W","D",3],[15,19,"W","D",2],[15,20,"^","D",1],[15,21,"S","D",0],[15,22,"M","D",1],[15,23,"W","D",2],[15,24,"W","D",3],[15,25,"W","5",4],[15,26,"W","5",4],[15,27,"W","5",4],[15,28,"W","4",5],[15,29,"W","4",5],[16,0,"W","Q",2],[16,1,"W","Q",1],[16,2,"S","Q",0],[16,3,"W","Q",1],[16,4,"W","Q",2],[16,5,"W","7",3],[16,6,"W","7",3],[16,7,".","C",2],[16,8,"~","C",1],[16,9,"^","C",1],[16,10,".","C",2],[16,11,"W","C",3],[16,12,"W","6",4],[16,13,".","6",3],[16,14,"~","6",3],[16,15,".","6",3],[16,16,"W","6",3],[16,17,"W","6",4],[16,18,"W","D",4],[16,19,"W","D",3],[16,20,"F","D",2],[16,21,"^","D",1],[16,22,"F","D",1],[16,23,"^","D",2],[16,24,"W","5",3],[16,25,"W","5",3],[16,26,"W","5",3],[16,27,"W","5",3],[16,28,"W","5",4],[16,29,"W","5",5],[17,0,"W","Q",2],[17,1,"F","Q",1],[17,2,"M","Q",1],[17,3,"~","7",2],[17,4,".","7",2],[17,5,"F","7",2],[17,6,"W","7",3],[17,7,"~","C",2],[17,8,"~","C",2],[17,9,"F","C",2],[17,10,"W","C",3],[17,11,"W","6",4],[17,12,"^","6",3],[17,13,".","6",2],[17,14,".","6",2],[17,15,"F","6",2],[17,16,"W","6",3],[17,17,"W","6",4],[17,18,"W","D",4],[17,19,"W","D",3],[17,20,"W","D",2],[17,21,"W","D",2],[17,22,"M","D",2],[17,23,"W","5",3],[17,24,".","5",2],[17,25,".","5",2],[17,26,"W","5",2],[17,27,"W","5",3],[17,28,"W","5",4],[17,29,"W","5",5],[18,0,"W","Q",3],[18,1,"W","Q",2],[18,2,"W","Q",2],[18,3,"^","7",2],[18,4,".","7",1],[18,5,".","7",1],[18,6,"W","7",2],[18,7,"W","7",3],[18,8,"W","C",3],[18,9,"W","C",3],[18,10,"W","C",3],[18,11,"W","6",4],[18,12,"W","6",3],[18,13,"^","6",2],[18,14,".","6",1],[18,15,".","6",1],[18,16,"~","6",2],[18,17,"W","6",3],[18,18,"W","6",4],[18,19,"W","D",4],[18,20,"W","D",3],[18,21,"W","D",3],[18,22,"W","D",3],[18,23,"W","5",3],[18,24,".","5",2],[18,25,".","5",1],[18,26,".","5",1],[18,27,"W","5",2],[18,28,"W","5",3],[18,29,"W","5",4],[19,0,"W","Q",3],[19,1,"W","7",3],[19,2,".","7",2],[19,3,".","7",1],[19,4,"S","7",0],[19,5,".","7",1],[19,6,"W","7",2],[19,7,"W","7",3],[19,8,"W","7",4],[19,9,"W","C",4],[19,10,"W","6",4],[19,11,"~","6",3],[19,12,".","6",2],[19,13,".","6",1],[19,14,"S","6",0],[19,15,".","6",1],[19,16,".","6",2],[19,17,"F","6",3],[19,18,"W","6",4],[19,19,"W","D",4],[19,20,"W","D",4],[19,21,"W","5",4],[19,22,"W","5",3],[19,23,"W","5",2],[19,24,".","5",1],[19,25,"S","5",0],[19,26,".","5",1],[19,27,"d","5",2],[19,28,"W","5",3],[19,29,"W","5",4],[20,0,"W","Q",4],[20,1,"W","7",4],[20,2,"W","7",3],[20,3,"W","7",2],[20,4,".","7",1],[20,5,".","7",1],[20,6,".","7",2],[20,7,"W","7",3],[20,8,"W","7",4],[20,9,"W","7",5],[20,10,"W","6",5],[20,11,"W","6",4],[20,12,".","6",3],[20,13,"F","6",2],[20,14,".","6",1],[20,15,".","6",1],[20,16,"~","6",2],[20,17,".","6",3],[20,18,"W","6",4],[20,19,"W","6",5],[20,20,"W","D",5],[20,21,"W","5",5],[20,22,"W","5",4],[20,23,"W","5",3],[20,24,"W","5",2],[20,25,".","5",1],[20,26,".","5",1],[20,27,"\\"","5",2],[20,28,"W","5",3],[20,29,"W","5",4],[21,0,"W","7",5],[21,1,"W","7",4],[21,2,"W","7",3],[21,3,".","7",2],[21,4,".","7",2],[21,5,".","7",2],[21,6,"W","7",3],[21,7,"W","7",4],[21,8,"W","7",5],[21,9,"W","6",6],[21,10,"W","6",5],[21,11,"W","6",4],[21,12,".","6",3],[21,13,"~","6",2],[21,14,".","6",2],[21,15,"~","6",2],[21,16,"W","6",3],[21,17,"W","6",4],[21,18,"W","6",5],[21,19,"W","6",6],[21,20,"W","5",6],[21,21,"W","5",5],[21,22,"W","5",4],[21,23,"W","5",3],[21,24,"W","5",2],[21,25,"W","5",2],[21,26,"W","5",2],[21,27,"W","5",3],[21,28,"W","5",4],[21,29,"W","5",5]],
   "minors": [
    {
     "exp": 0,
     "id": "A",
     "lv": 1,
     "persona": "develop",
     "pop": 1,
     "units": 0
    },
    {
     "exp": 0,
     "id": "B",
     "lv": 1,
     "persona": "defend",
     "pop": 1,
     "units": 0
    },
    {
     "exp": 0,
     "id": "C",
     "lv": 1,
     "persona": "passive",
     "pop": 1,
     "units": 0
    },
    {
     "exp": 0,
     "id": "D",
     "lv": 1,
     "persona": "develop",
     "pop": 1,
     "units": 0
    }
   ],
   "rivers": [],
   "sitePos": {
    "1": [2,4],
    "2": [2,14],
    "3": [2,25],
    "4": [10,27],
    "5": [19,25],
    "6": [19,14],
    "7": [19,4],
    "8": [10,2],
    "A": [6,9],
    "B": [6,20],
    "C": [15,8],
    "D": [15,21],
    "Q": [16,2],
    "R": [11,21],
    "X": [10,14]
   },
   "sites": [
    {
     "id": "X"
    },
    {
     "id": "Q"
    },
    {
     "id": "R"
    }
   ]
  },
  "silkroad": {
   "capitals": ["1","2","3","4","5"],
   "hexes": [[0,0,"W","1",6],[0,1,"W","1",6],[0,2,"W","1",6],[0,3,"W","1",6],[0,4,"\\"","1",6],[0,5,"\\"","C",5],[0,6,"\\"","C",5],[0,7,"\\"","C",5],[0,8,"F","3",5],[0,9,"\\"","3",4],[0,10,"F","3",3],[0,11,"F","3",3],[0,12,"\\"","3",3],[0,13,"\\"","3",3],[0,14,"\\"","3",4],[0,15,"\\"","A",3],[0,16,"\\"","A",2],[0,17,"\\"","A",1],[0,18,"\\"","A",1],[0,19,"F","A",2],[0,20,"F","A",3],[0,21,"F","A",4],[0,22,"\\"","A",5],[0,23,"\\"","Z",5],[0,24,"\\"","Z",5],[0,25,"\\"","Z",5],[0,26,"\\"","Z",6],[0,27,"\\"","4",7],[0,28,"\\"","4",7],[0,29,"\\"","4",7],[0,30,"\\"","4",7],[0,31,"\\"","4",7],[1,0,"W","1",5],[1,1,"W","1",5],[1,2,"W","1",5],[1,3,"W","1",5],[1,4,"\\"","1",5],[1,5,"F","C",4],[1,6,"\\"","C",4],[1,7,"\\"","C",4],[1,8,"\\"","3",4],[1,9,"\\"","3",3],[1,10,".","3",2],[1,11,"\\"","3",2],[1,12,"\\"","3",2],[1,13,"\\"","3",3],[1,14,"\\"","A",3],[1,15,"\\"","A",2],[1,16,"\\"","A",1],[1,17,"S","A",0],[1,18,"\\"","A",1],[1,19,"\\"","A",2],[1,20,"\\"","A",3],[1,21,"F","A",4],[1,22,"\\"","Z",4],[1,23,"\\"","Z",4],[1,24,"\\"","Z",4],[1,25,"\\"","Z",5],[1,26,"\\"","B",6],[1,27,"\\"","4",6],[1,28,"\\"","4",6],[1,29,"\\"","4",6],[1,30,"\\"","4",6],[1,31,"\\"","4",6],[2,0,"W","1",5],[2,1,"W","1",4],[2,2,"W","1",4],[2,3,"W","1",4],[2,4,"\\"","1",4],[2,5,"\\"","1",4],[2,6,"\\"","C",3],[2,7,"\\"","C",3],[2,8,"\\"","C",3],[2,9,"\\"","3",3],[2,10,"F","3",2],[2,11,".","3",1],[2,12,".","3",1],[2,13,"\\"","3",2],[2,14,"\\"","3",3],[2,15,"\\"","A",3],[2,16,"\\"","A",2],[2,17,"F","A",1],[2,18,"\\"","A",1],[2,19,"\\"","A",2],[2,20,"\\"","A",3],[2,21,"\\"","Z",3],[2,22,"F","Z",3],[2,23,"F","Z",3],[2,24,"\\"","Z",3],[2,25,"\\"","Z",4],[2,26,"\\"","B",5],[2,27,"\\"","B",5],[2,28,"\\"","4",5],[2,29,"\\"","4",5],[2,30,"\\"","4",5],[2,31,"F","4",5],[3,0,"W","1",4],[3,1,"W","1",3],[3,2,"W","1",3],[3,3,".","1",3],[3,4,"^","1",3],[3,5,"^","C",3],[3,6,".","C",2],[3,7,".","C",2],[3,8,".","C",2],[3,9,".","3",2],[3,10,".","3",1],[3,11,"S","3",0],[3,12,".","3",1],[3,13,".","3",2],[3,14,".","3",3],[3,15,".","A",3],[3,16,".","A",2],[3,17,".","A",2],[3,18,".","A",2],[3,19,"\\"","A",3],[3,20,".","Z",3],[3,21,".","Z",2],[3,22,"\\"","Z",2],[3,23,".","Z",2],[3,24,"\\"","Z",3],[3,25,"\\"","B",4],[3,26,".","B",4],[3,27,".","B",4],[3,28,".","4",4],[3,29,".","4",4],[3,30,".","4",4],[3,31,"F","4",4],[3,32,".","4",4],[3,33,".","4",5],[4,0,"W","1",4],[4,1,"W","1",3],[4,2,"W","1",2],[4,3,".","1",2],[4,4,".","1",2],[4,5,"^","1",3],[4,6,".","C",2],[4,7,".","C",1],[4,8,"^","C",1],[4,9,"^","C",2],[4,10,".","3",2],[4,11,".","3",1],[4,12,".","3",1],[4,13,"M","3",2],[4,14,"^","3",3],[4,15,"M","X",3],[4,16,"^","A",3],[4,17,".","A",3],[4,18,"^","A",3],[4,19,"M","A",3],[4,20,"^","Z",3],[4,21,"M","Z",2],[4,22,".","Z",1],[4,23,"M","Z",1],[4,24,"^","Z",2],[4,25,"M","B",3],[4,26,"^","B",3],[4,27,".","B",3],[4,28,".","4",4],[4,29,"F","4",3],[4,30,".","4",3],[4,31,".","4",3],[4,32,".","4",3],[4,33,".","4",4],[5,0,"W","1",3],[5,1,"W","1",2],[5,2,"W","1",1],[5,3,".","1",1],[5,4,"^","1",2],[5,5,".","C",2],[5,6,".","C",1],[5,7,"S","C",0],[5,8,".","C",1],[5,9,".","C",2],[5,10,"^","3",2],[5,11,"^","3",2],[5,12,"d","3",2],[5,13,"d","X",2],[5,14,"d","X",2],[5,15,"d","X",2],[5,16,"d","X",3],[5,17,"d","A",4],[5,18,"d","A",4],[5,19,"d","Z",3],[5,20,"d","Z",2],[5,21,"d","Z",1],[5,22,"S","Z",0],[5,23,"d","Z",1],[5,24,"d","B",2],[5,25,"d","B",2],[5,26,"d","B",2],[5,28,".","4",3],[5,29,".","4",2],[5,30,".","4",2],[5,31,".","4",2],[5,32,".","4",3],[5,33,"F","4",4],[6,0,"W","1",3],[6,1,"W","1",2],[6,2,"W","1",1],[6,3,"S","1",0],[6,4,".","1",1],[6,5,".","1",2],[6,6,".","C",2],[6,7,".","C",1],[6,8,".","C",1],[6,9,".","C",2],[6,10,"^","3",3],[6,11,"M","3",3],[6,12,"d","3",3],[6,13,"d","X",2],[6,14,"d","X",1],[6,15,"d","X",1],[6,16,"d","X",2],[6,17,"d","X",3],[6,18,"d","X",4],[6,19,"d","Y",4],[6,20,"d","Z",3],[6,21,"d","Z",2],[6,22,".","Z",1],[6,23,".","Z",1],[6,24,"d","B",2],[6,25,".","B",1],[6,26,"d","B",1],[6,28,".","4",3],[6,29,"F","4",2],[6,30,".","4",1],[6,31,".","4",1],[6,32,"F","4",2],[6,33,".","4",3],[7,0,"W","1",3],[7,1,"W","1",2],[7,2,".","1",1],[7,3,".","1",1],[7,4,"^","1",2],[7,5,"^","2",2],[7,6,".","2",2],[7,7,".","2",2],[7,8,".","C",2],[7,9,".","C",3],[7,10,"M","3",4],[7,11,"M","X",3],[7,12,"d","X",2],[7,13,"d","X",1],[7,14,"S","X",0],[7,15,".","X",1],[7,16,"d","X",2],[7,17,"d","X",3],[7,18,"d","Y",3],[7,19,"d","Y",3],[7,20,"d","Z",3],[7,21,"d","Z",2],[7,22,"d","Z",2],[7,23,"d","B",2],[7,24,".","B",1],[7,25,"S","B",0],[7,26,".","B",1],[7,28,".","4",2],[7,29,".","4",1],[7,30,"S","4",0],[7,31,".","4",1],[7,32,".","4",2],[7,33,".","4",3],[8,0,"W","1",4],[8,1,"W","1",3],[8,2,".","1",2],[8,3,".","1",2],[8,4,".","1",2],[8,5,"^","2",2],[8,6,".","2",1],[8,7,".","2",1],[8,8,".","2",2],[8,9,".","2",3],[8,10,"^","2",4],[8,11,"M","X",4],[8,12,"d","X",3],[8,13,"d","X",2],[8,14,".","X",1],[8,15,"d","X",1],[8,16,"d","X",2],[8,17,"d","Y",2],[8,18,"d","Y",2],[8,19,"d","Y",2],[8,20,"d","Y",3],[8,21,"d","Z",3],[8,22,"d","Z",3],[8,23,"d","B",3],[8,24,".","B",2],[8,25,"d","B",1],[8,26,".","B",1],[8,28,".","4",3],[8,29,".","4",2],[8,30,".","4",1],[8,31,".","4",1],[8,32,".","4",2],[8,33,".","4",3],[9,0,"W","1",4],[9,1,"W","1",3],[9,2,".","1",3],[9,3,".","1",3],[9,4,".","2",2],[9,5,".","2",1],[9,6,"S","2",0],[9,7,".","2",1],[9,8,".","2",2],[9,9,".","2",3],[9,10,"M","2",4],[9,11,"M","5",4],[9,12,"d","X",3],[9,13,"d","X",2],[9,14,"d","X",2],[9,15,"d","X",2],[9,16,"d","Y",2],[9,17,"d","Y",1],[9,18,"d","Y",1],[9,19,"d","Y",2],[9,20,"d","Y",3],[9,21,"d","Y",4],[9,22,"d","B",4],[9,23,"d","B",3],[9,24,"d","B",2],[9,25,"d","B",2],[9,26,"d","B",2],[9,28,".","4",3],[9,29,".","4",2],[9,30,".","4",2],[9,31,".","4",2],[9,32,".","4",3],[9,33,".","4",4],[10,0,"W","1",5],[10,1,"W","1",4],[10,2,"^","1",4],[10,3,".","1",4],[10,4,"^","2",3],[10,5,".","2",2],[10,6,".","2",1],[10,7,".","2",1],[10,8,".","2",2],[10,9,"^","2",3],[10,10,"M","2",4],[10,11,"M","5",3],[10,12,"d","5",3],[10,13,"d","5",3],[10,14,"d","5",3],[10,15,"d","X",3],[10,16,"d","Y",2],[10,17,"d","Y",1],[10,18,"S","Y",0],[10,19,".","Y",1],[10,20,"d","Y",2],[10,21,"d","Y",3],[10,22,"d","Y",4],[10,23,"d","B",4],[10,24,"d","B",3],[10,25,"d","B",3],[10,26,"d","B",3],[10,28,"F","4",4],[10,29,".","4",3],[10,30,".","4",3],[10,31,"F","4",3],[10,32,".","4",3],[10,33,".","4",4],[11,0,"W","1",5],[11,1,"W","1",5],[11,2,"^","1",5],[11,3,".","2",4],[11,4,".","2",3],[11,5,".","2",2],[11,6,"^","2",2],[11,7,"^","2",2],[11,8,".","2",3],[11,9,"^","2",4],[11,10,"^","5",3],[11,11,"^","5",2],[11,12,"d","5",2],[11,13,"d","5",2],[11,14,"d","5",3],[11,15,"d","Y",3],[11,16,"d","Y",2],[11,17,"d","Y",1],[11,18,"d","Y",1],[11,19,".","Y",2],[11,20,"d","Y",3],[11,21,"d","Y",4],[11,22,"d","B",5],[11,23,"d","B",4],[11,24,"d","B",4],[11,25,"d","B",4],[11,26,"d","B",4],[11,28,".","4",4],[11,29,".","4",4],[11,30,".","4",4],[11,31,".","4",4],[11,32,".","4",4],[11,33,".","4",5],[12,0,"W","1",6],[12,1,"W","1",6],[12,2,"d","1",6],[12,3,"d","2",5],[12,4,".","2",4],[12,5,".","2",3],[12,6,"d","2",3],[12,7,".","2",3],[12,8,"d","2",3],[12,9,"d","2",4],[12,10,".","5",3],[12,11,".","5",2],[12,12,".","5",1],[12,13,"M","5",1],[12,14,"M","5",2],[12,15,"M","5",3],[12,16,"M","Y",3],[12,17,"M","Y",2],[12,18,"M","Y",2],[12,19,"M","Y",2],[12,20,"M","Y",3],[12,21,"M","Y",4],[12,22,"M","Y",5],[12,23,"M","B",5],[12,24,"M","B",5],[12,25,"M","B",5],[12,26,"d","B",5],[12,27,"~","B",5],[12,28,".","4",5],[12,29,"~","4",5],[12,30,"~","4",5],[12,31,".","4",5],[12,32,".","4",5],[12,33,"~","4",5],[13,0,"W","1",7],[13,1,"W","1",7],[13,2,"W","2",6],[13,3,"W","2",5],[13,4,"W","2",4],[13,5,"W","2",4],[13,6,"W","2",4],[13,7,"W","2",4],[13,8,"W","2",4],[13,9,"W","5",3],[13,10,".","5",2],[13,11,".","5",1],[13,12,"S","5",0],[13,13,".","5",1],[13,14,".","5",2],[13,15,".","5",3],[13,16,".","Y",3],[13,17,"M","Y",3],[13,18,"M","Y",3],[13,19,"M","Y",3],[13,20,"M","Y",4],[13,21,"M","Y",5],[13,22,"M","B",6],[13,23,"M","B",6],[13,24,"M","B",6],[13,25,"M","B",6],[13,27,".","4",6],[13,28,".","4",6],[13,29,".","4",6],[13,30,".","4",6],[13,31,".","4",6],[13,32,".","4",6],[13,33,".","4",6],[14,0,"W","1",8],[14,1,"W","1",8],[14,2,"W","2",7],[14,3,"W","2",6],[14,4,"W","2",5],[14,5,"W","2",5],[14,6,"W","2",5],[14,7,"W","2",5],[14,8,"W","2",5],[14,9,"W","5",4],[14,10,".","5",3],[14,11,".","5",2],[14,12,".","5",1],[14,13,".","5",1],[14,14,"^","5",2],[14,15,".","5",3],[14,27,".","4",7],[14,28,".","4",7],[14,29,"~","4",7],[14,30,".","4",7],[14,31,".","4",7],[14,32,"~","4",7],[14,33,".","4",7]],
   "minors": [
    {
     "exp": 0,
     "id": "A",
     "lv": 1,
     "persona": "develop",
     "pop": 1,
     "units": 0
    },
    {
     "exp": 0,
     "id": "B",
     "lv": 1,
     "persona": "defend",
     "pop": 1,
     "units": 0
    },
    {
     "exp": 0,
     "id": "C",
     "lv": 1,
     "persona": "passive",
     "pop": 1,
     "units": 0
    }
   ],
   "rivers": [[5,29],[6,29],[7,29],[8,30],[9,30],[8,5],[9,5],[10,5],[11,6]],
   "sitePos": {
    "1": [6,3],
    "2": [9,6],
    "3": [3,11],
    "4": [7,30],
    "5": [13,12],
    "A": [1,17],
    "B": [7,25],
    "C": [5,7],
    "X": [7,14],
    "Y": [10,18],
    "Z": [5,22]
   },
   "sites": [
    {
     "id": "X"
    },
    {
     "id": "Y"
    },
    {
     "id": "Z"
    }
   ]
  },
  "twins": {
   "capitals": ["1","2"],
   "hexes": [[0,0,"W","1",6],[0,1,"W","1",5],[0,2,"W","1",4],[0,3,"W","1",3],[0,4,"W","1",3],[0,5,"W","1",3],[0,6,"W","1",3],[0,7,"W","1",4],[0,8,"W","1",5],[0,9,"W","1",6],[0,10,"W","1",7],[0,11,"W","N",7],[0,12,"W","N",7],[0,13,"W","N",7],[0,14,"W","N",7],[0,15,"W","Q",6],[0,16,"W","Q",5],[0,17,"W","Q",4],[0,18,"W","Q",4],[0,19,"W","Q",4],[0,20,"W","Q",4],[0,21,"W","Q",4],[0,22,"W","Q",5],[0,23,"W","Q",6],[1,0,"W","1",5],[1,1,"W","1",4],[1,2,"W","1",3],[1,3,"F","1",2],[1,4,"F","1",2],[1,5,".","1",2],[1,6,"W","1",3],[1,7,"W","1",4],[1,8,"W","1",5],[1,9,"W","1",6],[1,10,"W","N",6],[1,11,"W","N",6],[1,12,"W","N",6],[1,13,"W","N",6],[1,14,"W","N",6],[1,15,"W","Q",5],[1,16,"W","Q",4],[1,17,".","Q",3],[1,18,".","Q",3],[1,19,".","Q",3],[1,20,"W","Q",3],[1,21,"W","Q",4],[1,22,"W","Q",5],[2,0,"W","1",5],[2,1,"W","1",4],[2,2,"F","1",3],[2,3,"F","1",2],[2,4,".","1",1],[2,5,"F","1",1],[2,6,".","1",2],[2,7,"W","1",3],[2,8,"W","1",4],[2,9,"W","1",5],[2,10,"W","N",5],[2,11,"W","N",5],[2,12,"W","N",5],[2,13,"W","N",5],[2,14,"W","N",5],[2,15,"W","Q",5],[2,16,"W","Q",4],[2,17,".","Q",3],[2,18,".","Q",2],[2,19,"^","Q",2],[2,20,".","Q",2],[2,21,".","Q",3],[2,22,"W","Q",4],[2,23,"W","Q",5],[3,0,"W","1",4],[3,1,".","1",3],[3,2,"^","1",2],[3,3,".","1",1],[3,4,"S","1",0],[3,5,".","1",1],[3,6,".","1",2],[3,7,"W","1",3],[3,8,"W","1",4],[3,9,"W","N",4],[3,10,"W","N",4],[3,11,"W","N",4],[3,12,"W","N",4],[3,13,"W","N",4],[3,14,"W","N",5],[3,15,".","Q",4],[3,16,".","Q",3],[3,17,"F","Q",2],[3,18,".","Q",1],[3,19,"^","Q",1],[3,20,".","Q",2],[3,21,".","Q",3],[3,22,"W","Q",4],[4,0,"W","1",5],[4,1,"F","1",4],[4,2,".","1",3],[4,3,".","1",2],[4,4,".","1",1],[4,5,".","1",1],[4,6,".","1",2],[4,7,"~","1",3],[4,8,"W","1",4],[4,9,"W","N",4],[4,10,"W","N",3],[4,11,"W","N",3],[4,12,"W","N",3],[4,13,"W","N",3],[4,14,"W","N",4],[4,15,"W","Q",4],[4,16,".","Q",3],[4,17,".","Q",2],[4,18,"F","Q",1],[4,19,"S","Q",0],[4,20,".","Q",1],[4,21,"~","Q",2],[4,22,".","Q",3],[4,23,"W","Q",4],[5,0,".","1",5],[5,1,".","1",4],[5,2,".","1",3],[5,3,".","1",2],[5,4,".","1",2],[5,5,".","1",2],[5,6,"F","1",3],[5,7,".","1",4],[5,8,"W","N",4],[5,9,"W","N",3],[5,10,"W","N",2],[5,11,"W","N",2],[5,12,"W","N",2],[5,13,"W","N",3],[5,14,"W","N",4],[5,15,".","Q",4],[5,16,".","Q",3],[5,17,"^","Q",2],[5,18,".","Q",1],[5,19,"^","Q",1],[5,20,".","Q",2],[5,21,".","Q",3],[5,22,".","Q",4],[6,0,".","1",6],[6,1,".","1",5],[6,2,"\\"","1",4],[6,3,".","1",3],[6,4,".","1",3],[6,5,".","1",3],[6,6,".","1",3],[6,7,"o","1",4],[6,8,".","N",4],[6,9,"W","N",3],[6,10,"W","N",2],[6,11,".","N",1],[6,12,"W","N",1],[6,13,"W","N",2],[6,14,"W","N",3],[6,15,".","N",4],[6,16,".","Q",4],[6,17,".","Q",3],[6,18,"^","Q",2],[6,19,".","Q",2],[6,20,".","Q",2],[6,21,"~","Q",3],[6,22,".","Q",4],[7,0,".","P",5],[7,1,".","P",4],[7,2,".","P",3],[7,3,".","P",3],[7,4,".","P",3],[7,5,".","P",3],[7,6,".","1",4],[7,7,".","N",4],[7,8,"W","N",3],[7,9,"W","N",2],[7,10,"^","N",1],[7,11,"S","N",0],[7,12,"^","N",1],[7,13,"W","N",2],[7,14,"W","N",3],[7,15,".","N",4],[7,16,".","2",4],[7,17,".","Q",3],[7,18,".","Q",3],[7,19,".","Q",3],[7,20,".","Q",3],[7,21,".","Q",4],[7,22,".","Q",5],[8,1,".","P",4],[8,2,"~","P",3],[8,3,".","P",2],[8,4,".","P",2],[8,5,"^","P",2],[8,6,".","P",3],[8,7,".","P",4],[8,8,".","N",4],[8,9,"W","N",3],[8,10,"W","N",2],[8,11,"W","N",1],[8,12,".","N",1],[8,13,"W","N",2],[8,14,"W","N",3],[8,15,".","N",4],[8,16,"o","2",4],[8,17,".","2",3],[8,18,".","2",3],[8,19,".","2",3],[8,20,".","2",3],[8,21,"\\"","2",4],[8,22,".","2",5],[8,23,".","2",6],[9,0,".","P",4],[9,1,".","P",3],[9,2,".","P",2],[9,3,"^","P",1],[9,4,".","P",1],[9,5,"^","P",2],[9,6,".","P",3],[9,7,".","P",4],[9,8,"W","N",4],[9,9,"W","N",3],[9,10,"W","N",2],[9,11,"W","N",2],[9,12,"W","N",2],[9,13,"W","N",3],[9,14,"W","N",4],[9,15,".","2",4],[9,16,"F","2",3],[9,17,".","2",2],[9,18,".","2",2],[9,19,".","2",2],[9,20,".","2",3],[9,21,".","2",4],[9,22,".","2",5],[10,0,"W","P",4],[10,1,".","P",3],[10,2,"~","P",2],[10,3,".","P",1],[10,4,"S","P",0],[10,5,"F","P",1],[10,6,".","P",2],[10,7,".","P",3],[10,8,"W","P",4],[10,9,"W","N",4],[10,10,"W","N",3],[10,11,"W","N",3],[10,12,"W","N",3],[10,13,"W","N",3],[10,14,"W","N",4],[10,15,"W","2",4],[10,16,"~","2",3],[10,17,".","2",2],[10,18,".","2",1],[10,19,".","2",1],[10,20,".","2",2],[10,21,".","2",3],[10,22,"F","2",4],[10,23,"W","2",5],[11,0,"W","P",4],[11,1,".","P",3],[11,2,".","P",2],[11,3,"^","P",1],[11,4,".","P",1],[11,5,"F","P",2],[11,6,".","P",3],[11,7,".","P",4],[11,8,"W","N",5],[11,9,"W","N",4],[11,10,"W","N",4],[11,11,"W","N",4],[11,12,"W","N",4],[11,13,"W","N",4],[11,14,"W","2",4],[11,15,"W","2",3],[11,16,".","2",2],[11,17,".","2",1],[11,18,"S","2",0],[11,19,".","2",1],[11,20,"^","2",2],[11,21,".","2",3],[11,22,"W","2",4],[12,0,"W","P",5],[12,1,"W","P",4],[12,2,".","P",3],[12,3,".","P",2],[12,4,"^","P",2],[12,5,".","P",2],[12,6,".","P",3],[12,7,"W","P",4],[12,8,"W","P",5],[12,9,"W","N",5],[12,10,"W","N",5],[12,11,"W","N",5],[12,12,"W","N",5],[12,13,"W","N",5],[12,14,"W","2",5],[12,15,"W","2",4],[12,16,"W","2",3],[12,17,".","2",2],[12,18,"F","2",1],[12,19,".","2",1],[12,20,"F","2",2],[12,21,"F","2",3],[12,22,"W","2",4],[12,23,"W","2",5],[13,0,"W","P",5],[13,1,"W","P",4],[13,2,"W","P",3],[13,3,".","P",3],[13,4,".","P",3],[13,5,".","P",3],[13,6,"W","P",4],[13,7,"W","P",5],[13,8,"W","N",6],[13,9,"W","N",6],[13,10,"W","N",6],[13,11,"W","N",6],[13,12,"W","N",6],[13,13,"W","2",6],[13,14,"W","2",5],[13,15,"W","2",4],[13,16,"W","2",3],[13,17,".","2",2],[13,18,"F","2",2],[13,19,"F","2",2],[13,20,"W","2",3],[13,21,"W","2",4],[13,22,"W","2",5],[14,0,"W","P",6],[14,1,"W","P",5],[14,2,"W","P",4],[14,3,"W","P",4],[14,4,"W","P",4],[14,5,"W","P",4],[14,6,"W","P",4],[14,7,"W","P",5],[14,8,"W","P",6],[14,9,"W","N",7],[14,10,"W","N",7],[14,11,"W","N",7],[14,12,"W","N",7],[14,13,"W","2",7],[14,14,"W","2",6],[14,15,"W","2",5],[14,16,"W","2",4],[14,17,"W","2",3],[14,18,"W","2",3],[14,19,"W","2",3],[14,20,"W","2",3],[14,21,"W","2",4],[14,22,"W","2",5],[14,23,"W","2",6]],
   "minors": [],
   "rivers": [],
   "sitePos": {
    "1": [3,4],
    "2": [11,18],
    "N": [7,11],
    "P": [10,4],
    "Q": [4,19]
   },
   "sites": [
    {
     "id": "N"
    },
    {
     "id": "P"
    },
    {
     "id": "Q"
    }
   ]
  }
 },
 "minorAi": {
  "defend": {
   "w": [0.1,0.25,0.5,0.65]
  },
  "develop": {
   "w": [0.2,0.5,0.6,0.65]
  },
  "passive": {
   "w": [0.1,0.15,0.2,0.35]
  }
 },
 "minorAlarmHit": {
  "defend": 0.25,
  "develop": 0.2,
  "passive": 0.15
 },
 "minorsDefault": [
  {
   "exp": 0,
   "id": "R",
   "lv": 1,
   "persona": "develop",
   "pop": 1,
   "units": 0
  },
  {
   "exp": 0,
   "id": "H",
   "lv": 1,
   "persona": "defend",
   "pop": 1,
   "units": 0
  },
  {
   "exp": 0,
   "id": "W",
   "lv": 1,
   "persona": "passive",
   "pop": 1,
   "units": 0
  }
 ],
 "rules": {
  "aristocracyExpMul": 2,
  "armyMultBase": 1,
  "bridgeCost": 2,
  "bridgeMinPower": 1,
  "capitalCityName": "首都",
  "capitalFallVp": 6,
  "capitalStartPop": 2,
  "cityDefensePerLv": 2,
  "cityVpLv": 6,
  "cityVpTurn": 1,
  "claimPlainsExp": 1,
  "claimRadius": 3,
  "decayMulForeign": 4,
  "decayMulOwn": 1,
  "decayMulUnclaimed": 2,
  "empireBase": 3,
  "firstLv3Lv": 3,
  "firstLv3Vp": 2,
  "firstLv5Lv": 5,
  "firstLv5Vp": 5,
  "fleetCombatBase": 2,
  "fleetCostBase": 4,
  "fleetCostPerFleet": 3,
  "fleetLandDecay": 32,
  "fleetSeaDecay": 8,
  "fleetSlotBase": 1,
  "halveOwnLandDiv": 2,
  "halveTerrainDiv": 2,
  "handicapStart": 5,
  "handicapVp10": 10,
  "handicapVp30": 30,
  "handicapVp60": 60,
  "hillsTerrain": "^",
  "lvExp": [0,0,3,10,25,50,100],
  "lvInc": [0,1,2,4,7,11,13],
  "lvStepExp": 50,
  "lvStepVp": 5,
  "maxLv": 6,
  "milestoneVp": [10,30,60],
  "minorAlarmFromTurn": 4,
  "minorAlarmRadius": 7,
  "minorAlarmRolls": 3,
  "minorCaptureRolls": 9,
  "minorDefensePerLv": 2,
  "minorDefensePerUnit": 2,
  "minorPassiveQuietUntil": 4,
  "minorPlainsExp": 1,
  "minorPopExp": 2,
  "minorPopStep": 1,
  "monarchyMult": 1,
  "moveCostPer": 20,
  "natTurns": 3,
  "nationalismMult": 1,
  "personas": ["develop","defend","passive"],
  "plainsTerrain": ".",
  "plannedPop": 2,
  "popCostBase": 2,
  "popCostPerPop": 2,
  "popExp": 2,
  "popLimitBase": 1,
  "popPerFleetSlot": 5,
  "popPerSlot": 2,
  "popPerStation": 3,
  "projClamp": 50,
  "projectionHalfDiv": 2,
  "republicPopCostDiv": 2,
  "riverDecayDiv": 2,
  "settleBasePower": 1,
  "settleClamp": 50,
  "settleStartPop": 1,
  "settleUnits": 2,
  "siegeTurnsBase": 3,
  "startMoney": 10,
  "startMoneyByPlains": [13,13,13,13,11,10,8,7,6],
  "stationBase": 1,
  "techDiscountTiers": [[5,0.2],[3,0.1]],
  "theocracyPopPerSlot": 1,
  "tileLimitBase": 2,
  "tradeIncomePerCity": 1,
  "unitCombatBase": 2,
  "unitCostBase": 3,
  "unitCostPerUnit": 2,
  "victoryVp": 100
 },
 "schemaVersion": 1,
 "techs": [
  {
   "cost": 6,
   "grants": null,
   "id": "pottery",
   "mod": {
    "claimAnywhere": false,
    "combat": 0,
    "fleetCombat": 0,
    "halveOwnLand": false,
    "halveTerrain": null,
    "natTurns": 0,
    "popLimit": 0,
    "siegeTurns": null,
    "tileLimit": 0
   },
   "reqAny": [],
   "vp": 2
  },
  {
   "cost": 8,
   "grants": "admin",
   "id": "writing",
   "mod": {
    "claimAnywhere": false,
    "combat": 0,
    "fleetCombat": 0,
    "halveOwnLand": false,
    "halveTerrain": null,
    "natTurns": 0,
    "popLimit": 0,
    "siegeTurns": null,
    "tileLimit": 0
   },
   "reqAny": ["pottery"],
   "vp": 2
  },
  {
   "cost": 12,
   "grants": null,
   "id": "law",
   "mod": {
    "claimAnywhere": false,
    "combat": 0,
    "fleetCombat": 0,
    "halveOwnLand": false,
    "halveTerrain": null,
    "natTurns": 0,
    "popLimit": 0,
    "siegeTurns": null,
    "tileLimit": 1
   },
   "reqAny": ["writing"],
   "vp": 2
  },
  {
   "cost": 8,
   "grants": null,
   "id": "bronze",
   "mod": {
    "claimAnywhere": false,
    "combat": 0,
    "fleetCombat": 0,
    "halveOwnLand": false,
    "halveTerrain": null,
    "natTurns": 0,
    "popLimit": 0,
    "siegeTurns": null,
    "tileLimit": 0
   },
   "reqAny": [],
   "vp": 2
  },
  {
   "cost": 14,
   "grants": null,
   "id": "iron",
   "mod": {
    "claimAnywhere": false,
    "combat": 1,
    "fleetCombat": 0,
    "halveOwnLand": false,
    "halveTerrain": null,
    "natTurns": 0,
    "popLimit": 0,
    "siegeTurns": null,
    "tileLimit": 0
   },
   "reqAny": ["bronze"],
   "vp": 2
  },
  {
   "cost": 4,
   "grants": null,
   "id": "wheel",
   "mod": {
    "claimAnywhere": false,
    "combat": 0,
    "fleetCombat": 0,
    "halveOwnLand": false,
    "halveTerrain": null,
    "natTurns": 0,
    "popLimit": 0,
    "siegeTurns": null,
    "tileLimit": 0
   },
   "reqAny": [],
   "vp": 2
  },
  {
   "cost": 6,
   "grants": null,
   "id": "riding",
   "mod": {
    "claimAnywhere": false,
    "combat": 0,
    "fleetCombat": 0,
    "halveOwnLand": false,
    "halveTerrain": "\\"",
    "natTurns": 0,
    "popLimit": 0,
    "siegeTurns": null,
    "tileLimit": 0
   },
   "reqAny": ["wheel"],
   "vp": 2
  },
  {
   "cost": 10,
   "grants": null,
   "id": "trade",
   "mod": {
    "claimAnywhere": false,
    "combat": 0,
    "fleetCombat": 0,
    "halveOwnLand": false,
    "halveTerrain": "d",
    "natTurns": 0,
    "popLimit": 0,
    "siegeTurns": null,
    "tileLimit": 0
   },
   "reqAny": ["coinage","wheel"],
   "vp": 2
  },
  {
   "cost": 24,
   "grants": null,
   "id": "accounting",
   "mod": {
    "claimAnywhere": false,
    "combat": 0,
    "fleetCombat": 0,
    "halveOwnLand": false,
    "halveTerrain": null,
    "natTurns": 0,
    "popLimit": 0,
    "siegeTurns": null,
    "tileLimit": 0
   },
   "reqAny": ["trade"],
   "vp": 2
  },
  {
   "cost": 22,
   "grants": null,
   "id": "education",
   "mod": {
    "claimAnywhere": false,
    "combat": 0,
    "fleetCombat": 0,
    "halveOwnLand": false,
    "halveTerrain": null,
    "natTurns": 0,
    "popLimit": 0,
    "siegeTurns": null,
    "tileLimit": 0
   },
   "reqAny": ["law"],
   "vp": 2
  },
  {
   "cost": 14,
   "grants": null,
   "id": "medicine",
   "mod": {
    "claimAnywhere": false,
    "combat": 0,
    "fleetCombat": 0,
    "halveOwnLand": false,
    "halveTerrain": null,
    "natTurns": 0,
    "popLimit": 1,
    "siegeTurns": null,
    "tileLimit": 0
   },
   "reqAny": ["writing","trade"],
   "vp": 2
  },
  {
   "cost": 28,
   "grants": null,
   "id": "biology",
   "mod": {
    "claimAnywhere": false,
    "combat": 0,
    "fleetCombat": 0,
    "halveOwnLand": false,
    "halveTerrain": null,
    "natTurns": 0,
    "popLimit": 0,
    "siegeTurns": null,
    "tileLimit": 0
   },
   "reqAny": ["medicine"],
   "vp": 2
  },
  {
   "cost": 10,
   "grants": "mint",
   "id": "coinage",
   "mod": {
    "claimAnywhere": false,
    "combat": 0,
    "fleetCombat": 0,
    "halveOwnLand": false,
    "halveTerrain": null,
    "natTurns": 0,
    "popLimit": 0,
    "siegeTurns": null,
    "tileLimit": 0
   },
   "reqAny": ["bronze"],
   "vp": 2
  },
  {
   "cost": 16,
   "grants": null,
   "id": "compass",
   "mod": {
    "claimAnywhere": false,
    "combat": 0,
    "fleetCombat": 0,
    "halveOwnLand": false,
    "halveTerrain": null,
    "natTurns": 0,
    "popLimit": 0,
    "siegeTurns": null,
    "tileLimit": 0
   },
   "reqAny": ["iron","trade"],
   "vp": 2
  },
  {
   "cost": 18,
   "grants": "admin",
   "id": "civil",
   "mod": {
    "claimAnywhere": false,
    "combat": 0,
    "fleetCombat": 0,
    "halveOwnLand": false,
    "halveTerrain": null,
    "natTurns": 0,
    "popLimit": 0,
    "siegeTurns": null,
    "tileLimit": 1
   },
   "reqAny": ["law","coinage"],
   "vp": 2
  },
  {
   "cost": 6,
   "grants": "pyramid",
   "id": "masonry",
   "mod": {
    "claimAnywhere": false,
    "combat": 0,
    "fleetCombat": 0,
    "halveOwnLand": false,
    "halveTerrain": null,
    "natTurns": 0,
    "popLimit": 0,
    "siegeTurns": null,
    "tileLimit": 0
   },
   "reqAny": [],
   "vp": 2
  },
  {
   "cost": 12,
   "grants": null,
   "id": "construction",
   "mod": {
    "claimAnywhere": false,
    "combat": 0,
    "fleetCombat": 0,
    "halveOwnLand": false,
    "halveTerrain": null,
    "natTurns": 0,
    "popLimit": 0,
    "siegeTurns": null,
    "tileLimit": 0
   },
   "reqAny": ["masonry"],
   "vp": 2
  },
  {
   "cost": 24,
   "grants": null,
   "id": "feudalism",
   "mod": {
    "claimAnywhere": false,
    "combat": 0,
    "fleetCombat": 0,
    "halveOwnLand": false,
    "halveTerrain": null,
    "natTurns": 0,
    "popLimit": 0,
    "siegeTurns": null,
    "tileLimit": 1
   },
   "reqAny": ["iron","riding"],
   "vp": 2
  },
  {
   "cost": 32,
   "grants": null,
   "id": "nationalism",
   "mod": {
    "claimAnywhere": false,
    "combat": 0,
    "fleetCombat": 0,
    "halveOwnLand": false,
    "halveTerrain": null,
    "natTurns": 3,
    "popLimit": 0,
    "siegeTurns": null,
    "tileLimit": 0
   },
   "reqAny": ["feudalism","civil"],
   "vp": 2
  },
  {
   "cost": 22,
   "grants": null,
   "id": "reclaim",
   "mod": {
    "claimAnywhere": false,
    "combat": 0,
    "fleetCombat": 0,
    "halveOwnLand": false,
    "halveTerrain": null,
    "natTurns": 0,
    "popLimit": 0,
    "siegeTurns": null,
    "tileLimit": 1
   },
   "reqAny": ["construction"],
   "vp": 2
  },
  {
   "cost": 40,
   "grants": null,
   "id": "gunpowder",
   "mod": {
    "claimAnywhere": false,
    "combat": 2,
    "fleetCombat": 0,
    "halveOwnLand": false,
    "halveTerrain": null,
    "natTurns": 0,
    "popLimit": 0,
    "siegeTurns": null,
    "tileLimit": 0
   },
   "reqAny": ["feudalism","education"],
   "vp": 2
  },
  {
   "cost": 36,
   "grants": null,
   "id": "steam",
   "mod": {
    "claimAnywhere": false,
    "combat": 0,
    "fleetCombat": 1,
    "halveOwnLand": false,
    "halveTerrain": null,
    "natTurns": 0,
    "popLimit": 0,
    "siegeTurns": null,
    "tileLimit": 0
   },
   "reqAny": ["gunpowder","construction"],
   "vp": 2
  },
  {
   "cost": 48,
   "grants": null,
   "id": "steel",
   "mod": {
    "claimAnywhere": false,
    "combat": 0,
    "fleetCombat": 0,
    "halveOwnLand": false,
    "halveTerrain": null,
    "natTurns": 0,
    "popLimit": 0,
    "siegeTurns": null,
    "tileLimit": 0
   },
   "reqAny": ["iron"],
   "vp": 2
  },
  {
   "cost": 60,
   "grants": null,
   "id": "railroad",
   "mod": {
    "claimAnywhere": true,
    "combat": 0,
    "fleetCombat": 0,
    "halveOwnLand": true,
    "halveTerrain": null,
    "natTurns": 0,
    "popLimit": 0,
    "siegeTurns": null,
    "tileLimit": 0
   },
   "reqAny": ["steel","steam"],
   "vp": 2
  },
  {
   "cost": 64,
   "grants": "admin",
   "id": "telegraph",
   "mod": {
    "claimAnywhere": false,
    "combat": 0,
    "fleetCombat": 0,
    "halveOwnLand": false,
    "halveTerrain": null,
    "natTurns": 0,
    "popLimit": 0,
    "siegeTurns": null,
    "tileLimit": 0
   },
   "reqAny": ["compass"],
   "vp": 2
  },
  {
   "cost": 72,
   "grants": null,
   "id": "industry",
   "mod": {
    "claimAnywhere": false,
    "combat": 0,
    "fleetCombat": 0,
    "halveOwnLand": false,
    "halveTerrain": null,
    "natTurns": 0,
    "popLimit": 0,
    "siegeTurns": null,
    "tileLimit": 0
   },
   "reqAny": ["accounting","steam"],
   "vp": 2
  },
  {
   "cost": 96,
   "grants": null,
   "id": "combustion",
   "mod": {
    "claimAnywhere": false,
    "combat": 3,
    "fleetCombat": 0,
    "halveOwnLand": false,
    "halveTerrain": null,
    "natTurns": 0,
    "popLimit": 0,
    "siegeTurns": null,
    "tileLimit": 0
   },
   "reqAny": ["industry"],
   "vp": 2
  },
  {
   "cost": 110,
   "grants": null,
   "id": "aviation",
   "mod": {
    "claimAnywhere": false,
    "combat": 0,
    "fleetCombat": 0,
    "halveOwnLand": false,
    "halveTerrain": null,
    "natTurns": 0,
    "popLimit": 0,
    "siegeTurns": 2,
    "tileLimit": 0
   },
   "reqAny": ["combustion"],
   "vp": 2
  }
 ],
 "terrain": {
  "\\"": {
   "claimable": true,
   "clear": {
    "convert": false,
    "exp": 2,
    "money": -1,
    "tech": "steel"
   },
   "decay": 8,
   "hills": false,
   "passable": true,
   "plains": false,
   "site": false,
   "water": false
  },
  ".": {
   "claimable": true,
   "clear": null,
   "decay": 4,
   "hills": false,
   "passable": true,
   "plains": true,
   "site": false,
   "water": false
  },
  "F": {
   "claimable": true,
   "clear": {
    "convert": true,
    "exp": 1,
    "money": 2,
    "tech": "iron"
   },
   "decay": 10,
   "hills": false,
   "passable": true,
   "plains": false,
   "site": false,
   "water": false
  },
  "J": {
   "claimable": true,
   "clear": null,
   "decay": 16,
   "hills": false,
   "passable": true,
   "plains": false,
   "site": false,
   "water": false
  },
  "M": {
   "claimable": false,
   "clear": null,
   "decay": 0,
   "hills": false,
   "passable": false,
   "plains": false,
   "site": false,
   "water": false
  },
  "S": {
   "claimable": false,
   "clear": null,
   "decay": 0,
   "hills": false,
   "passable": false,
   "plains": false,
   "site": true,
   "water": false
  },
  "T": {
   "claimable": true,
   "clear": null,
   "decay": 16,
   "hills": false,
   "passable": true,
   "plains": false,
   "site": false,
   "water": false
  },
  "W": {
   "claimable": false,
   "clear": null,
   "decay": 0,
   "hills": false,
   "passable": false,
   "plains": false,
   "site": false,
   "water": true
  },
  "^": {
   "claimable": true,
   "clear": null,
   "decay": 8,
   "hills": true,
   "passable": true,
   "plains": false,
   "site": false,
   "water": false
  },
  "d": {
   "claimable": true,
   "clear": null,
   "decay": 16,
   "hills": false,
   "passable": true,
   "plains": false,
   "site": false,
   "water": false
  },
  "o": {
   "claimable": false,
   "clear": null,
   "decay": 0,
   "hills": false,
   "passable": false,
   "plains": false,
   "site": false,
   "water": false
  },
  "~": {
   "claimable": true,
   "clear": {
    "convert": false,
    "exp": 2,
    "money": -2,
    "tech": "reclaim"
   },
   "decay": 16,
   "hills": false,
   "passable": true,
   "plains": false,
   "site": false,
   "water": false
  }
 },
 "uniqueCards": [
  {
   "boostMult": 0,
   "boostRadius": 0,
   "coastal": false,
   "cost": 10,
   "costPerOwned": 10,
   "excludes": [],
   "from": null,
   "key": "admin",
   "lifetime": false,
   "mod": {
    "buildCostMul": 1,
    "combat": 0,
    "fleetCombat": 0,
    "fleetSlot": 0,
    "income": 0,
    "incomeMul": 2,
    "plainsMoney": 0,
    "popExpMul": 1,
    "station": 0,
    "techDiscountMul": 0,
    "techExp": 0
   },
   "onBuild": null,
   "onLv": null,
   "popVp": null,
   "projectionHalf": false,
   "req": null,
   "slotUnlimited": true,
   "turnExp": 0,
   "uid": "admin",
   "unique": true
  },
  {
   "boostMult": 0,
   "boostRadius": 0,
   "coastal": false,
   "cost": 8,
   "costPerOwned": 0,
   "excludes": [],
   "from": null,
   "key": "mint",
   "lifetime": false,
   "mod": {
    "buildCostMul": 1,
    "combat": 0,
    "fleetCombat": 0,
    "fleetSlot": 0,
    "income": 2,
    "incomeMul": 1,
    "plainsMoney": 0,
    "popExpMul": 1,
    "station": 0,
    "techDiscountMul": 0,
    "techExp": 0
   },
   "onBuild": null,
   "onLv": null,
   "popVp": null,
   "projectionHalf": false,
   "req": null,
   "slotUnlimited": false,
   "turnExp": 0,
   "uid": "mint",
   "unique": true
  },
  {
   "boostMult": 0,
   "boostRadius": 0,
   "coastal": false,
   "cost": 15,
   "costPerOwned": 0,
   "excludes": [],
   "from": null,
   "key": "pyramid",
   "lifetime": true,
   "mod": {
    "buildCostMul": 1,
    "combat": 0,
    "fleetCombat": 0,
    "fleetSlot": 0,
    "income": 0,
    "incomeMul": 1,
    "plainsMoney": 0,
    "popExpMul": 1,
    "station": 0,
    "techDiscountMul": 0,
    "techExp": 0
   },
   "onBuild": {
    "count": null,
    "exp": 3,
    "per": 0,
    "vp": 8
   },
   "onLv": null,
   "popVp": null,
   "projectionHalf": false,
   "req": null,
   "slotUnlimited": false,
   "turnExp": 0,
   "uid": "pyramid",
   "unique": true
  }
 ]
}
`;const f=(n,e)=>{const l=Number(e);if(!Number.isInteger(l)||l<0)throw new Error(`${n} は0以上の整数(受け取った値: ${e})`);return l},F=(n,e)=>{const l=Number(e);if(!Number.isFinite(l)||l<0||l>1)throw new Error(`${n} は 0〜1(受け取った値: ${e})`);return l};function b(n){const e=new URLSearchParams(n),l=[],a={},r={},p=e.get("aeRadius");p!==null&&(a.minorAlarmRadius=f("aeRadius",p),l.push(`半径${a.minorAlarmRadius}`));const d=e.get("aeRolls");d!==null&&(a.minorAlarmRolls=f("aeRolls",d),l.push(`攻囲${a.minorAlarmRolls}ロール`));const W=e.get("aeCapRolls");W!==null&&(a.minorCaptureRolls=f("aeCapRolls",W),l.push(`陥落${a.minorCaptureRolls}ロール`));const o=e.get("aeHit");if(o!==null)if(!o.includes(":"))r["*"]=F("aeHit",o),l.push(`当たり${r["*"]}`);else for(const t of o.split(",").filter(Boolean)){const[s,i]=t.split(":");if(!s||i===void 0)throw new Error(`aeHit の書式は persona:値 のカンマ並び(受け取った値: ${t})`);r[s]=F(`aeHit:${s}`,i),l.push(`${s}の当たり${r[s]}`)}return l.length?{label:l.join(" / "),patch:t=>{for(const[i,u]of Object.entries(a)){if(!(i in t.rules))throw new Error(`gamedata に rules.${i} が無い`);t.rules[i]=u}const s=t.minorAlarmHit;if(Object.keys(r).length&&!s)throw new Error("gamedata に minorAlarmHit が無い");for(const[i,u]of Object.entries(r)){if(i==="*"){for(const m of Object.keys(s))s[m]=u;continue}if(!(i in s))throw new Error(`minorAlarmHit に性格 ${i} が無い(${Object.keys(s).join("/")})`);s[i]=u}}}:null}function M(n,e){const l=b(e);if(!l)return{text:n,label:null};const a=JSON.parse(n);return l.patch(a),{text:JSON.stringify(a),label:l.label}}const h=3,J=[{id:"pottery",cost:6,vp:2,req:null},{id:"writing",cost:8,vp:2,req:"pottery",grants:"admin"},{id:"law",cost:12,vp:2,req:"writing",mod:{tileLimit:1}},{id:"bronze",cost:8,vp:2,req:null},{id:"iron",cost:14,vp:2,req:"bronze",mod:{combat:1}},{id:"wheel",cost:4,vp:2,req:null},{id:"riding",cost:6,vp:2,req:"wheel",mod:{halveTerrain:'"'}},{id:"trade",cost:10,vp:2,req:["coinage","wheel"],mod:{halveTerrain:"d"}},{id:"accounting",cost:24,vp:2,req:"trade"},{id:"education",cost:22,vp:2,req:"law"},{id:"medicine",cost:14,vp:2,req:["writing","trade"],mod:{popLimit:1}},{id:"biology",cost:28,vp:2,req:"medicine"},{id:"coinage",cost:10,vp:2,req:"bronze",grants:"mint"},{id:"compass",cost:16,vp:2,req:["iron","trade"]},{id:"civil",cost:18,vp:2,req:["law","coinage"],grants:"admin",mod:{tileLimit:1}},{id:"masonry",cost:6,vp:2,req:null,grants:"pyramid"},{id:"construction",cost:12,vp:2,req:"masonry"},{id:"feudalism",cost:24,vp:2,req:["iron","riding"],mod:{tileLimit:1}},{id:"nationalism",cost:32,vp:2,req:["feudalism","civil"],mod:{natTurns:h}},{id:"reclaim",cost:22,vp:2,req:"construction",mod:{tileLimit:1}},{id:"gunpowder",cost:40,vp:2,req:["feudalism","education"],mod:{combat:2}},{id:"steam",cost:36,vp:2,req:["gunpowder","construction"],mod:{fleetCombat:1}},{id:"steel",cost:48,vp:2,req:"iron"},{id:"railroad",cost:60,vp:2,req:["steel","steam"],mod:{claimAnywhere:!0,halveOwnLand:!0}},{id:"telegraph",cost:64,vp:2,req:"compass",grants:"admin"},{id:"industry",cost:72,vp:2,req:["accounting","steam"]},{id:"combustion",cost:96,vp:2,req:"industry",mod:{combat:3}},{id:"aviation",cost:110,vp:2,req:"combustion",mod:{siegeTurns:2}}];Object.fromEntries(J.map(n=>[n.id,n]));const C="fractal",R="random:first-game-v1",g=n=>n===R||n==="random"?C:n.startsWith("random:")?n.slice(7):null,y=n=>g(n)!==null;function S(n,e,l){let a=0,r=0,p=null;const d=[],W=(t,s,i)=>({appliedTurns:a,appliedDraftActions:r,roundStart:p,snapshots:d,bad:{at:t,kind:s,detail:i}});for(let t=0;t<e.turns.length;t++){const s=e.turns[t],i=n.world_hash();if(i!==s.baseHash)return W(t,"base",`turn ${s.turn}: expected base ${s.baseHash}, got ${i}`);const u=JSON.parse(n.resolve_turn(JSON.stringify(s.commits)));if(!u.ok)return W(t,"resolve",u.error??`turn ${s.turn} did not resolve`);if(u.hash!==s.resultHash)return W(t,"result",`turn ${s.turn}: expected ${s.resultHash}, got ${u.hash}`);a++,d.push(JSON.parse(n.snapshot(BigInt(s.turn))))}p=l();const o=e.current;if(!o)return{appliedTurns:a,appliedDraftActions:r,roundStart:p,snapshots:d,bad:null};if(o.seat!==n.local_seat())return W(e.turns.length,"invalid","pending draft belongs to another local seat");if(n.world_hash()!==o.baseHash||Number(n.turn())!==o.turn)return W(e.turns.length,"base",`pending draft T${o.turn}/${o.baseHash} does not match T${Number(n.turn())}/${n.world_hash()}`);for(let t=0;t<o.actions.length;t++){const s=o.actions[t],i=JSON.stringify(s),u=n.validate_action(i);if(u)return W(t,"invalid",u);const m=JSON.parse(n.apply_draft(i));if(m.error)return W(t,"invalid",m.error);if(!m.changed)return W(t,"ignored",`pending draft action ${t+1} was ignored`);r++}return{appliedTurns:a,appliedDraftActions:r,roundStart:p,snapshots:d,bad:null}}let c=null,v=null;async function w(n){if(c)throw new Error("Only one Game per page (one page = one match)");const e=await import("./notciv_wasm-D4xfqyS1.js");await e.default();const l=M(B,n.search);e.feed(l.text);const a=e.bot_ids().split(`
`).filter(Boolean);if(!Number.isInteger(n.localSeat)||n.localSeat<0||n.localSeat>=16)throw new Error("invalid local seat");const r=new e.Game(BigInt(n.seed),n.mapId,n.players,n.localSeat);return y(n.mapId)&&(v=JSON.parse(r.map_def())),c=r,{botIds:a,genMapDef:v,aeLabel:l.label}}function A(n){const e=JSON.parse(n.draft_state_json());return v&&(e.genMapDef=v),e}function X(n){if(n.op==="init")return w(n.args);if(n.op==="benchReset")return c==null||c.free(),c=null,v=null,null;const e=c;if(!e)throw new Error("init has not run yet");switch(n.op){case"swapInitialSeats":{const l=e.swap_initial_seats(n.args.source);if(l)throw new Error(l);return null}case"setHandicap":return n.args.mult!==0&&e.set_handicap(n.args.mult,n.args.seats),null;case"debugPatch":return e.debug_patch(JSON.stringify(n.args.patch)),null;case"applyDraft":{const l=JSON.parse(e.apply_draft(JSON.stringify(n.args.action)));return{evs:l.events??[],changed:!!l.changed,error:l.error??null}}case"resetDraft":return e.reset_draft(),null;case"humanCommit":{const l=e.human_commit();return{commit:l?JSON.parse(l):null}}case"botCommit":{const l=e.bot_commit(n.args.botId,n.args.seat,n.args.carry);if(!l)return{commit:null,why:`bot "${n.args.botId}" or live seat ${n.args.seat} missing`,carry:"",stats:""};const a=JSON.parse(l);return{commit:a.commit,why:null,carry:typeof a.carry=="string"?a.carry:"",stats:typeof a.stats=="string"?a.stats:""}}case"benchAnytimeCommit":{const l=performance.now(),{botId:a,seat:r,carry:p,budget:d}=n.args,W=d===null?e.bot_commit(a,r,p):e.bench_anytime_bot_commit(a,r,p,d),o=performance.now()-l;if(!W)return{commit:null,why:`No benchmark bot "${a}" or living seat ${r}`,carry:"",stats:"",ms:o};const t=JSON.parse(W);return{commit:t.commit,why:null,carry:typeof t.carry=="string"?t.carry:"",stats:typeof t.stats=="string"?t.stats:"",ms:o}}case"expandBeamSlice":{const l=e.expand_beam_slice(n.args.seat,JSON.stringify(n.args.lines),n.args.beamWidth);return JSON.parse(l)}case"benchStatus":return JSON.parse(e.bench_status());case"resolveTurn":{const l=JSON.parse(e.resolve_turn(JSON.stringify(n.args.commits)));return{ok:!!l.ok,error:l.error??null,evs:l.events??[],hash:l.hash??null,turn:l.turn??null}}case"validate":{const l=n.args.action;return{why:e.validate_action(typeof l=="string"?l:JSON.stringify(l))||null}}case"state":return A(e);case"view":return JSON.parse(e.view());case"mapDef":return JSON.parse(e.map_def());case"snapshot":return JSON.parse(e.snapshot(BigInt(n.args.turn)));case"replay":return S(e,n.args,()=>A(e));case"claimOptions":return JSON.parse(e.claim_options());case"placeOptions":return JSON.parse(e.place_options());case"helper":return JSON.parse(e.helper());case"decayField":return JSON.parse(e.decay_field(n.args.prov));case"fleetField":return JSON.parse(e.fleet_field(n.args.prov));case"fleetProjectionField":return JSON.parse(e.fleet_projection_field(n.args.seat));case"attackField":return JSON.parse(e.attack_field(n.args.seat));case"seaControl":return JSON.parse(e.sea_control(n.args.seat));case"worldHash":return e.world_hash()}}self.onmessage=async n=>{const e=n.data,l=a=>self.postMessage(a);try{l({id:e.id,ok:!0,value:await X(e)})}catch(a){l({id:e.id,ok:!1,err:String(a)})}};
