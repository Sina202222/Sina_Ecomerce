
// import  { useEffect, useState } from 'react';
import Navbar  from "../../component/navbar/Navbar";
// import axios from 'axios';

// // Define an interface for the article
// interface Article {
//   id: number; // Assuming id is a number
//   name_product: string; // Adjust according to your API response
//   description: string; // Adjust according to your API response
//   // Add other fields as necessary
// }

function Home() {
  // const [articles, setArticles] = useState<Article[]>([]); // Specify the type of articles
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState('');

  // useEffect(() => {
  //   axios
  //     .get("http://127.0.0.1:8000/api/products/")
  //     .then((res) => {
  //       setArticles(res.data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       setError('Failed to fetch articles.');
  //       setLoading(false);
  //     });
  // }, []);

  // if (loading) return <div>در حال بارگذاری...</div>;
  // if (error) return <div className="text-red-600">{error}</div>;

  return (
     <div className="min-h-screen bg-white text-gray-700">
      <Navbar  url="/store" title="محصولات"  />
      <main className="max-w-7xl mx-auto px-6 py-16">
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-6 tracking-tight text-gray-900">
            Build your Component Library
          </h1>
          <p className="text-lg mb-10 text-gray-600">
            Create elegant, minimal, and reusable UI components with modern design and best practices.
          </p>
          <button className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition duration-300">
            Get Started
          </button>
        </section>
        {/* Additional hero content or features can go here */}
      </main>
    </div>
  );
}

export default Home;















// import React, { useEffect, useState } from 'react';
// import Navbar from '../../component/navbar/Navbar';
// import axios from 'axios';



// function Home() {
//   const [articles, setArticles] = useState([]); // Corrected spelling of 'articles'
//   const [loading, setLoading] = useState(true); // Loading state
//   const [error, setError] = useState(''); // Error state

//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/api/products/")
//       .then((res) => {
//         setArticles(res.data);
//         setLoading(false); // Set loading to false after data is fetched
//       })
//       .catch((err) => {
//         console.error(err);
//         setError('Failed to fetch articles.'); // Set error message
//         setLoading(false); // Set loading to false even on error
//       });
//   }, []);

//   if (loading) return <div>در حال بارگذاری...</div>; // Loading message
//   if (error) return <div className="text-red-600">{error}</div>; // Error message

//   return (
//     <div>
//       <Navbar title="فروشگاه" url="/store" />
//       <h1>Home</h1>

//       {articles.map((art) => (
//         <div key={art.id}>
//           <h2>{art.name_product}</h2> {/* Example of displaying article name */}
//           <p>{art.description}</p> {/* Example of displaying article description */}
//           {/* Add more fields as necessary */}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Home;





// import React, { useEffect, useState } from 'react'
// import Navbar from '../../component/navbar/Navbar'
// import axios from 'axios'
// import { data } from 'react-router-dom'

// function Home() {

//   const [articlee, setArticale] = useState([])

//   useEffect(() => {

//     axios
//     .get("http://127.0.0.1:8000/api/products/")
//     .then( (res) => {
//       // console.log(res.data)

//       setArticale(res.data)

//     })
//     .catch((err) => {
//       console.error(err)
//     })



//   }, [])

//   return (
//     <div>
//         <Navbar title=" فروشگاه " url="/store" />
//         <h1>Home</h1>

//        { articlee.map((art) => (

//         <div key={art.id}>
          
//         </div>

//        ))}
        
//     </div>
//   )
// }

// export default Home