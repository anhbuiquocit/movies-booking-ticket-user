import { Promotion } from "./../constant/modal";
import queryString from "query-string";
import axios from "axios";
import fs from "fs";
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

export const calculateMoney = (
  price: number,
  arr0: Array<Boolean>,
  arr1: Array<Boolean>,
  arr2: Array<Boolean>,
  arr3: Array<Boolean>,
  arr4: Array<Boolean>,
  arr5: Array<Boolean>,
  arr6: Array<Boolean>,
  arr7: Array<Boolean>
): number => {
  if (!price) return 0;
  let count = 0;
  for (let i = 0; i < arr0.length; i++) {
    if (arr0[i]) {
      count += 1;
    }
    if (arr1[i]) {
      count += 1;
    }
    if (arr2[i]) {
      count += 1;
    }
    if (arr3[i]) {
      count += 1;
    }
    if (arr4[i]) {
      count += 1;
    }
    if (arr5[i]) {
      count += 1;
    }
    if (arr6[i]) {
      count += 1;
    }
    if (arr7[i]) {
      count += 1;
    }
  }
  return count * price;
};

export const convertLineSeatToArray = (
  arr0: Array<Boolean>,
  arr1: Array<Boolean>,
  arr2: Array<Boolean>,
  arr3: Array<Boolean>,
  arr4: Array<Boolean>,
  arr5: Array<Boolean>,
  arr6: Array<Boolean>,
  arr7: Array<Boolean>
): any => {
  if (arr0 && arr1 && arr2 && arr3 && arr4 && arr5 && arr6 && arr7) {
    return [arr0, arr1, arr2, arr3, arr4, arr5, arr6, arr7];
  }
  return [];
};

export const onChangePage = (history, search) => (e) => {
  const searchObject = queryString.parse(search);
  history.push({
    search: queryString.stringify({
      ...searchObject,
      page: parseInt(e),
    }),
  });
};

export const uploadFileToS3 = (presignedPostData, file) => {
  // create a form obj
  const formData = new FormData();

  // append the fields in presignedPostData in formData
  Object.keys(presignedPostData.fields).forEach((key) => {
    formData.append(key, presignedPostData.fields[key]);
  });

  // append the file
  formData.append("file", file);
  formData.append("acl", "public-read");
  // post the data on the s3 url

  axios
    .post(presignedPostData.url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then(function (response) {
      console.log("response: ", response);
    })
    .catch(function (error) {
      console.log("Error", error);
    });
};

export const uploadFileToS3UsingPresignUrl = async (presignedPutData, file) => {
  const formData = new FormData();
  formData.append("file", file);
  return new Promise((resolve, reject) => {
    axios
      .put(presignedPutData, file, {
        headers: { "Content-Type": file.type },
      })
      .then((res) => {
        resolve("success");
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export const convertToTypeVND = (data) => {
  return data.toLocaleString("it-IT", {
    style: "currency",
    currency: "VND",
  });
};

export const calculateValueOfPromotionDiscount = (
  totalPrice,
  promotion: Promotion
) => {
  let result = 0;
  if (promotion) {
    result = totalPrice * (promotion.discount / 100);
  }
  if (result > promotion.maxDiscount) return promotion.maxDiscount;
  // console.log("result: ", result);
  // console.log("promotion.maxDiscount: ", promotion.maxDiscount);
  return result;
};
export const calculateTotalMoneyPayment = (
  totalTicketPrice,
  vat,
  promotion
) => {
  if (promotion) {
    return (
      totalTicketPrice +
      vat * totalTicketPrice -
      calculateValueOfPromotionDiscount(totalTicketPrice, promotion)
    );
  }
  return totalTicketPrice + vat * totalTicketPrice;
};
