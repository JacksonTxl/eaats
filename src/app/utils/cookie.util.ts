/**
 * @license
 * Copyright 2018 CFETSIT 测试工具组
 * @author
 * JacksonTxl
 * @time
 * 2018/5/23 11:12 AM
 */
export class CookieUtil {
  /**
   * 设置cookie
   * @param name 设置名称
   * @param value 值
   * @param time 有效时间
   */
  static setCookie (name: string, value: string, time: number): void {
    const exp = new Date();
    exp.setTime(exp.getTime() + time);
    document.cookie = name + '=' + value + ';path=/;expires=' + exp.toUTCString();
  }

  /**
   * 获取cookie
   * @param name cookie名称
   * return cookie 值
   */
  static getCookie(name: string): string {
    const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
    const arr = document.cookie.match(reg);
    if (arr) {
      return arr[2];
    }
    return null;
  }

  /**
   * 删除cookie
   * @param name 设置名称
   */
  static deleteCookie (name: string): void {
    const exp = new Date();
    exp.setTime(exp.getTime() - 1);
    const cval = CookieUtil.getCookie(name);
    if (cval != null && cval.length > 0) {
      document.cookie = name + '=' + cval + ';path=/;expires=' + exp.toUTCString();

    }
  }
}
