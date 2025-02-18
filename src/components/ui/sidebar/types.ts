
import { VariantProps } from "class-variance-authority"
import { sidebarMenuButtonVariants } from "./components/sidebar-menu"

export type SidebarContext = {
  state: "expanded" | "collapsed"
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

export type SidebarMenuButtonVariants = VariantProps<typeof sidebarMenuButtonVariants>
