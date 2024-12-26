const useGetMonth = () => {

  return (date) => {
    const getDate = new Date(date);

    const month = getDate.toLocaleDateString('pt-BR', {month: 'long'});
    const year = getDate.toLocaleDateString('pt-BR', {year: '2-digit'});


  };
}

export default useGetMonth;