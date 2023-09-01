const p1=new Promise((resolve,reject)=>{
	setTimeout(()=>{resolve("a")},3000)
});
const p2=new Promise((resolve,reject)=>{
	setTimeout(()=>{resolve()},1000)
})
const p3=new Promise((resolve,reject)=>{
	setTimeout(()=>{resolve()},3000)
})
console.log(p1,p2,p3)
promises=[p1,p2,p3];
Promise.any(promises).then((x)=>{console.log(x)})