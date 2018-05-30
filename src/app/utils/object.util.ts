/**
 * @license
 * Copyright 2018 CFETSIT 测试工具组
 * @author
 * JacksonTxl
 * @time
 * 2018/5/29 9:11 AM
 */

export class ObjectUtil {
  static deepCopy<T>(destObj: {new (): T}, originObj: Object): T {
    const dest = new destObj();
    if (!originObj) {
      return dest;
    }
    for (const value of Object.entries(originObj)) {
      dest[value[0]] = value[1];
      console.log(value[1].classes);
    }
    return dest;
  }

  static deepCopy1<T>(destObj: {new (): T}, originObj: Object): T {
    return JSON.parse(JSON.stringify(originObj));
  }
}
