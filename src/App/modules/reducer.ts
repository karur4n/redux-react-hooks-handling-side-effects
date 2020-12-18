import {
  AppAction,
  ErrorAction,
  IdleAction,
  LoadingAction,
  SuccessAction,
} from './actions'
import { User } from './user'

type IdleState = {
  status: 'idle'
}
type LoadingState = {
  status: 'loading'
}
type SuccessState = {
  status: 'success'
  user: User
}
type ErrorState = {
  status: 'error'
  error: string
}

export type AppState = IdleState | LoadingState | SuccessState | ErrorState

const initialState: AppState = {
  status: 'idle',
}

export function reducer(
  state: AppState | undefined,
  action: AppAction
): AppState {
  // redux 内部の INIT アクションが送られたとき、initalState を返す
  // 下の reducer 群では INIT アクションをハンドリングしづらいので
  if (!state) return initialState

  switch (state.status) {
    case 'idle':
      return idleReducer(state, action as IdleAction)
    case 'loading':
      return loadingReducer(state, action as LoadingAction)
    case 'success':
      return successReducer(state, action as SuccessAction)
    case 'error':
      return errorReducer(state, action as ErrorAction)
    default:
      return state
  }
}

function idleReducer(state: IdleState, action: IdleAction): AppState {
  switch (action.type) {
    case 'fetchUser':
      return {
        ...state,
        status: 'loading',
      }
  }
}

export function loadingReducer(
  state: LoadingState,
  action: LoadingAction
): AppState {
  switch (action.type) {
    case 'fetchUserSucceeded':
      return {
        ...state,
        status: 'success',
        user: action.payload,
      }
    case 'fetchUserFailed':
      return {
        ...state,
        status: 'error',
        error: action.payload,
      }
  }
}

export function successReducer(
  state: SuccessState,
  action: SuccessAction
): AppState {
  switch (action.type) {
    case 'fetchUser':
      return {
        ...state,
        status: 'loading',
      }
  }
}

export function errorReducer(state: ErrorState, action: ErrorAction): AppState {
  switch (action.type) {
    case 'fetchUser':
      return {
        ...state,
        status: 'loading',
      }
  }
}
