export const calculateScore = (gameExcitement) => {
  const score = scores.find(({border}) => gameExcitement < border);
  return ((score ? score.score : 100) - 1) / 10;
};

const scores = [
  {
    "score": 1,
    "border": 2113,
  },
  {
    "score": 2,
    "border": 2368,
  },
  {
    "score": 3,
    "border": 2535,
  },
  {
    "score": 4,
    "border": 2695,
  },
  {
    "score": 5,
    "border": 2810,
  },
  {
    "score": 6,
    "border": 2918,
  },
  {
    "score": 7,
    "border": 3055,
  },
  {
    "score": 8,
    "border": 3180,
  },
  {
    "score": 9,
    "border": 3288,
  },
  {
    "score": 10,
    "border": 3376,
  },
  {
    "score": 11,
    "border": 3450,
  },
  {
    "score": 12,
    "border": 3520,
  },
  {
    "score": 13,
    "border": 3605,
  },
  {
    "score": 14,
    "border": 3681,
  },
  {
    "score": 15,
    "border": 3770,
  },
  {
    "score": 16,
    "border": 3850,
  },
  {
    "score": 17,
    "border": 3911,
  },
  {
    "score": 18,
    "border": 3965,
  },
  {
    "score": 19,
    "border": 4051,
  },
  {
    "score": 20,
    "border": 4113,
  },
  {
    "score": 21,
    "border": 4191,
  },
  {
    "score": 22,
    "border": 4255,
  },
  {
    "score": 23,
    "border": 4320,
  },
  {
    "score": 24,
    "border": 4401,
  },
  {
    "score": 25,
    "border": 4463,
  },
  {
    "score": 26,
    "border": 4535,
  },
  {
    "score": 27,
    "border": 4611,
  },
  {
    "score": 28,
    "border": 4668,
  },
  {
    "score": 29,
    "border": 4750,
  },
  {
    "score": 30,
    "border": 4810,
  },
  {
    "score": 31,
    "border": 4866,
  },
  {
    "score": 32,
    "border": 4928,
  },
  {
    "score": 33,
    "border": 5006,
  },
  {
    "score": 34,
    "border": 5078,
  },
  {
    "score": 35,
    "border": 5148,
  },
  {
    "score": 36,
    "border": 5196,
  },
  {
    "score": 37,
    "border": 5260,
  },
  {
    "score": 38,
    "border": 5323,
  },
  {
    "score": 39,
    "border": 5395,
  },
  {
    "score": 40,
    "border": 5466,
  },
  {
    "score": 41,
    "border": 5533,
  },
  {
    "score": 42,
    "border": 5591,
  },
  {
    "score": 43,
    "border": 5653,
  },
  {
    "score": 44,
    "border": 5708,
  },
  {
    "score": 45,
    "border": 5768,
  },
  {
    "score": 46,
    "border": 5850,
  },
  {
    "score": 47,
    "border": 5918,
  },
  {
    "score": 48,
    "border": 5993,
  },
  {
    "score": 49,
    "border": 6071,
  },
  {
    "score": 50,
    "border": 6151,
  },
  {
    "score": 51,
    "border": 6216,
  },
  {
    "score": 52,
    "border": 6291,
  },
  {
    "score": 53,
    "border": 6358,
  },
  {
    "score": 54,
    "border": 6425,
  },
  {
    "score": 55,
    "border": 6496,
  },
  {
    "score": 56,
    "border": 6561,
  },
  {
    "score": 57,
    "border": 6625,
  },
  {
    "score": 58,
    "border": 6691,
  },
  {
    "score": 59,
    "border": 6754,
  },
  {
    "score": 60,
    "border": 6823,
  },
  {
    "score": 61,
    "border": 6873,
  },
  {
    "score": 62,
    "border": 6951,
  },
  {
    "score": 63,
    "border": 7021,
  },
  {
    "score": 64,
    "border": 7088,
  },
  {
    "score": 65,
    "border": 7153,
  },
  {
    "score": 66,
    "border": 7219,
  },
  {
    "score": 67,
    "border": 7285,
  },
  {
    "score": 68,
    "border": 7355,
  },
  {
    "score": 69,
    "border": 7428,
  },
  {
    "score": 70,
    "border": 7513,
  },
  {
    "score": 71,
    "border": 7585,
  },
  {
    "score": 72,
    "border": 7657,
  },
  {
    "score": 73,
    "border": 7745,
  },
  {
    "score": 74,
    "border": 7808,
  },
  {
    "score": 75,
    "border": 7867,
  },
  {
    "score": 76,
    "border": 7956,
  },
  {
    "score": 77,
    "border": 8033,
  },
  {
    "score": 78,
    "border": 8120,
  },
  {
    "score": 79,
    "border": 8220,
  },
  {
    "score": 80,
    "border": 8305,
  },
  {
    "score": 81,
    "border": 8405,
  },
  {
    "score": 82,
    "border": 8503,
  },
  {
    "score": 83,
    "border": 8598,
  },
  {
    "score": 84,
    "border": 8732,
  },
  {
    "score": 85,
    "border": 8821,
  },
  {
    "score": 86,
    "border": 8942,
  },
  {
    "score": 87,
    "border": 9048,
  },
  {
    "score": 88,
    "border": 9149,
  },
  {
    "score": 89,
    "border": 9274,
  },
  {
    "score": 90,
    "border": 9405,
  },
  {
    "score": 91,
    "border": 9516,
  },
  {
    "score": 92,
    "border": 9698,
  },
  {
    "score": 93,
    "border": 9836,
  },
  {
    "score": 94,
    "border": 10004,
  },
  {
    "score": 95,
    "border": 10275,
  },
  {
    "score": 96,
    "border": 10515,
  },
  {
    "score": 97,
    "border": 10785,
  },
  {
    "score": 98,
    "border": 11179,
  },
  {
    "score": 99,
    "border": 11742,
  },
  {
    "score": 100,
    "border": 15701,
  },
];
