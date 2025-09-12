import css from '../../../assets/style/about/stats.module.css';

const Stats = () => {
  const data = [
    { id: 1, title: "12+", subtitle: "Years in Business" },
    { id: 2, title: "750+", subtitle: "Projects Delivered" },
    { id: 3, title: "500+", subtitle: "Satisfied Clients" },
    { id: 4, title: "50+", subtitle: "Team Members" },
  ]; 

  return (
    <div className='frame-1200 pb-100 sm-pb-50 sm-px-20 sm-pt-0'>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {data.map((item) => (
              <div key={item.id} className={css.statBox}>
                <h1 className="fs-64">{item.title}</h1>
                <p className={css.subtitle}>{item.subtitle}</p>
              </div>
            ))}
        </div>
    </div>

  );
};

export default Stats;
