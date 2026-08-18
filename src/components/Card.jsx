import profile_image from "../assets/image-avatar.png";
import nft_image from "../assets/image-equilibrium.jpg";
import icon_clock from "../assets/icon-clock.svg";
import icon_ethereum from "../assets/icon-ethereum.svg";
import icon_view from "../assets/icon-view.svg";

const Card = () => {
  return (
    <article className="card">
      <a
        href="#"
        className="card__image-link"
        aria-label="View Equilibrium #3429 NFT"
      >
        <img
          src={nft_image}
          alt="Equilibrium NFT artwork featuring a glass cube balanced on its corner"
          className="card__image"
        />
        <div className="card__overlay" aria-hidden="true">
          <img src={icon_view} alt="" className="card__overlay-icon" />
        </div>
      </a>
      <div className="card__content">
        <h1 className="card__title">
          <a href="#" className="card__title-link">
            Equilibrium #3429
          </a>
        </h1>
        <p className="card__description">
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div className="card__info">
          <p className="card__price">
            <img src={icon_ethereum} alt="" aria-hidden="true" />
            0.041 ETH
          </p>
          <p className="card__time">
            <img src={icon_clock} alt="" aria-hidden="true" />
            <time dateTime="P3D">3 days left</time>
          </p>
        </div>
      </div>
      <div className="card__creator">
        <img
          src={profile_image}
          alt=""
          aria-hidden="true"
          className="card__avatar"
        />
        <p className="card__creator-detail">
          Creation of{" "}
          <a href="#" className="card__creator-link">
            Jules Wyvern
          </a>
        </p>
      </div>
    </article>
  );
};

export default Card;
