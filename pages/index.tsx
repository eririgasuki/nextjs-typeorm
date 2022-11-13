import {NextPage} from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <div className="cover">
        <img src="/logo.jpg" alt=""/>
        <h1>我的个人博客</h1>
        <p><Link href="/posts"><a>文章列表</a></Link></p>
      </div>
      <style jsx>{`
      .cover{
        height: 100vh;
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      .cover > img{
        width: 120px; 
        height: 120px;
      }
      `}</style>
    </>
  );
};

export default Home;

