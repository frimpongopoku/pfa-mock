// types/navigation/index.ts

export interface BottomNavItem {
  id: string;
  label: string;
  icon: string;
  href: string;
  isActive?: boolean;
  locked?: boolean;
}

export interface FloatingActionButton {
  icon: string;
  label: string;
  onClick: () => void;
}

export type NavItemPosition = 'left' | 'right' | 'center';