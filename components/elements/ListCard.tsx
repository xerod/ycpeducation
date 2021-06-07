import React from "react";

export type DataType = Array<{
  title: string;
  body: string;
  iconLeft?: React.ReactNode;
}>;

interface ListCardProps {
  data: DataType;
}

const ListCard: React.FC<ListCardProps> = ({ data }) => {
  return (
    <div className="max-w-md shadow-lg rounded-xl border border-gray-200">
      {data.map((item, index) => (
        <div
          className={
            index === 0 ? "flex p-8" : "flex p-8 border-t border-gray-200"
          }
        >
          {item.iconLeft ? (
            <>
              <div className="block h-14 p-4 mr-6 rounded-full bg-amber-100">
                <div className="flex text-amber-600 items-center justify-center">
                  {item.iconLeft}
                </div>
              </div>
            </>
          ) : null}

          <div>
            <p className="mb-1 text-xl leading-7 font-bold text-gray-700">
              {item.title}
            </p>
            <p className="text-gray-500">{item.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListCard;
