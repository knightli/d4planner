export const cleanHashUrl = () => {
  const { hash } = window.location;
  if (hash) {
    history.pushState(
      "",
      document.title,
      window.location.pathname + window.location.search
    );
  }
};
