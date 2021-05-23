
let fetchData=()=>{
    // const myarr=[]
    let count=0;
    fetch('https://api.publicapis.org/entries')
    .then(res=>res.json())
    .then(arr=>arr.entries)
    .then(list=>{
        list.forEach(element => {
            let e=JSON.stringify(element)
            //console.log(e)
            document.getElementById("output").value+=e+"\n"
            count+=1;
            // myarr.push(e)

        });
    })
    .then(list=>console.log(count))
.catch(e=>console.log(e))
}
let getData=document.getElementById('get_data');
getData.addEventListener('click', fetchData);



