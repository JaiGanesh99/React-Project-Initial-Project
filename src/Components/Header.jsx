
export const Header = () => {
    const bool = false;
    const was = bool ? 'Hi logged in' : 'login again';

  return (
    <>
    <div className="hello">Hi Hello, How are you!</div>
    {was}

    </>
  );
};
