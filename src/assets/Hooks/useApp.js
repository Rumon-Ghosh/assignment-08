import { useEffect, useState } from "react"

const useApp = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true);
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setApps(data))
      .catch(err => console.error(err)) 
      .finally(setLoading(false))
  }, [])
  return [apps, loading]
}

export default useApp;