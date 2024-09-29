import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate, useLocation } from 'react-router-dom'
import { ROOT_REDIRECT } from '@/common/utils/constant'

export default function Home() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const { pathname } = location
    if (pathname === '/') {
      navigate(ROOT_REDIRECT, {
        replace: true,
      })
    }
  }, [location])

  return (
    <div className="main-container">
      <Outlet />
      <div id="mico_view"></div>
    </div>
  )
}
