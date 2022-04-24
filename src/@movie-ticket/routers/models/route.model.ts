import React, { ComponentClass, FC, LazyExoticComponent } from "react";

export interface RouteChildren {
  path: string;
  label: string;
  hide?: "NOT_GOLDWARE" | "ALL";
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>> | React.FC;
  badge?: string;
  disabled?: boolean;
  children?: {
    [key: string]: RouteChildren;
  };
}

export interface RouteGroup {
  [key: string]: RouteChildren;
}

export interface RouteConfig {
  exact?: boolean;
  path: string;
  notProtected?: boolean;
  component: LazyExoticComponent<FC<any> | ComponentClass<any>>;
  topComponent?: LazyExoticComponent<FC<any>>;
  modals?: ModalRouteConfig[];
  title: string;
  fadeInClassName?: string;
  isPathProtected?: boolean; // For Attendance staff pages permission check
}

export interface ModalRouteConfig {
  path: string;
  component: LazyExoticComponent<FC<any>> | FC<any>;
  width?: string;
  maskClosable?: boolean;
  isPathProtected?: boolean; // For Attendance staff pages permission check
  footer?: boolean;
  headerLess?: boolean;
  absolutePosition?: boolean;
}

export interface RouteMainConfig {
  [key: string]: RouteConfig;
}

export interface ModalProps {
  closeModal: () => void;
  parentPath: string;
}

export interface ProtectedRouteProps extends RouteConfig {
  redirect: string;
  middleware: () => boolean;
  baseModals?: ModalRouteConfig[];
  modals?: ModalRouteConfig[];
  isAdminPage?: boolean;
  fadeInClassName?: string;
}
