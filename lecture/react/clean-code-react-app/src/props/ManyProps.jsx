import React from "react";

function ManyProps() {
  return (
    <JoinForm
      onSubmit={handleSubmit}
      onReset={handleReset}
      onCancel={handleCancel}
    >
      <CheckBoxForm formData={user} />
      <CheckBoxForm formData={auth} />
      <RadioButtonForm formData={location} />
      <SectionForm formData={favorite} />
    </JoinForm>
  );
}

export default ManyProps;
