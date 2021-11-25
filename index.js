function rgb(r, g, b){
    let  hexadecimalNumbers=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

    let redToClosestRealRgbValue = (r>255) ? 255:(r<0) ? 0:r;
    let greenToClosestRealRgbValue = (g>255) ? 255:(g<0) ? 0:g;
    let blueToClosestRealRgbValue = (b>255) ? 255:(b<0) ? 0:b;

    let firstHexadecimal;
    let secondHexadecimal;
    let rgbInHexadecimal="";

    let realRgbValuesArray=[redToClosestRealRgbValue,greenToClosestRealRgbValue,blueToClosestRealRgbValue];
    realRgbValuesArray.forEach((v)=>{
        let currentRgbNumInHexadecimal;
        secondHexadecimal=Math.floor(v/16);
        firstHexadecimal=(v/16-Math.floor(v/16))*16;

        firstHexadecimal=hexadecimalNumbers[firstHexadecimal];
        secondHexadecimal=hexadecimalNumbers[secondHexadecimal];
        currentRgbNumInHexadecimal=`${secondHexadecimal}${firstHexadecimal}`;
        rgbInHexadecimal+=currentRgbNumInHexadecimal;
          
    })
    document.querySelector("#result").textContent=`The result is: ${rgbInHexadecimal}`;
    return rgbInHexadecimal;
  }

  rgb(300,256,-2);