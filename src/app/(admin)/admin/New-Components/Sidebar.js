"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  Calendar,
  CreditCard,
  Inbox,
  LayoutDashboard,
  MessageSquare,
  Settings,
  ShoppingCart,
  Users,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const sidebarItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/admin",
  },
  {
    title: "eCommerce",
    icon: ShoppingCart,
    items: [
      {
        title: "Analytics",
        href: "/admin/analytics",
        pro: true,
      },
      {
        title: "Marketing",
        href: "/admin/marketing",
      },
      {
        title: "CRM",
        href: "/admin/crm",
        pro: true,
      },
    ],
  },
  {
    title: "Calendar",
    icon: Calendar,
    href: "/admin/calendar",
  },
  {
    title: "Profile",
    icon: Users,
    href: "/admin/profile",
  },
  {
    title: "Task",
    icon: Settings,
    href: "/admin/task",
  },
  {
    title: "Forms",
    icon: CreditCard,
    href: "/admin/forms",
  },
  {
    title: "Tables",
    icon: BarChart3,
    href: "/admin/tables",
  },
  {
    title: "Pages",
    icon: Settings,
    href: "/admin/pages",
  },
]

const supportItems = [
  {
    title: "Messages",
    icon: MessageSquare,
    href: "/admin/messages",
    badge: "5",
    pro: true,
  },
  {
    title: "Inbox",
    icon: Inbox,
    href: "/admin/inbox",
    pro: true,
  },
  {
    title: "Invoice",
    icon: CreditCard,
    href: "/admin/invoice",
    pro: true,
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden md:flex w-72 flex-col bg-zinc-900 text-white overflow-y-auto">
      <div className="p-6">
        <Link href="/admin" className="flex items-center gap-2 font-semibold">
          <ShoppingCart className="h-6 w-6" />
          <span>TailAdmin</span>
        </Link>
      </div>
      <nav className="flex-1 px-3 space-y-1">
        {sidebarItems.map((item) => (
          <div key={item.title}>
            {item.items ? (
              <div className="mb-4">
                <div className="px-3 mb-2 text-xs uppercase text-zinc-500 font-medium">
                  {item.title}
                </div>
                <div className="space-y-1">
                  {item.items.map((subItem) => (
                    <Button
                      key={subItem.title}
                      variant="ghost"
                      asChild
                      className={cn(
                        "w-full justify-start text-zinc-400 hover:text-white hover:bg-zinc-800",
                        pathname === subItem.href && "bg-zinc-800 text-white"
                      )}
                    >
                      <Link href={subItem.href}>
                        <span>{subItem.title}</span>
                        {subItem.pro && (
                          <span className="ml-2 px-1.5 py-0.5 rounded text-[10px] font-medium bg-blue-600">
                            Pro
                          </span>
                        )}
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
            ) : (
              <Button
                variant="ghost"
                asChild
                className={cn(
                  "w-full justify-start text-zinc-400 hover:text-white hover:bg-zinc-800",
                  pathname === item.href && "bg-zinc-800 text-white"
                )}
              >
                <Link href={item.href}>
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.title}
                </Link>
              </Button>
            )}
          </div>
        ))}
        <div className="mt-6">
          <div className="px-3 mb-2 text-xs uppercase text-zinc-500 font-medium">
            Support
          </div>
          {supportItems.map((item) => (
            <Button
              key={item.title}
              variant="ghost"
              asChild
              className={cn(
                "w-full justify-start text-zinc-400 hover:text-white hover:bg-zinc-800",
                pathname === item.href && "bg-zinc-800 text-white"
              )}
            >
              <Link href={item.href}>
                <item.icon className="mr-2 h-4 w-4" />
                <span>{item.title}</span>
                {item.badge && (
                  <span className="ml-auto px-1.5 py-0.5 rounded text-[10px] font-medium bg-blue-600">
                    {item.badge}
                  </span>
                )}
                {item.pro && (
                  <span className="ml-auto px-1.5 py-0.5 rounded text-[10px] font-medium bg-blue-600">
                    Pro
                  </span>
                )}
              </Link>
            </Button>
          ))}
        </div>
      </nav>
    </aside>
  )
}

