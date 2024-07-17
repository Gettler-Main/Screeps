import {errorMapper} from "./modules/errorMapper";

module.exports.loop = errorMapper(() => {
  // 代码在这里写即可
  console.log("Power!!!")
})