import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  title: ReactNode;
};

export default function PageLayout({ children, title }: Props) {
  return (
    <div>
      <div className="container">
        <h1>Hello World</h1>
      </div>
    </div>
  );
}
