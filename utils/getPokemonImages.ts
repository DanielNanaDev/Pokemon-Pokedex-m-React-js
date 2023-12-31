// @ts-nocheck
  
// fetch image function - Importer Images Code  (shiny er høykvalitet image, default er det motsatte)

const fetchImages = (context: string) => {
const images = {};
const cache = {};
function importAll(r) {
  r.keys().forEach((key) => (cache[key] = r(key)));
}
importAll(context);
Object.entries(cache).forEach((module: string[]) => {
  let key = module[0].split("");
  key.splice(0, 2);
  key.splice(-4, 4);
  images[[key.join("")]] = module[1];
});
return images;
};

export const images = fetchImages(
require.context("../assets folder/pokemons/shiny", false, /\.(png|jpe?g|svg)$/)
);
export const defaultImages = fetchImages(
require.context("../assets folder/pokemons/default", false, /\.(png|jpe?g|svg)$/)
);