type CardSize = 'small' | 'middle' | 'large';

export interface CardData {
  route: string;
  isNDA?: boolean;
  size: CardSize;
  type: string;
  title?: string;
  image?: string;
  backgroundImage?: string;
  phoneLarge?: string;
  backdrop?: string;
  chipsBlack?: boolean;
  className: string;
  nda?: boolean;
}

interface NavigationItem {  
  id: string;
  label: string;
}  

interface ProjectNavigation {  
  [projectName: string]: NavigationItem[]; 
}  

export type NavigationData = ProjectNavigation[];  

