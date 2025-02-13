// ---------------------------------------------------
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// ---------------------------------------------------

const num1 = 5;

function pattern1(num) {
  let pattern = "";
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row = row + j;
    }
    pattern += row + "\n";
  }
  return pattern;
}
// console.log(pattern1(num1));
// 1
// 12
// 123
// 1234
// 12345

// ---------------------------------------------------
// ---------------------------------------------------

// ---------------------------------------------------
// 1
// 12
// 123
// 1234
// 12345
// 123456
// 1234567
// 12345678
// 123456789
// 12345678910
// ---------------------------------------------------

const num2 = 10;

const pattern2 = (num) => {
  let pattern = "";
  for (let i = 1; i <= num; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
      row = row + j;
    }
    pattern = pattern + row + "\n";
  }
  return pattern;
};

// console.log(pattern2(num2));
// 1
// 12
// 123
// 1234
// 12345
// 123456
// 1234567
// 12345678
// 123456789
// 12345678910

// ===================================================
// ===================================================

// ---------------------------------------------------
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// ---------------------------------------------------

const num3 = 4;

const pattern3 = (num) => {
  let number = 1;
  let pattern = "";

  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row = row + number;
      number++;
    }
    pattern = pattern + row + "\n";
  }
  return pattern;
};

// console.log(pattern3(num3));
// 1
// 23
// 456
// 78910

// ===================================================
// ===================================================

// ---------------------------------------------------
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
// ---------------------------------------------------

const num4 = 5;

const pattern4 = (num) => {
  let pattern = "";
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row = row + i;
    }
    pattern = pattern + row + "\n";
  }
  return pattern;
};

// console.log(pattern4(num4));
// 1
// 22
// 333
// 4444
// 55555

// ===================================================
// ===================================================

// ---------------------------------------------------
// 12345
// 1234
// 123
// 12
// 1
// ---------------------------------------------------

const num5 = 5;

const pattern5 = (num) => {
  let pattern = "";
  for (let i = num; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row = row + j;
    }
    pattern = pattern + row + "\n";
  }
  return pattern;
};

// console.log(pattern5(num5));
// 12345
// 1234
// 123
// 12
// 1

// ===================================================
// ===================================================

// ---------------------------------------------------
//     1
//    123
//   12345
//  1234567
// 123456789
// ---------------------------------------------------

const num6 = 5;

const pattern6 = (num6) => {
  let pattern = "";
  for (let i = 1; i <= num6; i++) {
    let row = "";
    for (let j = 1; j <= num6 - i; j++) {
      row = row + " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      row = row + k;
    }
    pattern = pattern + row + "\n";
  }
  return pattern;
};

// console.log(pattern6(num6));
//     1
//    123
//   12345
//  1234567
// 123456789

// ===================================================
// ===================================================

// ---------------------------------------------------
//   1
//  234
// 56789
// ---------------------------------------------------

const num7 = 3;

const pattern7 = (num) => {
  let pattern = "";
  let number = 1;
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= num - i; j++) {
      row = row + " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      row = row + number;
      number++;
    }
    pattern = pattern + row + "\n";
  }
  return pattern;
};

// console.log(pattern7(num7));
//   1
//  234
// 56789

// ===================================================
// ===================================================

// ---------------------------------------------------
// 1
// 24
// 357
// 681012
// ---------------------------------------------------

const num8 = 4;

const pattern8 = (num) => {
  let pattern = "";
  let odd = 1;
  let even = 2;
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      if (i % 2 === 0) {
        row = row + even;
        even += 2;
      } else {
        row = row + odd;
        odd += 2;
      }
    }
    pattern = pattern + row + "\n";
  }
  return pattern;
};
// console.log(pattern8(num8));

// ===================================================
// ===================================================

// ---------------------------------------------------
//    1
//   24
//  357
// 681012
// ---------------------------------------------------

const num9 = 4;
function pattern9(num) {
  let pattern = "";
  let oddNum = 1;
  let evenNum = 2;
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let k = 1; k <= num - i; k++) {
      row = row + " ";
    }
    for (let j = 1; j <= i; j++) {
      if (i % 2 === 0) {
        row = row + evenNum;
        evenNum += 2;
      } else {
        row = row + oddNum;
        oddNum += 2;
      }
    }
    pattern = pattern + row + "\n";
  }
  return pattern;
}
// console.log(pattern9(num9));
//    1
//   24
//  357
// 681012

// ---------------------------------------------------
// 54321
// 5432
// 543
// 54
// 5
// ---------------------------------------------------

const num10 = 5;

const pattern10 = (num) => {
  let pattern = "";

  for (let i = num; i >= 1; i--) {
    let row = "";
    for (let j = num; j > num - i; j--) {
      row = row + j;
    }
    pattern = pattern + row + "\n";
  }

  return pattern;
};

// console.log(pattern10(num10));
// 54321
// 5432
// 543
// 54
// 5

// ===================================================
// ===================================================

// ---------------------------------------------------
// 54321
//  4321
//   321
//    21
//     1
// ---------------------------------------------------

const num11 = 5;

const pattern11 = (num) => {
  let pattern = "";
  for (let i = num; i > 0; i--) {
    let row = "";

    for (let j = 1; j <= num - i; j++) {
      row = row + " ";
    }
    for (let k = i; k > 0; k--) {
      row = row + k;
    }
    pattern = pattern + row + "\n";
  }
  return pattern;
};

// console.log(pattern11(num11));
// 54321
//  4321
//   321
//    21
//     1

// ===================================================
// ===================================================

// ---------------------------------------------------
// 5
// 54
// 543
// 5432
// 54321
// ---------------------------------------------------

const num12 = 5;

const pattern12 = (num) => {
  let pattern = "";
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = num; j > num - i; j--) {
      row = row + j;
    }
    pattern = pattern + row + "\n";
  }
  return pattern;
};

// console.log(pattern12(num12));
// 5
// 54
// 543
// 5432
// 54321

// ===================================================
// ===================================================

// ---------------------------------------------------
//     1
//    12
//   123
//  1234
// 12345
// ---------------------------------------------------

const num13 = 5;

const pattern13 = (num) => {
  let pattern = "";
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= num - i; j++) {
      row = row + " ";
    }
    for (let k = 1; k <= i; k++) {
      row = row + k;
    }
    pattern = pattern + row + "\n";
  }
  return pattern;
};

// console.log(pattern13(num13));
//     1
//    12
//   123
//  1234
// 12345

// ===================================================
// ===================================================

// ---------------------------------------------------
// 11111
// 1   1
// 1   1
// 11111
// ---------------------------------------------------

const row = 4;
const col = 5;

const pattern14 = (rows, cols) => {
  let pattern = "";
  for (let i = 1; i <= rows; i++) {
    let row = "";
    for (let j = 1; j <= cols; j++) {
      if (i == 1 || i == rows || j == 1 || j == cols) {
        row = row + "1";
      } else {
        row = row + " ";
      }
    }
    pattern = pattern + row + "\n";
  }
  return pattern;
};

// console.log(pattern14(row, col));
// 11111
// 1   1
// 1   1
// 11111

// ===================================================
// ===================================================

// ---------------------------------------------------
// *****
// *****
// *****
// *****
// *****
// ---------------------------------------------------

const num15 = 5;

const pattern15 = (num) => {
  let pattern = "";
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= num; j++) {
      row = row + "*";
    }
    pattern = pattern + row + "\n";
  }
  return pattern;
};

// console.log(pattern15(num15));
// *****
// *****
// *****
// *****
// *****

// ===================================================
// ===================================================

// ---------------------------------------------------
// *****
// *   *
// *   *
// *   *
// *****
// ---------------------------------------------------

const num16 = 5;

const pattern16 = (num) => {
  let pattern = "";
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= num; j++) {
      if (i == 1 || j == 1 || i == num || j == num) {
        row = row + "*";
      } else {
        row = row + " ";
      }
    }
    pattern = pattern + row + "\n";
  }
  return pattern;
};

// console.log(pattern16(num16));
// *****
// *   *
// *   *
// *   *
// *****
// ===================================================
// ===================================================

// ---------------------------------------------------
//     *
//    **
//   ***
//  ****
// *****
// ---------------------------------------------------

const num17 = 5;

const pattern17 = (num) => {
  let pattern = "";
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= num - i; j++) {
      row = row + " ";
    }
    for (let k = 1; k <= i; k++) {
      row = row + "*";
    }
    pattern = pattern + row + "\n";
  }
  return pattern;
};

// console.log(pattern17(num17));
//     *
//    **
//   ***
//  ****
// *****

// ===================================================
// ===================================================

// ---------------------------------------------------
// *
// **
// ***
// ****
// *****
// ---------------------------------------------------

const num19 = 5;

const pattern19 = (num) => {
  let pattern = "";
  for (let i = 1; i <= num; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
      row = row + "*";
    }
    pattern = pattern + row + "\n";
  }
  return pattern;
};

// console.log(pattern19(num19));
// *
// **
// ***
// ****
// *****

// ===================================================
// ===================================================

// ---------------------------------------------------
//     *
//    ***
//   *****
//  *******
// *********
// ---------------------------------------------------

const num20 = 5;

const pattern20 = (num) => {
  let pattern = "";

  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= num - i; j++) {
      row = row + " ";
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
      row = row + "*";
    }
    pattern = pattern + row + "\n";
  }
  return pattern;
};

// console.log(pattern20(num20));
//     *
//    ***
//   *****
//  *******
// *********
// ===================================================
// ===================================================

// ---------------------------------------------------
// *
// **
// * *
// *  *
// *   *
// ******
// ---------------------------------------------------

const num21 = 6;

const pattern21 = (num) => {
  let pattern = "";
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      // if (j == 1 || i == num || j == i) {
      //   row = row + "*";
      // } else {
      //   row = row + " ";
      // }
      row = j == 1 || i == num || j == i ? row + "*" : row + " "; // ternary operator
    }
    pattern = pattern + row + "\n";
  }
  return pattern;
};

// console.log(pattern21(num21));
// *
// **
// * *
// *  *
// *   *
// ******

// ===================================================
// ===================================================

// ---------------------------------------------------
// *****
// ****
// ***
// **
// *
// ---------------------------------------------------

const num22 = 6;

const pattern22 = (num) => {
  let pattern = "";
  for (let i = num; i > 0; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row = row + "*";
    }
    pattern = pattern + row + "\n";
  }
  return pattern;
};

// console.log(pattern22(num22));
// *****
// ****
// ***
// **
// *

// ===================================================
// ===================================================

// ---------------------------------------------------
// *****
//  ****
//   ***
//    **
//     *
// ---------------------------------------------------

const num23 = 5;

const pattern23 = (num) => {
  let pattern = "";
  for (let i = num; i > 0; i--) {
    let row = "";
    for (let j = 1; j <= num - i; j++) {
      row = row + " ";
    }
    for (let k = 1; k <= i; k++) {
      row = row + "*";
    }
    pattern = pattern + row + "\n";
  }
  return pattern;
};

// console.log(pattern23(num23));
// *****
//  ****
//   ***
//    **
//     *

// ===================================================
// ===================================================

// ---------------------------------------------------
//     *
//    **
//   ***
//  ****
// *****
//  ****
//   ***
//    **
//     *
// ---------------------------------------------------

const num24 = 5;

const pattern24 = (num) => {
  let pattern = "";

  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= num - i; j++) {
      row = row + " ";
    }
    for (let k = 1; k <= i; k++) {
      row = row + "*";
    }
    pattern = pattern + row + "\n";
  }

  for (let i = num - 1; i > 0; i--) {
    let row = "";
    for (let j = 1; j <= num - i; j++) {
      row = row + " ";
    }
    for (let k = 1; k <= i; k++) {
      row = row + "*";
    }
    pattern = pattern + row + "\n";
  }
  return pattern;
};

// console.log(pattern24(num24));
//     *
//    **
//   ***
//  ****
// *****
//  ****
//   ***
//    **
//     *

// ===================================================
// ===================================================

// ---------------------------------------------------
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
// ---------------------------------------------------

const num25 = 5;

const pattern25 = (num) => {
  let pattern = "";
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= num - i; j++) {
      row = row + " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      row = row + "*";
    }
    pattern = pattern + row + "\n";
  }
  for (let i = num - 1; i > 0; i--) {
    let row2 = "";
    for (let j = 1; j <= num - i; j++) {
      row2 = row2 + " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      row2 += "*";
    }
    pattern += row2 + "\n";
  }
  return pattern;
};

// console.log(pattern25(num25));
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

// ===================================================
// ===================================================

// ---------------------------------------------------
//    *
//   * *
//  *   *
// *******
// ---------------------------------------------------

const num26 = 4;

const pattern26 = (num) => {
  let pattern = "";
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= num - i; j++) {
      row = row + " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      if (k == 1 || k == 2 * i - 1 || i == num) {
        row = row + "*";
      } else {
        row = row + " ";
      }
    }
    pattern = pattern + row + "\n";
  }
  return pattern;
};

// console.log(pattern26(num26));
//    *
//   * *
//  *   *
// *******

// ===================================================
// ===================================================

// ---------------------------------------------------
//    *
//   * *
//  * * *
// * * * *
//  * * *
//   * *
//    *
// ---------------------------------------------------

const num27 = 4;

function pattern27(num) {
  let pattern = "";
  console.log("Pattern No.27");
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= num - i; j++) {
      row = row + " ";
    }
    for (let k = 1; k <= i; k++) {
      row = row + "* "; // extra space after star for proper output
    }
    pattern += row + "\n";
  }
  for (let i = num - 1; i > 0; i--) {
    let row2 = "";
    for (let j = 1; j <= num - i; j++) {
      row2 += " ";
    }
    for (let k = 1; k <= i; k++) {
      row2 = row2 + "* "; // extra space after star for proper output
    }
    pattern += row2 + "\n";
  }
  return pattern;
}

// console.log(pattern27(num27));
//    *
//   * *
//  * * *
// * * * *
//  * * *
//   * *
//    *

// ===================================================
// ===================================================

// ---------------------------------------------------
// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *
// ---------------------------------------------------

const num28 = 5;

function pattern28(num) {
  let pattern = "";
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row = row + "*";
    }
    pattern += row + "\n";
  }

  for (let i = num - 1; i > 0; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row = row + "*";
    }
    pattern += row + "\n";
  }
  return pattern;
}
// console.log(pattern28(num28));
// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

// ===================================================
// ===================================================

// ---------------------------------------------------
// A
// AA
// AAA
// AAAA
// AAAAA
// ---------------------------------------------------

const num29 = 5;

const pattern29 = (num) => {
  let pattern = "";

  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row = row + "A";
    }
    pattern = pattern + row + "\n";
  }
  return pattern;
};

// console.log(pattern29(num29));
// A
// AA
// AAA
// AAAA
// AAAAA

// ===================================================
// ===================================================

// ---------------------------------------------------
// AAAAA
// AAAA
// AAA
// AA
// A
// ---------------------------------------------------

const num30 = 5;

const pattern30 = (num) => {
  let pattern = "";
  for (let i = num; i > 0; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row = row + "A";
    }
    pattern += row + "\n";
  }
  return pattern;
};

// console.log(pattern30(num30));
// AAAAA
// AAAA
// AAA
// AA
// A
// ===================================================
// ===================================================

// ---------------------------------------------------
// $
// $$
// $$$
// $$$$
// %%%%%
// %%%%
// %%%
// %%
// %
// ---------------------------------------------------

const num31 = 4;

const pattern31 = (num) => {
  let pattern = "";

  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row = row + "$";
    }
    pattern = pattern + row + "\n";
  }

  for (let i = num + 1; i > 0; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row = row + "%";
    }
    pattern = pattern + row + "\n";
  }
  return pattern;
};

// console.log(pattern31(num31));
// $
// $$
// $$$
// $$$$
// %%%%%
// %%%%
// %%%
// %%
// %

// ===================================================
// ===================================================
//? ===================================================
//? ===================================================
//! ---------------------------------
//! Difficulty  level insane
//! ---------------------------------
//? ===================================================
//? ===================================================
// ===================================================
// ===================================================

// ---------------------------------
//     A
//    A B A
//   A B C B A
//  A B C D C B A
// A B C D E D C B A
// ---------------------------------

const num32 = 5;

const pattern32 = (num) => {
  let pattern = "";
  let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= num - i; j++) {
      row = row + " ";
    }

    for (let k = 0; k < i; k++) {
      row = row + alphabets[k] + " ";
    }
    for (let l = i - 2; l >= 0; l--) {
      row = row + alphabets[l] + " ";
    }
    pattern = pattern + row + "\n";
  }
  return pattern;
};

// console.log(pattern32(num32));
//     A
//    A B A
//   A B C B A
//  A B C D C B A
// A B C D E D C B A

// ===================================================
// ===================================================

// ---------------------------------
// *******
//  *   *
//   * *
//    *
//   * *
//  *   *
// *******
// ---------------------------------

const num33 = 4;

const pattern33 = (num) => {
  let pattern = "";
  for (let i = num; i > 0; i--) {
    let row = "";
    for (let j = 1; j <= num - i; j++) {
      row = row + " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      if (i == num || k == 2 * i - 1 || k == 1) {
        row = row + "*";
      } else {
        row = row + " ";
      }
    }
    pattern = pattern + row + "\n";
  }

  for (let i = 2; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= num - i; j++) {
      row = row + " ";
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
      if (i == num || k == 2 * i - 1 || k == 1) {
        row = row + "*";
      } else {
        row = row + " ";
      }
    }
    pattern = pattern + row + "\n";
  }
  return pattern;
};

// console.log(pattern33(num33));
// *******
//  *   *
//   * *
//    *
//   * *
//  *   *
// *******

// ===================================================
// ===================================================

// ---------------------------------
//     *
//    * *
//   *   *
//  *     *
// *       *
//  *     *
//   *   *
//    * *
//     *
// ---------------------------------

const num34 = 4;

const pattern34 = (num) => {
  let pattern = "";
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= num - i; j++) {
      row = row + " ";
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
      if (k == 1 || k == 2 * i - 1) {
        row = row + "*";
      } else {
        row = row + " ";
      }
    }
    pattern = pattern + row + "\n";
  }

  for (let i = num - 1; i > 0; i--) {
    let row = "";
    for (let j = 1; j <= num - i; j++) {
      row = row + " ";
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
      if (k == 1 || k == 2 * i - 1) {
        row = row + "*";
      } else {
        row = row + " ";
      }
    }
    pattern = pattern + row + "\n";
  }

  return pattern;
};

// console.log(pattern34(num34));
//     *
//    * *
//   *   *
//  *     *
// *       *
//  *     *
//   *   *
//    * *
//     *
// ===================================================
// ===================================================

// *
//     * *
//   * * *
// * * * *

const num35 = 4;

const pattern35 = (num) => {
  let pattern = "";
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= num - i; j++) {
      if (i == 1) {
        row = row + "";
      } else {
        row = row + " ";
      }
    }
    for (let k = 1; k <= i; k++) {
      row = row + "*";
    }
    pattern = pattern + row + "\n";
  }
  return pattern;
};

// console.log(pattern35(num35));
// *
//   **
//  ***
// ****
