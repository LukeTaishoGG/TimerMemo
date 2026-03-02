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
  localStorage.getItem("inputMemo")
}