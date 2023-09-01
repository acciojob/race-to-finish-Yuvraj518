window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
const p1=new Promise(resolve,reject)=>{
	set.Timeout(()=>{resolve()},3000)
}
const p2=new Promise(resolve,reject)=>{
	set.Timeout(()=>{resolve()},1000)
}
const p3=new Promise(resolve,reject)=>{
	set.Timeout(()=>{resolve()},3000)
}
promises=[p1,p2,p3];
Promise.any(promises).then((x)=>{console,log(x)})