import PropTypes from 'prop-types';

export const GifGridItem = ({id,title,url}) => {
  return (
    <div className="card" key={id}>
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
};


GifGridItem.protoType = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}