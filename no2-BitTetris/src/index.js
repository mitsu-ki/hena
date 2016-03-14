'use strict';

import _ from 'lodash';

class BitTetris {
  static start(input) {
    let block;
    let line = input.split('-');
    let row = [];
    let fieldSize = 8;

    // 受け取った値をブロック化させる

    block = _.map(line, (params, key) => {
      let hex = parseInt(params, 16);
      let binaryNumber = hex.toString(2);

      while(binaryNumber.length <= fieldSize) {
        binaryNumber = "0" + binaryNumber;
      };

      return binaryNumber;
    });

    // 演算
    deleteBlock = _.map(line, (params, key) => {

    });

    // 指定の形式につなげなおして値を返す

    return block;

  }
}

export default BitTetris;
