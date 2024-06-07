import React from 'react';

const ContainerWidth = (props) => {
  return (
    <div className={`${props.customParentClassName}`}>
      <div className={`overflow-hidden font-poppins  mx-auto px-3 py-5 md:py-8 lg:py-14 ${props.customClassName}`}>
        {props.children}
      </div>
    </div>
  );
};

export default ContainerWidth;
