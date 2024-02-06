import ( useState ) from "react";

export default function Home() {
    const [article,setArticle] = useState()
    
    useEffect(()=> {
    async function getArticle() {
        const res = await fetch("http://localhost:4000/api/blogs");
        const article = await res.json();
        console.log(article);
    }
    getArticle();
    },[]);
    return (
        <main>
            <p className="ml-5">{article?.title}</p>
        </main>
    )
}