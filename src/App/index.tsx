import React from 'react'
import { Provider, useDispatch } from 'react-redux'
import { fetchUser } from './modules/actions'
import { store } from './modules/store'
import { useApp } from './useApp'

export const AppContainer: React.VFC = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

const App: React.VFC = () => {
  const dispatch = useDispatch()
  const { state, renderSideEffectComponent } = useApp()

  return (
    <>
      {renderSideEffectComponent()}
      <button
        disabled={state.status === 'loading'}
        onClick={() => dispatch(fetchUser())}
      >
        ユーザーを取得する
      </button>
      {state.status === 'loading' && <div>ローディング中です...</div>}
      {state.status === 'success' && (
        <div>
          <div>取得できました</div>
          <div>名前： {state.user.name}</div>
          <div>年齢： {state.user.age}</div>
        </div>
      )}
      {state.status === 'error' && (
        <div>
          <div>取得に失敗しました</div>
          <div>{state.error}</div>
        </div>
      )}
    </>
  )
}
