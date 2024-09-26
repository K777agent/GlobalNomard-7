interface IBaseModal {
  size: 'alert' | 'cancel' | 'review' | 'reservation' | 'notice';
  titleContent?: null | string;
  tStyle?: 'review' | 'reservation' | 'notice';
  footerButton: null | 1 | 2;
  children: ReactNode;
}
