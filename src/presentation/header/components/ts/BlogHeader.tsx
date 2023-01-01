import { BlogHeaderSearchBar } from './BlogHeaderSearchBar';
import '../css/BlogHeader.css';

const blogName = 'Blog Name';

function BlogHeader() {
  return (
    <div>
      <div className="BlogName">{blogName}</div>
      <BlogHeaderSearchBar />
      <hr />
    </div>
  );
}

export { BlogHeader };