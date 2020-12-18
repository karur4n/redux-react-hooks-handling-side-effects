import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { AppState } from './modules/reducer'
import { ErrorSideEffectComponent } from './sideEffectComponents/ErrorSideEffectComponent'
import { LoadingSideEffectComponent } from './sideEffectComponents/LoadingSideEffectComponent'

export function useApp() {
  const state = useSelector((state: AppState) => state)

  const renderSideEffectComponent = useCallback(() => {
    switch (state.status) {
      case 'loading':
        return <LoadingSideEffectComponent />
      case 'error':
        return <ErrorSideEffectComponent />
      default:
        return null
    }
  }, [state.status])

  return { state, renderSideEffectComponent }
}
