/*
 * @Author: yy 691335336@qq.com
 * @Date: 2022-12-16 14:20:43
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2022-12-22 10:19:33
 * @FilePath: /waimai/src/utils/type/index.ts
 * @Description: home 类型
 */
export interface CententNavList {
  tab: string
  data: Children[]
}

export interface Children {
  pic: string;
  title: string;
  sales?: string
  num?: number;
  price?: number | string;
  id?: number;
  add?: boolean;
  label?: string[]
}

export interface Item {
  text: string;
  children: Children[];
}

export interface Data {
  content: string;
  items?: Item[];
}

export interface StoreData {
  name: string;
  data: Data;
}

export interface ActionBar {
  icon: string
  text: string
}