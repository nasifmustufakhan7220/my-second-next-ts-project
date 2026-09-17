const getPost = async()=>{
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        return res.json();
    }catch(error){
        throw new Error(`${error} is found here`); 
    }finally{
        console.log("Succesfulll");
    }
}

const page = async() => {

    const posts = await getPost();

    return (
        <div>
            <h1>{posts.length}</h1>
        </div>
    );
};

export default page;