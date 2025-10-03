import ItemCard from "./ItemCardInMenu";

const ExpandableBlock = ({ data, showItem, onClick }) => {
  return (
    <div>
      <div className="w-6/12 m-auto bg-blue-100 shadow-lg p-4 my-5">
        <div className="flex justify-between" onClick={onClick}>
          <span className="font-bold">
            {data?.title} ({data?.itemCards.length})
          </span>
          <span>{showItem ? "⬆️" : "⬇️"}</span>
        </div>
        {showItem && <ItemCard items={data?.itemCards} />}
      </div>
    </div>
  );
};
export default ExpandableBlock;
