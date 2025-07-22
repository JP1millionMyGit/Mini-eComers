import { useState, useEffect } from 'react';
import { supabase } from '../../supaBaseClient/supaBaseClient';

function useCustomFetch(table, query) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        setLoading(true);
        const {data, error} = await supabase
          .from(table)
          .select(query);
        if(error) throw error;
        setData(data);
      } catch (error) {
        setError(error);
      } finally{
        setLoading(false);
      }
    }
    fetchData();
  }, [query, table])

  return { data, loading, error };
}

export default useCustomFetch;
