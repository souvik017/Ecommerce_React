import { useLocation } from 'react-router-dom';

function useActiveLink(path) {
  const { pathname } = useLocation();
  return pathname === path;
}

export default useActiveLink;
