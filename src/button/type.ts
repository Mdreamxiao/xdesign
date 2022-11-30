import { CSSProperties } from 'react';
import { SizeNum } from '../common';
export interface ButtonTypes {
  style?: CSSProperties;
  /**
   * 禁用状态
   */
  disabled?: boolean;
  /**
   * 形状 长方形、正方形、圆形、圆角长方形
   * @default rectangle
   */
  shape?: 'rectangle' | 'square' | 'circle' | 'round';
  /**
   * 大小
   * @default normal
   */
  size?: SizeNum;
  /**
   * 跳转地址
   */
  href?: string;
  /**
   * 按钮类型
   */
  type?: string;
}
