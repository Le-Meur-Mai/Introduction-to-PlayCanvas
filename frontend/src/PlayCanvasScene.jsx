// Composant qui récupère les données de ma scene PlayCanvas
// Un Iframe c'est une fenêtre qui affiche un autre site web car playCanvas génère une mini page web
export const PlayCanvasScene = () => {
  return (
    <iframe src="/Test/index.html" width="100%" height="600px" />
  );
};