import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import blogs from "../data/blogs";

function Detail() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  useEffect(() => {
    // ดึงข้อมูลบทความ'
    const result = blogs.find((blogs) => blogs.id === parseInt(id));
    setTitle(result.title)
    setImage(result.image_url)
    setContent(result.content)
    setAuthor(result.author)
    // eslint-disable-next-line
  },[]);
  return (
    <div className="container">
      <h1 className="title">{title}</h1>
      <img src={image} alt={title}/>
      <div className="blog-detail">
        <strong>ผู้เขียน : {author}</strong>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Detail;
