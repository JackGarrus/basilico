import style from './FiltersContainer.module.scss';

const FiltersContainer: React.FC = () => {

  return (
    <div className={style.container}>
      Filtra per...
      <div>
        <div>select</div>
        <div>checkboxes</div>
      </div>
    </div>
  );
};

export default FiltersContainer;
