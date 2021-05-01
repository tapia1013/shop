import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'


import CollectionPreview from '../collection-preview/collection-preview'
import { selectCollections } from '../../redux/shop/shop.selectors';



import './collections-overview.styles.scss';




const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
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




export default connect(mapStateToProps)(CollectionsOverview)



