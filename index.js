// Your code here
function mapToNegativize(arr){
  let newArray = []
  for (let i = 0; i < arr.length; i++) {
    newArray[i] = arr[i] * -1
  }
  return newArray
}

function mapToNoChange(arr){
  let newArray=[]
  for(let i=0;i<arr.length;i++){
  newArray[i]=arr[i]}
  return newArray
}