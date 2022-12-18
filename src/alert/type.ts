export interface AlertTypes {
  /**
   * 禁用状态
   */
  className?: string | string[];
  /**
   * 类型
   */
  type?: 'info' | 'success' | 'warning' | 'error';
  /**
   * 标题
   */
  title?: string;
  /**
   * 提示内容
   */
  message?: string;
  /**
   * 是否展示左侧icon
   */
  showIcon?: boolean | null;
  /**
   * 是否可以关闭提示
   */
  closeable?: boolean;
  /**
   * 点击关闭回掉
   */
  onClose?: () => void;
}
