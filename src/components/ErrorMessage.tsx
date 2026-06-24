interface Props {
  message: string;
}

const ErrorMessage = ({
  message,
}: Props) => {
  return (
    <div className="text-red-500 text-center text-xl">
      <h3>{message}</h3>
    </div>
  );
};

export default ErrorMessage;