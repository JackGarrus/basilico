import SimpleItem from 'components/SimpleItem/SimpleItem';

interface ListProps {
  collection: string[];
}

const List: React.FC<ListProps> = ({ collection }) => {
  return (
    <>
      {collection.map((e, i) => (
        <SimpleItem element={e} key={i} />
      ))}
    </>
  );
};

export default List;
