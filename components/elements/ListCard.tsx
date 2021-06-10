import React from "react";

export type ListCardDataType = Array<{
  title: string;
  body: string;
  iconLeft?: React.ReactNode;
}>;

interface ListCardProps {
  data: ListCardDataType;
}

const ListCard: React.FC<ListCardProps> = ({ data }) => {
  return (
    <div className="max-w-md border-gray-200 lgshadow-lg lg:rounded-xl lg:border">
      {data.map((item, index) => (
        <div
          key={item.title}
          className={
            index === 0 ? "flex p-8" : "flex p-8 lg:border-t border-gray-100"
          }
        >
          {item.iconLeft ? (
            <>
              <div className="block p-4 mr-6 rounded-full h-14 bg-amber-100">
                <div className="flex items-center justify-center text-amber-600">
                  {item.iconLeft}
                </div>
              </div>
            </>
          ) : null}

          <div>
            <p className="mb-1 text-xl font-bold leading-7 text-gray-700">
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
