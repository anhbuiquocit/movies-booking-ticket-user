export const CustomErrorComponent = ({ msg }: { msg?: string }) => {
  if (!msg) {
    return null;
  }
  return (
    <>
      <p style={{ color: "red" }}>{msg}</p>
    </>
  );
};
