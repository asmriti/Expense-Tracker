import React from "react";
import { format } from "date-fns";

function ExpenseItem(props) {
  const { itemName, amount, date } = props.expense;

  return (
    <div className="flex justify-between items-center p-4 mx-4 mt-2 mb-6 rounded-2xl bg-primary-v1 text-primary-v5">
      <div className="flex flex-start gap-8 ">
        <div className="text-headingOne">{format(date, "MMMM d,yyyy")}</div>
        <h2 className="text-headingOne">{itemName}</h2>
      </div>
      <div className="text-headingOne bg-primary-v5 text-primary-v1 p-3 rounded-2xl">
        NRs.{amount}
      </div>
    </div>
  );
}

export default ExpenseItem;
