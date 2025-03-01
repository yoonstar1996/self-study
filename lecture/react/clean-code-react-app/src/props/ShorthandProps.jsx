import React from "react";

function ShorthandProps({ isDarkMode, isLogin, ...props }) {
  return (
    <header
      className="clean-header"
      title="Clean Code React"
      isDarkMode={isDarkMode}
      isLogin={isLogin}
      isFixed={true}
      isAdmin={true}
    >
      <ChildComponent {...props} />
    </header>
  );
}

export default ShorthandProps;
