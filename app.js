const inputBtn=document.querySelector('#saveUrl')
const inputData=document.querySelector('#inputEl')
const savedData=document.querySelector('#saves')
const deleteData=document.querySelector('#deleteUrl')
const en=document.querySelector('body')
let links=[]
let datas=''
let oldData=localStorage.getItem('links')

links=JSON.parse(oldData)
if(!links){
  links=[]
}
en.addEventListener('keydown',(e)=>{
  if(e.key==='Enter'){
    setData(inputData.value)
  }  
})
for(let i=0;i<links.length;i++){
  let data=document.createElement('a')
  data.setAttribute('id','data')
  data.setAttribute('target','_blank')
  data.setAttribute('href',links[i])
  data.innerHTML=`<li>${links[i]}</li>`
  savedData.appendChild(data)
  //console.log(data)
}
function setData(value){
   //console.log(inputData.value)
   console.log(value)
   if(value!==''){
    links.push(value)
    let data=document.createElement('a')
    data.setAttribute('id','data')
    data.setAttribute('target','_blank')
    data.setAttribute('href',value)
    data.innerHTML=`<li>${value}</li>`
    savedData.appendChild(data)
    //console.log(data)
    inputData.value=''
    localStorage.setItem('links', JSON.stringify(links))    
}
  //console.log(links)
}
inputBtn.addEventListener('click', ()=>{
  setData(inputData.value)
})

deleteData.addEventListener('click',()=>{
  localStorage.clear()
  while(savedData.firstChild){
    savedData.removeChild(savedData.firstChild)
  }
  links=[]
})
 