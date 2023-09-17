'use client'
import { ModeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { counterSlice, selectCount, useDispatch, useSelector } from '@/lib/redux'

export default function Home() {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  const onClick = () => {
    dispatch(counterSlice.actions.increment())
  }
  return (
    <main className="flex  flex-col items-center justify-between p-24">
      <label>{count}</label>
      <Button onClick={onClick} >Button</Button>
      <ModeToggle />
    </main>
  )
}
