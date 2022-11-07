import React from 'react'

const apiKey = '?api_key=221ba13524aa9f7c909c0d04b62d9606';
const baseUrl = 'https://api.themoviedb.org/3/';

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
        setLoading(false);
      }
      fetchData();
    } catch (e) {
      setError(e.message);
    }
  }, [currentPage, type, id, query, se, type_credits, nu]);

  return { data, loading, error, lastPage }
}

export default ApiFetch;