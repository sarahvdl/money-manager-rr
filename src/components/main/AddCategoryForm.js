import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const AddCategoryForm = ({onSave, onChange}) => {
  const colors = [
    "red",
    "blue",
    "green",
    "purple",
    "pink",
    "black",
    "yellow",
    "aqua"
  ];

  const textColors = [
      "white",
      "black"
  ];

  return (
    <form>
      <TextInput
        name="name"
        label="Name"
        onChange={onChange}
      />

      <SelectInput
        name="backgroundColor"
        label="Background Color"
        defaultOption="Select Background Color"
        options={colors}
        onChange={onChange}
        />

        <SelectInput
          name="textColor"
          label="Text Color"
          defaultOption="Select Text Color"
          options={textColors}
          onChange={onChange}
        />

      <input
        type="submit"
        value="Add"
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

AddCategoryForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default AddCategoryForm;
