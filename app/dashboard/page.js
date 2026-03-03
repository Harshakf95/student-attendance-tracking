"use client"
import { useTheme } from "next-themes"
import React, { useEffect } from 'react'

function Dashboard() {
    const { setTheme } = useTheme()

    useEffect(() => {
        setTheme('system');
    }, [setTheme])
  return (
    <div>page</div>
  )
}

export default Dashboard