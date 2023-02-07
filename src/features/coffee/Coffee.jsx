import React from "react"
import {useSelector, useDispatch} from "react-redux"
import {increment} from "./coffeeSlice"
import {incrementByAmount} from "./coffeeSlice"

function Coffee () {
  const coffeeCount = useSelector(store => store.coffee.coffeeCount)
  const dispatch = useDispatch()
  const [payload, setPayload] = React.useState(0)
return (
  <>
    <figure onClick={() => dispatch(increment())}>☕</figure>
    <figcaption>{coffeeCount}</figcaption>
    <input onChange={event => setPayload(event.target.value)}/>
    <button onClick={() => dispatch(incrementByAmount(Number(payload)))}>Add more coffee</button>
  </>
)
}

export default Coffee
