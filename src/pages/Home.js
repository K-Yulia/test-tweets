import { useLocation } from 'react-router-dom';

export default function Home() {
  const location = useLocation();
  return <h1 location={location}>Welcome to Home!</h1>;
}
