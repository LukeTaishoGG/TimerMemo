export function addGetMemo () {
  localStorage.setItem("myCat", "Neko");
  const memolog = localStorage.getItem("myCat");
  console.log(memolog)
}



export function clearMemo () {
  localStorage.clear();
}



export function addMemo (input:string) {
  localStorage.setItem("inputmemo",input )
}

export function getmemo () {
  const nowMemo = localStorage.getItem("inputmemo")
  console.log(nowMemo)
  return nowMemo
}

export function getNote () {
  const nowNote = localStorage.getItem("notebook")
  console.log('自動取得用:',nowNote)
  return nowNote
}
export function saveNote (note :string) {
  localStorage.setItem("notebook",note )
}

export const startNote = () => {
  getNote()
}