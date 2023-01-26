import { Spinner } from "react-bootstrap";

export default function Loading() {
  return (
    <div className="text-center">
      <Spinner className="spinner" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}
