import React from "react"
import { ACTIONS } from "./Calculator"

export default function Dbutton({dispatch,digit}) {
  return (
    
      <button
        onClick={() => dispatch({ type: ACTIONS.ADD_DIGITS, payload:{digit} })} >
            { digit }
  </ button>
    
  )
}