const Button = ({
  setOpen,
  open,
}: {
  setOpen: (value: boolean) => void;
  open: boolean;
}) => {
  return (
    <button className="docs-button" onClick={() => setOpen(!open)}>
      Docs
    </button>
  );
};

export default Button;
