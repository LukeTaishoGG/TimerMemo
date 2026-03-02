import { addGetMemo,clearMemo,getmemo ,addMemo} from './localStrage'
import { useState,useEffect } from 'react'
import './App.css'


function App() {
  const testMemo = addGetMemo
  const deleate = clearMemo

  return (
    <>
      <button onClick={() => testMemo()}/>
      <button onClick={() => deleate()}/>
      <button onClick={() => getmemo()}>メモの取得</button>
      <input onChange={() => addText(nyan)}
      width={"500px"}
      ></input>
    </>
  )
}

export default App
