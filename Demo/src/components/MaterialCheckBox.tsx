import '@material/web/all';
import React from 'react';

const MaterialCheckBox: React.FC<{ label: string }> = ({ label }) => {
  return (
    <label className="flex items-center text-gray-600">
      <md-checkbox touch-target="wrapper"></md-checkbox>
      {label}
    </label>
  );
};

export default MaterialCheckBox;
