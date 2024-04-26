interface RetryableErrorProps {
  message?: string;
  onRetry?: () => void;
}

const RetryableError = ({
  message = "An error has occured",
  onRetry,
}: RetryableErrorProps) => {
  return (
    <div>
      {message}
      {typeof onRetry === "function" && (
        <button onClick={onRetry}>Retry</button>
      )}
    </div>
  );
};

export default RetryableError;
