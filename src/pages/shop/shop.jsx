import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/shop/shop.selector";
import CollectionPreview from "../../components/collection-preview/collection-preview";
const ShopPage = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);
const mapStateToProps = createStructuredSelector({
  collections: selectDirectorySections
});
export default connect(mapStateToProps)(ShopPage);