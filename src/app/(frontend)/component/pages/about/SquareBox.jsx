import css from "../../../assets/style/about/team.module.css";

const SquareBox = ({ number, title, tags, image }) => {
  return (
    <div className="aspect-square">
      {image ? (
        <img
          src={image}
          alt={title || "team-image"}
          className={css.imageCard}
        />
      ) : (
        <div className={css.textCard}>
          <h2 className={css.number}>{number}</h2>
          <h3 className={css.title}>{title}</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {tags?.map((tag, index) => (
              <span key={index} className={css.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SquareBox;
