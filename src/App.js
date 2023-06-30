import Componente1 from "./Componente1";
import Componente2 from "./Componente2";
import  MyComponent from "./MyComponent"
import React, {useState, useEffect} from "react";


const App = () => {
  const [ articles, setArticles] = useState([])
  const [term, setTerm] = useState('everything')
  const [isLoading, setLoading] = useState(true)
const selectedImageIndex = 2;

  useEffect(() => {
    const fetchArticles = async () => {
    try {
        const res = await fetch ('https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=UwUope7u9WCLG7Ab2awwNEfWviZnNEdt')
        const articles = await res.json()
        console.log(articles.results);
        setArticles(articles.results)
    } catch (error){
      console.log(error);
      
    }
  }

  fetchArticles()
  }, [])

  return (
   <>
   <div className="header">
    <Componente1 className='giorno'></Componente1>
    <div className="overlay">
      <h1 className="titolo">   The Time Flies</h1>
    </div>
   </div>
   <section>
   {articles.map((article) => {
    const {abstract, title, section, multimedia, byline, subsection, url, _id, } = article

    return (
      <article className="article" key={_id}>
<div className="titolino"><p>{section}</p></div>
<h2>{title}</h2>
<p>{abstract}</p>


<div className="coseinutili">
<p>{byline}</p>
<p>{subsection}</p>

</div>
 < a href= {url} target= "_blank"> Web Resource</a>
{multimedia && (
<div>
   
   <div className="image-container">
   {multimedia.map((image, index) => (
     index === selectedImageIndex && (
       <img key={image.id} src={image.url} alt={image.title} />
       )
       ))}
     </div>
   </div>
 )}
  


      </article>
    )
   })}
  <Componente2/>
   </section>
   
   </>
  );

  
}
export default App;

