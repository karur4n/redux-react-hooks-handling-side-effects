import { createAction } from '@reduxjs/toolkit'
import { User } from './user'

export const fetchUser = createAction('fetchUser')
// prettier-ignore
export const fetchUserSucceeded = createAction<User, 'fetchUserSucceeded'>('fetchUserSucceeded')
// prettier-ignore
export const fetchUserFailed = createAction<string, 'fetchUserFailed'>('fetchUserFailed')

export type IdleAction = ReturnType<typeof fetchUser>
export type LoadingAction =
  | ReturnType<typeof fetchUserSucceeded>
  | ReturnType<typeof fetchUserFailed>
export type SuccessAction = ReturnType<typeof fetchUser>
export type ErrorAction = ReturnType<typeof fetchUser>

export type AppAction = IdleAction | LoadingAction | SuccessAction | ErrorAction
