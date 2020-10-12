const filterGenere = (obj, genere) => {
  return obj.filter((item) => item.genre === genere);
};

export default function selectionFilter({ series, films }) {
  return {
    series: [
      {
        title: "Documentaries",
        data: filterGenere(series, 'documentaries'),
      },
      {
        title: "Comedies",
        data: filterGenere(series, "comedies"),
      },
      {
        title: "Children",
        data: filterGenere(series, "children"),
      },
      {
        title: "Crime",
        data: filterGenere(series, "crime"),
      },
      {
        title: "Feel Good",
        data: filterGenere(series, "feel-good"),
      },
    ],
    films: [
      {
        title: "Drama",
        data: filterGenere(films, "drama"),
      },
      {
        title: "Thriller",
        data: filterGenere(films, "thriller"),
      },
      {
        title: "Children",
        data: filterGenere(films, "children"),
      },
      {
        title: "Suspense",
        data: filterGenere(films, "suspense"),
      },
      {
        title: "Romance",
        data: filterGenere(films, "romance"),
      },
    ],
  };
}
