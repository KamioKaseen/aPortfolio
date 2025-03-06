import { FC } from "react";

export interface ArrowIconProps {
  className?: string;
}

const LeftIcon: FC<ArrowIconProps> = ({ className }) => (
  <svg width="24" height="24" viewBox="0 0 48 49" fill="" xmlns="http://www.w3.org/2000/svg" className={className}>
  <g clipPath="url(#clip0_50268_1274)">
  <path d="M31.2295 8.80799C30.8838 8.47906 30.4217 8.30085 29.9446 8.31255C29.4676 8.32425 29.0147 8.5249 28.6855 8.87039L16.6807 21.4704C16.3616 21.8052 16.1836 22.2499 16.1836 22.7124C16.1836 23.1749 16.3616 23.6196 16.6807 23.9544L28.6831 36.5544C29.0154 36.8861 29.4641 37.0748 29.9335 37.0804C30.403 37.086 30.856 36.9079 31.1961 36.5841C31.5361 36.2604 31.7361 35.8166 31.7536 35.3475C31.7711 34.8783 31.6045 34.4209 31.2895 34.0728L20.4703 22.7112L31.2895 11.3496C31.6188 11.0042 31.7974 10.5422 31.7862 10.0652C31.7749 9.58813 31.5747 9.13748 31.2295 8.80799Z" fill=""/>
  </g>
  <defs>
  <clipPath id="clip0_50268_1274">
  <rect width="48" height="48" fill="" transform="translate(0 0.5)"/>
  </clipPath>
  </defs>
  </svg>
  
);

export default LeftIcon;

