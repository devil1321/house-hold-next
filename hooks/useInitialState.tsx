import { useEffect, useState } from 'react';
import axios from 'axios'

export function useInitialState() {
  const [appData, setAppData] = useState<any[]>([]);

  useEffect(() => {
    // Fetch your app-level data here
    // You can use fetch or any other method to fetch the data
    const fetchData = async () => {
      try {
        const response = await axios.get('/assets/context.json');
        setAppData(response.data);
      } catch (error) {
        console.error('Error fetching app data', error);
      }
    };

    fetchData();
  }, []);

  return { appData };
}