import { createSelector } from 'reselect';


// const COLLECTION_ID_MAP = {
//   // string value  params will be th eactual property
//   hats: 1,
//   sneaker: 2,
//   jackets: 3,
//   womens: 4,
//   mens: 5
// }


const selectShop = state => state.shop



export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);


export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  // gets all keys of obj that we pass and turns it into an array
  collections => Object.keys(collections).map(key => collections[key])
)



// match in selctors
export const selectCollection = collectionUrlParam => createSelector(
  [selectCollections],
  collections => collections[collectionUrlParam]
);