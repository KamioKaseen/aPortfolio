type CardSize = 'small' | 'middle' | 'large';

export interface CardData {
  route: string;
  size: CardSize;
  type: string;
  title?: string;
  image?: string;
  backgroundImage?: string;
  phoneLarge?: string;
  backdrop?: string;
  chipsBlack?: boolean;
  className: string;
}

