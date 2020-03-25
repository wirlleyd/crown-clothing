import React from "react";
import "./collection-item.scss";
import CustomButtom from "../custom-button/custom-button";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import PropTypes from "prop-types";
const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButtom onClick={() => addItem(item)} inverted>
        Add To Cart
      </CustomButtom>
    </div>
  );
};

CollectionItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    imageUrl: PropTypes.string
  }).isRequired,
  addItem: PropTypes.shape({
    addItem: PropTypes.func
  }).isRequired
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
