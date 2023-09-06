export enum RoutePath{
    LOGIN ='/login',
    HOME="/",
    MENTEE="/mentee",
    USER="/user",
}



export interface SidebarNavItem{
    name:string;
    path:string;
    icon:React.ComponentType;
}

export interface Route{
    name:string;
    path:RoutePath;
    SidebarNavItems?:SidebarNavItem[];
    component:React.ComponentType;
}