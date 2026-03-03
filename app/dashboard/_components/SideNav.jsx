"use client"
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
import { GraduationCap, Hand, LayoutIcon, Settings } from "lucide-react"
import Image from "next/image"
import React from 'react'

function SideNav() {
  // Destructure isLoading to sync server/client states
  const { user, isLoading } = useKindeBrowserClient();

  const menuList = [
    { id: 1, name: "Dashboard", icon: LayoutIcon, path: "/dashboard" },
    { id: 2, name: "Students", icon: GraduationCap, path: "/dashboard/students" },
    { id: 3, name: "Attendance", icon: Hand, path: "/dashboard/attendance" },
    { id: 4, name: "Settings", icon: Settings, path: "/dashboard/settings" },
  ]

  return (
    <div className="border shadow-md h-screen p-5">
      <Image src="/logo.svg" alt="logo" width={180} height={50} />
      <hr className="my-5" />

      {menuList.map((menu) => (
        <h2 key={menu.id} className='flex items-center gap-3 text-md p-4 text-slate-500 hover:bg-primary hover:text-white cursor-pointer rounded-lg my-2'>
          <menu.icon />
          {menu.name}
        </h2>
      ))}

      {/* User Section - Fixed for Hydration and Empty Src errors */}
      <div className='flex gap-2 items-center bottom-5 fixed p-2'>
        {!isLoading && user?.picture ? (
          <Image 
            src={user.picture} 
            width={35} 
            height={35} 
            alt="user" 
            className="rounded-full" 
          />
        ) : (
          /* This placeholder prevents the "empty string" src error */
          <div className="h-8.75 w-8.75 bg-slate-200 rounded-full animate-pulse" />
        )}

        <div>
          <h2 className='text-sm font-bold'>
            {isLoading ? "Loading..." : `${user?.given_name || ''} ${user?.family_name || ''}`}
          </h2>
          <h2 className='text-xs text-slate-400'>
            {isLoading ? "Fetching..." : user?.email}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default SideNav