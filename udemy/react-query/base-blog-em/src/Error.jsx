export default function Error({ error }) {
  if (!error) return null;

  return (
    <>
      <h3>에러 발생...</h3>
      <p>에러 내용: {error.toString()}</p>
    </>
  );
}
