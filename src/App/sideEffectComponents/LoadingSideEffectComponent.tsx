import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchUserFailed, fetchUserSucceeded } from '../modules/actions'

// 説明用に useEffect で処理しているけど、リクエストボタンクリックのコールバックでやっていい内容だと思う
export const LoadingSideEffectComponent: React.VFC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const fn = () => {
      const succeeded = Math.round(Math.random() * 1) === 1

      if (succeeded) {
        dispatch(fetchUserSucceeded({ name: 'karur4n', age: 26 }))
      } else {
        dispatch(fetchUserFailed('ネットワークに繋がれていません（ウソ）'))
      }
    }

    const ms = Math.min(1000, 1000 * Math.floor(Math.random() * 4))

    setTimeout(fn, ms)
  }, [])

  return null
}
