import Component1 from "./Component1";
import Component2 from "./Component2";

import React, {useState, useEffect} from "react";



const App = () => {
  const [ articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true);
const selectedImageIndex = 2;

  useEffect(() => {
    setLoading(true);
    const fetchArticles = async () => {
    try {
        const res = await fetch ('https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=UwUope7u9WCLG7Ab2awwNEfWviZnNEdt');
        const articles = await res.json()
        console.log(articles.results);
        setArticles(articles.results)
        setLoading(false);
    } catch (error){
      console.log(error);
      
    }
  }

  fetchArticles()
  }, [])

  return (
    <>
      <div className="header">
        <Component1 className="date" />
        <div className="overlay">
          <h1 className="title">The Time Flies</h1>
        </div>
      </div>
      <section>
        {loading ? (
          <div className="loader"></div>
        ) : (
          articles.map((article) => {
            const { abstract, title, section, multimedia, byline, subsection, url, _id } = article;

            return (
              <article className="article" key={_id}>
                <div className="subtitle">
                  <p>{section}</p>
                </div>
                <h2>{title}</h2>
                <p>{abstract}</p>

                <div className="info">
                  <p>{byline}</p>
                  <p>{subsection}</p>
                </div>

                <a href={url} class="button-link" rel="noopener noreferrer"> Web Resource</a>
                
              {multimedia && (
              <div>
              <div className="image-container">
             {multimedia.map((image, index) => (
              index === selectedImageIndex && (
             <img key={image.id} src={image.url} alt={image.title} />)
            ))}
            </div>
             </div>
                  )}
              </article>
            );
          })
        )}

        <Component2 />
      </section>
    </>
  );
};

export default App;
