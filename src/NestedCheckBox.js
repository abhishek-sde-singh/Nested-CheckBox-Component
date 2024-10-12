import React from "react";

const NestedCheckBox = ({ data, onCheckChange }) => {
  const handleChange = (e) => {
    onCheckChange(data.id, e.target.checked);
  };

  const getIndeterminateStatus = (item) => {
    if (!item?.children || item?.children?.length === 0) {
      return false;
    }
    const allChecked = item?.children?.every((child) => child.isChecked);
    const someChecked = item?.children?.some(
      (child) => child.isChecked || getIndeterminateStatus(child)
    );
    return !allChecked && someChecked;
  };

  return (
    <div style={{ marginLeft: "20px" }}>
      <input
        type="checkbox"
        checked={data?.isChecked}
        onChange={handleChange}
        ref={(el) => el && (el.indeterminate = getIndeterminateStatus(data))}
      />
      <label>{data?.name}</label>
      <div>
        {data?.children?.length > 0 &&
          data?.children?.map((item, index) => {
            return (
              <NestedCheckBox
                data={item}
                key={item.id}
                onCheckChange={onCheckChange}
              />
            );
          })}
      </div>
    </div>
  );
};

export default NestedCheckBox;
