import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export const useLogout = () => {
  const navigate = useNavigate()

  const logout = useCallback(() => {
    // Remover o token do localStorage
    localStorage.removeItem('americanos.token')
    
    navigate('/')
  }, [navigate])

  return logout
};