import type { IconProps } from "@shared/ui/icon/cfg/types";

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  extraClasses?: string[];
  iconLeft?: IconProps;
  iconRight?: IconProps;
  label?: string;
  isBgTransparent?: boolean;
} 