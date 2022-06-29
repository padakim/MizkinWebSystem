import { useState, useEffect, useCallback } from 'react';
import Navbar from '../components/admin/Navbar';
import AdminHeader from '../components/admin/AdminHeader';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// const NewsItemBlock = styled.div``;

// const NewsItem = ({ article }) => {
//   const { title, description, url, urlToImage } = article;
//   return (
//     <NewsItemBlock>
//       {urlToImage && (
//         <div className="thumbnail">
//           <a href={url} target="_blank" rel="noopener noreferrer">
//             <img src={urlToImage} alt="thumbnail" />
//           </a>
//         </div>
//       )}
//       <div className="contents">
//         <h2>
//           <a href={url} target="_blank" rel="noopener noreferrer">
//             {title}
//           </a>
//         </h2>
//         <p>{description}</p>
//       </div>
//     </NewsItemBlock>
//   );
// };

const AdminPageBlock = styled.div`
  width: 100vw;
  height: 100vh;
  /* overflow: hidden; */
  display: flex;
  justify-content: flex-start;

  .header-content-area {
    height: 100vh;
    width: 100%;
  }

  .content {
    /* height: 100%; */
    height: 90%;
    width: 100%;
    padding: 1rem 3.5rem;
  }
`;

// const NewsListBlock = styled.div`
//   box-sizing: border-box;
//   padding-bottom: 3rem;
//   width: 768px;
//   margin: 0 auto;
//   margin-top: 2rem;
//   @media screen and (max-width: 768px) {
//     width: 100%;
//     padding-left: 1rem;
//     padding-right: 1rem;
//   }
// `;

const AdminPage = () => {
  const [category, setCategory] = useState('');
  const onSelect = useCallback((category) => setCategory(category), []);
  // const navigate = useNavigate();
  // console.log(category);
  // navigate(category);

  // const [articles, setArticles] = useState(null);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const query = category === '' ? '' : `/${category}`;
  //       const response = await axios.get(`api/test/admin${query}`);
  //       setArticles(response.data.articles);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, [category]);

  // if (loading) {
  //   return <NewsListBlock>대기중...</NewsListBlock>;
  // }
  // if (!articles) {
  //   return null;
  // }

  return (
    <AdminPageBlock>
      <Navbar category={category} onSelect={onSelect} />
      {/* <NewsListBlock>
        {articles.map((article) => (
          <NewsItem key={article.url} article={article} />
        ))}
      </NewsListBlock> */}
      <div className="header-content-area">
        <AdminHeader />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </AdminPageBlock>
  );
};

export default AdminPage;
