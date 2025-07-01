import { useState } from 'react';
import { Sun ,Moon} from 'lucide-react';

export const ThemeToggle = () => {
  const [IsDark, setIsDark] = useState(true);

  return <button> {IsDark ? <Sun /> : <Moon />} </button>
}
