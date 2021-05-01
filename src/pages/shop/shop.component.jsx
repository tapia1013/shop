import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../../components/collection-preview/collection-preview'


import { selectCollections } from '../../redux/shop/shop.selectors';






const ShopPage = ({ collections }) => {

  return (
    <div className="shop-page">
      {
        collections.map(({ id, ...otherCollectionPorps }) => {
          return (
            <CollectionPreview key={id} {...otherCollectionPorps} />
          )
        })
      }
    </div>
  )
}



const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})




export default connect(mapStateToProps)(ShopPage);
