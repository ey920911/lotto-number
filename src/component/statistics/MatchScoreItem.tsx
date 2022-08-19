interface IResult {
  result: (string | number)[][];
}

function MatchScoreItem({ result }: IResult) {
  return (
    <>
      {result.map(([score, date, ...num]) => (
        <p>
          {score}등! 번호: {num.map((item) => item + ' ')}
          발급시간: {date}
        </p>
      ))}
    </>
  );
}
export default MatchScoreItem;
