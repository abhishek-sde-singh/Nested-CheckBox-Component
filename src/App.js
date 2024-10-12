import { useState } from "react";
import "./App.css";
import NestedCheckBox from "./NestedCheckBox";
import { initialData } from "./data";

function App() {
  const [data, setData] = useState(initialData);

  const handleCheckChange = (id, isChecked) => {
    const updateCheck = (items) => {
      return items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isChecked: isChecked,
            children: item.children
              ? updateCheckChildren(item.children, isChecked)
              : [],
          };
        } else if (item?.children && item?.children.length > 0) {
          const updatedChildren = updateCheck(item.children);
          const allChildrenChecked = updatedChildren.every(
            (child) => child.isChecked
          );
          return {
            ...item,
            isChecked: allChildrenChecked,
            children: updatedChildren,
          };
        }
        return item;
      });
    };

    const updateCheckChildren = (items, isChecked) => {
      return items.map((child) => ({
        ...child,
        isChecked: isChecked,
        children: child.children
          ? updateCheckChildren(child.children, isChecked)
          : [],
      }));
    };

    setData(updateCheck(data));
  };

  return (
    <>
      <h1 className="text-xl">Nested Checkbox</h1>
      <div>
        {data.map((item) => {
          return (
            <NestedCheckBox
              data={item}
              key={item.id}
              onCheckChange={handleCheckChange}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
