import React from 'react'
import { apiKey, baseUrl } from '../Api';

const ApiFetch = ({ currentPage = '', type, id = '', query = '', se = '', type_credits = '', nu = '' }) => {

  const [data, setData] = React.useState(null);
  const [lastPage, setLastPage] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    try {
      setLoading(true);
      const fetchData = async () => {
        const response = await fetch(`${baseUrl}${type}${id}${se ? '/season/' + se : ''}${type_credits.length === 0 ? '' : type_credits}${nu ? '/episode/' + nu : ''}${apiKey}${query.length === 0 ? '' : '&query=' + query}${currentPage ? '&page=' + currentPage : ''}`);
        const json = await response.json();
        setData(json);
        json.total_pages > 500 ? setLastPage(500) : setLastPage(json.total_pages);
      }
      fetchData();
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [currentPage, type, id, query, se, type_credits, nu]);

  return { data, loading, error, lastPage }
}

export default ApiFetch;