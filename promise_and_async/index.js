const fs=require('fs');

const axios=require('axios')

const readFile=(file)=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(file,(err,data)=>{
            if(err) return reject('file not found');
            resolve(data.toString());
        })
    })
}

const writeFile=(file,data)=>{
    return new Promise((resolve,reject)=>{
        fs.writeFile(file,data,err=>{
            if(err) return reject('error writing file');
            resolve(data);
        })
    })
}

const getDog= async()=>{
  try{
    const data= await readFile(`${__dirname}/dog.txt`);
    console.log(data.toString())
    const res1=await axios.get(`https://dog.ceo/api/breed/${data.toString()}/images/random`)
    const res2=await axios.get(`https://dog.ceo/api/breed/${data.toString()}/images/random`)
    const res3=await axios.get(`https://dog.ceo/api/breed/${data.toString()}/images/random`)
    const all=await Promise.all([res1,res2,res3])
    const res=all.map((ele)=>{
        return ele.data.message
    })
    console.log(res)
    await writeFile('./dog-img.txt',res.join('\n'))
    console.log('image saved successfully')
  }catch(err){
    console.log(err)
    throw(err)
  }
  return '2: READY 🐶'
}



(async()=>{
    try{
        console.log('i am going to get dog image')
        const x= await getDog()
        console.log(x);
        console.log('finished getting dog image')
    }catch(err){
        console.log('error while getting dog image')
    }
})();

/*
getDog()
.then((x)=>{
    console.log(x);
    console.log('finished getting dog image')
})
.catch(err=>{
    console.log('ERROR')    
})*/
/*
readFile('./dog.txt')
    .then((data)=>{
        console.log(data);
        return axios.get(`https://dog.ceo/api/breed/${data}/images/random`)
    }) 
    .then((res)=>{
        console.log(res.data.message)
    
        writeFile('dog-img.txt',res.data.message)
    })
    .then(()=>{
        console.log('image saved successfully')
    })
    .catch((err)=>{
        console.log(err)
    })
*/