export const microCagedGeralFilters = {
    id: 'micro-caged-geral-filters',
    years: ["2023", "2024", "2025"], // Filtra por ano
    additionalFilters: [
      {
        label: "mês",  
        options: [],  
        selected: [],
      },
      {
        label: "município",  
        options: [],  
        selected: ["Recife-PE"],
      },
      {
        label: "saldomovimentação",  
        options: [],  
        selected: [],
      },
      {
        label: "sexo",  
        options: [],  
        selected: [],
      },
      {
        label: "grupamento",
        options: ['Indústria', 'Comércio', 'Agropecuária', 'Serviços', 'Construção'],  
        selected: [],
        blocked: true,  
      },
    ],
  };