import PropTypes from "prop-types";

export const Product = ({
  name,
  imgUrl = "<https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder>",
  price,
}) => (
  <div>
    <img src={imgUrl} alt={name} width="480" />
    <h2>{name}</h2>
    <p>Price: {price} credits</p>
  </div>
);

// Opis typów właściwości komponentu
Product.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  price: PropTypes.number.isRequired,
};
