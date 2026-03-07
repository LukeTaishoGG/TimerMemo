import {
  addGetMemo,
  clearMemo,
  getmemo,
  addMemo,
  saveNote,
  getNote,
} from "./localStrage"
import React, { useState } from "react"
import { DeskTopSelect } from "@/components/TimeSelect/DeskTopSelect"
import "./App.css"
import { MobileSelect } from "@/components/TimeSelect/MobileSelect"

function App() {
  const testMemo = addGetMemo
  const deleate = clearMemo

  const [memo, setMemo] = useState("")

  const [note, setNote] = useState(() => getNote() ?? "")

  const handleMemo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const typedText = e.target.value
    setMemo(typedText)
    addMemo(typedText)
  }

  const getMemo = () => {
    const hasMemo = getmemo()
    setMemo(hasMemo ?? "") //エラー解消
  }

  const savingNote = (e: React.ChangeEvent<HTMLInputElement>) => {
    const wrightNote = e.target.value
    setNote(e.target.value)
    saveNote(wrightNote)
  }

  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <button onClick={() => testMemo()} />
          <button onClick={() => deleate()} />

          <p>ボタン取得メモ</p>
          <button onClick={getMemo}>メモの取得</button>
          <input value={memo} onChange={handleMemo} width={"500px"}></input>
        </div>

        <div>
          <p>保存できるメモ</p>
          <input
            value={note}
            onChange={savingNote}
            placeholder="自動更新用メモ"
          />
        </div>
      </div>
      <DeskTopSelect />
      <MobileSelect />
    </>
  )
}

export default App
