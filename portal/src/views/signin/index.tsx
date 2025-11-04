import Cover from "./Cover";
import FormSignin from "./FormSignin";

export default function SigninView() {
  return (
    <div className="grid grid-cols-2">
      <div>
        <Cover />
      </div>
      <div>
        <FormSignin />
      </div>
    </div>
  );
}
