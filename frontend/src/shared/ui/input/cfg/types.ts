import type { IconProps } from "@shared/ui/icon/cfg/types";


export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: IconProps;
}