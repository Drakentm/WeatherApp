import React, { useReducer } from 'react'
import "./cal.css"
import Dbutton from './Dbutton'
import OperationButton from './OperationButton'

 export const ACTIONS={
    ADD_DIGITS:"add-digit",
    CHOOSE_OPERATION:'choose-operation',
    CLEAR:"clear",
    DELETE_DIGIT:"delete-digit",
    EVALUATE:"evaluate"
}

function reducer(state,{type,payload }){
    switch(type){
        case ACTIONS.ADD_DIGITS:
            if(state.overwrite){
                return {
                    ...state,
                    currentOperand: payload.digit,
                    overwrite: false,
                }
            }
            if(payload.digit ==="0" && state.currentOperand==="0") return state;
            if(payload.digit ==="." && state.currentOperand.includes(".")) return state;
        return{
            ...state,
            currentOperand:`${state.currentOperand || ""}${payload.digit}`
        }

        case ACTIONS.CHOOSE_OPERATION:
            if(state.currentOperand==null && state.previourOperand==null){
                return state;
            }

            if(state.currentOperand==null){ 
                return{
                    ...state,
                    operation: payload.operation,
                }
            }

            if(state.previourOperand==null){
                return{
                    ...state,
                    operation: payload.operation,
                    previourOperand: state.currentOperand,
                    currentOperand: null,
                }
            }

            return{
                ...state,
                previourOperand: evaluate(state),
                operation: payload.operation,
                currentOperand:null,
            }

        case ACTIONS.EVALUATE:
            if(state.operation== null ||
                state.currentOperand==null ||
                state.previourOperand==null){
                    return state
                }

            return{
                ...state,
                overwrite: true,
                previourOperand: null,
                operation: null,
                currentOperand: evaluate(state)
            }
           


        case ACTIONS.DELETE_DIGIT:
            if(state.overwrite){
                return{
                    ...state,
                    overwrite:false,
                    currentOperand: null,
                }
            } 
            if(state.currentOperand==null) return state
            if(state.currentOperand.length===1) {
                return{
                    ...state,
                    currentOperand: null,
                }
            }

            return{
                ...state,
                currentOperand: state.currentOperand.slice(0,-1)
            }
            

        case ACTIONS.CLEAR:
            return{}
    }
}

const INTIGER_FORMATER=new Intl.NumberFormat("en-us",{
    maximaumFractionDigits:0,
})

function formatOperand(operand){
    if(operand==null)return
    const [integer,decimal]=operand.split('.')
    if (decimal==null) return INTIGER_FORMATER.format(integer)
    return `${INTIGER_FORMATER.format(integer)}.${decimal}`
}


function evaluate({currentOperand,previourOperand,operation}){
    const prev=parseFloat(previourOperand)
    const current=parseFloat(currentOperand)
    if(isNaN(prev) || isNaN(current)) return ""

    let computaion=""
    switch(operation){
        case "+":
            computaion =prev+current
            break
        case "-":
            computaion =prev-current
            break
        case "/":
            computaion =prev/current
            break
        case "*":
            computaion =prev*current
            break
        
    }

    return computaion.toString()
}

export default function Calculator() {

const [{currentOperand,previourOperand,operation},dispatch]=useReducer(reducer,{})



  return (
    <div className='calculator-grid'>
        <div className="output">
            <div className="previous-operand">{formatOperand(previourOperand)} {operation}</div>
            <div className="current-operand">{formatOperand(currentOperand)}</div>
        </div>
        <button className="span-two" onClick={()=>dispatch({type: ACTIONS.CLEAR})}>AC</button>
        <button onClick={()=>dispatch({type: ACTIONS.DELETE_DIGIT})}>DEL</button>
        <OperationButton operation='/' dispatch={dispatch}/>
        <Dbutton digit='1' dispatch={dispatch}/>
        <Dbutton digit='2' dispatch={dispatch}/>
        <Dbutton digit='3' dispatch={dispatch}/>
        <OperationButton operation='*' dispatch={dispatch}/>

        <Dbutton digit='4' dispatch={dispatch}/>
        <Dbutton digit='5' dispatch={dispatch}/>
        <Dbutton digit='6' dispatch={dispatch}/>
        <OperationButton operation='+' dispatch={dispatch}/>

        <Dbutton digit='7' dispatch={dispatch}/>
        <Dbutton digit='8' dispatch={dispatch}/>
        <Dbutton digit='9' dispatch={dispatch}/>
        <OperationButton operation='-' dispatch={dispatch}/>

        <Dbutton digit='.' dispatch={dispatch}/>
        <Dbutton digit='0' dispatch={dispatch}/>
        
        <button onClick={()=>dispatch({type: ACTIONS.EVALUATE})} className='span-two'>=</button>
    </div>
  )
}
