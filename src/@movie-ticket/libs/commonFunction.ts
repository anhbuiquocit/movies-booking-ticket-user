export const getSeatSelect = (
  arr0: Array<Boolean>,
  arr1: Array<Boolean>,
  arr2: Array<Boolean>,
  arr3: Array<Boolean>,
  arr4: Array<Boolean>,
  arr5: Array<Boolean>,
  arr6: Array<Boolean>,
  arr7: Array<Boolean>
): string => {
  let result = "";
  for (let i = 0; i < arr0.length; i++) {
    if (arr0[i]) {
      result += ` A${i + 1}`;
    }
    if (arr1[i]) {
      result += ` B${i + 1}`;
    }
    if (arr2[i]) {
      result += ` C${i + 1}`;
    }
    if (arr3[i]) {
      result += ` D${i + 1}`;
    }
    if (arr4[i]) {
      result += ` E${i + 1}`;
    }
    if (arr5[i]) {
      result += ` F${i + 1}`;
    }
    if (arr6[i]) {
      result += ` G${i + 1}`;
    }
    if (arr7[i]) {
      result += ` H${i + 1}`;
    }
  }
  return result.trim();
};
