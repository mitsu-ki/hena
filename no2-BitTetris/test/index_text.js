'use strict';

import assert from 'assert';
import sinon from 'sinon';

import _ from 'lodash';

import Subject from 'index';

const testData = [
  [
    'ff-2f-23-f3-77-7f-3b',
    '1f-03-00-1c-0d-0f-06'
  ],
  [
    '01',
    '00'
  ],
  [
    '00',
    '00'
  ],
  [
    '7a-4e',
    '0c-02'
  ],
  [
    '56-b6',
    '08-14'
  ],
  [
    '12-12-12',
    '00-00-00'
  ],
  [
    'de-ff-7b',
    '0a-0f-05'
  ],
  [
    '95-be-d0',
    '05-1e-20'
  ],
  [
    '7c-b0-bb',
    '1c-20-2b'
  ]
];

describe('Bit Tetris', () => {
  testData.forEach(function(val,index,ar){
    it('予想されたデータが返ってくるか', () => {
      assert.deepEqual(Subject.start(val[0]), ar[index][1]);
    });
  });
});

