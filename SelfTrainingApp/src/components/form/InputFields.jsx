export default function InputFields({ type = "text", name = "", ...rest }) {
  return <input {...rest} type={type} name={name} />;
}
