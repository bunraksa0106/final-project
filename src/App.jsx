
import './App.css'
import { useEffect, useState } from 'react';
import UserCard from './components/carduser/UserCard';
import createData from './js/createData';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await createData();
        setPosts(data.slice(0, 6));
      } catch (err) {
        setError('Failed to load data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  return (
    <main className="p-6">
      {loading && <p>Loading cards...</p>}
      {error && <p className="text-red-600">{error}</p>}

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <UserCard
            key={post.id}
            userId={post.userId}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </section>
    </main>
  );
}

