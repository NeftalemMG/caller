import JokeButton from './components/JokeButton';

export default function Home() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Welcome to the Joke API</h1>
      <JokeButton />
    </div>
  );
}